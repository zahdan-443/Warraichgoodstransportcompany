import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Wheat, 
  Layers, 
  Factory, 
  Building2, 
  Home, 
  ShieldCheck, 
  Truck, 
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CargoCategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const CargoCategoriesSection: React.FC<CargoCategoriesSectionProps> = ({ onSelectCategory }) => {
  const { language, translations } = useLanguage();
  const t = translations[language].cargo;

  const categories = [
    {
      id: 'agri',
      icon: Wheat,
      shortTitleUrdu: 'زرعی اجناس',
      shortTitleEnglish: 'Agriculture',
      titleUrdu: 'زرعی اجناس و اناج (FTL لوڈ)',
      titleEnglish: 'Agricultural Produce & Grains (Full Load)',
      badgeUrdu: 'سمندری بائی پاس و کمالیہ رجانہ روڈ اسپیشل',
      badgeEnglish: 'Agricultural Freight Hub',
      descriptionUrdu: 'گندم، چاول، مکئی، آلو، گنا، چارہ، بیج اور کھاد کی بوریوں کا مکمل ٹرک لوڈ (FTL)۔ سمندری اور کمالیہ سے ملک بھر کی غلہ منڈیوں، فلور ملز اور فیڈ فیکٹریوں تک بلا تعطل نان اسٹاپ ترسیل۔',
      descriptionEnglish: 'Dedicated full truckload freight for wheat, corn, rice, potatoes, sugar crops, seeds, and fertilizer bags with computerized weighbridge slips from Samundri and Kamalia.',
      detailsUrdu: [
        'سمندری غلہ منڈی اور کمالیہ زرعی بیلٹ سے براہ راست فل ٹرک لوڈنگ',
        'بارش سے مکمل تحفظ کے لیے معیاری ڈبل واٹر پروف ترپال کورنگ',
        'کمپیوٹرائزڈ کانٹا پرچی کے مطابق وزن کا 100% درست تعین',
        'موزوں گاڑیاں: شہزور، مزدا 6 وہیلر اور سیمپل ٹرک'
      ],
      detailsEnglish: [
        'Direct single-party loading from farms, wholesale grain markets, and sugar mills',
        'Standard double waterproof PVC tarpaulins for complete rain protection',
        'Verified computerized weighbridge scale slips with zero weight discrepancy',
        'Recommended trucks: Hyundai Shehzore, Mazda 6-wheeler, and Sample truck'
      ],
      recommendedTruck: 'مزدا 6 وہیلر (4 تا 10 ٹن) یا شہزور فل لوڈ',
      recommendedTruckEn: 'Mazda 6 Wheeler (4 to 10 Tons) or Shehzore Full Load',
      routeCoverage: 'سمندری، کمالیہ، فیصل آباد، لاہور، کراچی، ساہیوال',
      routeCoverageEn: 'Samundri, Kamalia, Faisalabad, Lahore, Karachi, Sahiwal',
      image: './images/agricultural-freight.webp'
    },
    {
      id: 'textile',
      icon: Layers,
      shortTitleUrdu: 'ٹیکسٹائل',
      shortTitleEnglish: 'Textiles',
      titleUrdu: 'ٹیکسٹائل، دھاگہ و گارمنٹس (FTL)',
      titleEnglish: 'Textiles, Yarn & Garments (Dedicated)',
      badgeUrdu: 'FTL لاجسٹکس سروس فیصل آباد ریجن',
      badgeEnglish: 'FTL Logistics Service Faisalabad Region',
      descriptionUrdu: 'دھاگہ (Yarn)، کاٹن بیلز، گرے کپڑا، ڈائنگ کیمیکلز اور تیار شدہ گارمنٹس۔ فیصل آباد ریجن، سمندری اور کمالیہ ٹیکسٹائل کوریڈور کے لیے کنٹینر اور جالی باڈی ٹرکس میں 100% خشک اور محفوظ ترسیل۔',
      descriptionEnglish: 'Dedicated FTL freight logistics for yarn spools, cotton bales, grey fabric, dyeing chemicals, and export garments across the Samundri and Faisalabad industrial network.',
      detailsUrdu: [
        'سیل بند کنٹینر اور کسٹم جالی باڈی ٹرکس دستیاب',
        'دھول، مٹی اور نمی سے 100% محفوظ FTL ٹرانسپورٹ',
        'ٹیکسٹائل ملز اور ایکسپورٹ ہاؤسز کے ساتھ باقاعدہ کنٹریکٹ',
        'موزوں گاڑیاں: مزدا کنٹینر، سیمپل و بیڈفورڈ'
      ],
      detailsEnglish: [
        'Sealed container boxes and customized ventilated mesh bodies available',
        '100% weather and dustproof protection for delicate textile fabrics',
        'Formal long-term logistics agreements with spinning and textile mills',
        'Recommended trucks: Mazda Container, Sample truck, and Bedford'
      ],
      recommendedTruck: 'سیمپل ٹرک و مزدا کنٹینر (8 تا 16 ٹن فل لوڈ)',
      recommendedTruckEn: 'Sample Truck & Mazda Container (8 to 16 Tons FTL)',
      routeCoverage: 'فیصل آباد، سمندری، لاہور، کراچی پورٹ، سیالکوٹ',
      routeCoverageEn: 'Faisalabad, Samundri, Lahore, Karachi Port, Sialkot',
      image: './images/factory-warehouse.webp'
    },
    {
      id: 'industrial',
      icon: Factory,
      shortTitleUrdu: 'صنعتی',
      shortTitleEnglish: 'Industrial',
      titleUrdu: 'صنعتی خام مال و مشینری (FTL)',
      titleEnglish: 'Industrial Cargo & Machinery (Dedicated FTL)',
      badgeUrdu: 'ٹرک بکنگ / ٹریلر ٹرانسپورٹ سمندری',
      badgeEnglish: 'Truck Booking / Trailer Transport Samundri',
      descriptionUrdu: 'صنعتی مشینیں، موٹرز، جنریٹرز، کیمیکل کے ڈرمز، پیویسی پائپ اور فیکٹری خام مال۔ سمندری بائی پاس ٹرانسپورٹ کمپنی اور کمالیہ رجانہ روڈ گڈز ٹرانسپورٹ سے ملک بھر کے صنعتی علاقوں کے لیے فوری فل ٹرک بکنگ۔',
      descriptionEnglish: 'Direct commercial truck booking for industrial machinery, heavy generators, chemical drums, PVC pipes, hardware, and factory supplies connecting Samundri and Kamalia.',
      detailsUrdu: [
        'ہیوی کرین لوڈنگ و ان لوڈنگ کے لیے اوپن باڈی گاڑیاں',
        'سامان کو فکس رکھنے کے لیے مضبوط ٹائی ڈاؤن بیلٹس',
        'نان اسٹاپ پوائنٹ ٹو پوائنٹ ایکسپریس ترسیل',
        'موزوں گاڑیاں: سیمپل ٹرک اور بیڈفورڈ ہیوی ڈیوٹی'
      ],
      detailsEnglish: [
        'Open flatbed bodies suited for crane and forklift top/side loading',
        'Heavy-duty industrial tie-down ratchet straps preventing shift',
        'Direct highway express transit with zero intermediate stops',
        'Recommended trucks: Sample Truck and Bedford Heavy Duty'
      ],
      recommendedTruck: 'بیڈفورڈ ہیوی ڈیوٹی (15 تا 28+ ٹن) یا سیمپل ٹرک',
      recommendedTruckEn: 'Bedford Heavy Duty (15 to 28+ Tons) or Sample Truck',
      routeCoverage: 'پورے پاکستان کے تمام انڈسٹریل زونز و پورٹس',
      routeCoverageEn: 'All Special Economic Zones, Ports, and Industrial Estates',
      image: './images/factory-warehouse.webp'
    },
    {
      id: 'construction',
      icon: Building2,
      shortTitleUrdu: 'تعمیراتی',
      shortTitleEnglish: 'Construction',
      titleUrdu: 'تعمیراتی سامان و لوہا/اسٹیل (FTL)',
      titleEnglish: 'Construction Materials & Steel (Full Load)',
      badgeUrdu: 'سمندری بائی پاس ٹرانسپورٹ کمپنی',
      badgeEnglish: 'Samundri Bypass Transport Company',
      descriptionUrdu: 'اسٹیل گارڈرز، سریا، سیمنٹ بوری، ریت، بجری، ٹائلز، ماربل سلیبز اور میگا پراجیکٹ بلڈنگ میٹریل۔ سمندری اور کمالیہ سے ہیوی بیڈفورڈ و ٹریلر ٹرانسپورٹ کی 24 گھنٹے فراہمی۔',
      descriptionEnglish: 'Heavy haulage transport for reinforced steel bars, girders, cement bags, tiles, marble slabs, and infrastructure building materials across Punjab and nationwide.',
      detailsUrdu: [
        'انتہائی وزنی اور سخت سامان کے لیے مضبوط فرش والے ہیوی ٹرک',
        'روڈ سیفٹی اور این ایچ اے وزن کے ضوابط کی مکمل پابندی',
        'ڈپو اور تعمیراتی سائیٹ پر براہ راست ان لوڈنگ',
        'موزوں گاڑیاں: بیڈفورڈ 10 وہیلر، سیمپل اور مزدا'
      ],
      detailsEnglish: [
        'Heavy reinforced floors designed for ultra-heavy steel and masonry loads',
        'Full compliance with National Highway Authority axle load guidelines',
        'Direct unloading at project depots and on-site construction yards',
        'Recommended trucks: Bedford 10-wheeler, Sample, and Mazda'
      ],
      recommendedTruck: 'بیڈفورڈ ہیوی ٹرک (20 تا 28+ ٹن فل لوڈ)',
      recommendedTruckEn: 'Bedford Heavy Truck (20 to 28+ Tons Full Load)',
      routeCoverage: 'پنجاب، خیبرپختونخوا، سندھ، بلوچستان پراجیکٹس',
      routeCoverageEn: 'Punjab, KPK, Sindh, Balochistan Mega Projects',
      image: './images/factory-warehouse.webp'
    },
    {
      id: 'household',
      icon: Home,
      shortTitleUrdu: 'گھریلو',
      shortTitleEnglish: 'Household',
      titleUrdu: 'گھریلو سامان شفٹنگ (مخصوص گاڑی)',
      titleEnglish: 'Household Relocation (Dedicated Vehicle)',
      badgeUrdu: 'محفوظ گھریلو و دفتری شفٹنگ',
      badgeEnglish: 'Dedicated Relocation Service',
      descriptionUrdu: 'گھر کے فرنیچر، الیکٹرانکس اور کراکری کی ایک شہر سے دوسرے شہر محفوظ منتقلی۔ سمندری، کمالیہ اور فیصل آباد سے پورے پاکستان کے لیے 100% مخصوص سنگل پارٹی گاڑی۔',
      descriptionEnglish: 'Premier intercity household furniture, electronics, and delicate goods relocation from Samundri and Kamalia with dedicated single-party truck assignment.',
      detailsUrdu: [
        'گاڑی میں صرف اور صرف آپ کے گھر کا سامان ہوگا',
        'سامان کی ٹوٹ پھوٹ سے بچاؤ کے لیے اضافی نگہداشت',
        'فوری اور ڈائریکٹ پوائنٹ ٹو پوائنٹ ڈلیوری',
        'موزوں گاڑیاں: شہزور پک اپ اور مزدا کلوزڈ باڈی'
      ],
      detailsEnglish: [
        'Truck exclusively carries your belongings with zero mixed cargo',
        'Extra cushioning and protective strapping against scratches',
        'Immediate direct transit from current residence to new home',
        'Recommended trucks: Hyundai Shehzore pickup and Mazda closed body'
      ],
      recommendedTruck: 'شہزور (1 تا 3.5 ٹن) یا مزدا 6 وہیلر (فل گاڑی)',
      recommendedTruckEn: 'Shehzore (1 to 3.5 Tons) or Mazda 6-Wheeler (FTL)',
      routeCoverage: 'شہر کے اندر اور تمام بین الصوبائی روٹس',
      routeCoverageEn: 'Intra-city and All Interprovincial Routes',
      image: './images/cargo-safety.webp'
    }
  ];

  const getCategoryBadgeClass = (_id: string) => {
    return 'bg-blue-50 text-blue-800 border-blue-200';
  };

  return (
    <section id="cargo" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
            <Package className="w-4 h-4 text-blue-700" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* All 5 Categories Stacked Vertically as Distinct Detailed Cards */}
        <div className="space-y-8 sm:space-y-12">
          {categories.map((category) => {
            const categoryTitle = language === 'ur' ? category.titleUrdu : category.titleEnglish;
            const categoryBadge = language === 'ur' ? category.badgeUrdu : category.badgeEnglish;
            const categorySubtitle = language === 'ur' ? category.titleEnglish : category.titleUrdu;
            const categoryDescription = language === 'ur' ? category.descriptionUrdu : category.descriptionEnglish;
            const detailsList = language === 'ur' ? category.detailsUrdu : category.detailsEnglish;
            const recommendedTruck = language === 'ur' ? category.recommendedTruck : category.recommendedTruckEn;
            const routeCoverage = language === 'ur' ? category.routeCoverage : category.routeCoverageEn;

            return (
              <div 
                key={category.id}
                id={`cargo-card-${category.id}`}
                className="bg-white text-slate-900 rounded-xl p-5 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Main Column */}
                  <div className={`lg:col-span-7 space-y-4 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-flex items-center gap-2 border px-3 py-1 rounded-lg text-xs font-semibold font-urdu ${getCategoryBadgeClass(category.id)}`}>
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{categoryBadge}</span>
                    </div>

                    {/* Accessibility & SEO Heading 3 for each Category */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-urdu">
                      {categoryTitle}
                    </h3>

                    <p className="text-xs text-slate-500 font-mono">
                      {categorySubtitle}
                    </p>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-urdu">
                      {categoryDescription}
                    </p>

                    {/* Bullet Features */}
                    <div className="space-y-2 pt-1">
                      {detailsList.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-urdu">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link
                        to="/booking"
                        state={{ goodsType: categoryTitle }}
                        onClick={() => onSelectCategory && onSelectCategory(categoryTitle)}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm hover:shadow-md font-urdu cursor-pointer min-h-[44px]"
                      >
                        <Truck className="w-4 h-4 text-white" />
                        <span>{t.bookCategoryBtn}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    {/* Category Visual Image Preview */}
                    <div className="relative rounded-lg overflow-hidden shadow-sm border border-slate-200 h-44">
                      <img 
                        src={category.image}
                        alt={categoryTitle}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.parentElement?.classList.add('hidden');
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                        <span className="text-white text-xs font-semibold font-urdu bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm">
                          {categoryTitle}
                        </span>
                      </div>
                    </div>

                    <div className={`bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-3.5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                      <p className="text-sm font-bold text-blue-950 font-urdu border-b border-slate-200 pb-2">
                        {language === 'ur' ? 'تجویز کردہ FTL گاڑی و تفصیلات' : 'Recommended Truck & Route Coverage'}
                      </p>

                      <div>
                        <span className="text-xs text-slate-500 block font-urdu">
                          {language === 'ur' ? 'موزوں ترین گاڑی (Dedicated Truck):' : 'Ideal Vehicle Class:'}
                        </span>
                        <span className="text-sm font-bold text-slate-900 font-urdu mt-0.5 block">
                          {recommendedTruck}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs text-slate-500 block font-urdu">
                          {language === 'ur' ? 'اہم تجارتی روٹس (Key FTL Routes):' : 'Key Nationwide Haulage Routes:'}
                        </span>
                        <span className="text-xs font-medium text-slate-700 font-urdu mt-0.5 block leading-relaxed">
                          {routeCoverage}
                        </span>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 font-urdu">
                        🔒 <strong className="text-amber-800">{language === 'ur' ? 'سنگل پارٹی تحفظ:' : 'Single-Party Guarantee:'}</strong> {language === 'ur' ? 'پوری گاڑی میں صرف آپ کا مال لوڈ ہوگا، کوئی سامان مکس نہیں کیا جائے گا۔' : 'The entire vehicle is reserved for your goods only with zero cargo mixing.'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
