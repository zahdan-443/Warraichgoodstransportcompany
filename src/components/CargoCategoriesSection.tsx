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
  CheckCircle2,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CargoCategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const CargoCategoriesSection: React.FC<CargoCategoriesSectionProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<string>('agri');

  const categories = [
    {
      id: 'agri',
      icon: Wheat,
      titleUrdu: 'زرعی اجناس و اناج (FTL لوڈ)',
      titleEnglish: 'Agricultural Produce & Grains (Full Load)',
      badgeUrdu: 'سمندری و کمالیہ غلہ منڈی اسپیشل',
      descriptionUrdu: 'گندم، چاول، مکئی، آلو، گنا، چارہ، بیج اور کھاد کی بوریوں کا مکمل ٹرک لوڈ (FTL) منڈیوں، فلور ملز اور فیڈ فیکٹریوں تک بلا تعطل ترسیل۔',
      detailsUrdu: [
        'غلہ منڈیوں اور کھیتوں سے براہ راست مکمل گاڑی لوڈنگ',
        'بارش سے مکمل تحفظ کے لیے معیاری ڈبل واٹر پروف ترپال',
        'کمپیوٹرائزڈ کانٹا پرچی کے مطابق وزن کا درست تعین',
        'موزوں گاڑیاں: شہزور، مزدا 6 وہیلر اور سیمپل ٹرک'
      ],
      recommendedTruck: 'مزدا 6 وہیلر (4 تا 10 ٹن) یا شہزور فل لوڈ',
      routeCoverage: 'سمندری، کمالیہ، فیصل آباد، لاہور، کراچی، ساہیوال'
    },
    {
      id: 'textile',
      icon: Layers,
      titleUrdu: 'ٹیکسٹائل، دھاگہ و گارمنٹس (FTL)',
      titleEnglish: 'Textiles, Yarn & Garments (Dedicated)',
      badgeUrdu: 'فیصل آباد و سمندری ٹیکسٹائل کوریڈور',
      descriptionUrdu: 'دھاگہ (Yarn)، کاٹن بیلز، گرے کپڑا، ڈائنگ کیمیکلز اور تیار شدہ گارمنٹس کنٹینر اور جالی باڈی ٹرکس میں 100% خشک اور محفوظ ترسیل۔',
      detailsUrdu: [
        'سیل بند کنٹینر اور کسٹم جالی باڈی ٹرکس دستیاب',
        'دھول، مٹی اور نمی سے 100% محفوظ FTL ٹرانسپورٹ',
        'ٹیکسٹائل ملز اور ایکسپورٹ ہاؤسز کے ساتھ باقاعدہ کنٹریکٹ',
        'موزوں گاڑیاں: مزدا کنٹینر، سیمپل و بیڈفورڈ'
      ],
      recommendedTruck: 'سیمپل ٹرک و مزدا کنٹینر (8 تا 16 ٹن فل لوڈ)',
      routeCoverage: 'فیصل آباد، سمندری، لاہور، کراچی پورٹ، سیالکوٹ'
    },
    {
      id: 'industrial',
      icon: Factory,
      titleUrdu: 'صنعتی خام مال و مشینری (FTL)',
      titleEnglish: 'Industrial Cargo & Machinery (Dedicated FTL)',
      badgeUrdu: 'ہیوی انڈسٹریل فل لوڈ',
      descriptionUrdu: 'صنعتی مشینیں، موٹرز، جنریٹرز، کیمیکل کے ڈرمز، پیویسی پائپ، ہارڈ ویئر اور پیکیجنگ میٹریل کا مکمل وقف شدہ ٹرک۔',
      detailsUrdu: [
        'ہیوی کرین لوڈنگ و ان لوڈنگ کے لیے اوپن باڈی گاڑیاں',
        'سامان کو فکس رکھنے کے لیے مضبوط ٹائی ڈاؤن بیلٹس',
        'نان اسٹاپ پوائنٹ ٹو پوائنٹ ایکسپریس ترسیل',
        'موزوں گاڑیاں: سیمپل ٹرک اور بیڈفورڈ ہیوی ڈیوٹی'
      ],
      recommendedTruck: 'بیڈفورڈ ہیوی ڈیوٹی (15 تا 28+ ٹن) یا سیمپل ٹرک',
      routeCoverage: 'پورے پاکستان کے تمام انڈسٹریل زونز و پورٹس'
    },
    {
      id: 'construction',
      icon: Building2,
      titleUrdu: 'تعمیراتی سامان و لوہا/اسٹیل (FTL)',
      titleEnglish: 'Construction Materials & Steel (Full Load)',
      badgeUrdu: 'بلک ہیوی لوڈنگ',
      descriptionUrdu: 'اسٹیل گارڈرز، سریا، سیمنٹ بوری، ریت، بجری، ٹائلز، ماربل سلیبز اور میگا پراجیکٹ بلڈنگ میٹریل کا فل ٹرک۔',
      detailsUrdu: [
        'انتہائی وزنی اور سخت سامان کے لیے مضبوط فرش والے ہیوی ٹرک',
        'روڈ سیفٹی اور این ایچ اے وزن کے ضوابط کی مکمل پابندی',
        'ڈپو اور تعمیراتی سائیٹ پر براہ راست ان لوڈنگ',
        'موزوں گاڑیاں: بیڈفورڈ 10 وہیلر، سیمپل اور مزدا'
      ],
      recommendedTruck: 'بیڈفورڈ ہیوی ٹرک (20 تا 28+ ٹن فل لوڈ)',
      routeCoverage: 'پنجاب، خیبرپختونخوا، سندھ، بلوچستان پراجیکٹس'
    },
    {
      id: 'household',
      icon: Home,
      titleUrdu: 'گھریلو سامان شفٹنگ (مخصوص گاڑی)',
      titleEnglish: 'Household Relocation (Dedicated Vehicle)',
      badgeUrdu: 'محتاط و مخصوص ٹرانسپورٹ',
      descriptionUrdu: 'گھر کے فرنیچر، الیکٹرانکس اور کراکری کی ایک شہر سے دوسرے شہر محفوظ منتقلی کے لیے صرف آپ کے لیے مخصوص گاڑی۔',
      detailsUrdu: [
        'گاڑی میں صرف اور صرف آپ کے گھر کا سامان ہوگا',
        'سامان کی ٹوٹ پھوٹ سے بچاؤ کے لیے اضافی نگہداشت',
        'فوری اور ڈائریکٹ پوائنٹ ٹو پوائنٹ ڈلیوری',
        'موزوں گاڑیاں: شہزور پک اپ اور مزدا کلوزڈ باڈی'
      ],
      recommendedTruck: 'شہزور (1 تا 3.5 ٹن) یا مزدا 6 وہیلر (فل گاڑی)',
      routeCoverage: 'شہر کے اندر اور تمام بین الصوبائی روٹس'
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
            <span>صنعتی و تجارتی فل ٹرک لوڈ (FTL) سپیشلائزیشن</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
            ہم کس قسم کا سامان مکمل گاڑی (FTL) پر منتقل کرتے ہیں؟
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-urdu">
            زرعی اجناس، ٹیکسٹائل دھاگہ، انڈسٹریل مشینری اور بلک کارگو کے لیے مخصوص وقف ٹرکس
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
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                <span>{cat.titleUrdu}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detailed Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main Column */}
            <div className="lg:col-span-7 space-y-5 text-right">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-semibold font-urdu">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentCategory.badgeUrdu}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-urdu">
                {currentCategory.titleUrdu}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-display">
                {currentCategory.titleEnglish}
              </p>

              <p className="text-slate-200 text-base leading-relaxed font-urdu">
                {currentCategory.descriptionUrdu}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2.5 pt-2">
                {currentCategory.detailsUrdu.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm font-urdu">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#booking"
                  onClick={() => onSelectCategory && onSelectCategory(currentCategory.titleUrdu)}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-lg font-urdu cursor-pointer"
                >
                  <Truck className="w-4 h-4" />
                  <span>اس سامان کے لیے مکمل گاڑی (FTL) بک کریں</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے ${currentCategory.titleUrdu} کے لیے مکمل گاڑی کا ریٹ معلوم کرنا ہے۔`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all font-urdu cursor-pointer"
                >
                  <span>واٹس ایپ FTL ریٹ انکوائری</span>
                </a>
              </div>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-4 text-right">
                <h4 className="text-base font-bold text-amber-400 font-urdu border-b border-slate-700 pb-2">
                  تجویز کردہ FTL گاڑی و تفصیلات
                </h4>

                <div>
                  <span className="text-xs text-slate-400 block font-urdu">موزوں ترین گاڑی (Dedicated Truck):</span>
                  <span className="text-sm font-bold text-white font-urdu mt-0.5 block">
                    {currentCategory.recommendedTruck}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-urdu">اہم تجارتی روٹس (Key FTL Routes):</span>
                  <span className="text-xs font-medium text-slate-300 font-urdu mt-0.5 block leading-relaxed">
                    {currentCategory.routeCoverage}
                  </span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/50 text-xs text-slate-300 font-urdu">
                  🔒 <strong className="text-amber-400">سنگل پارٹی تحفظ:</strong> پوری گاڑی میں صرف آپ کا مال لوڈ ہوگا، کوئی سامان مکس نہیں کیا جائے گا۔
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
