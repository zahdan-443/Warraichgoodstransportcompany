# Firestore Security Rules & Architecture Guide

## Security Architecture Overview

To protect sensitive customer and financial information while providing a public Bilty Verification System on the website:

1. **`bilties` (Private Collection):**
   - Contains complete internal bilty records (CNICs, phone numbers, freight amounts, payment status, driver credentials).
   - **Access:** Completely **PRIVATE**. Public website access is **STRICTLY DENIED**.
   - **Write:** Restricted to authorized owner account (`warraichgoods43@gmail.com`) via Driver Dost App authentication.

2. **`publicBiltyVerifications` (Public Collection):**
   - Contains **ONLY** sanitized, non-sensitive verification fields:
     - `biltyNo`: Normalized string (e.g. `"WGT-99214"`)
     - `biltyDate`: Date string or Timestamp
     - `origin`: Origin city (e.g. `"Samundri"`)
     - `destination`: Destination city (e.g. `"Karachi Port"`)
     - `goodsDescription`: General goods category (e.g. `"Textile Bales"`)
     - `weightOrQty`: Package count / weight summary
     - `vehicleNo`: Truck registration number (e.g. `"LES-8842"`)
     - `status`: Verification status string (e.g. `"Verified Record in Transit"`)
   - **Access:** **READ-ONLY for the public**.
   - **Write:** Restricted exclusively to authorized owner (`warraichgoods43@gmail.com`). Public users **cannot create, edit, or delete** documents.

---

## Recommended Firestore Security Rules

Copy and paste the following rules into the **Firebase Console -> Firestore Database -> Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 1. PRIVATE COLLECTION: Internal Bilties
    // Stores full records including CNIC, phone numbers, financial details.
    // Public website users HAVE NO ACCESS.
    match /bilties/{biltyId} {
      allow read, write: if request.auth != null && request.auth.token.email == "warraichgoods43@gmail.com";
    }

    // 2. PUBLIC COLLECTION: Sanitized Bilty Verifications
    // Stores ONLY safe public verification fields.
    match /publicBiltyVerifications/{biltyId} {
      // Allow public read access for website verification queries
      allow read: if true;

      // Restrict write/update/delete strictly to the authenticated owner account
      allow write: if request.auth != null && request.auth.token.email == "warraichgoods43@gmail.com";
    }

    // Default deny for all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## Technical Integration Details

### Website QR URL Format
When scanning QR codes on printed bilties, the QR code URL must direct to:
```
https://zahdan-443.github.io/Warraichgoodstransportcompany/?page=verify&bilty={BILTY_NUMBER}
```

### Driver Dost App Integration Requirement
When the owner creates or updates a bilty in the Driver Dost app:
1. Save the complete internal bilty record in `bilties/{biltyNo}`.
2. Publish/sync the sanitized public record in `publicBiltyVerifications/{biltyNo}` containing only the non-sensitive public fields listed above.
