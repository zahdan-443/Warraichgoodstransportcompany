import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const DirectContactSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    isUrdu 
      ? 'السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے لوڈنگ، فریٹ ریٹس اور گاڑی بکنگ کے لیے رابطہ کیا ہے۔'
      : 'Hello Warraich Goods! I am contacting you for dedicated FTL truck booking and rates.'
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 block mb-1">
            {isUrdu ? 'براہِ راست رابطہ' : 'Direct Communication'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'دفتر اور ڈائریکٹ رابطہ' : 'Connect Directly With Management'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-urdu">
            {isUrdu
              ? 'کسی تیسرے فریق کے بغیر براہِ راست پروپرائٹر اور چیف ایگزیکٹو سے 24/7 رابطہ فرمائیں۔'
              : 'Direct communication line with Managing Director Zahdan Nasar Warraich for immediate FTL vehicle allocation.'}
          </p>
        </div>

        {/* ONE Single "Direct Communication" Card */}
        <div data-reveal="" style={{ '--reveal-delay': '80ms' } as React.CSSProperties} className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Core Contacts */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badge: Available 24/7 */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                  {isUrdu ? '24/7 ملک گیر سروس دستیاب ہے' : 'Available 24/7 Nationwide'}
                </span>
              </div>

              {/* Title & Proprietor Tag */}
              <div>
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-black text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? COMPANY_INFO.nameUrdu : COMPANY_INFO.nameEnglish}
                </h3>
                <p className={`text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-2 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>
                    {isUrdu 
                      ? `زیرنگرانی: ${COMPANY_INFO.proprietorUrdu} (${COMPANY_INFO.proprietorRoleUrdu})` 
                      : `Under Direct Supervision: ${COMPANY_INFO.proprietorEnglish} (${COMPANY_INFO.proprietorRoleEnglish})`}
                  </span>
                </p>
              </div>

              {/* Main Contact Points Grid (Single Phone, Single Address, WhatsApp, Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                {/* 1. Main Single Phone */}
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-1 card-interactive">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {isUrdu ? 'مرکزی رابطہ نمبر' : 'PRIMARY PHONE'}
                  </span>
                  <p className="text-lg sm:text-xl font-mono font-black text-amber-400">
                    {COMPANY_INFO.phone1}
                  </p>
                  <span className={`text-[11px] text-slate-400 block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? '24 گھنٹے براہِ راست کال' : '24/7 Direct Calling'}
                  </span>
                </div>

                {/* 2. Single Samundri Address */}
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-1 card-interactive">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {isUrdu ? 'دفتر کا پتہ' : 'OFFICE ADDRESS'}
                  </span>
                  <p className={`text-sm sm:text-base font-bold text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? COMPANY_INFO.addressUrdu : COMPANY_INFO.addressEnglish}
                  </p>
                  <span className={`text-[11px] text-slate-400 block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? 'ملک گیر لوڈنگ و ترسیل' : 'Nationwide Freight Terminal'}
                  </span>
                </div>

                {/* 3. WhatsApp */}
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-1 card-interactive">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {isUrdu ? 'آفیشل واٹس ایپ' : 'OFFICIAL WHATSAPP'}
                  </span>
                  <p className="text-base sm:text-lg font-mono font-bold text-emerald-400">
                    +{COMPANY_INFO.whatsappNumber}
                  </p>
                  <span className={`text-[11px] text-slate-400 block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? 'فوری ریٹ کوٹیشن و بلٹی معلومات' : 'Instant Rates & Live Coordinates'}
                  </span>
                </div>

                {/* 4. Official Email */}
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-1 card-interactive">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {isUrdu ? 'کارپوریٹ ای میل' : 'OFFICIAL EMAIL'}
                  </span>
                  <p className="text-xs sm:text-sm font-mono font-bold text-slate-200 truncate">
                    {COMPANY_INFO.email}
                  </p>
                  <span className={`text-[11px] text-slate-400 block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? 'کارپوریٹ وینڈر و انوائسنگ' : 'Vendor Onboarding & Inquiries'}
                  </span>
                </div>

              </div>

              {/* Tax & Legal Verification Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NTN: {COMPANY_INFO.ntn}</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className={isUrdu ? 'font-urdu text-[11px]' : 'font-sans'}>
                  {isUrdu ? 'ایف بی آر ایکٹو ٹیکس پیئر' : 'Active Taxpayer / FBR Registered'}
                </span>
              </div>

            </div>

            {/* Right Column: High-Impact Action CTAs */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 bg-slate-800/50 border border-slate-700/70 p-5 sm:p-6 rounded-2xl">
              
              <p className={`text-xs sm:text-sm font-bold text-slate-300 text-center ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                {isUrdu ? 'فوری بکنگ یا رابطہ کے لیے بٹن دبائیں:' : 'Initiate direct booking now:'}
              </p>

              {/* 1. Direct Call CTA Button */}
              <a
                id="direct-call-btn"
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className={`cta-subtle-pulse w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black px-6 py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer min-h-[50px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>{isUrdu ? `کال کریں: ${COMPANY_INFO.phone1}` : `Call Now: ${COMPANY_INFO.phone1}`}</span>
              </a>

              {/* 2. Direct WhatsApp CTA Button */}
              <a
                id="direct-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer min-h-[50px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{isUrdu ? 'واٹس ایپ پر میسج کریں' : 'Chat on WhatsApp'}</span>
              </a>

              {/* Prompt reassurance note */}
              <div className="pt-2 text-center text-xs text-slate-400">
                <span className={isUrdu ? 'font-urdu text-[11px]' : 'font-sans'}>
                  {isUrdu ? 'بغیر کسی تاخیر کے فوری گاڑی اور ریٹ کنفرم کریں' : 'Immediate vehicle confirmation and fair freight rate'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
