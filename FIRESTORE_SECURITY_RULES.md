# Public Bilty Verification — Security Policy

## Public Website Data Boundary

This public marketing website uses **read-only** Firestore lookups against the sanitized `publicBiltyVerifications/{biltyId}` collection solely to verify official consignment numbers.

### Allowed Public Fields Only
Each document in `publicBiltyVerifications` is strictly constrained by Firestore Security Rules to expose **only** non-PII, non-financial shipment verification fields:
- `biltyNo`
- `biltyDate`
- `origin`
- `destination`
- `goodsDescription`
- `weightOrQty`
- `vehicleNo`
- `status`

All PII and financial data (CNICs, mobile/phone numbers, freight totals, advances, payables, commissions, driver credentials, and party addresses) are strictly forbidden from `publicBiltyVerifications` and blocked by default-deny Firestore rules.

---

## Hardened Reference Rules (Public Website Scope)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Global default deny
    match /{document=**} {
      allow read, write: if false;
    }

    // Sanitized public verification documents: single-document get only (no collection listing)
    match /publicBiltyVerifications/{biltyId} {
      allow get: if true;
      allow list: if false;
      allow write: if false; // Managed exclusively by verified admin/internal rules
    }
  }
}
```

> **Note:** Internal collections, owner/staff authorization, and strict field schema validators (`hasOnlyPublicBiltyFields`) are maintained directly in Firebase Console and intentionally omitted from this public repository.

---

## Public Repository Security Checklist

1. **GitHub Actions Secrets:** `VITE_FIREBASE_*` keys are injected only at build time via GitHub repository secrets—never commit `.env` or local Firebase config files.
2. **HTTP Referrer Restriction (Google Cloud Console):** Restrict the Firebase Browser API Key to `https://zahdan-443.github.io/*`.
3. **Firebase App Check:** Enable reCAPTCHA Enterprise / App Check on Firestore to mitigate automated scraping.
