import { BranchInfo, VehicleInfo, ServiceAreaCity } from '../types';

// Canonical marketing website URL (distinct from webAppUrl which points to the driver portal app)
export const SITE_URL = 'https://zahdan-443.github.io/Warraichgoodstransportcompany/';

// Google Business Profile Review URL
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CY6xd_P6BqIYEAI/review';

export const COMPANY_INFO = {
  nameUrdu: 'وڑائچ گڈز ٹرانسپورٹ کمپنی',
  nameEnglish: 'Warraich Goods Transport Company',
  proprietorUrdu: 'زاہدان نصر وڑائچ',
  proprietorEnglish: 'Zahdan Nasar Warraich',
  proprietorRoleUrdu: 'پروپرائٹر و چیف ایگزیکٹو',
  proprietorRoleEnglish: 'Proprietor & Managing Director',
  phone1: '0300-5370443',
  phone2: '0300-5370443',
  phoneRaw1: '03005370443',
  phoneRaw2: '03005370443',
  whatsappNumber: '923005370443',
  email: 'warraichgoods43@gmail.com',
  addressUrdu: 'اوکاڑہ بائی پاس، سمندری، ضلع فیصل آباد',
  addressEnglish: 'Okara Bypass, Samundri, District Faisalabad',
  cityUrdu: 'سمندری',
  cityEnglish: 'Samundri',
  ntn: '7779394-1',
  sinceYear: '2020',
  youtubeHandle: '@Warraichgoodstransportcompany',
  youtubeUrl: 'https://www.youtube.com/@Warraichgoodstransportcompany',
  facebookUrl: 'https://www.facebook.com/Warraichgoodstransportcompany',
  taglineUrdu: 'ہم پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ کی خدمات فراہم کرتے ہیں۔ مناسب ریٹ اور بہترین سروس ہماری پہچان ہے۔',
  taglineEnglish: 'Trusted home shifting, office relocation, and local/inter-city goods transport services across Pakistan.',
  profileDescriptionUrdu: 'ہم پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ کی خدمات فراہم کرتے ہیں۔ مناسب ریٹ اور بہترین سروس ہماری پہچان ہے۔ مزدا ٹرک، شہزور پک اپ اور ہیوی ٹرکس کے ساتھ 24/7 تیز رفتار بکنگ۔',
  profileDescriptionEnglish: 'Warraich Goods Transport Company offers trusted home shifting, office relocation, and local/inter-city goods transport services. We specialize in shifting, commercial load delivery, and fast vehicle booking across Pakistan. Our versatile fleet includes Mazda trucks, Shahzore pickups, and heavy haulers tailored for all load sizes. Whether you are moving house, transferring an office, or shipping goods to another city, we provide careful handling, clear bilty records, and affordable rates. Serving nationwide routes 24/7, Since 2020. Call today for a free quote and reliable truck booking!',
  subTaglineUrdu: 'گھریلو سامان شفٹنگ، دفتری منتقلی اور کمرشل مال برداری کی 24/7 ملک گیر سروس۔',
  serviceScopeUrdu: 'محفوظ اور بروقت مال برداری، گھریلو و دفتری شفٹنگ (24/7 ملک گیر سروس)',
  webAppUrl: 'https://zahdan-443.github.io/warraichgoods43/',
};

export const FLEET_DATA: VehicleInfo[] = [
  {
    id: 'shehzore',
    nameUrdu: 'شہزور پک اپ',
    nameEnglish: 'Shahzore Commercial Pickup',
    subtitleUrdu: 'تیز رفتار لوکل و انٹرسٹی فل گاڑی لوڈنگ',
    subtitleEnglish: 'High-speed local & intercity dedicated single-shipper pickup',
    capacity: '1 - 3.5 Tons',
    capacityUrdu: '1 تا 3.5 ٹن وزن کی گنجائش',
    dimensions: '10 تا 12 فٹ اوپن / جالی باڈی',
    idealForUrdu: [
      'سنگل پارٹی مکمل گاڑی ارجنٹ ترسیل',
      'زرعی اجناس، بیج اور کھاد کے تھیلے (فل لوڈ)',
      'فیکٹری خام مال و دکانوں کا مکمل اسٹاک',
      'گھریلو سامان اور مکمل فرنیچر شفٹنگ',
    ],
    idealForEnglish: [
      'Dedicated point-to-point urgent dispatch',
      'Agricultural produce, seed & fertilizer sacks (Full load)',
      'Factory stock & direct retail supplies',
      'Full household relocation & furniture',
    ],
    image: './images/shehzore-truck.png',
    fallbackImage: './images/shehzore-truck.png',
    badgeUrdu: 'فل گاڑی ایکسپریس (1 تا 3.5 ٹن)',
    badgeEnglish: 'Express FTL (1-3.5 Tons)',
    tagColor: 'bg-emerald-500',
    altUrdu: 'شہزور پک اپ 1 تا 3.5 ٹن فل لوڈنگ ٹرک - وڑائچ گڈز ٹرانسپورٹ کمپنی',
    altEnglish: 'Shahzore 1-3.5 Ton FTL Loading Commercial Truck - Warraich Goods',
  },
  {
    id: 'mazda',
    nameUrdu: 'مزدا 6 وہیلر',
    nameEnglish: 'Mazda 6-Wheeler Freight Truck',
    subtitleUrdu: 'درمیانے درجے کا کارگو اور بین الصوبائی فل ٹرک لوڈ',
    subtitleEnglish: 'Medium-weight industrial freight & interprovincial highway hauls',
    capacity: '4 - 10 Tons',
    capacityUrdu: '4 تا 10 ٹن وزن کی گنجائش',
    dimensions: '14 تا 18 فٹ باڈی / کنٹینر',
    idealForUrdu: [
      'فیکٹریوں اور ملز کا خام و تیار مال (پورا ٹرک)',
      'اناج، گندم، مکئی اور کپاس کی بوریاں',
      'ٹیکسٹائل دھاگہ، فیبرک، پائپ اور گارمنٹس',
      '100% مخصوص سنگل پارٹی گاڑی',
    ],
    idealForEnglish: [
      'Factory raw materials & finished goods (Full truckload)',
      'Grain sacks, cotton bales & agro products',
      'Textile yarn, fabric & PVC pipes',
      '100% Dedicated single-shipper vehicle',
    ],
    image: './images/mazda-truck.png',
    fallbackImage: './images/mazda-truck.png',
    badgeUrdu: 'سب سے زیادہ مقبول (4 تا 10 ٹن)',
    badgeEnglish: 'Most Popular FTL (4-10 Tons)',
    tagColor: 'bg-amber-500',
    altUrdu: 'مزدا 6 وہیلر 4 تا 10 ٹن کارگو ٹرک - وڑائچ گڈز ٹرانسپورٹ کمپنی',
    altEnglish: 'Mazda 6-Wheeler 4-10 Ton Commercial Freight Truck - Warraich Goods',
  },
  {
    id: 'sample',
    nameUrdu: 'سیمپل ٹرک',
    nameEnglish: 'Sample Extended Chassis Truck',
    subtitleUrdu: 'توسیع شدہ چیسز اور والیم بیسڈ بلک لوڈنگ',
    subtitleEnglish: 'Extended chassis hauler for high-volume and volumetric cargo loads',
    capacity: '8 - 16 Tons',
    capacityUrdu: '8 تا 16 ٹن وزن کی گنجائش',
    dimensions: '18 تا 22 فٹ ایکسٹینڈڈ باڈی',
    idealForUrdu: [
      'زیادہ حجم اور وزنی مال کا مکمل ٹرک',
      'کیمیکل ڈرمز اور صنعتی سامان کا فل لوڈ',
      'کاٹن بیلز، پولٹری فیڈ اور سیمنٹ بیگ',
      'براہ راست گودام تا منزل نان اسٹاپ سپلائی',
    ],
    idealForEnglish: [
      'High-volume full freight consignment',
      'Chemical drums & industrial supplies (Full load)',
      'Cotton bales, feed & cement bags',
      'Direct warehouse-to-destination non-stop transit',
    ],
    image: './images/sample-truck.png',
    fallbackImage: './images/sample-truck.png',
    badgeUrdu: 'ہائی والیم ٹرک (8 تا 16 ٹن)',
    badgeEnglish: 'High Volume FTL (8-16 Tons)',
    tagColor: 'bg-indigo-600',
    altUrdu: 'سیمپل ٹرک 8 تا 16 ٹن والیم بیسڈ بلک لوڈنگ - وڑائچ گڈز ٹرانسپورٹ',
    altEnglish: 'Extended Chassis Sample Truck 8-16 Ton High Volume Freight - Warraich Goods',
  },
  {
    id: 'bedford',
    nameUrdu: 'بیڈفورڈ ہیوی ٹرک',
    nameEnglish: 'Bedford Heavy Long Haul Hauler',
    subtitleUrdu: 'انتہائی وزنی اور طویل فاصلاتی کارگو ٹرانسپورٹ',
    subtitleEnglish: 'Heavy-duty long haul freight, structural steel & bulk industrial hauls',
    capacity: '15 - 28+ Tons',
    capacityUrdu: '15 تا 28+ ٹن وزنی کارگو',
    dimensions: '22 تا 28+ فٹ ہیوی فریم',
    idealForUrdu: [
      'بھاری صنعتی مشینری، لوہا و اسٹیل گارڈرز (فل ٹرک)',
      'تعمیراتی میٹریل، سیمنٹ اور ماربل سلیبز',
      'پورے پاکستان (کراچی پورٹ تا خیبر) بلک لوڈنگ',
      'باقاعدہ لانگ ہال کنٹریکٹ ٹرانسپورٹ',
    ],
    idealForEnglish: [
      'Heavy industrial machinery & structural steel (Full load)',
      'Bulk construction materials & marble slabs',
      'Nationwide long haul (Karachi Port to North)',
      'Regular contract logistics & heavy freight FTL',
    ],
    image: './images/bedford-truck.png',
    fallbackImage: './images/bedford-truck.png',
    badgeUrdu: 'ہیوی ڈیوٹی لانگ ہال (15 تا 28+ ٹن)',
    badgeEnglish: 'Heavy Duty Long Haul (15-28+ Tons)',
    tagColor: 'bg-blue-600',
    altUrdu: 'بیڈفورڈ ہیوی ٹرک 15 تا 28+ ٹن لانگ ہال کارگو - وڑائچ گڈز ٹرانسپورٹ',
    altEnglish: 'Bedford Heavy Hauler 15-28+ Ton Long Haul Commercial Truck - Warraich Goods',
  },
];

// ============================================================================
// SINGLE SOURCE OF TRUTH FOR PAKISTAN CITIES & SERVICE HUBS
// ============================================================================
export type ServiceAreaRegion = 'near-samundri' | 'punjab' | 'rest-of-pakistan';

export interface MasterCityEntry {
  id: string;
  nameUrdu: string;
  nameEnglish: string;
  dropdownUrdu: string;
  dropdownEnglish: string;
  region: ServiceAreaRegion;
  isServiceAreaHub: boolean;
  serviceAreaOrder?: number;
}

export const MASTER_CITIES: MasterCityEntry[] = [
  // Near Samundri (Samundri, District Faisalabad & neighbouring towns)
  { id: 'samundri', nameUrdu: 'سمندری', nameEnglish: 'Samundri', dropdownUrdu: 'سمندری', dropdownEnglish: 'Samundri', region: 'near-samundri', isServiceAreaHub: true, serviceAreaOrder: 1 },
  { id: 'gojra', nameUrdu: 'گوجرہ', nameEnglish: 'Gojra', dropdownUrdu: 'گوجرہ', dropdownEnglish: 'Gojra', region: 'near-samundri', isServiceAreaHub: true, serviceAreaOrder: 2 },
  { id: 'tandlianwala', nameUrdu: 'تاندلیانوالہ', nameEnglish: 'Tandlianwala', dropdownUrdu: 'تاندلیانوالہ', dropdownEnglish: 'Tandlianwala', region: 'near-samundri', isServiceAreaHub: false },
  { id: 'toba-tek-singh', nameUrdu: 'ٹوبہ ٹیک سنگھ', nameEnglish: 'Toba Tek Singh', dropdownUrdu: 'ٹوبہ ٹیک سنگھ', dropdownEnglish: 'Toba Tek Singh', region: 'near-samundri', isServiceAreaHub: true, serviceAreaOrder: 3 },
  { id: 'jaranwala', nameUrdu: 'جڑانوالہ', nameEnglish: 'Jaranwala', dropdownUrdu: 'جڑانوالہ', dropdownEnglish: 'Jaranwala', region: 'near-samundri', isServiceAreaHub: false },
  { id: 'kamalia', nameUrdu: 'کمالیہ', nameEnglish: 'Kamalia', dropdownUrdu: 'کمالیہ', dropdownEnglish: 'Kamalia', region: 'near-samundri', isServiceAreaHub: false },
  { id: 'faisalabad', nameUrdu: 'فیصل آباد', nameEnglish: 'Faisalabad', dropdownUrdu: 'فیصل آباد', dropdownEnglish: 'Faisalabad', region: 'near-samundri', isServiceAreaHub: true, serviceAreaOrder: 4 },
  { id: 'chiniot', nameUrdu: 'چنیوٹ', nameEnglish: 'Chiniot', dropdownUrdu: 'چنیوٹ', dropdownEnglish: 'Chiniot', region: 'near-samundri', isServiceAreaHub: false },
  { id: 'jhang', nameUrdu: 'جھنگ', nameEnglish: 'Jhang', dropdownUrdu: 'جھنگ', dropdownEnglish: 'Jhang', region: 'near-samundri', isServiceAreaHub: true, serviceAreaOrder: 5 },
  { id: 'sahiwal', nameUrdu: 'ساہیوال', nameEnglish: 'Sahiwal', dropdownUrdu: 'ساہیوال', dropdownEnglish: 'Sahiwal', region: 'near-samundri', isServiceAreaHub: false },
  { id: 'okara', nameUrdu: 'اوکاڑہ', nameEnglish: 'Okara', dropdownUrdu: 'اوکاڑہ', dropdownEnglish: 'Okara', region: 'near-samundri', isServiceAreaHub: false },

  // Punjab
  { id: 'lahore', nameUrdu: 'لاہور', nameEnglish: 'Lahore', dropdownUrdu: 'لاہور', dropdownEnglish: 'Lahore', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 6 },
  { id: 'sheikhupura', nameUrdu: 'شیخوپورہ', nameEnglish: 'Sheikhupura', dropdownUrdu: 'شیخوپورہ', dropdownEnglish: 'Sheikhupura', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 7 },
  { id: 'gujranwala', nameUrdu: 'گوجرانوالہ', nameEnglish: 'Gujranwala', dropdownUrdu: 'گوجرانوالہ', dropdownEnglish: 'Gujranwala', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 8 },
  { id: 'sialkot', nameUrdu: 'سیالکوٹ', nameEnglish: 'Sialkot', dropdownUrdu: 'سیالکوٹ', dropdownEnglish: 'Sialkot', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 13 },
  { id: 'gujrat', nameUrdu: 'گجرات', nameEnglish: 'Gujrat', dropdownUrdu: 'گجرات', dropdownEnglish: 'Gujrat', region: 'punjab', isServiceAreaHub: false },
  { id: 'kasur', nameUrdu: 'قصور', nameEnglish: 'Kasur', dropdownUrdu: 'قصور', dropdownEnglish: 'Kasur', region: 'punjab', isServiceAreaHub: false },
  { id: 'hafizabad', nameUrdu: 'حافظ آباد', nameEnglish: 'Hafizabad', dropdownUrdu: 'حافظ آباد', dropdownEnglish: 'Hafizabad', region: 'punjab', isServiceAreaHub: false },
  { id: 'narowal', nameUrdu: 'نارووال', nameEnglish: 'Narowal', dropdownUrdu: 'نارووال', dropdownEnglish: 'Narowal', region: 'punjab', isServiceAreaHub: false },
  { id: 'wazirabad', nameUrdu: 'وزیرآباد', nameEnglish: 'Wazirabad', dropdownUrdu: 'وزیرآباد', dropdownEnglish: 'Wazirabad', region: 'punjab', isServiceAreaHub: false },
  { id: 'sargodha', nameUrdu: 'سرگودھا', nameEnglish: 'Sargodha', dropdownUrdu: 'سرگودھا', dropdownEnglish: 'Sargodha', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 9 },
  { id: 'multan', nameUrdu: 'ملتان', nameEnglish: 'Multan', dropdownUrdu: 'ملتان', dropdownEnglish: 'Multan', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 10 },
  { id: 'pakpattan', nameUrdu: 'پاکپتن', nameEnglish: 'Pakpattan', dropdownUrdu: 'پاکپتن', dropdownEnglish: 'Pakpattan', region: 'punjab', isServiceAreaHub: false },
  { id: 'vehari', nameUrdu: 'وہاڑی', nameEnglish: 'Vehari', dropdownUrdu: 'وہاڑی', dropdownEnglish: 'Vehari', region: 'punjab', isServiceAreaHub: false },
  { id: 'khanewal', nameUrdu: 'خانیوال', nameEnglish: 'Khanewal', dropdownUrdu: 'خانیوال', dropdownEnglish: 'Khanewal', region: 'punjab', isServiceAreaHub: false },
  { id: 'bahawalpur', nameUrdu: 'بہاولپور', nameEnglish: 'Bahawalpur', dropdownUrdu: 'بہاولپور', dropdownEnglish: 'Bahawalpur', region: 'punjab', isServiceAreaHub: false },
  { id: 'rahim-yar-khan', nameUrdu: 'رحیم یار خان', nameEnglish: 'Rahim Yar Khan', dropdownUrdu: 'رحیم یار خان', dropdownEnglish: 'Rahim Yar Khan', region: 'punjab', isServiceAreaHub: false },
  { id: 'dera-ghazi-khan', nameUrdu: 'ڈیرہ غازی خان', nameEnglish: 'Dera Ghazi Khan', dropdownUrdu: 'ڈیرہ غازی خان', dropdownEnglish: 'Dera Ghazi Khan', region: 'punjab', isServiceAreaHub: false },
  { id: 'muzaffargarh', nameUrdu: 'مظفرگڑھ', nameEnglish: 'Muzaffargarh', dropdownUrdu: 'مظفرگڑھ', dropdownEnglish: 'Muzaffargarh', region: 'punjab', isServiceAreaHub: false },
  { id: 'mianwali', nameUrdu: 'میانوالی', nameEnglish: 'Mianwali', dropdownUrdu: 'میانوالی', dropdownEnglish: 'Mianwali', region: 'punjab', isServiceAreaHub: false },
  { id: 'bhakkar', nameUrdu: 'بھکر', nameEnglish: 'Bhakkar', dropdownUrdu: 'بھکر', dropdownEnglish: 'Bhakkar', region: 'punjab', isServiceAreaHub: false },
  { id: 'jhelum', nameUrdu: 'جہلم', nameEnglish: 'Jhelum', dropdownUrdu: 'جہلم', dropdownEnglish: 'Jhelum', region: 'punjab', isServiceAreaHub: false },
  { id: 'attock', nameUrdu: 'اٹک', nameEnglish: 'Attock', dropdownUrdu: 'اٹک', dropdownEnglish: 'Attock', region: 'punjab', isServiceAreaHub: false },
  { id: 'rawalpindi', nameUrdu: 'راولپنڈی', nameEnglish: 'Rawalpindi', dropdownUrdu: 'راولپنڈی', dropdownEnglish: 'Rawalpindi', region: 'punjab', isServiceAreaHub: true, serviceAreaOrder: 11 },

  // Rest of Pakistan
  { id: 'islamabad', nameUrdu: 'اسلام آباد', nameEnglish: 'Islamabad', dropdownUrdu: 'راولپنڈی و اسلام آباد', dropdownEnglish: 'Rawalpindi / Islamabad', region: 'rest-of-pakistan', isServiceAreaHub: true, serviceAreaOrder: 12 },
  { id: 'karachi', nameUrdu: 'کراچی', nameEnglish: 'Karachi', dropdownUrdu: 'کراچی', dropdownEnglish: 'Karachi', region: 'rest-of-pakistan', isServiceAreaHub: true, serviceAreaOrder: 14 },
  { id: 'hyderabad', nameUrdu: 'حیدرآباد', nameEnglish: 'Hyderabad', dropdownUrdu: 'حیدرآباد', dropdownEnglish: 'Hyderabad', region: 'rest-of-pakistan', isServiceAreaHub: false },
  { id: 'sukkur', nameUrdu: 'سکھر', nameEnglish: 'Sukkur', dropdownUrdu: 'سکھر', dropdownEnglish: 'Sukkur', region: 'rest-of-pakistan', isServiceAreaHub: false },
  { id: 'peshawar', nameUrdu: 'پشاور', nameEnglish: 'Peshawar', dropdownUrdu: 'پشاور', dropdownEnglish: 'Peshawar', region: 'rest-of-pakistan', isServiceAreaHub: true, serviceAreaOrder: 15 },
  { id: 'mardan', nameUrdu: 'مردان', nameEnglish: 'Mardan', dropdownUrdu: 'مردان', dropdownEnglish: 'Mardan', region: 'rest-of-pakistan', isServiceAreaHub: false },
  { id: 'abbottabad', nameUrdu: 'ایبٹ آباد', nameEnglish: 'Abbottabad', dropdownUrdu: 'ایبٹ آباد', dropdownEnglish: 'Abbottabad', region: 'rest-of-pakistan', isServiceAreaHub: false },
  { id: 'quetta', nameUrdu: 'کوئٹہ', nameEnglish: 'Quetta', dropdownUrdu: 'کوئٹہ', dropdownEnglish: 'Quetta', region: 'rest-of-pakistan', isServiceAreaHub: false },
  { id: 'gilgit', nameUrdu: 'گلگت', nameEnglish: 'Gilgit', dropdownUrdu: 'گلگت و بلتستان', dropdownEnglish: 'Gilgit & Baltistan', region: 'rest-of-pakistan', isServiceAreaHub: false },
];

// Preserves the existing order of the Rate Calculator dropdown
const RATE_CALCULATOR_CITY_IDS: string[] = [
  'samundri', 'kamalia', 'faisalabad', 'lahore', 'karachi', 'islamabad',
  'rawalpindi', 'multan', 'gujranwala', 'sialkot', 'peshawar', 'quetta',
  'sargodha', 'sahiwal', 'okara', 'pakpattan', 'toba-tek-singh', 'gojra',
  'jaranwala', 'tandlianwala', 'chiniot', 'jhang', 'rahim-yar-khan',
  'bahawalpur', 'vehari', 'khanewal', 'dera-ghazi-khan', 'muzaffargarh',
  'mianwali', 'bhakkar', 'kasur', 'gujrat', 'hafizabad', 'narowal',
  'wazirabad', 'jhelum', 'attock', 'sukkur', 'hyderabad', 'abbottabad',
  'mardan', 'gilgit'
];

// Derived Key Service Area Hubs for Home preview & Compatibility
export const SERVICE_AREAS: ServiceAreaCity[] = MASTER_CITIES
  .filter(c => c.isServiceAreaHub)
  .sort((a, b) => (a.serviceAreaOrder ?? 99) - (b.serviceAreaOrder ?? 99))
  .map(c => {
    return {
      id: c.id,
      nameUrdu: c.nameUrdu,
      nameEnglish: c.nameEnglish,
      descriptionUrdu: 'مال کی بکنگ اور ٹرانسپورٹ سروس دستیاب ہے',
      descriptionEnglish: 'Goods booking and transport service available',
      phone: COMPANY_INFO.phone1,
      phoneRaw: COMPANY_INFO.phoneRaw1,
      whatsappUrl: `https://wa.me/${COMPANY_INFO.whatsappNumber}`,
    };
  });

// Deprecated alias maintained for internal component compatibility
export const BRANCHES_DATA: BranchInfo[] = [];

// Derived Pakistan Cities for RateCalculatorSection dropdowns
export const PAKISTAN_CITIES: { urdu: string; en: string }[] = RATE_CALCULATOR_CITY_IDS
  .map(id => MASTER_CITIES.find(c => c.id === id)!)
  .filter(Boolean)
  .map(c => ({ urdu: c.dropdownUrdu, en: c.dropdownEnglish }));

export const GOODS_TYPES = [
  { id: 'agri', urdu: 'زرعی اجناس (گندم، چاول، مکئی، کپاس، چارہ - فل گاڑی)', en: 'Agricultural Produce (Full Truckload)' },
  { id: 'industrial', urdu: 'صنعتی و ملز کا سامان (کپڑا، دھاگہ، فیکٹری مال - فل لوڈ)', en: 'Industrial & Mill Cargo (Dedicated FTL)' },
  { id: 'machinery', urdu: 'مشینری و ہیوی ہارڈ ویئر (مکمل ٹرک)', en: 'Heavy Machinery & Hardware (FTL)' },
  { id: 'construction', urdu: 'تعمیراتی سامان و لوہا/اسٹیل (بلک فل لوڈ)', en: 'Construction Materials & Steel (Full Load)' },
  { id: 'household', urdu: 'گھریلو سامان و فرنیچر (مخصوص وقف گاڑی)', en: 'Complete Household Shifting (Dedicated Truck)' },
  { id: 'general', urdu: 'دیگر تجارتی مال (مکمل گاڑی بکنگ)', en: 'General Dedicated Freight (FTL Only)' },
];

export const CORPORATE_CREDENTIALS = {
  registeredName: 'Warraich Goods Transport Company',
  registeredNameUrdu: 'وڑائچ گڈز ٹرانسپورٹ کمپنی',
  ntn: '7779394-1',
  fbrStatus: 'Active Taxpayer / FBR Registered',
  fbrStatusUrdu: 'ایکٹو ٹیکس پیئر / ایف بی آر تصدیق شدہ',
  entityType: 'Commercial Goods Carrier & Fleet Hauler',
  entityTypeUrdu: 'رجسٹرڈ کمرشل گڈز فارورڈر و فلیٹ کیریئر',
  proprietor: 'Zahdan Nasar Warraich',
  proprietorUrdu: 'زاہدان نصر وڑائچ',
  officialEmail: 'warraichgoods43@gmail.com',
  officialPhones: ['0300-5370443'],
  serviceCoverage: 'Nationwide Home Shifting, Office Relocation, Commercial Cargo & Fast Vehicle Booking across Pakistan. Office: Okara Bypass, Samundri, District Faisalabad.',
  serviceCoverageUrdu: 'پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ۔ دفتر: اوکاڑہ بائی پاس، سمندری، ضلع فیصل آباد۔',
  servicePhilosophy: 'Careful Handling, Clear Bilty Records, Affordable Rates & 24/7 Nationwide Service Since 2020',
  servicePhilosophyUrdu: 'محفوظ ہینڈلنگ، شفاف بلٹی ریکارڈ، مناسب ریٹ اور 24/7 بروقت سروس',
  invoicingFeatures: [
    { titleEn: 'Official Tax Invoicing', titleUr: 'باقاعدہ ٹیکس انوائسنگ', descEn: 'Formal invoices with NTN: 7779394-1 compliant with corporate withholding tax regulations.', descUr: 'کارپوریٹ ٹیکس قوانین کے مطابق رجسٹرڈ NTN کے ساتھ شفاف انوائس۔' },
    { titleEn: 'Computerized Weighbridge Slip', titleUr: 'کمپیوٹرائزڈ کانٹا پرچی', descEn: 'Certified weighbridge weight slips provided immediately post-loading for strict axle compliance.', descUr: 'لوڈنگ کے فوری بعد سرکاری کانٹا پرچی اور ایکسل لوڈ قوانین کی پاسداری۔' },
    { titleEn: 'Official Bilti & Signed POD', titleUr: 'سرکاری بلٹی اور دستخط شدہ POD', descEn: 'Formal Consignment Note (Bilti) and stamped Proof of Delivery (POD) returned for every shipment.', descUr: 'باقاعدہ ٹرانسپورٹ بلٹی اور منزل پر وصول کنندہ کی مہر و دستخط شدہ رسید۔' },
    { titleEn: 'Pre-Trip Vehicle Inspection', titleUr: 'روانگی سے قبل گاڑی کی جانچ', descEn: 'Truck condition, tires, and tie-downs are checked before each journey.', descUr: 'ہائی وے روانگی سے قبل ٹرک، ٹائرز اور ترپال کی مکمل جانچ۔' },
    { titleEn: 'Licensed Commercial Drivers', titleUr: 'لائسنس یافتہ تجربہ کار ڈرائیورز', descEn: 'Commercial driving license and years of experience on Pakistan highways.', descUr: 'کمرشل ڈرائیونگ لائسنس اور ہائی وے کا طویل تجربہ۔' },
    { titleEn: 'Waterproof Tarpaulins', titleUr: 'مضبوط واٹر پروف ترپال', descEn: 'Heavy waterproof covers protect your goods from rain and road dust.', descUr: 'بارش اور گرد و غبار سے بچاؤ کے لیے واٹر پروف ترپال۔' },
  ],
  corporateContractPerks: [
    { titleEn: 'Annual & Monthly Freight Rate Contracts', titleUr: 'سالانہ و ماہانہ ریٹ کنٹریکٹس', descEn: 'Predictable fixed freight costs with priority truck reservation for peak seasons.', descUr: 'سیزنل تیزی کے دوران بھی گاڑیوں کی ترجیحی دستیابی اور فکسڈ ریٹس۔' },
    { titleEn: 'Dedicated Fleet Allocation', titleUr: 'مخصوص فلیٹ کی فراہمی', descEn: 'Dedicated Shahzore, Mazda, Sample, or Bedford units assigned to regular corporate routes.', descUr: 'آپ کے باقاعدہ روٹس کے لیے مستقل گاڑیاں اور ڈرائیورز۔' },
    { titleEn: 'Single Point of Contact (Account Manager)', titleUr: 'مخصوص اکاؤنٹ مینیجر', descEn: 'Direct liaison with Chief Executive Zahdan Nasar Warraich for swift operational decisions.', descUr: 'براہ راست پروپرائٹر کے ساتھ فوری کوآرڈینیشن اور 24/7 رسپانس۔' },
    { titleEn: 'Corporate Payment & Credit Terms', titleUr: 'کارپوریٹ پیمنٹ و کریڈٹ ٹرمز', descEn: 'Flexible corporate settlement terms via official bank transfer for registered vendor companies.', descUr: 'رجسٹرڈ وینڈر کمپنیوں کے لیے باقاعدہ بینک ٹرانسفر اور منظور شدہ کریڈٹ شرائط۔' },
  ],
  corporateSectors: [
    { nameEn: 'Textile & Spinning Mills', nameUr: 'ٹیکسٹائل و اسپننگ ملز', detailsEn: 'Yarn cones, finished fabric, grey cloth & raw cotton across Faisalabad, Lahore, and Karachi Port.', detailsUr: 'دھاگہ، کپڑا، گرے کلوتھ اور کاٹن بیلز کی کراچی پورٹ اور ملکی منڈیوں میں ترسیل۔' },
    { nameEn: 'Agricultural Traders & Mandis', nameUr: 'زرعی غلہ منڈی و آڑھتی', detailsEn: 'Wheat, corn, rice, cottonseeds, and fodder bulk haulage with zero moisture exposure.', detailsUr: 'گندم، مکئی، چاول اور کھاد کی بلک ترسیل پنجاب، سندھ، کے پی کے اور ملک بھر کے تمام روٹس پر۔' },
    { nameEn: 'Construction & Steel Infrastructure', nameUr: 'تعمیراتی میٹریل و اسٹیل', detailsEn: 'Structural rebar, cement bags, PVC piping, and stone marble slabs using heavy Bedford haulers.', detailsUr: 'سیمنٹ، سریا، پائپ اور صنعتی ہارڈ ویئر کی بھاری بیڈفورڈ اور سیمپل ٹرکوں پر لوڈنگ۔' },
    { nameEn: 'Flour, Sugar & Food Processing Plants', nameUr: 'فلور، شوگر و فوڈ ملز', detailsEn: 'Refined sugar bags, flour sacks, packaging cartons, and poultry feed transport.', detailsUr: 'چینی، آٹا، پیکجنگ گتے اور پولٹری فیڈ کی صاف ستھری اور محفوظ FTL ترسیل۔' },
  ]
};
