import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, query, where, limit, getDocs } from 'firebase/firestore';

const env = (import.meta as any).env || {};

// Default Firebase configuration for warraich-goods project
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForPublicReadAccessOnly",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "warraich-goods.firebaseapp.com",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "warraich-goods",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "warraich-goods.appspot.com",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: env.VITE_FIREBASE_APP_ID || "1:000000000000:web:000000000000"
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

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
  // Format Firestore Timestamp or date string safely
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

  // Weight / Quantity combined representation
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
 * Performs read-only lookup in the Firestore 'bilties' collection.
 * Tries direct document ID lookup first, then falls back to `where("biltyNo", "==", normalizedNo)`.
 */
export async function verifyBiltyRecord(rawBiltyNo: string): Promise<VerificationResult> {
  const normalizedNo = normalizeBiltyNo(rawBiltyNo);
  if (!normalizedNo) {
    return { status: 'NOT_FOUND' };
  }

  try {
    // 1. Try direct Document ID lookup: bilties/{normalizedNo}
    const docRef = doc(db, 'bilties', normalizedNo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        status: 'VERIFIED',
        record: extractSafePublicBiltyFields(data, normalizedNo)
      };
    }

    // 2. Query fallback: bilties where biltyNo == normalizedNo
    const biltiesRef = collection(db, 'bilties');
    const q = query(biltiesRef, where('biltyNo', '==', normalizedNo), limit(1));
    const querySnap = await getDocs(q);

    if (!querySnap.empty) {
      const firstDoc = querySnap.docs[0];
      return {
        status: 'VERIFIED',
        record: extractSafePublicBiltyFields(firstDoc.data(), normalizedNo)
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
