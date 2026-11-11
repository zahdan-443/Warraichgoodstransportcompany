# Modern Logistics Restyling Plan: Warraich Goods Transport

Comprehensive architectural and visual plan to restyle the Home page and shared application layout into an executive, high-trust, modern commercial logistics web platform. All routing, JSON-LD schema, static prerendering scripts, and the navy/amber/slate palette are preserved while strictly adhering to real factual data from `src/data/companyData.ts`.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed by the user and have been implemented:

- **Complete Language Separation**:
  - Default language is strictly **English** (`en`) as explicitly requested.
  - When English is toggled or viewed by default, the entire website is 100% English.
  - When Urdu is selected via the language switch, the entire website is 100% Urdu with zero English words, acronyms, or parenthetical English tags (pure Urdu city and vehicle dropdowns, pure Urdu headlines and labels).
- **Single Phone & Single Address**:
  - Secondary/Kamalia phone `0339-5370443` has been completely removed across the entire codebase.
  - Exclusively single contact phone and WhatsApp number: **`0300-5370443`** (`+923005370443`).
  - Single primary physical address: **Okara Bypass, Samundri, District Faisalabad** (`اوکاڑہ بائی پاس، سمندری، ضلع فیصل آباد`).
- **Dev Preview & Assets**:
  - Restrictive CSP meta tags and domain redirect scripts removed from `index.html` to allow clean live preview in AI Studio iframe.
  - Dynamic base configured in `vite.config.ts` (`/` for dev, `./` for build).
- **NTN Moved from Header to Profile Page**:
  - NTN removed from both desktop navbar and mobile drawer.
  - Prominently featured on the Company Profile / About page (`/about`) and in the footer legal verification note.
- **Pakistani Logistics Hauler UX (Reference: `chaudharykarwaangoods.com`)**:
  - Clean edge-to-edge photography with navy scrim.
  - Overlapping Quick Quote booking calculator with direct WhatsApp prefilled cargo inquiry.
  - 4 clean vehicle cards with faint background watermark icons and one-line descriptions.
  - Single "Direct Communication" management contact card.
  - Single round green WhatsApp floating button.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms the website from a cluttered directory-style layout into a sleek, modern logistics brand experience. Visitors immediately encounter a cinematic hero with an overlapping Quick Quote calculator, clean single-line service and cargo cards with faint corner watermark icons, an interactive Android app download section, and a single "Direct Communication" contact card.
- **Target Audience / Persona**: Industrial manufacturers, flour/textile mill managers, agricultural traders, and commercial shippers seeking reliable, single-party dedicated Full Truckload (FTL) transport across Pakistan.
- **Key Value**: Frictionless quote generation via WhatsApp, instant direct phone communication with executive management (0300-5370443), and clear fleet capabilities without overwhelming text walls.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Header & Navigation (Compact 56px Mobile Bar)**:
   - Sticky top bar with a 56px height profile on mobile (`h-14` / `56px`), displaying the official brand emblem, single-line company name, and a clean hamburger toggle.
   - Clean language toggle (`English` when in Urdu mode, `اردو` when in English mode).
   - NTN completely removed from header and drawer.
   - Mobile slide-out drawer houses all primary route links (`/`, `/fleet`, `/services`, `/booking`, `/faq`, `/about`), language toggle, and direct call button to `0300-5370443`.

2. **Hero Section & Overlapping Quick Quote**:
   - **Hero Visual**: Edge-to-edge photo of `road-highway.webp` dimmed with a 70% deep navy overlay (`bg-slate-950/75`).
   - **Headline**: High-impact bold display type:
     - Urdu: *"پورے پاکستان کے لیے بااعتماد <span class="text-amber-400">فل ٹرک لوڈ</span> گڈز ٹرانسپورٹ"*
     - English: *"Dedicated <span class="text-amber-400">Full-Truckload</span> Freight Across Pakistan"*
   - **Action Buttons**: Solid amber *"آن لائن کرایہ معلوم کریں"* / *"Get Instant Quote"* and an outlined white *"کال کریں: 0300-5370443"* / *"Call Now: 0300-5370443"*.
   - **Live Stats Strip**: 3 authentic counters:
     - `20+` (سالوں کا تجربہ / Years Experience)
     - `4` (کمرشل فلیٹ ماڈلز / Fleet Truck Types)
     - `20+` (تجارتی کوریڈورز / Hubs & Cities)
   - **Overlapping Quick Quote Card**: Renders with `-mt-12 sm:-mt-16` relative margin over the hero base. Contains:
     - Pickup City (`روانگی کا شہر:` / `Pickup City:`)
     - Delivery City (`منزل کا شہر:` / `Delivery City:`)
     - Vehicle Type (`مطلوبہ گاڑی:` / `Vehicle Type:`)
     - *"واٹس ایپ پر فوری ریٹ معلوم کریں"* / *"Get Quote on WhatsApp"* button opening WhatsApp with prefilled cargo route details.
     - Quiet secondary text link: *"یا واٹس ایپ پر لائیو رابطہ کریں ←"*.

3. **Streamlined Domain Cards (Fleet, Why-Us, Cargo)**:
   - Strictly single-column layout on mobile, 2-column or 4-column grid on desktop.
   - Each card features:
     - Rounded icon box.
     - Bold, concise title (100% Urdu in Urdu mode, 100% English in English mode).
     - Exactly ONE line of descriptive value copy (no nested bullet lists).
     - Subtle, faint oversized watermark icon positioned in the card corner (`opacity-5 pointer-events-none`).
     - Distinctive *"مزید معلومات اور تفصیلات ←"* / *"Learn more →"* text link.

4. **Android App Download Section**:
   - Split layout: Left column features *"ہماری اینڈرائیڈ ایپ ڈاؤن لوڈ کریں"* / *"Download our Android App"*, introductory text, and 3 clear feature lines.
   - Direct download button linking to `https://zahdan-443.github.io/Warraich-Goods` (`APP_DOWNLOAD_URL`).
   - Right column showcases a sleek CSS-rendered smartphone frame displaying the actual app UI mockup in the active language.

5. **Direct Communication Card (Contact Overhaul)**:
   - Eliminates multi-city button matrix and secondary numbers.
   - Renders a single executive card featuring:
     - Primary Phone: `0300-5370443`
     - Head Office Address: `اوکاڑہ بائی پاس، سمندری، ضلع فیصل آباد` / `Okara Bypass, Samundri, District Faisalabad`
     - WhatsApp: `+923005370443`
     - Official Email: `warraichgoods43@gmail.com`
     - Trust Badge: *"24/7 ملک گیر سروس دستیاب ہے"* / *"Available 24/7 Nationwide"*

6. **Floating Action (Minimalist WhatsApp)**:
   - Single circular green WhatsApp button (`w-14 h-14 bg-emerald-600 hover:bg-emerald-500`) fixed at bottom-right with prefilled text.
   - Generous bottom padding buffer (`pb-20 sm:pb-8`) across pages to prevent obscuring content.

---

## 3. Visual Identity & Theme

- **Palette**: Deep Navy (`#020617`, `#0f172a`), Clean Slate (`#f8fafc`, `#f1f5f9`, `#e2e8f0`), Vivid Amber Accent (`#f59e0b`, `#d97706`), Emerald Green for WhatsApp (`#10b981`, `#059669`).
- **Rhythm & Surfaces**: Strict alternating section backgrounds:
  - Hero: Dark Navy with real highway photography.
  - Quick Quote: White card with subtle hairline border and soft shadow.
  - Fleet / Services: Crisp `bg-white`.
  - Why Choose Us (Guarantees): `bg-slate-50`.
  - Cargo Categories: `bg-white`.
  - Android App: `bg-slate-50`.
  - Direct Communication: `bg-white`.
  - Footer: Deep Slate/Navy (`bg-slate-950`).
- **Motion & Accessibility**: CSS micro-transitions with `@media (prefers-reduced-motion: reduce)` support. Text remains 100% visible in static server-side prerendered HTML without blocking JavaScript.

---

## 4. Verification & Validation Steps

1. **Prerender & Static HTML Compilation**:
   - Run `npm run build` to verify all 6 static routes prerender successfully to `dist/`.
   - Ensure `expectedText: 'FTL'` and all route checks pass on the root `index.html`.
2. **TypeScript & Linting**:
   - Run `npm run lint` (`tsc --noEmit`) to verify zero type mismatches or missing imports.
3. **Responsive Breakpoints**:
   - Test mobile header height (~56px) and drawer toggle functionality.
   - Verify Quick Quote card overlaps gracefully on both 360px mobile screens and 1440px desktop screens.
   - Confirm single-column card stacking on mobile devices.
4. **Interactive Handlers**:
   - Verify WhatsApp prefilled link formatting for both Quick Quote and floating button.
   - Verify direct call link `tel:03005370443`.
   - Verify Android App link opens `https://zahdan-443.github.io/Warraich-Goods`.
