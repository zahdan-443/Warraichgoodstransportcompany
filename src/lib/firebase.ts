import type { Firestore } from 'firebase/firestore';

const env = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let dbPromise: Promise<Firestore | null> | null = null;

async function getFirestoreDb(): Promise<Firestore | null> {
  if (!isFirebaseConfigured) return null;
  if (!dbPromise) {
    dbPromise = Promise.all([
      import('firebase/app'),
      import('firebase/firestore'),
    ])
      .then(([{ initializeApp, getApps, getApp }, { getFirestore }]) => {
        const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
        return getFirestore(app);
      })
      .catch((err) => {
        dbPromise = null;
        throw err;
      });
  }
  return dbPromise;
}

const BILTY_PATTERN = /^[A-Z0-9_-]{1,64}$/;

export interface PublicBiltyRecord {
  biltyNo: string;
  biltyDate?: string;
  origin?: string;
  destination?: string;
  goodsDescription?: string;
  weightOrQty?: string;
  vehicleNo?: string;
  status?: string;
  verified: boolean;
}

export type VerificationResult =
  | { status: 'VERIFIED'; record: PublicBiltyRecord }
  | { status: 'NOT_FOUND' }
  | { status: 'ERROR'; message: string };

/**
 * Normalizes Bilty Number for consistent database queries (e.g. " wgt-1234 " -> "WGT-1234")
 */
export function normalizeBiltyNo(input: string): string {
  return input.trim().toUpperCase();
}

function sanitizePublicString(value: unknown, maxLen = 300): string | undefined {
  if (typeof value !== 'string') return undefined;
  const cleaned = value.trim();
  if (!cleaned) return undefined;
  return cleaned.length > maxLen ? cleaned.slice(0, maxLen) : cleaned;
}

/**
 * Safely extracts only public fields from a raw Firestore document.
 * Excludes sensitive fields like CNIC, phone numbers, driver credentials, freight charges, and private payment details.
 */
function extractSafePublicBiltyFields(data: any, fallbackBiltyNo: string): PublicBiltyRecord {
  let dateFormatted: string | undefined = undefined;
  if (data?.biltyDate || data?.createdAt || data?.date) {
    const rawDate = data.biltyDate || data.createdAt || data.date;
    if (rawDate && typeof rawDate.toDate === 'function') {
      dateFormatted = rawDate.toDate().toLocaleDateString('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } else if (typeof rawDate === 'number') {
      const parsed = new Date(rawDate);
      if (!Number.isNaN(parsed.getTime())) {
        dateFormatted = parsed.toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }
    } else if (typeof rawDate === 'string') {
      const trimmed = rawDate.trim();
      const parsed = /^\d{4}-\d{2}-\d{2}/.test(trimmed) ? new Date(trimmed) : null;
      if (parsed && !Number.isNaN(parsed.getTime())) {
        dateFormatted = parsed.toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } else if (trimmed) {
        dateFormatted = trimmed.slice(0, 64);
      }
    }
  }

  let weightQtyStr: string | undefined = undefined;
  if (data?.weight || data?.quantity || data?.weightOrQty || data?.bags) {
    const parts: string[] = [];
    if (typeof data.weight === 'string' || typeof data.weight === 'number') {
      parts.push(`Weight: ${String(data.weight).slice(0, 48)}`);
    }
    const qtyVal = data.quantity ?? data.bags;
    if (typeof qtyVal === 'string' || typeof qtyVal === 'number') {
      parts.push(`Qty: ${String(qtyVal).slice(0, 48)}`);
    }
    const directWeightOrQty = sanitizePublicString(data.weightOrQty, 120);
    if (directWeightOrQty) parts.push(directWeightOrQty);
    if (parts.length > 0) {
      weightQtyStr = parts.join(' | ').slice(0, 120);
    }
  }

  return {
    biltyNo: sanitizePublicString(data?.biltyNo, 64) || fallbackBiltyNo,
    biltyDate: dateFormatted || sanitizePublicString(data?.biltyDate ?? data?.date, 64),
    origin: sanitizePublicString(data?.origin ?? data?.source ?? data?.fromCity ?? data?.from, 120),
    destination: sanitizePublicString(data?.destination ?? data?.target ?? data?.toCity ?? data?.to, 120),
    goodsDescription: sanitizePublicString(data?.goodsDescription ?? data?.goods ?? data?.items ?? data?.cargo, 300),
    weightOrQty: weightQtyStr,
    vehicleNo: sanitizePublicString(data?.vehicleNo ?? data?.truckNo ?? data?.vehicleNumber, 64),
    status: sanitizePublicString(data?.status ?? data?.deliveryStatus, 64) || 'Verified Record in Transit',
    verified: true
  };
}

/**
 * Performs read-only lookup strictly on publicBiltyVerifications/{id}.
 * Dynamically loads Firebase SDK only when invoked so initial page load stays fast.
 * Validates input against /^[A-Z0-9_-]{1,64}$/.
 */
export async function verifyBiltyRecord(rawBiltyNo: string): Promise<VerificationResult> {
  const normalizedNo = normalizeBiltyNo(rawBiltyNo);
  if (!BILTY_PATTERN.test(normalizedNo)) {
    return { status: 'NOT_FOUND' };
  }

  if (!isFirebaseConfigured) {
    return {
      status: 'ERROR',
      message: 'Unable to Verify — Firebase configuration is unavailable.'
    };
  }

  try {
    const [db, { doc, getDoc }] = await Promise.all([
      getFirestoreDb(),
      import('firebase/firestore'),
    ]);

    if (!db) {
      return {
        status: 'ERROR',
        message: 'Unable to Verify — Firebase configuration is unavailable.'
      };
    }

    const docRef = doc(db, 'publicBiltyVerifications', normalizedNo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        status: 'VERIFIED',
        record: extractSafePublicBiltyFields(docSnap.data(), normalizedNo)
      };
    }

    return { status: 'NOT_FOUND' };
  } catch {
    return {
      status: 'ERROR',
      message: 'Unable to Verify — Please Try Again'
    };
  }
}
