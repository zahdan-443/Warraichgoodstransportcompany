import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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

const app = isFirebaseConfigured
  ? (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp())
  : null;

export const db = app ? getFirestore(app) : null;

const BILTY_PATTERN = /^[A-Z0-9-]{4,24}$/;

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

/**
 * Safely extracts only public fields from a raw Firestore document.
 * Excludes sensitive fields like CNIC, phone numbers, driver credentials, freight charges, and private payment details.
 */
function extractSafePublicBiltyFields(data: any, fallbackBiltyNo: string): PublicBiltyRecord {
  let dateFormatted = undefined;
  if (data.biltyDate || data.createdAt || data.date) {
    const rawDate = data.biltyDate || data.createdAt || data.date;
    if (rawDate && typeof rawDate.toDate === 'function') {
      dateFormatted = rawDate.toDate().toLocaleDateString('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } else if (typeof rawDate === 'string' || typeof rawDate === 'number') {
      dateFormatted = new Date(rawDate).toLocaleDateString('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  let weightQtyStr = undefined;
  if (data.weight || data.quantity || data.weightOrQty || data.bags) {
    const parts = [];
    if (data.weight) parts.push(`Weight: ${data.weight}`);
    if (data.quantity || data.bags) parts.push(`Qty: ${data.quantity || data.bags}`);
    if (data.weightOrQty) parts.push(data.weightOrQty);
    weightQtyStr = parts.join(' | ');
  }

  return {
    biltyNo: data.biltyNo || fallbackBiltyNo,
    biltyDate: dateFormatted || data.biltyDate || data.date || undefined,
    origin: data.origin || data.source || data.fromCity || data.from || undefined,
    destination: data.destination || data.target || data.toCity || data.to || undefined,
    goodsDescription: data.goodsDescription || data.goods || data.items || data.cargo || undefined,
    weightOrQty: weightQtyStr || undefined,
    vehicleNo: data.vehicleNo || data.truckNo || data.vehicleNumber || undefined,
    status: data.status || data.deliveryStatus || 'Verified Record in Transit',
    verified: true
  };
}

/**
 * Performs read-only lookup strictly on publicBiltyVerifications/{id}.
 * Validates input against /^[A-Z0-9-]{4,24}$/.
 */
export async function verifyBiltyRecord(rawBiltyNo: string): Promise<VerificationResult> {
  const normalizedNo = normalizeBiltyNo(rawBiltyNo);
  if (!BILTY_PATTERN.test(normalizedNo)) {
    return { status: 'NOT_FOUND' };
  }

  if (!db) {
    return {
      status: 'ERROR',
      message: 'Unable to Verify — Firebase configuration is unavailable.'
    };
  }

  try {
    const docRef = doc(db, 'publicBiltyVerifications', normalizedNo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        status: 'VERIFIED',
        record: extractSafePublicBiltyFields(docSnap.data(), normalizedNo)
      };
    }

    return { status: 'NOT_FOUND' };
  } catch (error: any) {
    console.error('Firestore bilty verification error:', error);
    return {
      status: 'ERROR',
      message: error?.message || 'Unable to Verify — Please Try Again'
    };
  }
}
