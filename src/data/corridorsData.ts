export interface CorridorFaq {
  questionEn: string;
  questionUr: string;
  answerEn: string;
  answerUr: string;
}

export interface CorridorSection {
  headingEn: string;
  headingUr: string;
  bodyEn: string[];
  bodyUr: string[];
}

export interface CorridorSeoEntry {
  slug: string;
  path: string;
  titleEn: string;
  titleUr: string;
  metaTitle: string;
  metaDescription: string;
  badgeEn: string;
  badgeUr: string;
  h1En: string;
  h1Ur: string;
  heroSummaryEn: string;
  heroSummaryUr: string;
  originId: string;
  destinationId: string;
  highwayEn: string;
  highwayUr: string;
  transitEn: string;
  transitUr: string;
  distanceEn: string;
  distanceUr: string;
  image: string;
  imageAltEn: string;
  imageAltUr: string;
  shortLinkLabelEn: string;
  shortLinkLabelUr: string;
  highlightsEn: string[];
  highlightsUr: string[];
  cargoTagsEn: string[];
  cargoTagsUr: string[];
  sections: CorridorSection[];
  faqs: CorridorFaq[];
  relatedSlugs: string[];
  expectedText: string;
}

export const CORRIDOR_SEO_PAGES: CorridorSeoEntry[] = [
  {
    slug: 'goods-transport-faisalabad-samundri',
    path: '/goods-transport-faisalabad-samundri',
    titleEn: 'Samundri & Faisalabad Transport',
    titleUr: 'سمندری اور فیصل آباد گڈز ٹرانسپورٹ',
    metaTitle: 'Goods Transport Samundri & Faisalabad | Warraich Goods',
    metaDescription:
      'Trusted goods transport in Samundri & Faisalabad since 2008. Book full Shahzore, Mazda, Sample & Bedford trucks near 466 Chowk. Call 0300-5370443.',
    badgeEn: 'Head Office Dispatch • Serving Since 2008',
    badgeUr: 'مرکزی دفتر سمندری • 2008 سے خدمت میں',
    h1En: 'Goods Transport in Samundri & Faisalabad',
    h1Ur: 'سمندری اور فیصل آباد میں بااعتماد گڈز ٹرانسپورٹ',
    heroSummaryEn:
      'Operating from Okara Bypass, Near 466 Chowk, Samundri, Warraich Goods Transport Company books full dedicated Shahzore, Mazda, Sample, and Bedford trucks across District Faisalabad and all cities of Pakistan.',
    heroSummaryUr:
      'اوکاڑہ بائی پاس، نزد 466 چوک، سمندری میں واقع ہمارے مرکزی دفتر سے ضلع فیصل آباد اور ملک بھر کے لیے شہزور، مزدا، سیمپل اور بیڈفورڈ فل ٹرک لوڈ سروس دستیاب ہے۔',
    originId: 'samundri',
    destinationId: 'faisalabad',
    highwayEn: 'Faisalabad-Samundri Road, M-3 & M-4 Interchange',
    highwayUr: 'فیصل آباد سمندری روڈ، M-3 اور M-4 انٹرچینج',
    transitEn: '45 Mins – 1.5 Hrs (Local) / Same-Day Punjab',
    transitUr: '45 منٹ تا 1.5 گھنٹہ (لوکل) / سیم ڈے پنجاب',
    distanceEn: '46 km Hub Corridor',
    distanceUr: '46 کلومیٹر مرکزی کوریڈور',
    image: 'images/cargo-textile-industrial-supplies.webp',
    imageAltEn: 'Textile and industrial cargo loading in Samundri and Faisalabad by Warraich Goods',
    imageAltUr: 'سمندری اور فیصل آباد میں ٹیکسٹائل اور صنعتی کارگو لوڈنگ',
    shortLinkLabelEn: 'Samundri & Faisalabad',
    shortLinkLabelUr: 'سمندری و فیصل آباد',
    highlightsEn: [
      'Physical office at Okara Bypass, Near 466 Chowk, Samundri',
      'Direct truck allocation for Khurrianwala, Sargodha Road, Small Industrial Estate & Ghalla Mandi',
      'Active FBR Registered carrier (NTN 7779394-1) with written bilty & scale slips',
      'Zero parcel mixing — your factory or household load travels alone',
    ],
    highlightsUr: [
      'اوکاڑہ بائی پاس، نزد 466 چوک، سمندری میں باقاعدہ دفتر',
      'کھرڑیانوالہ، سرگودھا روڈ، انڈسٹریل اسٹیٹ اور غلہ منڈی کے لیے براہِ راست گاڑیاں',
      'ایف بی آر رجسٹرڈ کمپنی (NTN 7779394-1) مع تحریری بلٹی اور کانٹا پرچی',
      'پارسل مکسنگ کے بغیر صرف آپ کے مال کے لیے مخصوص گاڑی',
    ],
    cargoTagsEn: [
      'Cotton Bales & Yarn Cones',
      'Grey Cloth & Finished Textiles',
      'Wheat, Corn & Mandi Grains',
      'Flour, Sugar & Poultry Feed',
      'Home & Office Shifting',
      'Steel, Pipes & Hardware',
    ],
    cargoTagsUr: [
      'روئی کی گانٹھیں اور دھاگہ',
      'گرے کلوتھ اور تیار کپڑا',
      'گندم، مکئی اور زرعی اجناس',
      'آٹا، چینی اور پولٹری فیڈ',
      'گھریلو و دفتری سامان شفٹنگ',
      'لوہا، پائپ اور ہارڈ ویئر',
    ],
    sections: [
      {
        headingEn: 'Direct Fleet Dispatch from Samundri & District Faisalabad',
        headingUr: 'سمندری اور ضلع فیصل آباد سے براہِ راست ٹرک ڈسپیچ',
        bodyEn: [
          'Since 2008, traders, textile factories, grain brokers, and families in Samundri and Faisalabad have relied on Warraich Goods Transport Company for straightforward, punctual truck booking. Unlike brokers who forward calls without seeing the vehicle, our team operates physically from Okara Bypass, Near 466 Chowk, Samundri — allowing us to inspect every vehicle, brief the driver face-to-face, and confirm clear freight rates before loading starts.',
          'Because Samundri sits right between the agricultural belt of Tehsil Samundri, Tandlianwala, Gojra, and Jaranwala and the industrial core of Faisalabad, our four dedicated truck categories stay busy every day. Whether you need a nimble Shahzore pickup for a single textile mill dispatch or a 28-ton Bedford hauler loaded with machinery or steel for Karachi Port, we dispatch the exact vehicle fitted to your tonnage without squeezing mixed parcels beside your goods.',
        ],
        bodyUr: [
          '2008 سے سمندری اور فیصل آباد کے تاجر، ٹیکسٹائل ملز، غلہ منڈی کے آڑھتی اور گھریلو صارفین وڑائچ گڈز ٹرانسپورٹ کمپنی پر اعتماد کرتے ہیں۔ ہم اوکاڑہ بائی پاس، نزد 466 چوک، سمندری میں اپنے دفتر سے براہِ راست گاڑیاں چیک کر کے روانہ کرتے ہیں اور لوڈنگ سے پہلے کرایہ واضح طے کرتے ہیں۔',
          'سمندری تحصیل، تاندلیانوالہ، گوجرہ، جڑانوالہ اور فیصل آباد کے صنعتی مراکز کے درمیان ہونے کی وجہ سے ہماری چاروں کمرشل گاڑیاں روزانہ دستیاب رہتی ہیں۔ چھوٹی شفٹنگ کے لیے شہزور پک اپ سے لے کر بھاری ملز مال کے لیے بیڈفورڈ تک ہر گاڑی صرف آپ کے مال کے لیے مخصوص ہوتی ہے۔',
        ],
      },
      {
        headingEn: 'Industrial Estates, Textile Mills & Ghalla Mandi Coverage',
        headingUr: 'انڈسٹریل اسٹیٹس، ٹیکسٹائل ملز اور غلہ منڈی کوریج',
        bodyEn: [
          'Faisalabad is Pakistan’s textile heartland, and tight factory cut-offs leave zero room for delayed pickups. We serve loading bays across Khurrianwala Industrial Zone, M-3 Industrial City (FIEDMC), Chak Jhumra, Sargodha Road, Jhang Road, Abdullahpur, and Makkuana Bypass, along with every mandi yard in Samundri, Kamalia, Gojra, and Toba Tek Singh.',
          'Textile mills ship yarn cones, dyed fabric rolls, packaging cartons, and sizing chemicals on clean Mazda 6-Wheelers and Extended Sample trucks lined with dry floor planks and double waterproof tarpaulins. Farmers and commodity dealers load bulk wheat, maize, paddy, fertilizer, and animal feed knowing weight accuracy is verified immediately on an authorized computer weighbridge right after departure.',
        ],
        bodyUr: [
          'فیصل آباد کی ٹیکسٹائل انڈسٹری میں وقت کی پابندی سب سے اہم ہے۔ ہم کھرڑیانوالہ، M-3 انڈسٹریل اسٹیٹ، چک جھمرہ، سرگودھا روڈ، جھنگ روڈ اور سمندری، کمالیہ، گوجرہ و ٹوبہ ٹیک سنگھ کی تمام غلہ منڈیوں سے براہِ راست لوڈنگ فراہم کرتے ہیں۔',
          'دھاگہ، کپڑا، گتا پیکجنگ اور کیمیکلز کو خشک باڈی اور ڈبل واٹر پروف ترپال میں محفوظ کیا جاتا ہے جبکہ گندم، مکئی، کھاد اور فیڈ کی روانگی کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی جاری کی جاتی ہے۔',
        ],
      },
      {
        headingEn: 'Clear Documentation, Direct Driver Contact & Fair Bilty Records',
        headingUr: 'شفاف کاغذات، ڈرائیور سے براہِ راست رابطہ اور بلٹی ریکارڈ',
        bodyEn: [
          'Registered firms in Faisalabad and Samundri require proper tax and transport documentation for withholding tax and audit files. Warraich Goods Transport Company is an active FBR-registered carrier (NTN: 7779394-1). Every trip is backed by a numbered written bilty carrying sender and receiver particulars, freight terms, driver CNIC verification, and mobile contact details.',
          'Once your truck clears the weighbridge, you receive the driver’s direct mobile number, computer scale slip photo on WhatsApp, and signed Proof of Delivery (POD) upon unloading. Families shifting homes between Samundri, Faisalabad, Lahore, or Islamabad also receive extra ropes, thick furniture blankets, and careful loading guidance from our office team.',
        ],
        bodyUr: [
          'رجسٹرڈ کمپنیوں کے لیے ایف بی آر (NTN: 7779394-1) کے مطابق مکمل بلٹی ریکارڈ، ڈرائیور کا شناختی کارڈ و موبائل نمبر اور کمپیوٹرائزڈ کانٹا پرچی واٹس ایپ پر فراہم کی جاتی ہے۔',
          'منزل پر مال اترنے کے بعد وصول کنندہ کی مہر اور دستخط شدہ رسید (POD) بھیجی جاتی ہے۔ گھریلو سامان کی شفٹنگ کے لیے بھی صاف گاڑی اور اضافی ترپال و رسیوں کا اہتمام کیا جاتا ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'Where is your transport office located in Samundri?',
        questionUr: 'سمندری میں آپ کا ٹرانسپورٹ دفتر کہاں واقع ہے؟',
        answerEn:
          'Our office is at Okara Bypass, Near 466 Chowk, Samundri, District Faisalabad. You can visit in person or call/WhatsApp 0300-5370443 anytime for bookings.',
        answerUr:
          'ہمارا دفتر اوکاڑہ بائی پاس، نزد 466 چوک، سمندری ضلع فیصل آباد میں واقع ہے۔ بکنگ کے لیے آپ 0300-5370443 پر کسی بھی وقت کال یا واٹس ایپ کر سکتے ہیں۔',
      },
      {
        questionEn: 'How quickly can a truck reach a Faisalabad factory for loading?',
        questionUr: 'فیصل آباد فیکٹری سے لوڈنگ کے لیے گاڑی کتنی دیر میں پہنچ سکتی ہے؟',
        answerEn:
          'For Samundri, Gojra, Khurrianwala, and Faisalabad industrial areas, Shahzore pickups and Mazda trucks are usually positioned within 1 to 3 hours depending on load timing.',
        answerUr:
          'سمندری، گوجرہ، کھرڑیانوالہ اور فیصل آباد کے صنعتی علاقوں میں شہزور اور مزدا گاڑیاں عموماً 1 سے 3 گھنٹے میں لوڈنگ کے لیے پہنچ جاتی ہیں۔',
      },
      {
        questionEn: 'Do you provide FBR NTN invoices and weighbridge slips?',
        questionUr: 'کیا آپ ایف بی آر این ٹی این انوائس اور کانٹا پرچی دیتے ہیں؟',
        answerEn:
          'Yes. We provide official bilty receipts, NTN 7779394-1 billing details for registered companies, and computerized weighbridge slips right after loading.',
        answerUr:
          'جی ہاں، ہم رجسٹرڈ کمپنیوں کو NTN 7779394-1 بلنگ، باقاعدہ تحریری بلٹی اور لوڈنگ کے بعد کمپیوٹرائزڈ کانٹا پرچی فراہم کرتے ہیں۔',
      },
      {
        questionEn: 'Which truck sizes are available in Samundri & Faisalabad?',
        questionUr: 'سمندری اور فیصل آباد میں کون کون سی گاڑیاں دستیاب ہیں؟',
        answerEn:
          'We operate 4 truck categories: Shahzore Pickup (1–3.5 tons), Mazda 6-Wheeler (4–10 tons), Sample Extended (8–16 tons), and Bedford Heavy (15–28+ tons).',
        answerUr:
          'ہمارے پاس 4 گاڑیاں دستیاب ہیں: شہزور پک اپ (1 تا 3.5 ٹن)، مزدا 6 وہیلر (4 تا 10 ٹن)، سیمپل ٹرک (8 تا 16 ٹن) اور بیڈفورڈ ہیوی (15 تا 28+ ٹن)۔',
      },
    ],
    relatedSlugs: [
      'full-truckload-services-pakistan',
      'lahore-to-samundri',
      'karachi-to-samundri',
      'multan-to-samundri',
    ],
    expectedText: 'Goods Transport in Samundri & Faisalabad',
  },
  {
    slug: 'full-truckload-services-pakistan',
    path: '/full-truckload-services-pakistan',
    titleEn: 'Full Truckload & Backhaul Pakistan',
    titleUr: 'فل ٹرک لوڈ اور واپسی لوڈ سروس پاکستان',
    metaTitle: 'Full Truckload & Backhaul Pakistan | Warraich Goods',
    metaDescription:
      'Dedicated full truckload (FTL) & discounted backhaul trucks across Pakistan. Book Shahzore, Mazda, Sample & Bedford trucks 24/7. Call 0300-5370443.',
    badgeEn: 'Zero Parcel Mixing • Direct Nationwide FTL',
    badgeUr: 'زیرو پارسل مکسنگ • ملک گیر فل ٹرک لوڈ',
    h1En: 'Full Truckload (FTL) & Backhaul Services Across Pakistan',
    h1Ur: 'پورے پاکستان میں فل ٹرک لوڈ (FTL) اور بیک ہال سروس',
    heroSummaryEn:
      'Reserve an entire Shahzore, Mazda, Sample, or Bedford truck strictly for your cargo or household move, and save on return trips with our scheduled backhaul trucks heading toward Samundri and Faisalabad.',
    heroSummaryUr:
      'اپنے کمرشل مال یا گھریلو سامان کے لیے مکمل شہزور، مزدا، سیمپل یا بیڈفورڈ گاڑی بک کریں، اور سمندری و فیصل آباد آنے والی واپسی گاڑیوں (بیک ہال) پر مناسب کرایہ حاصل کریں۔',
    originId: 'samundri',
    destinationId: 'karachi',
    highwayEn: 'M-1, M-2, M-3, M-4, M-5 & N-5 National Highways',
    highwayUr: 'M-1، M-2، M-3، M-4، M-5 اور N-5 نیشنل ہائی ویز',
    transitEn: 'Non-Stop Point-to-Point Dispatch',
    transitUr: 'بغیر کسی رکاوٹ کے براہِ راست ترسیل',
    distanceEn: '42+ Cities Nationwide',
    distanceUr: 'ملک کے 42+ بڑے شہر',
    image: 'images/why-dedicated-trucks-only.webp',
    imageAltEn: 'Dedicated full truckload freight service across Pakistan with Warraich Goods',
    imageAltUr: 'پورے پاکستان کے لیے وڑائچ گڈز کی مخصوص فل ٹرک لوڈ سروس',
    shortLinkLabelEn: 'FTL & Backhaul Pakistan',
    shortLinkLabelUr: 'فل ٹرک و واپسی لوڈ',
    highlightsEn: [
      '100% dedicated single-party vehicle — nothing else loaded alongside your goods',
      'Backhaul return trucks from Karachi, Lahore, Multan, Islamabad, Rawalpindi & Peshawar',
      '4 proven trucks covering 1 ton up to 28+ tons for factories, mandis & families',
      'Direct phone & WhatsApp coordination with driver from pickup to unloading',
    ],
    highlightsUr: [
      '100% مخصوص سنگل پارٹی گاڑی — کسی دوسرے کا مال ساتھ لوڈ نہیں ہوتا',
      'کراچی، لاہور، ملتان، اسلام آباد، راولپنڈی اور پشاور سے واپسی لوڈ سروس',
      '1 ٹن سے 28+ ٹن تک چار کمرشل گاڑیوں کے ماڈلز دستیاب',
      'روانگی سے وصولی تک ڈرائیور سے براہِ راست فون اور واٹس ایپ رابطہ',
    ],
    cargoTagsEn: [
      'Factory Raw Material & Stock',
      'Agricultural Commodities',
      'Heavy Industrial Machinery',
      'Full House & Office Shifting',
      'Construction & Steel Bars',
      'Return Backhaul Commercial Lots',
    ],
    cargoTagsUr: [
      'فیکٹری خام مال و تیار اسٹاک',
      'زرعی اجناس و غلہ منڈی لوڈ',
      'بھاری صنعتی مشینری',
      'مکمل گھر و دفتر کی شفٹنگ',
      'تعمیراتی سامان و اسٹیل',
      'واپسی لوڈ کمرشل کنسائنمنٹس',
    ],
    sections: [
      {
        headingEn: 'Why Full Truckload Beats Mixed Adda Parcel Shipping',
        headingUr: 'مکس پارسل کے مقابلے میں فل ٹرک لوڈ (FTL) کیوں بہتر ہے؟',
        bodyEn: [
          'Traditional transport addas often mix cartons, drums, and machinery from ten different customers inside one truck, leading to crushed packaging, cross-loading delays, and lost items at intermediate stops. At Warraich Goods Transport Company, we follow a strict policy: every booking allocates an entire dedicated vehicle strictly to one customer.',
          'Once your goods are loaded at your factory gate, mandi shop, or residence, strong ropes and double waterproof tarpaulins are tied immediately and your truck departs straight for the destination. There are no unnecessary yard stops to wait for extra cargo, which cuts transit time sharply and protects delicate furniture, yarn cones, and packed foods from damage.',
        ],
        bodyUr: [
          'عام اڈوں پر مختلف گاہکوں کا مال ایک ہی گاڑی میں مکس کر دیا جاتا ہے جس سے ٹوٹ پھوٹ اور تاخیر کا خدشہ رہتا ہے۔ وڑائچ گڈز ٹرانسپورٹ کمپنی میں ہر بکنگ صرف ایک ہی پارٹی کے لیے مکمل گاڑی کی صورت میں کی جاتی ہے۔',
          'آپ کے گودام یا گھر سے لوڈنگ مکمل ہوتے ہی ڈبل واٹر پروف ترپال اور مضبوط رسے باندھ کر گاڑی براہِ راست منزل کی طرف روانہ ہو جاتی ہے، جس سے وقت کی بچت اور سامان کی مکمل حفاظت یقینی بنتی ہے۔',
        ],
      },
      {
        headingEn: 'Smart Backhaul Savings Toward Samundri & Central Punjab',
        headingUr: 'سمندری اور وسطی پنجاب کے لیے واپسی لوڈ (بیک ہال) میں بچت',
        bodyEn: [
          'Our trucks haul agricultural produce, textile consignments, and commercial cargo daily out of Samundri and Faisalabad to Karachi, Lahore, Multan, Rawalpindi, Islamabad, Gujranwala, Sialkot, and Peshawar. After unloading in those cities, those same reliable vehicles need return loads heading back toward Central Punjab.',
          'Businesses and families shipping raw materials, imported spares, fertilizer, machinery, or household goods back into Samundri, Faisalabad, Gojra, or Toba Tek Singh take advantage of these empty return vehicles at competitive backhaul rates—without sacrificing truck quality, tarpaulin safety, or official bilty documentation.',
        ],
        bodyUr: [
          'ہماری گاڑیاں روزانہ سمندری اور فیصل آباد سے لاہور، کراچی، ملتان، اسلام آباد، راولپنڈی اور پشاور مال لے کر جاتی ہیں۔ ان شہروں میں ان لوڈنگ کے بعد یہی گاڑیاں سمندری اور وسطی پنجاب واپسی کے لیے دستیاب ہوتی ہیں۔',
          'تاجر حضرات اور فیکٹریاں ان واپسی گاڑیوں (Backhaul) پر اپنا خام مال، مشینری یا تجارتی سامان عام یکطرفہ کرائے کے مقابلے میں انتہائی مناسب ریٹ پر منگوا سکتے ہیں۔',
        ],
      },
      {
        headingEn: 'Matched Tonnage from 1-Ton Shahzore to 28-Ton Bedford Trucks',
        headingUr: '1 ٹن شہزور سے 28+ ٹن بیڈفورڈ تک وزن کے مطابق گاڑی',
        bodyEn: [
          'Paying for an oversized truck wastes freight budget, while overloading a light pickup risks axle trouble on motorway weigh stations. We match your cargo weight and volume accurately to four well-maintained truck types: Shahzore Commercial Pickups (1–3.5 tons), Mazda 6-Wheelers (4–10 tons), Sample Extended Chassis trucks (8–16 tons), and Bedford Heavy Haulers (15–28+ tons).',
          'Whether your route is a short 50 km haul inside Punjab or a 1,200 km long haul along M-5 and N-5 to Karachi Port, you get clear pricing upfront, driver mobile details, WhatsApp live location pins when requested, computerized scale slips, and signed POD confirmation.',
        ],
        bodyUr: [
          'کم وزن کے لیے بڑی گاڑی کرائے کا نقصان دیتی ہے جبکہ اوور لوڈنگ موٹروے قوانین کے خلاف ہے۔ ہم آپ کے مال کے وزن اور والیم کے مطابق شہزور (1–3.5 ٹن)، مزدا 6 وہیلر (4–10 ٹن)، سیمپل ٹرک (8–16 ٹن) یا بیڈفورڈ ہیوی (15–28+ ٹن) فراہم کرتے ہیں۔',
          'پنجاب کے قریبی شہروں سے لے کر کراچی پورٹ یا پشاور تک ہر سفر میں شفاف ریٹ، کمپیوٹرائزڈ کانٹا پرچی اور دستخط شدہ رسید (POD) شامل ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'What does Full Truckload (FTL) mean at Warraich Goods?',
        questionUr: 'وڑائچ گڈز میں فل ٹرک لوڈ (FTL) سروس سے کیا مراد ہے؟',
        answerEn:
          'FTL means you book the entire Shahzore, Mazda, Sample, or Bedford truck exclusively for your own shipment. We never mix loose parcels or other customers’ goods in your truck.',
        answerUr:
          'فل ٹرک لوڈ کا مطلب ہے کہ پوری شہزور، مزدا، سیمپل یا بیڈفورڈ گاڑی صرف آپ کے مال کے لیے بک کی جاتی ہے اور کسی اور کا سامان ساتھ نہیں رکھا جاتا۔',
      },
      {
        questionEn: 'How can I book a cheaper backhaul truck back to Samundri or Faisalabad?',
        questionUr: 'سمندری یا فیصل آباد واپسی لوڈ کے لیے مناسب کرایہ کیسے حاصل کریں؟',
        answerEn:
          'Call or WhatsApp 0300-5370443 with your pickup city, cargo weight, and preferred loading date. Our dispatch desk matches your load with a returning truck to save costs.',
        answerUr:
          '0300-5370443 پر اپنے شہر، مال کے وزن اور تاریخ کی تفصیل بھیجیں تاکہ ہم اپنی واپسی پر آنے والی گاڑی آپ کے لیے ارینج کر سکیں۔',
      },
      {
        questionEn: 'Do you track trucks or stay in touch during the trip?',
        questionUr: 'سفر کے دوران گاڑی کی لوکیشن اور صورتحال کیسے معلوم ہوتی ہے؟',
        answerEn:
          'We give you the driver’s direct mobile number before departure. You can call the driver anytime or request WhatsApp location updates directly along the route.',
        answerUr:
          'روانگی سے قبل آپ کو ڈرائیور کا براہِ راست موبائل نمبر دیا جاتا ہے جس پر آپ کسی بھی وقت کال یا واٹس ایپ کے ذریعے لوکیشن اور اپڈیٹ حاصل کر سکتے ہیں۔',
      },
      {
        questionEn: 'Which cities across Pakistan do your FTL trucks cover?',
        questionUr: 'آپ کی فل ٹرک لوڈ سروس پاکستان کے کن شہروں میں دستیاب ہے؟',
        answerEn:
          'We cover 42+ hubs including Samundri, Faisalabad, Lahore, Multan, Rawalpindi, Islamabad, Gujranwala, Sialkot, Karachi, Hyderabad, Peshawar, Quetta, and Gilgit.',
        answerUr:
          'ہماری سروس سمندری، فیصل آباد، لاہور، ملتان، راولپنڈی، اسلام آباد، گوجرانوالہ، سیالکوٹ، کراچی، حیدرآباد، پشاور، کوئٹہ اور گلگت سمیت 42+ شہروں میں دستیاب ہے۔',
      },
    ],
    relatedSlugs: [
      'goods-transport-faisalabad-samundri',
      'lahore-to-samundri',
      'karachi-to-samundri',
      'islamabad-to-samundri',
    ],
    expectedText: 'Full Truckload (FTL) & Backhaul Services Across Pakistan',
  },
  {
    slug: 'lahore-to-samundri',
    path: '/lahore-to-samundri',
    titleEn: 'Lahore to Samundri Transport',
    titleUr: 'لاہور تا سمندری ٹرک اور واپسی لوڈ',
    metaTitle: 'Lahore to Samundri Truck & Backhaul | Warraich Goods',
    metaDescription:
      'Daily trucks from Lahore to Samundri & Faisalabad via M-3 Motorway. Book return Shahzore, Mazda, Sample & Bedford trucks at fair rates. Call 0300-5370443.',
    badgeEn: 'M-3 Express Corridor • Daily Return Trucks',
    badgeUr: 'M-3 موٹروے کوریڈور • روزانہ واپسی گاڑیاں',
    h1En: 'Lahore to Samundri Goods Transport & Return Backhaul',
    h1Ur: 'لاہور تا سمندری گڈز ٹرانسپورٹ اور واپسی لوڈ سروس',
    heroSummaryEn:
      'Fast same-day M-3 Motorway truck booking from Lahore wholesale markets, Sundar Industrial Estate, and Brandreth Road back to Samundri and District Faisalabad.',
    heroSummaryUr:
      'لاہور کی ہول سیل مارکیٹوں، سندر انڈسٹریل اسٹیٹ اور برانڈرتھ روڈ سے M-3 موٹروے کے ذریعے سمندری اور ضلع فیصل آباد کے لیے روزانہ تیز رفتار واپسی ٹرک سروس۔',
    originId: 'lahore',
    destinationId: 'samundri',
    highwayEn: 'M-3 Motorway via Tandlianwala / Samundri Interchange',
    highwayUr: 'M-3 موٹروے براستہ سمندری / تاندلیانوالہ انٹرچینج',
    transitEn: '2.5 – 3.5 Hours Direct',
    transitUr: '2.5 تا 3.5 گھنٹے براہِ راست',
    distanceEn: '185 km M-3 Route',
    distanceUr: '185 کلومیٹر موٹروے روٹ',
    image: 'images/fleet-shahzore-pickup.webp',
    imageAltEn: 'Shahzore commercial pickup for Lahore to Samundri same-day backhaul transport',
    imageAltUr: 'لاہور سے سمندری سیم ڈے واپسی لوڈ کے لیے شہزور پک اپ سروس',
    shortLinkLabelEn: 'Lahore to Samundri',
    shortLinkLabelUr: 'لاہور تا سمندری',
    highlightsEn: [
      'Same-day unloading along M-3 Motorway into Samundri, Gojra & Tandlianwala',
      'Pickups from Badami Bagh, Shah Alam Market, Akbari Mandi, Sundar & Kot Lakhpat',
      'Discounted backhaul rates on empty return trucks headed to Samundri yard',
      'Ideal for machinery spares, groceries, electronics, hardware & household moves',
    ],
    highlightsUr: [
      'M-3 موٹروے کے ذریعے لاہور سے سمندری، گوجرہ اور تاندلیانوالہ سیم ڈے ڈلیوری',
      'بادامی باغ، شاہ عالم مارکیٹ، اکبری منڈی، سندر اور کوٹ لکھپت سے براہِ راست لوڈنگ',
      'سمندری آنے والی واپسی گاڑیوں پر خصوصی کم کرایہ',
      'مشینری پرزہ جات، راشن، الیکٹرانکس، ہارڈ ویئر اور گھریلو شفٹنگ کے لیے موزوں',
    ],
    cargoTagsEn: [
      'Hardware & Machinery Spares',
      'Akbari Mandi Spices & Tea',
      'FMCG Cartons & Groceries',
      'Plastic Pipes & Electrical Stock',
      'Furniture & Household Shifting',
      'Pharmaceutical & Packaging Lots',
    ],
    cargoTagsUr: [
      'ہارڈ ویئر اور مشینری پرزہ جات',
      'اکبری منڈی کریانہ اور چائے',
      'فوڈ کارٹن اور پیکجنگ سامان',
      'پلاسٹک پائپس اور الیکٹریکل مال',
      'فرنیچر اور گھریلو سامان شفٹنگ',
      'پیکجنگ و فارماسیوٹیکل سامان',
    ],
    sections: [
      {
        headingEn: 'Same-Day Lahore to Samundri Corridor via M-3 Motorway',
        headingUr: 'M-3 موٹروے کے ذریعے لاہور تا سمندری سیم ڈے ترسیل',
        bodyEn: [
          'Because the M-3 Motorway links Lahore directly to Samundri Interchange, our trucks make this run every single day carrying crops, mill products, and shifted households toward Lahore, then turn around for backhaul pickups back home to Samundri. That daily movement makes Lahore-to-Samundri one of our fastest and most cost-effective corridors.',
          'Instead of letting goods sit for two or three days at Truck Adda Ravi Road waiting for a partial loader to fill up, traders and families can book a dedicated Shahzore or Mazda truck through Warraich Goods and see their cargo arrive at Okara Bypass, 466 Chowk, or their Samundri godown within three to four hours of departure.',
        ],
        bodyUr: [
          'لاہور سے سمندری انٹرچینج تک M-3 موٹروے کی سہولت کی وجہ سے ہماری گاڑیاں روزانہ اس روٹ پر چلتی ہیں۔ صبح سمندری یا فیصل آباد سے مال لاہور پہنچا کر دوپہر یا شام کو وہی گاڑیاں واپسی کے لیے دستیاب ہوتی ہیں۔',
          'راوی روڈ یا بادامی باغ کے اڈوں پر دو تین دن انتظار کرنے کے بجائے آپ ہماری مخصوص شہزور یا مزدا گاڑی بک کر کے صرف 3 سے 4 گھنٹوں میں اپنا مال سمندری پہنچا سکتے ہیں۔',
        ],
      },
      {
        headingEn: 'Loading Across Every Commercial & Industrial Hub of Lahore',
        headingUr: 'لاہور کے تمام تجارتی اور صنعتی علاقوں سے پک اپ سہولت',
        bodyEn: [
          'Our drivers know Lahore’s loading windows and entry timings inside out. We coordinate pickups from Badami Bagh Auto Market, Brandreth Road hardware dealers, Shah Alam Market, Akbari Mandi, Kot Lakhpat Industrial Area, Sundar Industrial Estate, Manga Mandi, Raiwind Road factories, and DHA or Bahria Town residential blocks for house moves.',
          'For tight inner-city streets where larger vehicles cannot park long, our 1-to-3.5 ton Shahzore pickups slip in easily for fast loading, while 4-to-10 ton Mazda 6-Wheelers and Extended Sample trucks handle full warehouse stocks from industrial estates on Multan Road and Sundar.',
        ],
        bodyUr: [
          'ہمارے ڈرائیورز لاہور کے تجارتی اوقات اور نو انٹری رولز سے بخوبی واقف ہیں۔ ہم بادامی باغ، برانڈرتھ روڈ، شاہ عالم مارکیٹ، اکبری منڈی، کوٹ لکھپت، سندر اسٹیٹ، رائیونڈ روڈ اور ڈی ایچ اے و بحریہ ٹاؤن سے بروقت لوڈنگ کرتے ہیں۔',
          'تنگ بازاروں کے لیے شہزور پک اپ اور انڈسٹریل اسٹیٹس و بڑے گوداموں کے لیے مزدا اور سیمپل ٹرک فوری طور پر مہیا کیے جاتے ہیں۔',
        ],
      },
      {
        headingEn: 'Protected Transit, Scale Verification & Clear Delivery Proof',
        headingUr: 'محفوظ سفر، کمپیوٹرائزڈ کانٹا پرچی اور وصولی کی تصدیق',
        bodyEn: [
          'Lahore-to-Samundri loads frequently carry delicate electronics, packed groceries, paper reels, medical cartons, and polished household furniture. Every truck spreads clean mats, heavy ropes, and waterproof tarpaulins to block rain and dust along the motorway.',
          'You receive the driver’s direct phone number at dispatch, computerized weighbridge verification where tonnage matters, an official written bilty under NTN 7779394-1, and prompt WhatsApp confirmation once the load is safely handed over in Samundri, Tandlianwala, or Gojra.',
        ],
        bodyUr: [
          'اس روٹ پر الیکٹرانکس، پیک شدہ راشن، میڈیکل کارٹن اور گھریلو فرنیچر کی محفوظ ترسیل کے لیے ہر گاڑی میں مضبوط رسے اور واٹر پروف ترپال کا لازمی استعمال کیا جاتا ہے۔',
          'روانگی پر ڈرائیور کا نمبر، سرکاری بلٹی (NTN 7779394-1)، ضرورت کے مطابق کانٹا پرچی اور سمندری میں مال اترنے کی تصدیق واٹس ایپ پر بھیجی جاتی ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'How long does a truck take from Lahore to Samundri?',
        questionUr: 'لاہور سے سمندری گاڑی پہنچنے میں کتنا وقت لگتا ہے؟',
        answerEn:
          'Via the M-3 Motorway, a dedicated Shahzore or Mazda truck normally reaches Samundri in 2.5 to 3.5 hours after clearing Lahore.',
        answerUr:
          'M-3 موٹروے کے ذریعے شہزور یا مزدا گاڑی لاہور سے نکلنے کے بعد عموماً 2.5 سے 3.5 گھنٹوں میں سمندری پہنچ جاتی ہے۔',
      },
      {
        questionEn: 'Can I book a return truck from Badami Bagh or Akbari Mandi to Samundri?',
        questionUr: 'کیا بادامی باغ یا اکبری منڈی سے سمندری کے لیے واپسی گاڑی مل سکتی ہے؟',
        answerEn:
          'Yes. Because our vehicles drop goods in Lahore daily, we frequently provide return trucks from Badami Bagh, Brandreth Road, Akbari Mandi, and Sundar to Samundri.',
        answerUr:
          'جی ہاں، ہماری گاڑیاں روزانہ لاہور مال اتارتی ہیں اس لیے بادامی باغ، برانڈرتھ روڈ، اکبری منڈی اور سندر سے واپسی لوڈ آسانی سے دستیاب رہتا ہے۔',
      },
      {
        questionEn: 'Do you handle house shifting from Lahore to Samundri?',
        questionUr: 'کیا لاہور سے سمندری گھر کا سامان شفٹ کرنے کے لیے گاڑی ملتی ہے؟',
        answerEn:
          'Yes. We book dedicated Shahzore pickups for 1–2 room setups and Mazda 6-wheelers for full house furniture moves with waterproof tarpaulin cover.',
        answerUr:
          'جی ہاں، چھوٹے گھر کے لیے شہزور پک اپ اور مکمل گھر کے فرنیچر و سامان کے لیے واٹر پروف ترپال والی مزدا گاڑی بک کی جاتی ہے۔',
      },
      {
        questionEn: 'How do I check today’s Lahore to Samundri backhaul freight rate?',
        questionUr: 'لاہور تا سمندری آج کا واپسی لوڈ کرایہ کیسے معلوم کریں؟',
        answerEn:
          'Call or WhatsApp 0300-5370443 with your pickup location in Lahore and approximate load weight for an instant quote.',
        answerUr:
          'فوری کرایہ معلوم کرنے کے لیے لاہور کا لوڈنگ ایریا اور مال کا وزن 0300-5370443 پر کال یا واٹس ایپ کریں۔',
      },
    ],
    relatedSlugs: [
      'goods-transport-faisalabad-samundri',
      'full-truckload-services-pakistan',
      'islamabad-to-samundri',
      'multan-to-samundri',
    ],
    expectedText: 'Lahore to Samundri Goods Transport & Return Backhaul',
  },
  {
    slug: 'karachi-to-samundri',
    path: '/karachi-to-samundri',
    titleEn: 'Karachi to Samundri Transport',
    titleUr: 'کراچی تا سمندری ہیوی گڈز ٹرانسپورٹ',
    metaTitle: 'Karachi to Samundri Truck Transport | Warraich Goods',
    metaDescription:
      'Long-haul Karachi & KPT/Port Qasim to Samundri & Faisalabad transport. Book Bedford 28-ton, Sample & Mazda trucks at fair backhaul rates. Call 0300-5370443.',
    badgeEn: 'Long-Haul Port & Industrial Backhaul',
    badgeUr: 'کراچی پورٹ تا سمندری لانگ ہال سروس',
    h1En: 'Karachi to Samundri Truck Transport & Heavy Backhaul',
    h1Ur: 'کراچی تا سمندری ٹرک ٹرانسپورٹ اور ہیوی بیک ہال',
    heroSummaryEn:
      'Direct heavy-duty Bedford, Sample Extended, and Mazda 6-wheeler freight movement from Karachi Port (KPT), Port Qasim, Mauripur, and SITE back to Samundri and District Faisalabad.',
    heroSummaryUr:
      'کراچی پورٹ (KPT)، پورٹ قاسم، ماڑی پور اور سائٹ ایریا سے سمندری اور ضلع فیصل آباد کے لیے بیڈفورڈ، سیمپل اور مزدا ٹرکوں کے ذریعے براہِ راست ہیوی کارگو سروس۔',
    originId: 'karachi',
    destinationId: 'samundri',
    highwayEn: 'N-5 National Highway, M-5 Sukkur-Multan & M-4 Motorway',
    highwayUr: 'N-5 نیشنل ہائی وے، M-5 سکھر ملتان اور M-4 موٹروے',
    transitEn: '24 – 30 Hours Long Haul',
    transitUr: '24 تا 30 گھنٹے لانگ ہال',
    distanceEn: '1,180 km Trunk Corridor',
    distanceUr: '1,180 کلومیٹر قومی شاہراہ',
    image: 'images/fleet-bedford-heavy.webp',
    imageAltEn: 'Bedford heavy hauler for Karachi to Samundri long-haul commercial freight',
    imageAltUr: 'کراچی سے سمندری ہیوی کارگو کے لیے بیڈفورڈ ٹرک',
    shortLinkLabelEn: 'Karachi to Samundri',
    shortLinkLabelUr: 'کراچی تا سمندری',
    highlightsEn: [
      'Bedford Heavy (15–28+ tons) & Sample Extended (8–16 tons) built for port & factory cargo',
      'Loading from Mauripur Truck Stand, KPT, Port Qasim, Landhi, Korangi & SITE Industrial Area',
      'Mandatory computerized weighbridge slips complying with National Highway axle limits',
      'Return backhaul rates for importers, steel dealers, textile mills & mandi traders',
    ],
    highlightsUr: [
      'بندرگاہ اور فیکٹری کے وزنی مال کے لیے بیڈفورڈ ہیوی (15–28+ ٹن) اور سیمپل (8–16 ٹن) گاڑیاں',
      'ماڑی پور، کے پی ٹی، پورٹ قاسم، لانڈھی، کورنگی اور سائٹ انڈسٹریل ایریا سے لوڈنگ',
      'نیشنل ہائی وے ایکسل لوڈ قوانین کے مطابق کمپیوٹرائزڈ کانٹا پرچی',
      'امپورٹرز، اسٹیل ڈیلرز، ٹیکسٹائل ملز اور تاجروں کے لیے واپسی لوڈ کے مناسب ریٹ',
    ],
    cargoTagsEn: [
      'Imported Machinery & Plant Equipment',
      'Steel Coils, Sheets & Iron Girders',
      'Textile Dyes, Chemicals & Polymer Bags',
      'Cooking Oil Tins, Tea & Wholesale Stock',
      'Jodia Bazar & Bolton Market Goods',
      'Port-Cleared Bulk Palletized Lots',
    ],
    cargoTagsUr: [
      'امپورٹڈ مشینری و پلانٹ آلات',
      'اسٹیل کوائلز، چادریں اور لوہا گارڈرز',
      'ٹیکسٹائل کیمیکلز، رنگ اور دانہ بیگز',
      'کوکنگ آئل، چائے اور ہول سیل راشن',
      'جوڑیا بازار اور بولٹن مارکیٹ کا مال',
      'بندرگاہ سے کلیئر شدہ بلک کارگو',
    ],
    sections: [
      {
        headingEn: 'Heavy Haulage from Karachi Port & Industrial Zones to Samundri',
        headingUr: 'کراچی پورٹ اور صنعتی زونز سے سمندری تک ہیوی مال برداری',
        bodyEn: [
          'Moving commercial lots nearly 1,200 kilometers across Sindh and Punjab demands seasoned long-haul drivers and heavy-duty frames—not light short-distance vehicles. Warraich Goods Transport Company dispatches robust 15 to 28+ ton Bedford trucks, 8 to 16 ton Sample Extended chassis trucks, and 4 to 10 ton Mazda 6-Wheelers from Karachi straight up the N-5, M-5, and M-4 corridors to Samundri and Faisalabad.',
          'Our Karachi dispatch network covers loading bays at Mauripur Road, Hawke’s Bay Truck Stand, Karachi Port (KPT), Port Qasim, SITE Industrial Area, Korangi Industrial Zone, Landhi, Jodia Bazar, and Shershah Iron Market. Once loaded and covered against coastal humidity and desert highway dust, the vehicle stays under single-party commitment all the way to your Samundri mill or warehouse.',
        ],
        bodyUr: [
          'کراچی سے پنجاب تک تقریباً 1,200 کلومیٹر کے طویل سفر کے لیے تجربہ کار ڈرائیورز اور مضبوط ہیوی ٹرک ضروری ہوتے ہیں۔ وڑائچ گڈز ٹرانسپورٹ کمپنی ماڑی پور، کے پی ٹی، پورٹ قاسم، سائٹ ایریا، کورنگی، لانڈھی، جوڑیا بازار اور شیر شاہ سے سمندری و فیصل آباد تک بیڈفورڈ (15–28+ ٹن)، سیمپل (8–16 ٹن) اور مزدا 6 وہیلر گاڑیاں روانہ کرتی ہے۔',
          'سمندری نمی اور ہائی وے گرد و غبار سے بچاؤ کے لیے ڈبل ترپال باندھنے کے بعد گاڑی بغیر کسی مکسنگ کے سیدھی آپ کے گودام تک آتی ہے۔',
        ],
      },
      {
        headingEn: 'Competitive Backhaul Pricing After Upcountry Cotton & Grain Runs',
        headingUr: 'روئی، اجناس اور ٹیکسٹائل کے بعد واپسی لوڈ میں کم کرایہ',
        bodyEn: [
          'Punjab farms, ginning factories, and textile units around Samundri, Tandlianwala, and Faisalabad continuously send bulk shipments down to Karachi. Rather than deadheading empty trucks northwards, we connect those returning Bedford and Sample haulers with importers and traders bringing plastic granules, industrial chemicals, tea, steel, and wholesale cartons back from Karachi.',
          'This natural two-way corridor balance lets Samundri and Faisalabad businesses secure lower freight costs than one-off spot brokers in Karachi, while working directly with a local Samundri company office located at Okara Bypass, Near 466 Chowk.',
        ],
        bodyUr: [
          'سمندری اور فیصل آباد کی ٹیکسٹائل ملز اور غلہ منڈیوں سے کپڑا، دھاگہ اور زرعی اجناس لے کر ہماری گاڑیاں کراچی جاتی ہیں۔ واپسی پر ان بیڈفورڈ اور سیمپل ٹرکوں کو خالی لانے کے بجائے پلاسٹک دانہ، کیمیکلز، لوہا، چائے اور امپورٹڈ مال کے لیے مناسب بیک ہال ریٹ پر فراہم کیا جاتا ہے۔',
          'اس طرح آپ کراچی کے غیر یقینی بروکرز کے بجائے براہِ راست اپنے علاقے کی بااعتماد کمپنی (اوکاڑہ بائی پاس، نزد 466 چوک، سمندری) کے ساتھ کام کر سکتے ہیں۔',
        ],
      },
      {
        headingEn: 'Axle Compliance, Weighbridge Slips & Continuous Driver Coordination',
        headingUr: 'ایکسل لوڈ پابندی، کانٹا پرچی اور دورانِ سفر رابطہ',
        bodyEn: [
          'NHA and Motorway weigh stations enforce strict axle-load regulations along N-5 and M-5. Our dispatch team guides loading weight properly per truck class and supplies verified computerized scale slips right after leaving Karachi, eliminating costly roadside offloading penalties.',
          'Throughout the 24 to 30 hour highway journey via Sukkur, Multan, and Shorkot/Toba Tek Singh, customers receive the driver’s direct mobile number for live progress calls and WhatsApp check-ins, backed by FBR NTN 7779394-1 bilty paperwork and stamped Proof of Delivery.',
        ],
        bodyUr: [
          'نیشنل ہائی وے اور موٹروے پر ایکسل لوڈ قوانین پر سختی سے عمل درآمد ہوتا ہے۔ ہم ہر گاڑی کی گنجائش کے مطابق لوڈنگ کرواتے ہیں اور روانگی کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی جاری کرتے ہیں تاکہ راستے میں جرمانے یا روک ٹوک کا سامنا نہ ہو۔',
          'سکھر اور ملتان کے راستے 24 تا 30 گھنٹوں کے سفر میں ڈرائیور کا موبائل نمبر مسلسل آن رہتا ہے اور منزل پر مال پہنچنے کے بعد دستخط شدہ بلٹی و POD فراہم کی جاتی ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'How long does a heavy truck take from Karachi to Samundri?',
        questionUr: 'کراچی سے سمندری تک ہیوی ٹرک پہنچنے میں کتنا وقت لگتا ہے؟',
        answerEn:
          'A dedicated Mazda, Sample, or Bedford truck typically completes the Karachi to Samundri run via N-5, M-5, and M-4 in 24 to 30 hours depending on load weight.',
        answerUr:
          'مزدا، سیمپل یا بیڈفورڈ ٹرک N-5، M-5 اور M-4 کے راستے کراچی سے سمندری تقریباً 24 سے 30 گھنٹوں میں پہنچ جاتا ہے۔',
      },
      {
        questionEn: 'Can you load port-cleared wholesale or factory cargo from Mauripur or Port Qasim?',
        questionUr: 'کیا ماڑی پور یا پورٹ قاسم سے بندرگاہ کا کلیئر شدہ مال لوڈ ہو سکتا ہے؟',
        answerEn:
          'Yes. We book dedicated full-body Mazda, Sample, and Bedford trucks directly at Mauripur, KPT, Port Qasim, SITE, Korangi, and Jodia Bazar.',
        answerUr:
          'جی ہاں، ماڑی پور، کے پی ٹی، پورٹ قاسم، سائٹ، کورنگی اور جوڑیا بازار سے مکمل گاڑیاں براہِ راست لوڈنگ کے لیے دستیاب ہیں۔',
      },
      {
        questionEn: 'Are computerized weighbridge slips mandatory on the Karachi route?',
        questionUr: 'کیا کراچی روٹ پر کمپیوٹرائزڈ کانٹا پرچی دی جاتی ہے؟',
        answerEn:
          'Yes. Computer scale slips are issued right after loading so every vehicle meets Motorway and National Highway weight limits safely.',
        answerUr:
          'جی ہاں، لوڈنگ کے فوراً بعد کمپیوٹرائزڈ کانٹا پرچی حاصل کی جاتی ہے تاکہ موٹروے اور ہائی وے وزن کے قوانین پر پورا اترا جا سکے۔',
      },
      {
        questionEn: 'Which vehicle is best for 20+ tons of steel or machinery from Karachi?',
        questionUr: 'کراچی سے 20+ ٹن لوہے یا مشینری کے لیے کون سی گاڑی بہتر ہے؟',
        answerEn:
          'Our Bedford Heavy Hauler (15 to 28+ tons) is specifically designed for heavy steel girders, industrial plant machinery, and bulk port freight.',
        answerUr:
          '20 ٹن یا اس سے زائد وزنی لوہے، گارڈرز اور مشینری کے لیے ہمارا بیڈفورڈ ہیوی ٹرک (15 تا 28+ ٹن) سب سے بہترین انتخاب ہے۔',
      },
    ],
    relatedSlugs: [
      'full-truckload-services-pakistan',
      'goods-transport-faisalabad-samundri',
      'multan-to-samundri',
      'lahore-to-samundri',
    ],
    expectedText: 'Karachi to Samundri Truck Transport & Heavy Backhaul',
  },
  {
    slug: 'islamabad-to-samundri',
    path: '/islamabad-to-samundri',
    titleEn: 'Islamabad to Samundri Transport',
    titleUr: 'اسلام آباد تا سمندری ٹرک بکنگ اور شفٹنگ',
    metaTitle: 'Islamabad to Samundri Truck Booking | Warraich Goods',
    metaDescription:
      'Safe home shifting & cargo transport from Islamabad to Samundri via M-2 & M-4 Motorways. Book Shahzore & Mazda trucks 24/7. Call 0300-5370443.',
    badgeEn: 'M-2 & M-4 Highway • Shifting & Commercial',
    badgeUr: 'M-2 و M-4 موٹروے • شفٹنگ و کمرشل',
    h1En: 'Islamabad to Samundri Truck Booking & Home Shifting',
    h1Ur: 'اسلام آباد تا سمندری ٹرک بکنگ اور گھریلو شفٹنگ',
    heroSummaryEn:
      'Smooth, rain-protected M-2 and M-4 Motorway transport from Islamabad residential sectors and I-9 / I-10 industrial zones to Samundri, Gojra, and Faisalabad.',
    heroSummaryUr:
      'اسلام آباد کے تمام سیکٹرز اور I-9 / I-10 انڈسٹریل ایریا سے M-2 اور M-4 موٹروے کے ذریعے سمندری، گوجرہ اور فیصل آباد تک محفوظ گھریلو شفٹنگ اور تجارتی مال برداری۔',
    originId: 'islamabad',
    destinationId: 'samundri',
    highwayEn: 'M-2 Islamabad-Lahore & M-4 Pindi Bhattian-Faisalabad Motorway',
    highwayUr: 'M-2 اسلام آباد تا پنڈی بھٹیاں اور M-4 موٹروے',
    transitEn: '4.5 – 5.5 Hours Motorway Transit',
    transitUr: '4.5 تا 5.5 گھنٹے موٹروے سفر',
    distanceEn: '345 km Motorway Corridor',
    distanceUr: '345 کلومیٹر موٹروے کوریڈور',
    image: 'images/cargo-home-shifting-relocation.webp',
    imageAltEn: 'Safe household shifting and commercial freight from Islamabad to Samundri',
    imageAltUr: 'اسلام آباد سے سمندری گھریلو سامان شفٹنگ اور مال برداری',
    shortLinkLabelEn: 'Islamabad to Samundri',
    shortLinkLabelUr: 'اسلام آباد تا سمندری',
    highlightsEn: [
      'Direct pickups across F, G, H, I sectors, DHA, Bahria Town & Chak Shahzad',
      'Clean covered trucks for family furniture, office IT equipment & marble/pipes',
      'Industrial pickup access inside I-9, I-10 & Humak Industrial Zones',
      'Smooth all-motorway drive avoiding bumpy local GT Road traffic',
    ],
    highlightsUr: [
      'سیکٹر F، G، H، I، ڈی ایچ اے، بحریہ ٹاؤن اور چک شہزاد سے براہِ راست پک اپ',
      'گھریلو فرنیچر، دفتری سامان اور کمرشل لوڈ کے لیے صاف و ترپال والی گاڑیاں',
      'I-9، I-10 اور ہمک انڈسٹریل زونز سے بروقت لوڈنگ',
      'مکمل موٹروے روٹ جس سے سامان جھٹکوں اور تاخیر سے محفوظ رہتا ہے',
    ],
    cargoTagsEn: [
      'Complete Home Furniture Shifting',
      'Office Desks, Files & Equipment',
      'I-9 / I-10 Steel, Flour & Factory Stock',
      'Solar Panels & Inverters',
      'Diplomatic & NGO Supplies',
      'Electronic & Packed Consumer Lots',
    ],
    cargoTagsUr: [
      'مکمل گھر کا فرنیچر اور سامان',
      'دفتری میز، کرسیاں اور فائلیں',
      'I-9 اور I-10 فیکٹری و آٹا مل کا مال',
      'سولر پینلز اور انورٹرز',
      'ادارہ جاتی و پروجیکٹ سامان',
      'الیکٹرانکس اور پیکجنگ کارٹن',
    ],
    sections: [
      {
        headingEn: 'Direct Motorway Shifting from Islamabad Sectors to Samundri',
        headingUr: 'اسلام آباد کے سیکٹرز سے سمندری تک موٹروے پر محفوظ شفٹنگ',
        bodyEn: [
          'Relocating a family home or corporate office from Islamabad back to Samundri or Faisalabad requires clean vehicles, punctual morning arrivals, and zero rough handling. Because our route runs continuously along the M-2 and M-4 Motorways via Balkassar, Kallar Kahar, and Pindi Bhattian, fragile wardrobes, glass tables, refrigerators, and office electronics avoid potholed city roads almost entirely.',
          'Our trucks pick up across G-6 through G-13, F-6 through F-11, E-11, I-8, Bahria Enclave, Bahria Town, and DHA Islamabad. A Shahzore pickup handles 1–2 room apartments comfortably, while a Mazda 6-Wheeler carries a full 3-to-5 marla or kanal residence in a single locked-down trip.',
        ],
        bodyUr: [
          'اسلام آباد سے سمندری یا فیصل آباد گھر یا دفتر شفٹ کرتے وقت صاف گاڑی اور جھٹکوں سے پاک سفر سب سے اہم ہوتا ہے۔ ہماری گاڑیاں M-2 اور M-4 موٹروے کے ہموار راستے سے پنڈی بھٹیاں اور فیصل آباد انٹرچینج کے ذریعے براہِ راست سمندری پہنچتی ہیں۔',
          'سیکٹر G، F، E، I، بحریہ ٹاؤن اور ڈی ایچ اے سے چھوٹے گھر کے لیے شہزور اور مکمل گھر کے سامان کے لیے مزدا 6 وہیلر گاڑی فراہم کی جاتی ہے۔',
        ],
      },
      {
        headingEn: 'Commercial Freight from I-9, I-10 & Humak Industrial Areas',
        headingUr: 'I-9، I-10 اور ہمک انڈسٹریل ایریا سے تجارتی مال کی بکنگ',
        bodyEn: [
          'Beyond household moves, Islamabad’s I-9 and I-10 sectors house flour mills, marble yards, steel fabricators, pharmaceuticals, and wholesale distributors sending regular shipments south into Central Punjab. Warraich Goods frequently dispatches return Mazda and Sample Extended trucks back into Samundri, Gojra, and Faisalabad from these industrial blocks.',
          'By pairing outbound agricultural and textile runs to the twin cities with return commercial loads, we offer dependable backhaul pricing without asking you to share space with random roadside cargo.',
        ],
        bodyUr: [
          'گھریلو شفٹنگ کے علاوہ اسلام آباد کے I-9، I-10 اور ہمک انڈسٹریل ایریا میں قائم فلور ملز، ماربل یارڈز، فارما اور ہول سیل ڈسٹری بیوٹرز بھی وسطی پنجاب مال بھیجنے کے لیے ہماری سروس استعمال کرتے ہیں۔',
          'سمندری سے اسلام آباد مال اتار کر آنے والی مزدا اور سیمپل گاڑیاں واپسی پر آپ کا تجارتی لوڈ کم کرائے اور پوری حفاظت کے ساتھ سمندری پہنچاتی ہیں۔',
        ],
      },
      {
        headingEn: 'Weatherproof Tarpaulins, Fixed Rates & Clear Bilty Verification',
        headingUr: 'واٹر پروف ترپال، طے شدہ کرایہ اور بلٹی کی ضمانت',
        bodyEn: [
          'Weather through the Salt Range and Kallar Kahar can shift suddenly from blazing sun to heavy downpours. Every Warraich Goods truck is equipped with heavy double waterproof tarpaulins and cotton or nylon tie-down ropes so beds, cartons, flour bags, and solar panels stay bone-dry.',
          'Before loading begins, freight charges are confirmed upfront with zero hidden toll or highway surprises, and customers receive the driver’s direct mobile number plus official bilty documentation under Warraich Goods Transport Company (NTN: 7779394-1).',
        ],
        bodyUr: [
          'کلر کہار اور موٹروے کے سفر میں اچانک بارش یا دھوپ سے بچاؤ کے لیے ہر گاڑی پر ڈبل واٹر پروف ترپال اور مضبوط رسے باندھے جاتے ہیں تاکہ فرنیچر، سولر پینلز اور تجارتی مال بالکل خشک رہے۔',
          'لوڈنگ سے قبل واضح کرایہ طے کیا جاتا ہے، اور سفر کے دوران ڈرائیور کے ذاتی نمبر و تحریری بلٹی (NTN 7779394-1) کے ساتھ مکمل اطمینان فراہم کیا جاتا ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'How many hours does home shifting take from Islamabad to Samundri?',
        questionUr: 'اسلام آباد سے سمندری گھر کا سامان پہنچنے میں کتنے گھنٹے لگتے ہیں؟',
        answerEn:
          'Driving via M-2 and M-4 Motorways takes around 4.5 to 5.5 hours once loaded, meaning morning pickups normally unload the same afternoon or evening in Samundri.',
        answerUr:
          'M-2 اور M-4 موٹروے کے ذریعے سفر 4.5 سے 5.5 گھنٹوں میں طے ہوتا ہے، اس لیے صبح لوڈ ہونے والا سامان اسی شام سمندری پہنچ جاتا ہے۔',
      },
      {
        questionEn: 'Which truck is recommended for shifting a 3-bedroom home from Islamabad?',
        questionUr: 'اسلام آباد سے 3 بیڈروم گھر شفٹ کرنے کے لیے کون سی گاڑی بہتر ہے؟',
        answerEn:
          'A Mazda 6-Wheeler (14–18 ft body) fits standard 3-bedroom furniture, appliances, and cartons comfortably on a single trip. Small flats can use a Shahzore pickup.',
        answerUr:
          '3 بیڈروم گھر کے مکمل فرنیچر اور سامان کے لیے مزدا 6 وہیلر (14 تا 18 فٹ باڈی) بہترین رہتی ہے جبکہ مختصر سامان شہزور میں آ جاتا ہے۔',
      },
      {
        questionEn: 'Can you collect cargo from Sector I-9 or I-10 factories in Islamabad?',
        questionUr: 'کیا اسلام آباد سیکٹر I-9 یا I-10 فیکٹری سے کمرشل مال اٹھایا جا سکتا ہے؟',
        answerEn:
          'Yes. We collect full commercial loads from I-9, I-10, Humak, and Rawat industrial zones for direct delivery to Samundri and Faisalabad.',
        answerUr:
          'جی ہاں، ہم I-9، I-10، ہمک اور روات انڈسٹریل ایریا سے کمرشل فل لوڈ براہِ راست سمندری اور فیصل آباد لانے کے لیے گاڑیاں فراہم کرتے ہیں۔',
      },
      {
        questionEn: 'Is my furniture covered against rain near Kallar Kahar on M-2?',
        questionUr: 'کیا کلر کہار اور موٹروے پر بارش سے فرنیچر کی حفاظت کا انتظام ہوتا ہے؟',
        answerEn:
          'Yes. Every truck carries thick double waterproof tarpaulins tied securely around the entire load before entering the motorway.',
        answerUr:
          'جی ہاں، موٹروے پر نکلنے سے پہلے ہر گاڑی پر موٹی ڈبل واٹر پروف ترپال اچھی طرح باندھ کر سامان محفوظ کیا جاتا ہے۔',
      },
    ],
    relatedSlugs: [
      'rawalpindi-to-samundri',
      'lahore-to-samundri',
      'peshawar-to-samundri',
      'full-truckload-services-pakistan',
    ],
    expectedText: 'Islamabad to Samundri Truck Booking & Home Shifting',
  },
  {
    slug: 'multan-to-samundri',
    path: '/multan-to-samundri',
    titleEn: 'Multan to Samundri Transport',
    titleUr: 'ملتان تا سمندری زرعی و تجارتی ٹرانسپورٹ',
    metaTitle: 'Multan to Samundri Goods Transport | Warraich Goods',
    metaDescription:
      'Daily Multan & South Punjab to Samundri cargo transport via M-4 Motorway. Book Shahzore, Mazda, Sample & Bedford backhaul trucks. Call 0300-5370443.',
    badgeEn: 'M-4 Direct Link • Agricultural & Industrial',
    badgeUr: 'براہِ راست M-4 روٹ • زرعی و صنعتی کارگو',
    h1En: 'Multan to Samundri Goods Transport & Return Fleet',
    h1Ur: 'ملتان تا سمندری گڈز ٹرانسپورٹ اور واپسی فلیٹ',
    heroSummaryEn:
      'Reliable M-4 Motorway truck booking connecting Multan Industrial Estate, Vehari Road, and South Punjab mandis directly with Samundri, Gojra, and Faisalabad.',
    heroSummaryUr:
      'ملتان انڈسٹریل اسٹیٹ، وہاڑی روڈ اور جنوبی پنجاب کی غلہ منڈیوں سے M-4 موٹروے کے ذریعے سمندری، گوجرہ اور فیصل آباد تک روزانہ تیز رفتار مال برداری سروس۔',
    originId: 'multan',
    destinationId: 'samundri',
    highwayEn: 'M-4 Multan-Khanewal-Gojra Motorway via Toba / Samundri',
    highwayUr: 'M-4 موٹروے براستہ خانیوال، ٹوبہ ٹیک سنگھ و سمندری',
    transitEn: '3.5 – 4.5 Hours Direct',
    transitUr: '3.5 تا 4.5 گھنٹے براہِ راست',
    distanceEn: '235 km Direct South-Central Corridor',
    distanceUr: '235 کلومیٹر براہِ راست کوریڈور',
    image: 'images/cargo-agricultural-produce-grains.webp',
    imageAltEn: 'Agricultural grains, fertilizer, and industrial freight from Multan to Samundri',
    imageAltUr: 'ملتان سے سمندری زرعی اجناس، کھاد اور کمرشل کارگو کی ترسیل',
    shortLinkLabelEn: 'Multan to Samundri',
    shortLinkLabelUr: 'ملتان تا سمندری',
    highlightsEn: [
      'Direct M-4 access from Multan Dry Port, Vehari Chowk & Industrial Estate',
      'Ideal for fertilizer bags, cotton bales, pesticides, animal feed & seasonal crops',
      'Return Mazda, Sample & Bedford trucks serving Southern Punjab weekly schedules',
      'Computerized scale slip & FBR bilty compliance included on every dispatch',
    ],
    highlightsUr: [
      'ملتان ڈرائی پورٹ، وہاڑی چوک اور انڈسٹریل اسٹیٹ سے M-4 تک براہِ راست رسائی',
      'کھاد، روئی کی گانٹھیں، زرعی ادویات، فیڈ اور سیزنل فصلوں کے لیے موزوں',
      'جنوبی پنجاب سے واپسی مزدا، سیمپل اور بیڈفورڈ گاڑیوں کی دستیابی',
      'ہر کھیپ پر کمپیوٹرائزڈ کانٹا پرچی اور تحریری بلٹی ریکارڈ',
    ],
    cargoTagsEn: [
      'Fertilizer Bags & Agri Inputs',
      'Cotton Lint & Textile Bales',
      'Grain, Wheat & Seasonal Produce',
      'Multan Industrial Estate Machinery',
      'FMCG, Flour & Oil Cans',
      'Household & Office Shifting',
    ],
    cargoTagsUr: [
      'کھاد کے تھیلے اور زرعی مداخل',
      'روئی کی گانٹھیں اور کاٹن بیلز',
      'گندم، مکئی اور سیزنل اجناس',
      'ملتان انڈسٹریل اسٹیٹ کا مال',
      'آٹا، آئل اور روزمرہ کمرشل سامان',
      'گھریلو و دفتری سامان شفٹنگ',
    ],
    sections: [
      {
        headingEn: 'Direct M-4 Motorway Link Between Multan & Samundri',
        headingUr: 'ملتان اور سمندری کے درمیان تیز ترین M-4 موٹروے رابطہ',
        bodyEn: [
          'The M-4 Motorway turns Multan and Samundri into close commercial neighbors. Whether cargo moves out of Multan Industrial Estate, Sher Shah, Vehari Chowk, Khanewal Road, or nearby Kabirwala and Bahawalpur belts, our trucks enter M-4 and roll straight up to Gojra and Samundri exits in roughly four hours.',
          'Because Warraich Goods operates from Okara Bypass, Near 466 Chowk, Samundri, our drivers know every mandi gate, cold storage, flour mill, and ginning factory along the Multan-Samundri-Faisalabad belt—cutting out wasted unloading hours and misrouted deliveries.',
        ],
        bodyUr: [
          'M-4 موٹروے نے ملتان اور سمندری کے درمیان تجارتی فاصلہ بے حد کم کر دیا ہے۔ ملتان انڈسٹریل اسٹیٹ، شیر شاہ، وہاڑی چوک، خانیوال روڈ اور قریبی منڈیوں سے ہماری گاڑیاں تقریباً 4 گھنٹوں میں سمندری اور گوجرہ پہنچ جاتی ہیں۔',
          'چونکہ ہمارا ہیڈ آفس سمندری میں واقع ہے، ہمارے ڈرائیورز جنوبی و وسطی پنجاب کی تمام غلہ منڈیوں، کولڈ اسٹوریج اور جننگ ملز کے راستوں سے پوری طرح واقف ہیں۔',
        ],
      },
      {
        headingEn: 'Serving South Punjab Fertilizer, Cotton & Factory Supply Chains',
        headingUr: 'کھاد، کپاس اور فیکٹری سپلائی چین کے لیے مکمل فلیٹ',
        bodyEn: [
          'South Punjab’s agricultural economy generates heavy seasonal tonnage in fertilizer, pesticides, seed sacks, cotton bales, and poultry feed heading north into Samundri, Tandlianwala, Kamalia, and Faisalabad. We match those bulk weights cleanly using 8 to 16 ton Extended Sample trucks and 15 to 28+ ton Bedford haulers, while Mazda 6-Wheelers and Shahzore pickups cover fast mid-size dealer stocks and retail transfers.',
          'Every load stays exclusively dedicated to one booking party so seed varieties, fertilizer bags, and clean food cartons are never contaminated or mixed with unrelated cargo.',
        ],
        bodyUr: [
          'جنوبی پنجاب سے کھاد، بیج، زرعی ادویات، روئی اور پولٹری فیڈ کی بڑی کھیپ سمندری، تاندلیانوالہ، کمالیہ اور فیصل آباد آتی ہے۔ اس بھاری مال کے لیے ہمارے پاس سیمپل (8–16 ٹن) اور بیڈفورڈ (15–28+ ٹن) ٹرک جبکہ درمیانے لوڈ کے لیے مزدا و شہزور دستیاب ہیں۔',
          'سنگل پارٹی بکنگ کی پالیسی کے تحت آپ کے بیج، کھاد یا فوڈ آئٹمز کے ساتھ کسی دوسرے کا مال شامل نہیں کیا جاتا۔',
        ],
      },
      {
        headingEn: 'Accurate Scale Slips, Double Tarpaulins & Direct Driver Phone',
        headingUr: 'درست کانٹا پرچی، ڈبل ترپال اور ڈرائیور سے براہِ راست رابطہ',
        bodyEn: [
          'High temperatures in Multan and sudden monsoon rain across Central Punjab require serious protection for sacks and cartons. Our trucks carry double waterproof tarpaulins and strong binding ropes to lock down every load tightly from Multan to Samundri.',
          'Right after departure, customers receive a verified computer weighbridge slip, official FBR-registered bilty (NTN: 7779394-1), and the driver’s direct mobile number so factory or mandi teams can prepare unloading labor well ahead of arrival.',
        ],
        bodyUr: [
          'ملتان کی شدید گرمی اور پنجاب کے بدلتے موسم میں بوریوں اور کارٹن کی حفاظت کے لیے ہر گاڑی پر ڈبل واٹر پروف ترپال باندھی جاتی ہے۔',
          'روانگی پر کمپیوٹرائزڈ کانٹا پرچی، تحریری بلٹی (NTN 7779394-1) اور ڈرائیور کا نمبر فراہم کر دیا جاتا ہے تاکہ سمندری میں مال اتارنے کا انتظام وقت پر ہو سکے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'How long does it take to haul cargo from Multan to Samundri?',
        questionUr: 'ملتان سے سمندری مال پہنچنے میں کتنا وقت لگتا ہے؟',
        answerEn:
          'Via the M-4 Motorway, a full Shahzore, Mazda, or Sample truck usually completes the Multan to Samundri trip in 3.5 to 4.5 hours.',
        answerUr:
          'M-4 موٹروے کے راستے ملتان سے سمندری گاڑی پہنچنے میں عموماً 3.5 سے 4.5 گھنٹے لگتے ہیں۔',
      },
      {
        questionEn: 'Do you carry bulk fertilizer and cotton bales from Multan to Samundri?',
        questionUr: 'کیا ملتان سے سمندری کھاد اور روئی کی گانٹھوں کا فل لوڈ کیا جاتا ہے؟',
        answerEn:
          'Yes. We book dedicated Mazda, Sample, and Bedford trucks for fertilizer bags, cotton bales, seed, and grain shipments covered with waterproof tarpaulins.',
        answerUr:
          'جی ہاں، کھاد، روئی کی گانٹھوں، بیج اور غلہ کے لیے واٹر پروف ترپال والے مزدا، سیمپل اور بیڈفورڈ ٹرک دستیاب ہیں۔',
      },
      {
        questionEn: 'Can I book a return truck from Multan Industrial Estate or Bahawalpur Road?',
        questionUr: 'کیا ملتان انڈسٹریل اسٹیٹ یا بہاولپور روڈ سے واپسی گاڑی مل سکتی ہے؟',
        answerEn:
          'Yes. Our trucks regularly deliver into Multan and neighboring districts and are available for backhaul loading straight to Samundri and Faisalabad.',
        answerUr:
          'جی ہاں، ملتان اور قریبی اضلاع میں مال اتارنے والی ہماری گاڑیاں سمندری اور فیصل آباد واپسی لوڈ کے لیے بک کی جا سکتی ہیں۔',
      },
      {
        questionEn: 'How do I get a rate quote for Multan to Samundri?',
        questionUr: 'ملتان تا سمندری کرایہ معلوم کرنے کا طریقہ کیا ہے؟',
        answerEn:
          'Call or WhatsApp 0300-5370443 or use our online booking calculator to select Multan as origin and Samundri as destination.',
        answerUr:
          '0300-5370443 پر کال یا واٹس ایپ کریں یا ہمارے آن لائن بکنگ کیلکولیٹر میں ملتان اور سمندری منتخب کر کے کرایہ پوچھیں۔',
      },
    ],
    relatedSlugs: [
      'goods-transport-faisalabad-samundri',
      'karachi-to-samundri',
      'lahore-to-samundri',
      'full-truckload-services-pakistan',
    ],
    expectedText: 'Multan to Samundri Goods Transport & Return Fleet',
  },
  {
    slug: 'rawalpindi-to-samundri',
    path: '/rawalpindi-to-samundri',
    titleEn: 'Rawalpindi to Samundri Transport',
    titleUr: 'راولپنڈی تا سمندری کمرشل ٹرک اور واپسی لوڈ',
    metaTitle: 'Rawalpindi to Samundri Truck Loads | Warraich Goods',
    metaDescription:
      'Book full trucks from Rawalpindi markets, Saddar & Chakri to Samundri via M-2 & M-4. Dedicated Shahzore, Mazda, Sample & Bedford trucks. Call 0300-5370443.',
    badgeEn: 'Potohar Trade Route • Full Truckload',
    badgeUr: 'راولپنڈی تا سمندری • کمرشل فل ٹرک لوڈ',
    h1En: 'Rawalpindi to Samundri Commercial Truck Loads & Shifting',
    h1Ur: 'راولپنڈی تا سمندری کمرشل ٹرک لوڈ اور شفٹنگ سروس',
    heroSummaryEn:
      'Dedicated goods transport and return backhaul vehicles from Rawalpindi Raja Bazar, Pirwadhai, Saddar, and Bahria Town direct to Samundri and Faisalabad.',
    heroSummaryUr:
      'راولپنڈی کے راجہ بازار، پیر ودہائی، صدر، چکلالہ اور بحریہ ٹاؤن سے M-2 و M-4 موٹروے کے ذریعے سمندری اور فیصل آباد تک مخصوص ٹرک بکنگ اور واپسی لوڈ سروس۔',
    originId: 'rawalpindi',
    destinationId: 'samundri',
    highwayEn: 'Thalian / Chakri Interchange via M-2 & M-4 Motorway',
    highwayUr: 'ٹھلیاں / چکری انٹرچینج براستہ M-2 اور M-4 موٹروے',
    transitEn: '4.5 – 5.5 Hours Motorway',
    transitUr: '4.5 تا 5.5 گھنٹے موٹروے',
    distanceEn: '340 km Direct Corridor',
    distanceUr: '340 کلومیٹر براہِ راست کوریڈور',
    image: 'images/fleet-sample-extended.webp',
    imageAltEn: 'Sample extended commercial truck for Rawalpindi to Samundri freight transport',
    imageAltUr: 'راولپنڈی سے سمندری تجارتی کارگو کے لیے سیمپل ایکسٹینڈڈ ٹرک',
    shortLinkLabelEn: 'Rawalpindi to Samundri',
    shortLinkLabelUr: 'راولپنڈی تا سمندری',
    highlightsEn: [
      'Pickups near Pirwadhai, Ganjmandi, Raja Bazar, Rawat, Chakri & Bahria Town Phases',
      'Clean full-truck solutions for commercial stock, military/family transfers & machinery',
      'Regular M-2 return trucks cutting cost vs hiring one-way local Rawalpindi rigs',
      'Upfront pricing, driver mobile number & written bilty under NTN 7779394-1',
    ],
    highlightsUr: [
      'پیر ودہائی، گنج منڈی، راجہ بازار، روات، چکری اور بحریہ ٹاؤن سے پک اپ سہولت',
      'تجارتی اسٹاک، فیملی و سرکاری ٹرانسفرز اور مشینری کے لیے مخصوص گاڑیاں',
      'واپسی موٹروے ٹرکوں کی وجہ سے مقامی کرائے کے مقابلے میں بہتر ریٹ',
      'طے شدہ کرایہ، ڈرائیور موبائل نمبر اور NTN 7779394-1 کے تحت تحریری بلٹی',
    ],
    cargoTagsEn: [
      'Ganjmandi Wholesale Groceries',
      'Family & Armed Forces Transfers',
      'Auto Parts & Hardware Cartons',
      'Commercial Machinery & Generators',
      'Building Materials & Sanitary Ware',
      'Fruit, Timber & Bulk Produce',
    ],
    cargoTagsUr: [
      'گنج منڈی ہول سیل راشن و گھی',
      'فیملی اور سرکاری ملازمین کی شفٹنگ',
      'آٹو پارٹس اور ہارڈ ویئر کارٹن',
      'کمرشل مشینری اور جنریٹرز',
      'سینیٹری و تعمیراتی سامان',
      'پھل، لکڑی اور بلک زرعی مال',
    ],
    sections: [
      {
        headingEn: 'Commercial Freight & Household Transfers Out of Rawalpindi',
        headingUr: 'راولپنڈی سے سمندری کمرشل کارگو اور فیملی ٹرانسفرز',
        bodyEn: [
          'Rawalpindi serves as a busy distribution point connecting Northern Punjab, Kashmir, and Potohar markets with the industrial cities of Central Punjab. Traders around Ganjmandi, Raja Bazar, Pirwadhai, and Rawat regularly ship commercial consignments back south, while families stationed in Chaklala, Saddar, Bahria Town, or DHA often transfer households home to Samundri, Gojra, and Faisalabad.',
          'Warraich Goods Transport Company dispatches dedicated Shahzore pickups, Mazda 6-Wheelers, and Extended Sample trucks across the twin-city ring via Chakri and Thalian interchanges—avoiding congested GT Road bottlenecks and delivering cargo securely along M-2 and M-4.',
        ],
        bodyUr: [
          'راولپنڈی شمالی پنجاب، کشمیر اور پوٹھوہار کے تجارتی مراکز کو وسطی پنجاب سے ملاتا ہے۔ گنج منڈی، راجہ بازار، پیر ودہائی اور روات کے تاجر باقاعدگی سے مال بھیجتے ہیں جبکہ چکلالہ، صدر، بحریہ ٹاؤن اور ڈی ایچ اے سے فیملیز سمندری، گوجرہ اور فیصل آباد شفٹ ہوتی ہیں۔',
          'ہماری گاڑیاں چکری یا ٹھلیاں انٹرچینج کے ذریعے جی ٹی روڈ کے ٹریفک جام سے بچتے ہوئے سیدھا موٹروے پر آتی ہیں اور بروقت سمندری پہنچتی ہیں۔',
        ],
      },
      {
        headingEn: 'Right-Sized Trucks for Congested Wholesale Streets & Open Estates',
        headingUr: 'تنگ بازاروں اور کھلے گوداموں کے لیے موزوں گاڑیاں',
        bodyEn: [
          'Market lanes around Raja Bazar, City Saddar Road, and Bohar Bazar demand compact maneuvering during permitted hours. Our 1-to-3.5 ton Shahzore pickups collect tightly packed boxes, sanitary fittings, and shop inventory quickly before joining main avenues, while 4-to-10 ton Mazda trucks and 8-to-16 ton Sample bodies load directly at spacious warehouses on IJP Road, Pirwadhai, Chakri Road, and Rawat.',
          'Every vehicle carries strictly one client’s consignment—your sealed goods or household belongings are never unloaded halfway or repacked at any intermediate stand.',
        ],
        bodyUr: [
          'راجہ بازار اور بوہر بازار جیسے پرہجوم علاقوں میں لوڈنگ کے لیے ہماری 1 تا 3.5 ٹن شہزور پک اپ نہایت آسانی سے اندر جا کر مال لوڈ کر لیتی ہے، جبکہ آئی جے پی روڈ، پیر ودہائی، چکری اور روات کے بڑے گوداموں کے لیے مزدا اور سیمپل ٹرک دستیاب ہیں۔',
          'آپ کا سامان راستے میں کسی دوسرے اڈے پر اتارا یا بدلا نہیں جاتا بلکہ اسی گاڑی میں آپ کے دروازے تک پہنچتا ہے۔',
        ],
      },
      {
        headingEn: 'Reliable Return Rates, Weighbridge Records & Doorstep Proof',
        headingUr: 'مناسب واپسی کرایہ، کانٹا ریکارڈ اور بروقت وصولی',
        bodyEn: [
          'Because Samundri and Faisalabad trucks regularly deliver agricultural grain, flour, and textile lots to Rawalpindi’s twin-city wholesale markets, return slots frequently open up at attractive backhaul prices. Instead of paying double for an idle one-way return, businesses and transferring families save significantly by booking our returning fleet.',
          'Every dispatch includes strong waterproof tarpaulins, computerized scale slips where required, written bilty under NTN 7779394-1, and direct mobile coordination with the driver from loading gate to final unloading in Samundri.',
        ],
        bodyUr: [
          'سمندری اور فیصل آباد سے غلہ، آٹا اور ٹیکسٹائل لے کر جانے والی ہماری گاڑیاں راولپنڈی سے واپسی پر مناسب بیک ہال ریٹ میں دستیاب ہوتی ہیں جس سے گاہکوں کو کرائے میں نمایاں بچت ہوتی ہے۔',
          'ہر سفر میں ڈبل واٹر پروف ترپال، ضرورت کے مطابق کمپیوٹرائزڈ کانٹا پرچی، تحریری بلٹی اور ڈرائیور سے براہِ راست فون رابطہ شامل ہوتا ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'Can you arrange a truck from Pirwadhai or Raja Bazar to Samundri?',
        questionUr: 'کیا پیر ودہائی یا راجہ بازار سے سمندری کے لیے گاڑی مل سکتی ہے؟',
        answerEn:
          'Yes. We regularly dispatch Shahzore pickups and Mazda trucks for commercial lots around Pirwadhai, IJP Road, Ganjmandi, Raja Bazar, and Rawat back to Samundri.',
        answerUr:
          'جی ہاں، پیر ودہائی، آئی جے پی روڈ، گنج منڈی، راجہ بازار اور روات سے سمندری کے لیے شہزور اور مزدا گاڑیاں باقاعدگی سے بک کی جاتی ہیں۔',
      },
      {
        questionEn: 'How much time does a truck take from Rawalpindi to Samundri?',
        questionUr: 'راولپنڈی سے سمندری تک گاڑی پہنچنے میں کتنا وقت لگتا ہے؟',
        answerEn:
          'Entering via Thalian or Chakri Interchange onto M-2 and M-4 normally brings your dedicated truck to Samundri within 4.5 to 5.5 hours.',
        answerUr:
          'ٹھلیاں یا چکری انٹرچینج کے ذریعے M-2 اور M-4 موٹروے پر سفر عموماً 4.5 سے 5.5 گھنٹوں میں مکمل ہو جاتا ہے۔',
      },
      {
        questionEn: 'Do you support military or government family shifting from Rawalpindi?',
        questionUr: 'کیا راولپنڈی سے سرکاری یا فیملی شفٹنگ کے لیے ٹرک سروس دستیاب ہے؟',
        answerEn:
          'Yes. We provide clean, dedicated tarpaulin-covered Shahzore and Mazda trucks with official bilty receipts for household transfers from Rawalpindi to Samundri and Faisalabad.',
        answerUr:
          'جی ہاں، چکلالہ، صدر، بحریہ ٹاؤن اور ڈی ایچ اے سے سمندری و فیصل آباد فیملی شفٹنگ کے لیے صاف ستھری گاڑیاں مع باقاعدہ بلٹی دستیاب ہیں۔',
      },
      {
        questionEn: 'How can I book a Rawalpindi to Samundri return load today?',
        questionUr: 'راولپنڈی سے سمندری واپسی لوڈ آج بک کرنے کا طریقہ کیا ہے؟',
        answerEn:
          'Call or WhatsApp 0300-5370443 with your loading point in Rawalpindi, estimated weight, and preferred timing for an immediate quote.',
        answerUr:
          'راولپنڈی کی لوڈنگ لوکیشن، اندازاً وزن اور وقت 0300-5370443 پر کال یا واٹس ایپ کر کے فوری کرایہ اور گاڑی کنفرم کریں۔',
      },
    ],
    relatedSlugs: [
      'islamabad-to-samundri',
      'peshawar-to-samundri',
      'lahore-to-samundri',
      'full-truckload-services-pakistan',
    ],
    expectedText: 'Rawalpindi to Samundri Commercial Truck Loads & Shifting',
  },
  {
    slug: 'peshawar-to-samundri',
    path: '/peshawar-to-samundri',
    titleEn: 'Peshawar to Samundri Transport',
    titleUr: 'پشاور تا سمندری گڈز ٹرانسپورٹ اور بیک ہال',
    metaTitle: 'Peshawar to Samundri Truck Transport | Warraich Goods',
    metaDescription:
      'Inter-provincial cargo & shifting from Peshawar to Samundri via M-1, M-2 & M-4 Motorways. Book Mazda, Sample & Bedford trucks 24/7. Call 0300-5370443.',
    badgeEn: 'KP to Punjab Corridor • M-1, M-2 & M-4',
    badgeUr: 'خیبرپختونخوا تا پنجاب • M-1، M-2 اور M-4',
    h1En: 'Peshawar to Samundri Truck Transport & Inter-Provincial Freight',
    h1Ur: 'پشاور تا سمندری ٹرک ٹرانسپورٹ اور بین الصوبائی مال برداری',
    heroSummaryEn:
      'Dependable inter-provincial full truckload transport from Peshawar Ring Road, Hayatabad Industrial Estate, and Karkhano Market back to Samundri, Gojra, and Faisalabad.',
    heroSummaryUr:
      'پشاور رنگ روڈ، حیات آباد انڈسٹریل اسٹیٹ اور کارخانوں مارکیٹ سے M-1، M-2 اور M-4 موٹروے کے ذریعے سمندری، گوجرہ اور فیصل آباد تک محفوظ بین الصوبائی ٹرک سروس۔',
    originId: 'peshawar',
    destinationId: 'samundri',
    highwayEn: 'M-1 Peshawar-Islamabad, M-2 & M-4 Motorways',
    highwayUr: 'M-1 پشاور موٹروے، M-2 اور M-4 موٹروے',
    transitEn: '7 – 8.5 Hours Motorway Express',
    transitUr: '7 تا 8.5 گھنٹے موٹروے ایکسپریس',
    distanceEn: '505 km Inter-Provincial Route',
    distanceUr: '505 کلومیٹر بین الصوبائی کوریڈور',
    image: 'images/cargo-heavy-machinery-steel.webp',
    imageAltEn: 'Heavy machinery, wholesale goods, and freight transport from Peshawar to Samundri',
    imageAltUr: 'پشاور سے سمندری ہیوی مشینری اور تجارتی کارگو کی ترسیل',
    shortLinkLabelEn: 'Peshawar to Samundri',
    shortLinkLabelUr: 'پشاور تا سمندری',
    highlightsEn: [
      'Continuous M-1, M-2 & M-4 motorway link from Peshawar straight into Central Punjab',
      'Pickups from Ring Road Truck Adda, Hayatabad Industrial Estate, Board & Karkhano',
      'Backhaul trucks returning to Samundri after flour, sugar, corn & grain deliveries',
      'Verified bilty receipt, NTN invoicing & driver phone coordination across checkpoints',
    ],
    highlightsUr: [
      'پشاور سے وسطی پنجاب تک مسلسل M-1، M-2 اور M-4 موٹروے کی محفوظ سہولت',
      'رنگ روڈ، حیات آباد انڈسٹریل اسٹیٹ، بورڈ اور کارخانوں مارکیٹ سے لوڈنگ',
      'آٹا، چینی، مکئی اور اجناس پہنچا کر سمندری واپس آنے والی گاڑیوں پر مناسب کرایہ',
      'چیک پوسٹ کلیئرنس کے لیے مکمل تحریری بلٹی، NTN بلنگ اور ڈرائیور سے رابطہ',
    ],
    cargoTagsEn: [
      'Hayatabad Marble, Footwear & Plastics',
      'Tobacco, Dry Fruit & Seasonal Produce',
      'Timber, Hardware & Glass Sheets',
      'Wholesale Electronics & Carpets',
      'Commercial Plant & Industrial Stock',
      'Full House Shifting from KP',
    ],
    cargoTagsUr: [
      'حیات آباد ماربل، پلاسٹک و جوتا فیکٹری مال',
      'تمباکو، خشک میوہ جات اور موسمی پھل',
      'لکڑی، ہارڈ ویئر اور شیشہ کی چادریں',
      'ہول سیل الیکٹرانکس اور قالین',
      'صنعتی پلانٹ و کمرشل اسٹاک',
      'خیبرپختونخوا سے پنجاب گھریلو شفٹنگ',
    ],
    sections: [
      {
        headingEn: 'Smooth KP-to-Punjab Motorway Freight from Peshawar to Samundri',
        headingUr: 'خیبرپختونخوا سے پنجاب موٹروے کے ذریعے محفوظ مال برداری',
        bodyEn: [
          'Connecting Khyber Pakhtunkhwa with Central Punjab’s agricultural and industrial markets requires experienced drivers familiar with Attock bridge crossings, motorway toll corridors, and clean inter-provincial paperwork. Warraich Goods Transport Company dispatches dedicated Mazda 6-Wheelers, Sample Extended chassis trucks, Bedford haulers, and Shahzore pickups cleanly along the M-1, M-2, and M-4 Motorways straight from Peshawar to Samundri.',
          'Rather than shifting cargo from one local loader to another at Attock or Rawalpindi, your load travels untouched inside the exact vehicle booked at your Peshawar loading bay—reaching Samundri, Gojra, or Faisalabad in 7 to 8.5 hours.',
        ],
        bodyUr: [
          'پشاور سے وسطی پنجاب تک بین الصوبائی سفر کے لیے اٹک پل، چیک پوسٹس اور موٹروے کاغذات کی مکمل درستگی بے حد ضروری ہے۔ وڑائچ گڈز ٹرانسپورٹ کمپنی مزدا 6 وہیلر، سیمپل ٹرک، بیڈفورڈ ہیوی اور شہزور پک اپ کے ذریعے M-1، M-2 اور M-4 موٹروے پر براہِ راست ترسیل فراہم کرتی ہے۔',
          'اٹک یا راولپنڈی میں مال اتار کر دوسری گاڑی میں بدلنے کے بجائے آپ کا سامان اسی گاڑی میں محفوظ رہ کر 7 تا 8.5 گھنٹوں میں سمندری پہنچ جاتا ہے۔',
        ],
      },
      {
        headingEn: 'Loading Across Hayatabad, Ring Road & Surrounding KP Markets',
        headingUr: 'حیات آباد، رنگ روڈ اور پشاور کی منڈیوں سے براہِ راست لوڈنگ',
        bodyEn: [
          'We handle pickups across Hayatabad Industrial Estate, Peshawar Ring Road, Tarnab Farm, Charsadda Road, GT Road Chamkani, and neighboring Mardan or Nowshera hubs. Factories ship marble slabs, plastic pipes, pharmaceutical packaging, and wholesale footwear, while agricultural dealers move tobacco, seasonal fruit, and timber lots cleanly toward Central Punjab.',
          'Samundri and Faisalabad trade houses regularly send wheat flour, corn, poultry feed, sugar sacks, and textile fabrics up to KP markets, creating reliable weekly return availability for Peshawar-to-Samundri backhauls.',
        ],
        bodyUr: [
          'ہم حیات آباد انڈسٹریل اسٹیٹ، پشاور رنگ روڈ، ترناب فارم، چارسدہ روڈ، چمکنی اور قریبی مردان و نوشہرہ سے کمرشل لوڈنگ کرتے ہیں۔ حیات آباد کی فیکٹریوں کا ماربل، پلاسٹک، پیکجنگ، تمباکو، لکڑی اور خشک میوہ جات آسانی سے وسطی پنجاب بھیجا جا سکتا ہے۔',
          'سمندری سے پشاور آٹا، مکئی، فیڈ اور کپڑا لے کر جانے والی گاڑیاں واپسی پر مناسب بیک ہال ریٹ پر دستیاب ہوتی ہیں۔',
        ],
      },
      {
        headingEn: 'Verified Check-Point Bilty, Tarpaulin Security & Weighbridge Compliance',
        headingUr: 'تصدیق شدہ بلٹی، واٹر پروف ترپال اور کانٹا پرچی',
        bodyEn: [
          'Inter-provincial transit involves highway weigh stations and routine documentation checks along M-1 and M-2. Every truck carries a properly stamped written bilty under Warraich Goods Transport Company (FBR NTN: 7779394-1), shipper and consignee phone numbers, and computerized scale slips issued after loading.',
          'Double waterproof tarpaulins and industrial tie-downs shield sensitive timber, tobacco, electronics, and household furniture against rain and wind across the Peshawar valley and Salt Range.',
        ],
        bodyUr: [
          'بین الصوبائی سفر میں M-1 اور M-2 موٹروے پر چیکنگ کے لیے کاغذات کا مکمل ہونا ضروری ہے۔ ہماری ہر گاڑی کے پاس NTN 7779394-1 کے تحت تحریری بلٹی، بھیجنے اور وصول کرنے والے کا ریکارڈ اور کمپیوٹرائزڈ کانٹا پرچی موجود ہوتی ہے۔',
          'بارش اور تیز ہوا سے بچاؤ کے لیے ڈبل واٹر پروف ترپال اور مضبوط رسیوں کے ساتھ مال کی حفاظت یقینی بنائی جاتی ہے۔',
        ],
      },
    ],
    faqs: [
      {
        questionEn: 'How long does a truck take from Peshawar to Samundri?',
        questionUr: 'پشاور سے سمندری گاڑی پہنچنے میں کتنا وقت لگتا ہے؟',
        answerEn:
          'Via M-1, M-2, and M-4 Motorways, a dedicated truck typically runs from Peshawar to Samundri in 7 to 8.5 hours.',
        answerUr:
          'M-1، M-2 اور M-4 موٹروے کے راستے پشاور سے سمندری تک گاڑی عموماً 7 سے 8.5 گھنٹوں میں پہنچ جاتی ہے۔',
      },
      {
        questionEn: 'Can you pick up cargo from Hayatabad Industrial Estate or Ring Road?',
        questionUr: 'کیا حیات آباد انڈسٹریل اسٹیٹ یا رنگ روڈ سے مال لوڈ کیا جا سکتا ہے؟',
        answerEn:
          'Yes. We pick up dedicated truckloads from Hayatabad Industrial Estate, Ring Road, Chamkani, and neighboring Mardan/Nowshera routes.',
        answerUr:
          'جی ہاں، حیات آباد انڈسٹریل اسٹیٹ، رنگ روڈ، چمکنی اور مردان و نوشہرہ سے براہِ راست مکمل گاڑی لوڈ کروائی جا سکتی ہے۔',
      },
      {
        questionEn: 'What paperwork is provided for KP to Punjab highway checks?',
        questionUr: 'خیبرپختونخوا سے پنجاب سفر کے لیے کون سے کاغذات دیے جاتے ہیں؟',
        answerEn:
          'Every dispatch includes an official written bilty under NTN 7779394-1, driver verification details, and computerized weighbridge slips when tonnage requires.',
        answerUr:
          'ہر گاڑی کو NTN 7779394-1 کے تحت باقاعدہ تحریری بلٹی، ڈرائیور کی تفصیل اور کمپیوٹرائزڈ کانٹا پرچی فراہم کی جاتی ہے۔',
      },
      {
        questionEn: 'Do you book home shifting from Peshawar back to Samundri?',
        questionUr: 'کیا پشاور سے سمندری گھر کا سامان شفٹ کرنے کی سروس دستیاب ہے؟',
        answerEn:
          'Yes. You can book a dedicated Shahzore pickup or Mazda 6-Wheeler covered with double waterproof tarpaulins for household moves anytime via 0300-5370443.',
        answerUr:
          'جی ہاں، گھریلو سامان کی محفوظ شفٹنگ کے لیے ڈبل ترپال والی شہزور یا مزدا گاڑی کسی بھی وقت 0300-5370443 پر بک کی جا سکتی ہے۔',
      },
    ],
    relatedSlugs: [
      'islamabad-to-samundri',
      'rawalpindi-to-samundri',
      'full-truckload-services-pakistan',
      'goods-transport-faisalabad-samundri',
    ],
    expectedText: 'Peshawar to Samundri Truck Transport & Inter-Provincial Freight',
  },
];

export const CORRIDOR_BY_PATH: Record<string, CorridorSeoEntry> = Object.fromEntries(
  CORRIDOR_SEO_PAGES.map((item) => [item.path, item])
);
