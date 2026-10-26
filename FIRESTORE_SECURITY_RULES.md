# Firestore Security Rules & Integration Guidelines

## Project: Warraich Goods Transport Company
- **Website App**: Bilty Verification Web App (Read-Only)
- **Firebase Project ID**: `warraich-goods`
- **Owner Account**: `warraichgoods43@gmail.com`
- **Public Collection**: `bilties`

---

## 1. Recommended Firestore Security Rules

To ensure that the website can read public verification records without exposing private user databases or allowing unauthorized document creation/modification, deploy the following security rules in the Firebase Console:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // ----------------------------------------------------
    // Public Bilty Verification Collection (Read-Only)
    // Document ID or normalized bilty number e.g. /bilties/WGT-4431
    // ----------------------------------------------------
    match /bilties/{biltyId} {
      // Allow public read access for verification
      allow get, list: if true;

      // Allow write access ONLY to the owner account
      allow create, update, delete: if request.auth != null &&
        request.auth.token.email == "warraichgoods43@gmail.com";
    }

    // ----------------------------------------------------
    // Private Driver Dost User Data & Collections
    // STRICTLY RESTRICTED - No public access permitted
    // ----------------------------------------------------
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Default deny for all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## 2. Driver Dost App Integration & QR Code Setup

When updating the Driver Dost Android app, configure the generated QR Code URL to point directly to the company website verification page:

### **QR URL Format:**
```
https://zahdan-443.github.io/Warraichgoodstransportcompany/?page=verify&bilty=WGT-4431
```
*or alternatively:*
```
https://zahdan-443.github.io/Warraichgoodstransportcompany/#tracking?bilty=WGT-4431
```

### **Public Verification Document Writing in App:**
When the owner creates a bilty in the Driver Dost app, write a public verification document to the `bilties` collection using the **normalized bilty number as the document ID**:

- **Collection**: `bilties`
- **Document ID**: `WGT-4431` (uppercase, trimmed)
- **Fields to Include**:
  - `biltyNo`: `"WGT-4431"`
  - `biltyDate`: `"2025-05-20"` or Firestore Timestamp
  - `origin`: `"Samundri"`
  - `destination`: `"Karachi Port"`
  - `goodsDescription`: `"Textile Yarn Bags"`
  - `weightOrQty`: `"12 Tons / 240 Bags"`
  - `vehicleNo`: `"FD-7844"`
  - `status`: `"Dispatched - On Motorway M-5"`

---

## 3. Sensitive Data Redaction Rules
The website automatically strips and redacts any private or sensitive fields. **Do NOT include** the following in public `bilties` documents:
- Sender / Consignee phone numbers
- CNIC / Biometric numbers
- Freight charges / Payment amounts / Commission details
- Driver's private credentials
