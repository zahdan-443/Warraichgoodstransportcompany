import React from 'react';
import { 
  Phone, 
  Truck, 
  Scale, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const FtlWorkflowSection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].workflow;

  const workflowSteps = [
    {
      stepNumber: '01',
      titleUrdu: t.step1Title,
      titleEnglish: '1. Instant Inquiry & Dedicated Truck Quote',
      descUrdu: t.step1Desc,
      descEnglish: 'Specify cargo type, weight, and terminal points via phone or online form for a fixed transparent dedicated FTL quotation.',
      icon: Phone,
      tagUrdu: '5 منٹ رسپانس',
      tagEnglish: '5-Min Quote'
    },
    {
      stepNumber: '02',
      titleUrdu: t.step2Title,
      titleEnglish: '2. Vehicle Dispatch to Loading Point',
      descUrdu: t.step2Desc,
      descEnglish: 'Shehzore, Mazda, Sample, or Bedford dispatched directly to your warehouse, plant, or grain market for single-party loading.',
      icon: Truck,
      tagUrdu: '100% مخصوص گاڑی',
      tagEnglish: 'Dedicated Truck'
    },
    {
      stepNumber: '03',
      titleUrdu: t.step3Title,
      titleEnglish: '3. Professional Loading & Tarpaulin Protection',
      descUrdu: t.step3Desc,
      descEnglish: 'Cargo is securely loaded, weighed at computerized scale, and lashed with double heavy-duty waterproof tarpaulins.',
      icon: Scale,
      tagUrdu: 'مکمل واٹر پروفنگ',
      tagEnglish: 'Double Tarpaulin'
    },
    {
      stepNumber: '04',
      titleUrdu: t.step4Title,
      titleEnglish: '4. Direct Non-Stop Transit & Handover',
      descUrdu: t.step4Desc,
      descEnglish: 'Direct highway transit to receiver premises with zero depot transfers or handling delays, signed handover on arrival.',
      icon: CheckCircle2,
      tagUrdu: 'زیرو کارگو مکسنگ',
      tagEnglish: 'Zero Cargo Mix'
    }
  ];

  const ftlPillars = [
    {
      icon: Zap,
      titleUrdu: 'براہ راست تیز ترین ترسیل (Non-Stop Transit)',
      titleEnglish: 'Express Non-Stop Direct Transit',
      descUrdu: 'عام پارسل (LTL) کے برعکس، FTL میں گاڑی کسی اور کا مال اٹھانے کے لیے نہیں رکتی۔ لوڈنگ کے بعد گاڑی سیدھی منزل کی طرف روانہ ہوتی ہے۔',
      descEnglish: 'Unlike loose parcel services, our trucks make zero stops for shared consignments. Direct highway speed from pickup to drop-off.'
    },
    {
      icon: Lock,
      titleUrdu: '100% محفوظ — کوئی سامان مکس نہیں ہوتا',
      titleEnglish: '100% Secure — Zero Cargo Mixing',
      descUrdu: 'پوری گاڑی میں صرف اور صرف آپ کا مال لوڈ ہوتا ہے۔ کسی دوسرے گاہک کا سامان ساتھ نہ ہونے کی وجہ سے گمشدگی یا ٹوٹ پھوٹ کا خطرہ صفر ہے۔',
      descEnglish: 'Entire cargo hold reserved exclusively for your goods. Zero loss, contamination, or scratching from other shippers.'
    },
    {
      icon: ShieldCheck,
      titleUrdu: 'گوداموں میں سامان کی بار بار ان لوڈنگ نہیں',
      titleEnglish: 'No Multi-Depot Rehandling',
      descUrdu: 'LTL سروسز میں سامان کو بار بار مختلف گوداموں میں منتقل کیا جاتا ہے جس سے نقصان ہوتا ہے۔ FTL میں گاڑی لوڈ ہو کر سیدھی ان لوڈنگ پوائنٹ پر ہی کھلتی ہے۔',
      descEnglish: 'Goods are loaded once and sealed until arrival at final warehouse, avoiding rough re-handling at intermediary hubs.'
    },
    {
      icon: Clock,
      titleUrdu: 'آپ کی مرضی کا شیڈول اور ٹائمنگ',
      titleEnglish: 'Your Custom Dispatch Schedule',
      descUrdu: 'گاڑی کب لوڈ ہونی ہے اور کب پہنچنی ہے، یہ وقت آپ اپنی کاروباری ضرورت کے مطابق طے کرتے ہیں۔ 24 گھنٹے سروس دستیاب ہے۔',
      descEnglish: 'Truck departure and arrival align exactly with your manufacturing and warehouse operation timings 24/7.'
    }
  ];

  return (
    <section id="ftl-workflow" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          {workflowSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/50 rounded-3xl p-6 relative transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400 font-mono">
                      {s.stepNumber}
                    </span>
                    <span className="bg-slate-900 text-amber-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full font-urdu">
                      {language === 'ur' ? s.tagUrdu : s.tagEnglish}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-urdu mb-1">
                    {language === 'ur' ? s.titleUrdu : s.titleEnglish}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                    {language === 'ur' ? s.descUrdu : s.descEnglish}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FTL Core Advantages vs Loose Cargo Notice Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold font-urdu mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? 'کاروباری اداروں اور فیکٹریوں کے لیے بہترین انتخاب' : 'Best Choice for Commercial Shippers'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-urdu">
                {language === 'ur' ? 'فل ٹرک لوڈ (FTL) کے اہم فوائد' : 'Core Dedicated Full Truckload (FTL) Advantages'}
              </h3>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 text-xs text-amber-300 max-w-md font-urdu">
              ⚠️ <strong className="text-amber-400">{language === 'ur' ? 'واضح پالیسی:' : 'Clear Policy:'}</strong> {language === 'ur' ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی لوز کارگو / پارسل (LTL) بک نہیں کرتی۔ ہماری تمام گاڑیاں سنگل پارٹی کے مکمل لوڈ کے لیے وقف ہوتی ہیں۔' : 'Warraich Goods strictly does NOT accept loose parcels or mixed LTL cargo. All fleet trucks are 100% reserved for single-shipper full loads.'}
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            {ftlPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white font-urdu">
                      {language === 'ur' ? p.titleUrdu : p.titleEnglish}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                      {language === 'ur' ? p.descUrdu : p.descEnglish}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct CTA */}
          <div className={`mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-urdu ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <span className="text-slate-400">
              {language === 'ur' ? 'کیا آپ کو فیکٹری خام مال، زرعی غلہ یا ہیوی سامان کے لیے مکمل گاڑی چاہیے؟' : 'Need dedicated freight haulage for factory raw material, agricultural grains, or heavy cargo?'}
            </span>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition cursor-pointer text-sm font-urdu shadow-lg"
              aria-label={`Book truck now at ${COMPANY_INFO.phone1}`}
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{language === 'ur' ? `ابھی گاڑی بک کریں (${COMPANY_INFO.phone1})` : `Book Truck Now (${COMPANY_INFO.phone1})`}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
