import React from 'react';
import { 
  PhoneCall, 
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
            <div className="inline-flex flex-wrap items-center gap-2 bg-white border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="font-urdu">{t.badge}</span>
              <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[11px] font-mono tracking-wider">NTN: {COMPANY_INFO.ntn}</span>
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

            {/* Conversion CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-3">
              
              {/* Primary Call CTA */}
              <a
                id="hero-call-now-btn"
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-6 py-3.5 sm:py-4 rounded-xl shadow-md text-sm sm:text-base transition-all transform active:scale-95 cursor-pointer min-h-[48px]"
                aria-label={`Call booking hotline ${COMPANY_INFO.phone1}`}
              >
                <PhoneCall className="w-4 sm:w-5 h-4 sm:h-5 fill-current flex-shrink-0" />
                <span className="font-urdu font-black">{t.btnCall}</span>
              </a>

              {/* Instant Freight Calculator CTA */}
              <button
                id="hero-calc-btn"
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all shadow-md cursor-pointer min-h-[48px]"
              >
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5 text-blue-200 flex-shrink-0" />
                <span className="font-urdu">{t.btnCalculate}</span>
              </button>

              {/* WhatsApp Quick Quote CTA */}
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(language === 'ur' ? 'السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے مکمل گاڑی (FTL) کی لوڈنگ اور ریٹ معلوم کرنا ہے۔' : 'Hello! I would like to inquire about Dedicated Full Truckload (FTL) rates and booking with Warraich Goods Transport Company.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all shadow-md cursor-pointer min-h-[48px]"
                aria-label="Chat on WhatsApp with Warraich Goods"
              >
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span>WhatsApp</span>
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

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden">
              
              {/* Top Multi-Color Accent bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500"></div>
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-urdu">
                    {language === 'ur' ? 'مکمل ٹرک لوڈ (FTL) فلیٹ اسٹیٹس' : 'Active FTL Fleet Status'}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-urdu">
                    {language === 'ur' ? 'سنگل گاہک کی مخصوص گاڑی ہمہ وقت دستیاب' : 'Dedicated single-shipper trucks on standby'}
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] px-2.5 py-1 rounded-md font-semibold font-urdu whitespace-nowrap">
                  {language === 'ur' ? '24/7 فعال' : '24/7 Active'}
                </div>
              </div>

              {/* Fleet Preview Snapshot 4 Cards (Multiple Vibrant Colors & Synced Public Images) */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                
                {/* 1. Shehzore (Emerald theme) */}
                <a 
                  href="#fleet"
                  className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all group block text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded font-mono">1-3.5 T</span>
                    <span className="text-[10px] text-emerald-600 font-semibold font-urdu group-hover:underline">{language === 'ur' ? 'تفصیل' : 'Details'}</span>
                  </div>
                  {/* Clean Image Frame - No text overlay at bottom */}
                  <div className="relative h-20 w-full rounded-lg overflow-hidden bg-white mb-2 border border-emerald-100 flex items-center justify-center p-1 group-hover:scale-[1.02] transition-transform">
                    <picture className="w-full h-full">
                      <source srcSet="./images/shehzore-truck.webp" type="image/webp" />
                      <img 
                        src="./images/shehzore-truck.png" 
                        alt="Shehzore Pickup Truck - Warraich Goods" 
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </picture>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">Shehzore Pickup</h4>
                  <p className="text-[10px] text-slate-600 font-urdu truncate">
                    {language === 'ur' ? 'ایکسپریس لوڈنگ (1-3.5 ٹن)' : 'Express Single Shipper'}
                  </p>
                </a>

                {/* 2. Mazda (Amber theme) */}
                <a 
                  href="#fleet"
                  className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all group block text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded font-mono">4-10 T</span>
                    <span className="text-[10px] text-amber-700 font-semibold font-urdu group-hover:underline">{language === 'ur' ? 'تفصیل' : 'Details'}</span>
                  </div>
                  {/* Clean Image Frame - No text overlay at bottom */}
                  <div className="relative h-20 w-full rounded-lg overflow-hidden bg-white mb-2 border border-amber-100 flex items-center justify-center p-1 group-hover:scale-[1.02] transition-transform">
                    <picture className="w-full h-full">
                      <source srcSet="./images/mazda-truck.webp" type="image/webp" />
                      <img 
                        src="./images/mazda-truck.png" 
                        alt="Mazda 6-Wheeler Commercial Truck - Warraich Goods" 
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </picture>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">Mazda 6-Wheeler</h4>
                  <p className="text-[10px] text-slate-600 font-urdu truncate">
                    {language === 'ur' ? 'انڈسٹریل و زرعی FTL' : 'Industrial & Agro FTL'}
                  </p>
                </a>

                {/* 3. Sample Truck (Indigo theme) */}
                <a 
                  href="#fleet"
                  className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all group block text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-1.5 py-0.5 rounded font-mono">8-16 T</span>
                    <span className="text-[10px] text-indigo-600 font-semibold font-urdu group-hover:underline">{language === 'ur' ? 'تفصیل' : 'Details'}</span>
                  </div>
                  {/* Clean Image Frame - No text overlay at bottom */}
                  <div className="relative h-20 w-full rounded-lg overflow-hidden bg-white mb-2 border border-indigo-100 flex items-center justify-center p-1 group-hover:scale-[1.02] transition-transform">
                    <picture className="w-full h-full">
                      <source srcSet="./images/sample-truck.webp" type="image/webp" />
                      <img 
                        src="./images/sample-truck.png" 
                        alt="Sample Extended Body Truck - Warraich Goods" 
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </picture>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">Sample Extended</h4>
                  <p className="text-[10px] text-slate-600 font-urdu truncate">
                    {language === 'ur' ? 'توسیع شدہ والیم FTL' : 'Extended Volumetric'}
                  </p>
                </a>

                {/* 4. Bedford (Blue theme) */}
                <a 
                  href="#fleet"
                  className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group block text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded font-mono">15-28+ T</span>
                    <span className="text-[10px] text-blue-600 font-semibold font-urdu group-hover:underline">{language === 'ur' ? 'تفصیل' : 'Details'}</span>
                  </div>
                  {/* Clean Image Frame - No text overlay at bottom */}
                  <div className="relative h-20 w-full rounded-lg overflow-hidden bg-white mb-2 border border-blue-100 flex items-center justify-center p-1 group-hover:scale-[1.02] transition-transform">
                    <picture className="w-full h-full">
                      <source srcSet="./images/bedford-truck.webp" type="image/webp" />
                      <img 
                        src="./images/bedford-truck.png" 
                        alt="Bedford Heavy Long Haul Truck - Warraich Goods" 
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </picture>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">Bedford Heavy</h4>
                  <p className="text-[10px] text-slate-600 font-urdu truncate">
                    {language === 'ur' ? 'ہیوی انڈسٹریل FTL' : 'Heavy Industrial Haul'}
                  </p>
                </a>

              </div>

              {/* Quick Branch Highlights */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold text-amber-800 font-urdu">
                    {language === 'ur' ? '📍 سمندری مین اڈا:' : '📍 Samundri Main Hub:'}
                  </span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw1}`} className="font-mono text-slate-900 hover:text-amber-600 font-bold">0300-5370443</a>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold text-blue-800 font-urdu">
                    {language === 'ur' ? '📍 کمالیہ برانچ:' : '📍 Kamalia Branch:'}
                  </span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw2}`} className="font-mono text-slate-900 hover:text-blue-600 font-bold">0339-5370443</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

