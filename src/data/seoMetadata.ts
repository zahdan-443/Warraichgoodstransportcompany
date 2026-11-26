import { CORRIDOR_SEO_PAGES } from './corridorsData';

export const BASE_SITE_URL = 'https://warraichgoods.eu.cc';

export interface RouteSeoEntry {
  path: string;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  descriptionUr: string;
  canonicalUrl: string;
  ogImage: string;
  ogImageType: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogImageAlt: string;
}

const IMAGE_META_BY_PATH: Record<string, { type: string; width: number; height: number }> = {
  'images/cargo-textile-industrial-supplies.webp': { type: 'image/webp', width: 720, height: 402 },
  'images/why-dedicated-trucks-only.webp': { type: 'image/webp', width: 640, height: 357 },
  'images/fleet-shahzore-pickup.webp': { type: 'image/webp', width: 560, height: 312 },
  'images/fleet-bedford-heavy.webp': { type: 'image/webp', width: 560, height: 312 },
  'images/cargo-home-shifting-relocation.webp': { type: 'image/webp', width: 720, height: 402 },
  'images/cargo-agricultural-produce-grains.webp': { type: 'image/webp', width: 720, height: 402 },
  'images/fleet-sample-extended.webp': { type: 'image/webp', width: 560, height: 312 },
  'images/cargo-heavy-machinery-steel.webp': { type: 'image/webp', width: 600, height: 450 },
};

const CORE_SEO_ENTRIES: RouteSeoEntry[] = [
  {
    path: '/',
    titleEn: 'Warraich Goods | Samundri & Faisalabad Truck Transport',
    titleUr: 'وڑائچ گڈز ٹرانسپورٹ کمپنی | سمندری و فیصل آباد',
    descriptionEn:
      'Reliable Goods Transport Company in Samundri & Faisalabad. Book Shahzore, Mazda, Sample & Bedford trucks across Pakistan. Call 0300-5370443.',
    descriptionUr:
      'سمندری اور فیصل آباد سے پورے پاکستان کے لیے محفوظ مال برداری اور گھریلو شفٹنگ۔ شہزور، مزدا، سیمپل اور بیڈفورڈ ٹرک بکنگ کے لیے 0300-5370443 پر رابطہ کریں۔',
    canonicalUrl: `${BASE_SITE_URL}/`,
    ogImage: `${BASE_SITE_URL}/images/logo.png`,
    ogImageType: 'image/png',
    ogImageWidth: 503,
    ogImageHeight: 496,
    ogImageAlt: 'Warraich Goods Transport Company Official Logo',
  },
  {
    path: '/fleet',
    titleEn: 'Mazda, Shahzore & Bedford Truck Booking | Warraich Goods',
    titleUr: 'مزدا، شہزور اور بیڈفورڈ ٹرک بکنگ | وڑائچ گڈز',
    descriptionEn:
      'Shahzore pickups, Mazda trucks, Sample and Bedford heavy haulers for home shifting and commercial transport across Pakistan. Call 0300-5370443.',
    descriptionUr:
      'شہزور پک اپ، مزدا 6 وہیلر، سیمپل ٹرک اور بیڈفورڈ ہیوی ٹرکس کے ذریعے پورے پاکستان میں محفوظ مال برداری اور گھریلو شفٹنگ۔ فون: 0300-5370443',
    canonicalUrl: `${BASE_SITE_URL}/fleet/`,
    ogImage: `${BASE_SITE_URL}/images/fleet-mazda-6-wheeler.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 560,
    ogImageHeight: 312,
    ogImageAlt: 'Mazda 6-Wheeler Commercial Freight Truck - Warraich Goods',
  },
  {
    path: '/services',
    titleEn: 'Goods Transport & Shifting Services | Warraich Goods',
    titleUr: 'گڈز ٹرانسپورٹ اور گھریلو شفٹنگ سروسز | وڑائچ گڈز',
    descriptionEn:
      'Dedicated truck transport, home shifting, and office moving services from Samundri & Faisalabad to all cities in Pakistan. NTN 7779394-1.',
    descriptionUr:
      'وڑائچ گڈز کی جانب سے سمندری و فیصل آباد سے ملک بھر میں فل ٹرک لوڈ مال برداری، گھریلو و دفتری شفٹنگ اور کارپوریٹ انوائسنگ (NTN 7779394-1)۔',
    canonicalUrl: `${BASE_SITE_URL}/services/`,
    ogImage: `${BASE_SITE_URL}/images/corporate-factory-dispatch.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 720,
    ogImageHeight: 402,
    ogImageAlt: 'Commercial Factory Dispatch & Corporate Goods Transport',
  },
  {
    path: '/booking',
    titleEn: 'Truck Booking & Rate Inquiry | Warraich Goods',
    titleUr: 'آن لائن ٹرک بکنگ اور کرایہ کیلکولیٹر | وڑائچ گڈز',
    descriptionEn:
      'Get freight rates and book a truck for home shifting or goods delivery across Pakistan via WhatsApp or phone at 0300-5370443.',
    descriptionUr:
      'پاکستان کے کسی بھی شہر کے لیے کرایہ معلوم کریں اور واٹس ایپ یا فون 0300-5370443 کے ذریعے فوری گاڑی بک کروائیں۔',
    canonicalUrl: `${BASE_SITE_URL}/booking/`,
    ogImage: `${BASE_SITE_URL}/images/workflow-motorway-corridor.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 720,
    ogImageHeight: 402,
    ogImageAlt: 'Motorway Route Freight Booking & Rate Calculator',
  },
  {
    path: '/service-areas',
    titleEn: 'Service Areas Across Pakistan | Warraich Goods',
    titleUr: 'پاکستان بھر میں ٹرانسپورٹ سروس کے علاقے | وڑائچ گڈز',
    descriptionEn:
      'Warraich Goods books trucks from Samundri, District Faisalabad to 42+ cities across Punjab and Pakistan, plus backhaul loads to Samundri.',
    descriptionUr:
      'سمندری، ضلع فیصل آباد سے پنجاب اور پاکستان کے 42 سے زائد شہروں میں ٹرانسپورٹ سروس اور واپسی لوڈ (بیک ہال) کی سہولت۔',
    canonicalUrl: `${BASE_SITE_URL}/service-areas/`,
    ogImage: `${BASE_SITE_URL}/images/hero-highway-background.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 1120,
    ogImageHeight: 625,
    ogImageAlt: 'Warraich Goods Transport Nationwide Highway Service Network',
  },
  {
    path: '/faq',
    titleEn: 'Frequently Asked Questions | Warraich Goods',
    titleUr: 'عام سوالات اور بلٹی رہنمائی | وڑائچ گڈز',
    descriptionEn:
      'Answers to common questions about truck booking, freight charges, bilty receipts, and goods transport across Pakistan.',
    descriptionUr:
      'ٹرک بکنگ، کرائے کے تعین، واٹر پروف ترپال، کمپیوٹرائزڈ کانٹا پرچی اور بلٹی رسید سے متعلق عام سوالات کے جوابات۔',
    canonicalUrl: `${BASE_SITE_URL}/faq/`,
    ogImage: `${BASE_SITE_URL}/images/safety-waterproof-tarpaulin.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 720,
    ogImageHeight: 402,
    ogImageAlt: 'Waterproof Tarpaulin Cargo Protection & FAQs',
  },
  {
    path: '/about',
    titleEn: 'About Us & Contact Details | Warraich Goods',
    titleUr: 'تعارف اور سمندری دفتر کا پتہ | وڑائچ گڈز',
    descriptionEn:
      'Warraich Goods Transport Company, based at Okara Bypass, Near 466 Chowk, Samundri, Faisalabad, serving routes across Pakistan since 2008.',
    descriptionUr:
      'وڑائچ گڈز ٹرانسپورٹ کمپنی، دفتر اوکاڑہ بائی پاس نزد 466 چوک سمندری، ضلع فیصل آباد۔ 2008 سے ملک بھر میں بااعتماد مال برداری کی خدمات۔',
    canonicalUrl: `${BASE_SITE_URL}/about/`,
    ogImage: `${BASE_SITE_URL}/images/proprietor-zahdan-nasar-warraich.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 320,
    ogImageHeight: 427,
    ogImageAlt: 'Zahdan Nasar Warraich - Proprietor of Warraich Goods Transport Company',
  },
  {
    path: '/verify',
    titleEn: 'Bilty Verification | Warraich Goods',
    titleUr: 'آن لائن بلٹی تصدیق سروس | وڑائچ گڈز',
    descriptionEn:
      'Verify your official bilty receipt and consignment details online with Warraich Goods Transport Company. Phone: 0300-5370443.',
    descriptionUr:
      'وڑائچ گڈز ٹرانسپورٹ کمپنی کی جاری کردہ سرکاری بلٹی رسید اور سامان کی تفصیل آن لائن تصدیق کریں۔ فون: 0300-5370443',
    canonicalUrl: `${BASE_SITE_URL}/verify/`,
    ogImage: `${BASE_SITE_URL}/images/trip-3-scale-slip-signed-bilty.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 600,
    ogImageHeight: 450,
    ogImageAlt: 'Official Written Bilty & Computer Weighbridge Slip Verification',
  },
];

const CORRIDOR_SEO_ENTRIES: RouteSeoEntry[] = CORRIDOR_SEO_PAGES.map((c) => {
  const imgMeta = IMAGE_META_BY_PATH[c.image] || {
    type: 'image/webp',
    width: 720,
    height: 402,
  };
  return {
    path: c.path,
    titleEn: c.metaTitle,
    titleUr: `${c.titleUr} | وڑائچ گڈز`,
    descriptionEn: c.metaDescription,
    descriptionUr: c.heroSummaryUr,
    canonicalUrl: `${BASE_SITE_URL}/${c.slug}/`,
    ogImage: `${BASE_SITE_URL}/${c.image}`,
    ogImageType: imgMeta.type,
    ogImageWidth: imgMeta.width,
    ogImageHeight: imgMeta.height,
    ogImageAlt: c.imageAltEn,
  };
});

export const ALL_SEO_ENTRIES: RouteSeoEntry[] = [
  ...CORE_SEO_ENTRIES,
  ...CORRIDOR_SEO_ENTRIES,
];

export const SEO_METADATA_MAP: Record<string, RouteSeoEntry> = Object.fromEntries(
  ALL_SEO_ENTRIES.map((entry) => [entry.path, entry])
);
