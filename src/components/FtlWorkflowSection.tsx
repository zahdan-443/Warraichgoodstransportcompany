import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';

export const FtlWorkflowSection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].workflow;

  const workflowSteps = [
    {
      stepNumber: '01',
      titleUrdu: t.step1Title,
      titleEnglish: '1. Fast Quote & Booking',
      descUrdu: t.step1Desc,
      descEnglish: 'Call or message us with your pickup city, destination, and load details to get a clear upfront rate.',
      tagUrdu: '5 منٹ رسپانس',
      tagEnglish: 'Fast Quote',
      borderColor: 'border-blue-200 hover:border-blue-400',
      numColor: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      stepNumber: '02',
      titleUrdu: t.step2Title,
      titleEnglish: '2. Truck Arrives for Loading',
      descUrdu: t.step2Desc,
      descEnglish: 'The right truck reaches your home, shop, or godown for loading.',
      tagUrdu: '100% مخصوص گاڑی',
      tagEnglish: 'Full Truck',
      borderColor: 'border-slate-200 hover:border-blue-400',
      numColor: 'text-blue-600',
      badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
    },
    {
      stepNumber: '03',
      titleUrdu: t.step3Title,
      titleEnglish: '3. Covering & Tying Goods',
      descUrdu: t.step3Desc,
      descEnglish: 'Your goods are loaded carefully, covered with waterproof tarpaulins, and tied down with strong ropes.',
      tagUrdu: 'مکمل واٹر پروفنگ',
      tagEnglish: 'Waterproof Covers',
      borderColor: 'border-amber-200 hover:border-amber-400',
      numColor: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      stepNumber: '04',
      titleUrdu: t.step4Title,
      titleEnglish: '4. Direct Highway Delivery',
      descUrdu: t.step4Desc,
      descEnglish: 'The truck drives straight to your destination with no stops in between and delivers with a signed bilty receipt.',
      tagUrdu: 'زیرو کارگو مکسنگ',
      tagEnglish: 'Direct Delivery',
      borderColor: 'border-slate-200 hover:border-blue-400',
      numColor: 'text-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    }
  ];

  const ftlPillars = [
    {
      titleUrdu: 'براہ راست تیز ترین ترسیل (Non-Stop Transit)',
      titleEnglish: 'Direct Non-Stop Travel',
      descUrdu: 'عام پارسل (LTL) کے برعکس، FTL میں گاڑی کسی اور کا مال اٹھانے کے لیے نہیں رکتی۔ لوڈنگ کے بعد گاڑی سیدھی منزل کی طرف روانہ ہوتی ہے۔',
      descEnglish: 'The truck never stops to pick up anyone else’s goods. Once loaded, it goes straight to your destination.',
    },
    {
      titleUrdu: '100% محفوظ — کوئی سامان مکس نہیں ہوتا',
      titleEnglish: 'Your Goods Stay Together',
      descUrdu: 'پوری گاڑی میں صرف اور صرف آپ کا مال لوڈ ہوتا ہے۔ کسی دوسرے گاہک کا سامان ساتھ نہ ہونے کی وجہ سے گمشدگی یا ٹوٹ پھوٹ کا خطرہ صفر ہے۔',
      descEnglish: 'You book the whole truck for your load alone, so nothing gets mixed up or misplaced.',
    },
    {
      titleUrdu: 'گوداموں میں سامان کی بار بار ان لوڈنگ نہیں',
      titleEnglish: 'No Unloading on the Way',
      descUrdu: 'LTL سروسز میں سامان کو بار بار مختلف گوداموں میں منتقل کیا جاتا ہے جس سے نقصان ہوتا ہے۔ FTL میں گاڑی لوڈ ہو کر سیدھی ان لوڈنگ پوائنٹ پر ہی کھلتی ہے۔',
      descEnglish: 'Goods are loaded once at your pickup point and only unloaded when the truck reaches your destination.',
    },
    {
      titleUrdu: 'آپ کی مرضی کا شیڈول اور ٹائمنگ',
      titleEnglish: 'You Choose the Timing',
      descUrdu: 'گاڑی کب لوڈ ہونی ہے اور کب پہنچنی ہے، یہ وقت آپ اپنی کاروباری ضرورت کے مطابق طے کرتے ہیں۔ 24 گھنٹے سروس دستیاب ہے۔',
      descEnglish: 'Book your truck at whatever time suits your schedule. We take bookings 24 hours a day, 7 days a week.',
    }
  ];

  return (
    <section id="ftl-workflow" className="py-10 sm:py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="" className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 text-blue-900 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
            <Truck className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base lg:text-lg font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-12 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          {workflowSteps.map((s, idx) => (
              <div 
                key={idx} 
                data-reveal=""
                data-reveal-variant="zoom-in"
                style={{ '--reveal-delay': `${idx * 75}ms` } as React.CSSProperties}
                className={`bg-white border ${s.borderColor} rounded-lg p-5 relative shadow-sm hover:shadow-md flex flex-col justify-between group card-interactive`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-xl font-black ${s.numColor} font-mono tracking-wider`}>
                      {s.stepNumber}
                    </span>
                    <span className={`${s.badgeBg} border text-[10px] font-bold px-2 py-0.5 rounded font-urdu`}>
                      {language === 'ur' ? s.tagUrdu : s.tagEnglish}
                    </span>
                  </div>

                  <p className="text-base font-bold text-slate-900 font-urdu mb-1.5">
                    {language === 'ur' ? s.titleUrdu : s.titleEnglish}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                    {language === 'ur' ? s.descUrdu : s.descEnglish}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* FTL Core Advantages vs Loose Cargo Notice Banner */}
        <div data-reveal="" className="bg-white border border-slate-200 rounded-lg p-5 sm:p-8 shadow-sm">
          
          <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 border-b border-slate-200 pb-5 sm:pb-6 mb-6 sm:mb-8 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded text-xs font-semibold font-urdu mb-2">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-blue-600" />
                <span>{language === 'ur' ? 'کاروباری اداروں اور فیکٹریوں کے لیے بہترین انتخاب' : 'Built for Shops, Homes & Factories'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-urdu">
                {language === 'ur' ? 'فل ٹرک لوڈ (FTL) کے اہم فوائد' : 'Why Book a Full Truck (FTL)'}
              </h3>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 max-w-md font-urdu shadow-sm">
              🔒 <strong className="text-amber-800">{language === 'ur' ? 'واضح پالیسی:' : 'Full Truck Policy:'}</strong> {language === 'ur' ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی لوز کارگو / پارسل (LTL) بک نہیں کرتی۔ ہماری تمام گاڑیاں سنگل پارٹی کے مکمل لوڈ کے لیے وقف ہوتی ہیں۔' : 'Warraich Goods does not carry loose parcels or shared cargo. Every truck is booked solely for one customer’s load.'}
            </div>
          </div>

          {/* 4 Core Pillars Grid with Highway Corridor Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
            
            {/* Visual Highway Showcase Banner */}
            <div data-reveal="" data-reveal-variant="slide-left" className="lg:col-span-4 relative rounded-lg overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-end min-h-[220px] group">
              <img 
                src={getAssetUrl('images/workflow-motorway-corridor.webp')} 
                alt="Pakistan Motorway Freight Logistics Corridor - Warraich Goods" 
                width={800}
                height={450}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 text-white">
                <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded font-mono mb-1.5 uppercase tracking-wide">
                  Motorway M-4 / M-2 / N-5
                </span>
                <p className="font-bold text-sm sm:text-base font-urdu text-white leading-snug">
                  {language === 'ur' ? 'نان سٹاپ موٹروے کوریڈور سروس' : 'Direct Motorway & Highway Travel'}
                </p>
                <p className="text-[11px] text-slate-200 font-urdu mt-0.5 leading-relaxed">
                  {language === 'ur' ? 'لوڈنگ پوائنٹ سے منزل تک بغیر رکے تیز ترین ترسیل' : 'Straight point-to-point travel with no stops along the way'}
                </p>
              </div>
            </div>

            {/* 4 Pillars in a 2x2 Grid */}
            <div className={`lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
              {ftlPillars.map((p, idx) => (
                  <div
                    key={idx}
                    data-reveal=""
                    data-reveal-variant="slide-right"
                    style={{ '--reveal-delay': `${idx * 65}ms` } as React.CSSProperties}
                    className="bg-slate-50 border border-slate-200 p-4 rounded-lg hover:border-slate-300 transition-colors card-interactive"
                  >
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 font-urdu">
                        {language === 'ur' ? p.titleUrdu : p.titleEnglish}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-urdu">
                        {language === 'ur' ? p.descUrdu : p.descEnglish}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

          </div>

          {/* Workflow Action */}
          <div className={`mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs font-urdu ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <span className="text-slate-600">
              {language === 'ur' ? 'کیا آپ کو فیکٹری خام مال، زرعی غلہ یا ہیوی سامان کے لیے مکمل گاڑی چاہیے؟' : 'Need a dedicated truck for factory raw material, grain sacks, or heavy loads?'}
            </span>

            <Link
              to="/booking"
              className="btn-animated w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm font-urdu shadow-sm hover:shadow-md min-h-[44px]"
              aria-label="Calculate dedicated truckload freight rates"
            >
              <Truck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-urdu font-bold">
                {language === 'ur' ? 'گاڑی کا کرایہ تخمینہ لگائیں' : 'Calculate Freight Estimate'}
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
