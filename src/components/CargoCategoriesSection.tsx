import React, { useState } from 'react';
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
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface CargoCategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const CargoCategoriesSection: React.FC<CargoCategoriesSectionProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<string>('agri');
  const { language, translations } = useLanguage();
  const t = translations[language].cargo;

  const categories = [
    {
      id: 'agri',
      icon: Wheat,
      titleUrdu: 'زرعی اجناس و اناج (FTL لوڈ)',
      titleEnglish: 'Agricultural Produce & Grains (Full Load)',
      badgeUrdu: 'سمندری و کمالیہ غلہ منڈی اسپیشل',
      badgeEnglish: 'Samundri & Kamalia Grain Market Special',
      descriptionUrdu: 'گندم، چاول، مکئی، آلو، گنا، چارہ، بیج اور کھاد کی بوریوں کا مکمل ٹرک لوڈ (FTL) منڈیوں، فلور ملز اور فیڈ فیکٹریوں تک بلا تعطل ترسیل۔',
      descriptionEnglish: 'Dedicated full truckload transport for wheat, rice, corn, potatoes, fodder, seeds, and fertilizer bags to flour mills and feed factories.',
      detailsUrdu: [
        'غلہ منڈیوں اور کھیتوں سے براہ راست مکمل گاڑی لوڈنگ',
        'بارش سے مکمل تحفظ کے لیے معیاری ڈبل واٹر پروف ترپال',
        'کمپیوٹرائزڈ کانٹا پرچی کے مطابق وزن کا درست تعین',
        'موزوں گاڑیاں: شہزور، مزدا 6 وہیلر اور سیمپل ٹرک'
      ],
      detailsEnglish: [
        'Direct single-party loading from farms and wholesale grain markets',
        'Standard double waterproof PVC tarpaulins for complete rain protection',
        'Verified computerized weighbridge scale slips with zero weight discrepancy',
        'Recommended trucks: Hyundai Shehzore, Mazda 6-wheeler, and Sample truck'
      ],
      recommendedTruck: 'مزدا 6 وہیلر (4 تا 10 ٹن) یا شہزور فل لوڈ',
      recommendedTruckEn: 'Mazda 6 Wheeler (4 to 10 Tons) or Shehzore Full Load',
      routeCoverage: 'سمندری، کمالیہ، فیصل آباد، لاہور، کراچی، ساہیوال',
      routeCoverageEn: 'Samundri, Kamalia, Faisalabad, Lahore, Karachi, Sahiwal'
    },
    {
      id: 'textile',
      icon: Layers,
      titleUrdu: 'ٹیکسٹائل، دھاگہ و گارمنٹس (FTL)',
      titleEnglish: 'Textiles, Yarn & Garments (Dedicated)',
      badgeUrdu: 'فیصل آباد و سمندری ٹیکسٹائل کوریڈور',
      badgeEnglish: 'Faisalabad & Samundri Textile Corridor',
      descriptionUrdu: 'دھاگہ (Yarn)، کاٹن بیلز، گرے کپڑا، ڈائنگ کیمیکلز اور تیار شدہ گارمنٹس کنٹینر اور جالی باڈی ٹرکس میں 100% خشک اور محفوظ ترسیل۔',
      descriptionEnglish: 'Yarn spools, cotton bales, grey fabric, dyeing chemicals, and export garments hauled in containerized and mesh trucks with 100% moisture protection.',
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
      routeCoverageEn: 'Faisalabad, Samundri, Lahore, Karachi Port, Sialkot'
    },
    {
      id: 'industrial',
      icon: Factory,
      titleUrdu: 'صنعتی خام مال و مشینری (FTL)',
      titleEnglish: 'Industrial Cargo & Machinery (Dedicated FTL)',
      badgeUrdu: 'ہیوی انڈسٹریل فل لوڈ',
      badgeEnglish: 'Heavy Industrial Dedicated Load',
      descriptionUrdu: 'صنعتی مشینیں، موٹرز، جنریٹرز، کیمیکل کے ڈرمز، پیویسی پائپ، ہارڈ ویئر اور پیکیجنگ میٹریل کا مکمل وقف شدہ ٹرک۔',
      descriptionEnglish: 'Industrial plant machinery, generators, chemical drums, PVC pipes, hardware, and manufacturing raw material transport.',
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
      routeCoverageEn: 'All Special Economic Zones, Ports, and Industrial Estates'
    },
    {
      id: 'construction',
      icon: Building2,
      titleUrdu: 'تعمیراتی سامان و لوہا/اسٹیل (FTL)',
      titleEnglish: 'Construction Materials & Steel (Full Load)',
      badgeUrdu: 'بلک ہیوی لوڈنگ',
      badgeEnglish: 'Bulk Heavy Construction Haulage',
      descriptionUrdu: 'اسٹیل گارڈرز، سریا، سیمنٹ بوری، ریت، بجری، ٹائلز، ماربل سلیبز اور میگا پراجیکٹ بلڈنگ میٹریل کا فل ٹرک۔',
      descriptionEnglish: 'Reinforced steel bars, girders, cement bags, tiles, marble slabs, and infrastructure building materials.',
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
      routeCoverageEn: 'Punjab, KPK, Sindh, Balochistan Mega Projects'
    },
    {
      id: 'household',
      icon: Home,
      titleUrdu: 'گھریلو سامان شفٹنگ (مخصوص گاڑی)',
      titleEnglish: 'Household Relocation (Dedicated Vehicle)',
      badgeUrdu: 'محتاط و مخصوص ٹرانسپورٹ',
      badgeEnglish: 'Careful & Dedicated Relocation',
      descriptionUrdu: 'گھر کے فرنیچر، الیکٹرانکس اور کراکری کی ایک شہر سے دوسرے شہر محفوظ منتقلی کے لیے صرف آپ کے لیے مخصوص گاڑی۔',
      descriptionEnglish: 'Intercity household furniture, electronics, and delicate goods relocation with dedicated truck assignment.',
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
      routeCoverageEn: 'Intra-city and All Interprovincial Routes'
    }
  ];

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="cargo" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <Package className="w-4 h-4 text-blue-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-urdu ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-md border border-slate-800 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
                aria-pressed={isActive}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                <span>{language === 'ur' ? cat.titleUrdu : cat.titleEnglish}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detailed Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Column */}
            <div className={`lg:col-span-7 space-y-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-semibold font-urdu">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'ur' ? currentCategory.badgeUrdu : currentCategory.badgeEnglish}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-urdu">
                {language === 'ur' ? currentCategory.titleUrdu : currentCategory.titleEnglish}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-display">
                {language === 'ur' ? currentCategory.titleEnglish : currentCategory.titleUrdu}
              </p>

              <p className="text-slate-200 text-base leading-relaxed font-urdu">
                {language === 'ur' ? currentCategory.descriptionUrdu : currentCategory.descriptionEnglish}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2.5 pt-2">
                {(language === 'ur' ? currentCategory.detailsUrdu : currentCategory.detailsEnglish).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm font-urdu">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#booking"
                  onClick={() => onSelectCategory && onSelectCategory(language === 'ur' ? currentCategory.titleUrdu : currentCategory.titleEnglish)}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-lg font-urdu cursor-pointer"
                >
                  <Truck className="w-4 h-4" />
                  <span>{t.bookCategoryBtn}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے ${currentCategory.titleUrdu} کے لیے مکمل گاڑی کا ریٹ معلوم کرنا ہے۔`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all font-urdu cursor-pointer"
                >
                  <span>{language === 'ur' ? 'واٹس ایپ FTL ریٹ انکوائری' : 'Inquire on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className={`bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-4 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                <h4 className="text-base font-bold text-amber-400 font-urdu border-b border-slate-700 pb-2">
                  {language === 'ur' ? 'تجویز کردہ FTL گاڑی و تفصیلات' : 'Recommended Truck & Route Coverage'}
                </h4>

                <div>
                  <span className="text-xs text-slate-400 block font-urdu">
                    {language === 'ur' ? 'موزوں ترین گاڑی (Dedicated Truck):' : 'Ideal Vehicle Class:'}
                  </span>
                  <span className="text-sm font-bold text-white font-urdu mt-0.5 block">
                    {language === 'ur' ? currentCategory.recommendedTruck : currentCategory.recommendedTruckEn}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-urdu">
                    {language === 'ur' ? 'اہم تجارتی روٹس (Key FTL Routes):' : 'Key Nationwide Haulage Routes:'}
                  </span>
                  <span className="text-xs font-medium text-slate-300 font-urdu mt-0.5 block leading-relaxed">
                    {language === 'ur' ? currentCategory.routeCoverage : currentCategory.routeCoverageEn}
                  </span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/50 text-xs text-slate-300 font-urdu">
                  🔒 <strong className="text-amber-400">{language === 'ur' ? 'سنگل پارٹی تحفظ:' : 'Single-Party Guarantee:'}</strong> {language === 'ur' ? 'پوری گاڑی میں صرف آپ کا مال لوڈ ہوگا، کوئی سامان مکس نہیں کیا جائے گا۔' : 'The entire vehicle is reserved for your goods only with zero cargo mixing.'}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
