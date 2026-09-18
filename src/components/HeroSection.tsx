import React from 'react';
import { 
  PhoneCall, 
  Phone,
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Truck,
  MessageCircle,
  Award,
  Lock,
  Calculator
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-sky-50/70 via-white to-amber-50/50 text-slate-900 overflow-hidden py-8 sm:py-14 md:py-20 border-b border-slate-200">
      
      {/* Background Graphic Grid Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px), radial-gradient(#f59e0b 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* FTL Verified Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="font-urdu">{t.badge}</span>
            </div>

            {/* Core Promotional Tagline */}
            <div className="space-y-2">
              <span className="text-amber-700 text-2xl sm:text-4xl lg:text-5xl font-black font-nastaliq block leading-[2.1]">
                {language === 'ur' ? COMPANY_INFO.nameUrdu : COMPANY_INFO.nameEnglish}
              </span>
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug font-urdu">
                {language === 'ur' ? (
                  COMPANY_INFO.taglineUrdu
                ) : (
                  <span>{t.titleLine1} <span className="text-blue-700">{t.titleLine2}</span></span>
                )}
              </h1>
            </div>

            {/* Subtitle & Value Proposition */}
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-urdu">
              {t.subtitle}
            </p>

            {/* FTL Exclusivity Notice Pill */}
            <div className="bg-amber-50/90 border-l-4 border-amber-500 border-y border-r border-amber-200 p-3.5 sm:p-4 rounded-xl flex items-center gap-3">
              <Lock className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-amber-950 leading-relaxed font-urdu">
                {language === 'ur' ? (
                  <>🔒 <strong className="text-amber-800">صرف مکمل ٹرک (Dedicated FTL):</strong> ہم عام لوز کارگو یا پارسل مکسنگ ڈیل نہیں کرتے۔ ہر کلائنٹ کے لیے پوری گاڑی مخصوص کی جاتی ہے۔</>
                ) : (
                  <>🔒 <strong className="text-amber-800">100% Dedicated Full Truckload (FTL):</strong> We do not handle loose parcel mixing or LTL. Every dispatched vehicle is exclusively allocated to your consignment.</>
                )}
              </div>
            </div>

            {/* Feature Highlights Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-800 font-urdu">{t.benefit1}</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-800 font-urdu">{t.benefit2}</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-800 font-urdu">{t.benefit3}</span>
              </div>
            </div>

            {/* Business Introduction & Capability Exploration Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-3">
              
              {/* Primary Business Profile CTA */}
              <a
                id="hero-company-profile-btn"
                href="#business-intro"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-6 py-3.5 sm:py-4 rounded-xl shadow-md text-sm sm:text-base transition-all transform active:scale-95 cursor-pointer min-h-[48px]"
                aria-label="View Company Profile and Introduction"
              >
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span className="font-urdu font-black">
                  {language === 'ur' ? 'کاروباری تعارف و مکمل پروفائل' : 'Company Profile & Overview'}
                </span>
              </a>

              {/* Instant Freight Calculator CTA */}
              <button
                id="hero-calc-btn"
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all shadow-md cursor-pointer min-h-[48px]"
              >
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 flex-shrink-0" />
                <span className="font-urdu">{t.btnCalculate}</span>
              </button>

              {/* Fleet & Services Exploration */}
              <a
                id="hero-fleet-btn"
                href="#fleet"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all border border-slate-200 shadow-sm cursor-pointer min-h-[48px]"
              >
                <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="font-urdu">
                  {language === 'ur' ? 'ہمارا ٹرانسپورٹ بیڑا' : 'Explore Fleet'}
                </span>
              </a>

            </div>

            {/* Proprietor Quick Endorsement */}
            <div className="pt-2 text-xs text-slate-600 flex items-center gap-2 font-urdu">
              <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>
                {language === 'ur' ? (
                  <>زیرنگرانی: <strong className="text-blue-950 font-nastaliq text-sm">{COMPANY_INFO.proprietorUrdu}</strong> ({COMPANY_INFO.proprietorRoleUrdu})</>
                ) : (
                  <>Under the direct supervision of: <strong className="text-blue-950">{COMPANY_INFO.proprietorEnglish}</strong> ({COMPANY_INFO.proprietorRoleEnglish})</>
                )}
              </span>
            </div>

          </div>

          {/* Visual Showcase Card Column: Live Operations Hub (No duplicate vehicle cards) */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden">
              
              {/* Top Multi-Color Accent bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500"></div>
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div>
                  <p className="text-base sm:text-lg font-bold text-slate-900 font-urdu">
                    {language === 'ur' ? 'ملک گیر FTL آپریشنل حقائق' : 'Nationwide FTL Operations Hub'}
                  </p>
                  <p className="text-[11px] text-slate-500 font-urdu">
                    {language === 'ur' ? 'محفوظ ترین فل ٹرک لوڈ، کمپیوٹرائزڈ بلٹی اور براہ راست ترسیل' : 'Dedicated single-shipper transit with computerized bilty verification'}
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] px-2.5 py-1 rounded-md font-semibold font-urdu whitespace-nowrap">
                  {language === 'ur' ? '24/7 ڈسپیچ' : '24/7 Dispatch'}
                </div>
              </div>

              {/* 4 Core Operational Highlights (Clean & Non-repetitive) */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded font-mono">100% FTL</span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mt-1.5 font-urdu">
                    {language === 'ur' ? 'مخصوص گاڑی' : 'Dedicated Truck'}
                  </p>
                  <p className="text-[11px] text-slate-600 font-urdu mt-0.5">
                    {language === 'ur' ? 'ایک گاہک کے لیے ایک ہی گاڑی، زیرو پارسل مکسنگ' : 'Single-shipper cargo, zero parcel mixing'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-mono">NON-STOP</span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mt-1.5 font-urdu">
                    {language === 'ur' ? 'نان اسٹاپ ترسیل' : 'Non-Stop Transit'}
                  </p>
                  <p className="text-[11px] text-slate-600 font-urdu mt-0.5">
                    {language === 'ur' ? 'لوڈنگ پوائنٹ سے منزل تک براہ راست ہائی وے سفر' : 'Direct highway journey with zero depot stops'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded font-mono">SCALE SLIP</span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mt-1.5 font-urdu">
                    {language === 'ur' ? 'کمپیوٹرائزڈ کانٹا' : 'Digital Weighbridge'}
                  </p>
                  <p className="text-[11px] text-slate-600 font-urdu mt-0.5">
                    {language === 'ur' ? 'سرکاری وزن تصدیق و فوری کمپیوٹر پرچی' : 'Certified axle scale slips provided on load'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded font-mono">NATIONWIDE</span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 mt-1.5 font-urdu">
                    {language === 'ur' ? 'ملک گیر نیٹ ورک' : 'All-Pakistan Routes'}
                  </p>
                  <p className="text-[11px] text-slate-600 font-urdu mt-0.5">
                    {language === 'ur' ? 'پنجاب، سندھ، خیبر، بلوچستان و پورٹ روٹس' : 'Punjab, Sindh, KPK, Balochistan & Ports'}
                  </p>
                </div>
              </div>

              {/* Action Buttons to Dedicated Sections */}
              <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2">
                <a
                  href="#fleet"
                  className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-xl text-xs font-urdu text-center transition-all shadow-xs"
                >
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'ur' ? 'گاڑیاں و فلیٹ دیکھیں' : 'View Fleet Models'}</span>
                </a>
                <a
                  href="#tracking"
                  className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 rounded-xl text-xs font-urdu text-center transition-all shadow-xs"
                >
                  <span>{language === 'ur' ? 'بلٹی ٹریک کریں' : 'Track Bilty'}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

