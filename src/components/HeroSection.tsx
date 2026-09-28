import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Calculator, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Scale, 
  Clock, 
  ArrowRight,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-100/80 via-white to-slate-50 text-slate-900 overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200/80">
      
      {/* Subtle Background Glow & Accent Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Clean Editorial Metadata Kicker (Anti-slop, unboxed) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 font-urdu">
              <span className="inline-flex items-center gap-1.5 text-blue-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{isUrdu ? 'حکومت سے تصدیق شدہ کیریئر' : 'Govt. Registered FTL Carrier'}</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="font-mono text-slate-600">
                NTN: {COMPANY_INFO.ntn}
              </span>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <span className="text-slate-600 hidden sm:inline">
                {isUrdu ? 'سمندری و کمالیہ ہیڈ آفس' : 'Samundri & Kamalia Hubs'}
              </span>
            </div>

            {/* Prominent Calligraphic Brand Name */}
            <div>
              <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black font-nastaliq text-slate-950 block leading-tight tracking-normal">
                {isUrdu ? COMPANY_INFO.nameUrdu : COMPANY_INFO.nameEnglish}
              </span>
              <h1 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 leading-normal font-urdu mt-1">
                {isUrdu ? COMPANY_INFO.taglineUrdu : (
                  <span>Dedicated <span className="text-blue-700 font-extrabold">Full Truckload (FTL)</span> Freight & Logistics</span>
                )}
              </h1>
            </div>

            {/* Clear Value Proposition */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-urdu">
              {isUrdu
                ? 'سمندری، کمالیہ، فیصل آباد اور ملک بھر کے تمام صنعتی زونز سے کراچی پورٹ، لاہور، اسلام آباد اور تمام شہروں کے لیے صرف اور صرف مکمل گاڑی (Dedicated FTL) مال برداری۔ زیرو پارسل مکسنگ، کمپیوٹرائزڈ بلٹی اور براہ راست نان اسٹاپ ترسیل۔'
                : 'Exclusive 100% Full Truckload (FTL) commercial freight services connecting Samundri, Kamalia, and Faisalabad industrial corridors to Karachi Port, Lahore, Islamabad, and nationwide destinations with computerized bilty documentation.'}
            </p>

            {/* 3 Core Assurances (Clean, Minimalist Strip) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-800 font-bold font-urdu">
                  {isUrdu ? 'صرف مخصوص گاڑی (No LTL)' : 'Single-Shipper FTL Only'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs">
                <Scale className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-bold font-urdu">
                  {isUrdu ? 'کمپیوٹرائزڈ کانٹا پرچی' : 'Certified Scale Slips'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs">
                <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-slate-800 font-bold font-urdu">
                  {isUrdu ? '24/7 نان اسٹاپ روانگی' : '24/7 Express Dispatch'}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons (High Contrast & Clear Intent) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Primary Rate & Booking CTA */}
              <Link
                id="hero-calc-cta-btn"
                to="/booking"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm sm:text-base font-urdu shadow-sm hover:shadow-md transition-all active:scale-98 min-h-[48px] cursor-pointer"
              >
                <Calculator className="w-5 h-5 flex-shrink-0 text-slate-950" />
                <span>{isUrdu ? 'آن لائن کرایہ معلوم کریں و بکنگ' : 'Calculate Freight Rates & Book'}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>

              {/* Secondary Instant Call Button */}
              <a
                id="hero-call-cta-btn"
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-3.5 rounded-xl text-sm sm:text-base font-urdu shadow-sm transition-all active:scale-98 min-h-[48px]"
                aria-label={`Call Warraich Goods Helpline at ${COMPANY_INFO.phone1}`}
              >
                <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{isUrdu ? `فوری رابطہ: ${COMPANY_INFO.phone1}` : `Call: ${COMPANY_INFO.phone1}`}</span>
              </a>

              {/* Fleet Explorer Clean Link */}
              <Link
                id="hero-fleet-link"
                to="/fleet"
                className="inline-flex items-center justify-center gap-1.5 text-slate-700 hover:text-blue-700 font-bold px-3 py-2 text-xs sm:text-sm font-urdu transition-colors"
              >
                <Truck className="w-4 h-4 text-slate-500" />
                <span>{isUrdu ? '4 فلیٹ گاڑیاں دیکھیں' : 'View Fleet Models'}</span>
              </Link>
            </div>

            {/* Proprietor Oversight & Supervision Line */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-600 font-urdu">
              <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>
                {isUrdu ? (
                  <>براہِ راست زیرنگرانی: <strong className="text-slate-900 font-nastaliq text-sm">{COMPANY_INFO.proprietorUrdu}</strong> (پروپرائٹر وڑائچ گڈز)</>
                ) : (
                  <>Under personal supervision of: <strong className="text-slate-900">{COMPANY_INFO.proprietorEnglish}</strong> (Proprietor)</>
                )}
              </span>
            </div>

          </div>

          {/* Right Column: Sleek FTL Fleet & Transit Showcase Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              
              {/* Fleet Image Showcase Header */}
              <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
                <img
                  src="./images/road-highway.webp"
                  alt="Warraich Goods Transport Commercial FTL Highway Transit"
                  width={640}
                  height={360}
                  loading="eager"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to factory warehouse image if highway image has issue
                    e.currentTarget.src = './images/factory-warehouse.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Overlay Highlights */}
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/40">
                      LIVE DISPATCH
                    </span>
                    <p className="text-sm sm:text-base font-extrabold font-urdu text-white mt-1">
                      {isUrdu ? 'ملک گیر ایکسپریس کوریڈورز' : 'Nationwide Express Transit'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-slate-200 bg-slate-800/80 px-2 py-1 rounded">
                      24/7 Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Transit Details & Fast Corridor Status */}
              <div className="p-4 sm:p-5 space-y-3 bg-white">
                
                {/* 3 Major High-Volume Routes */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 font-urdu leading-tight">
                          {isUrdu ? 'سمندری و کمالیہ ⇋ کراچی پورٹ (KPT / QICT)' : 'Samundri / Kamalia ⇋ Karachi Port'}
                        </p>
                        <p className="text-[11px] text-slate-500 font-urdu">
                          {isUrdu ? 'براستہ M-4 و M-5 ملتان سکھر موٹروے' : 'Via M-4 & M-5 Motorway Corridors'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded whitespace-nowrap">
                      24-30 Hrs
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 font-urdu leading-tight">
                          {isUrdu ? 'سمندری ⇋ لاہور، شیخوپورہ و گوجرانوالہ' : 'Samundri ⇋ Lahore & Gujranwala Industrial'}
                        </p>
                        <p className="text-[11px] text-slate-500 font-urdu">
                          {isUrdu ? 'براستہ M-3 موٹروے (رجانہ و شرقپور)' : 'Via M-3 Motorway Links'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded whitespace-nowrap">
                      Same Day
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 font-urdu leading-tight">
                          {isUrdu ? 'سمندری و کمالیہ ⇋ راولپنڈی، اسلام آباد و کے پی کے' : 'Samundri / Kamalia ⇋ Islamabad & KPK'}
                        </p>
                        <p className="text-[11px] text-slate-500 font-urdu">
                          {isUrdu ? 'براستہ M-4 تا M-2 موٹروے' : 'Via M-4 to M-2 Direct Route'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded whitespace-nowrap">
                      6-8 Hrs
                    </span>
                  </div>
                </div>

                {/* Bottom Card Actions: Quick Bilty & Fleet */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    to="/booking"
                    className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg text-xs font-urdu transition-colors"
                  >
                    <span>{isUrdu ? 'بلٹی ٹریک کریں' : 'Track Consignment'}</span>
                  </Link>
                  <Link
                    to="/fleet"
                    className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs font-urdu transition-colors"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>{isUrdu ? '4 فلیٹ گاڑیاں' : 'Fleet Models'}</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* TRUST METRICS ROW - 4 Crisp, Unboxed Performance Counters */}
        {/* ========================================================================= */}
        <div className="mt-10 sm:mt-16 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Metric 1: Experience */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-600 font-mono tracking-tight">
                  20+
                </span>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  Since 2004
                </span>
              </div>
              <p className="text-sm font-extrabold text-slate-900 font-urdu mt-2">
                {isUrdu ? '20 سال سے زائد فیلڈ تجربہ' : '20+ Years Verified Operation'}
              </p>
              <p className="text-xs text-slate-500 font-urdu mt-0.5">
                {isUrdu ? 'سمندری بائی پاس اور کمالیہ اڈا' : 'Operating from dedicated dispatch centers'}
              </p>
            </div>

            {/* Metric 2: Dedicated Policy */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-700 font-mono tracking-tight">
                  100%
                </span>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  Dedicated
                </span>
              </div>
              <p className="text-sm font-extrabold text-slate-900 font-urdu mt-2">
                {isUrdu ? 'مخصوص فل ٹرک لوڈ (FTL)' : 'Dedicated FTL Cargo Only'}
              </p>
              <p className="text-xs text-slate-500 font-urdu mt-0.5">
                {isUrdu ? 'زیرو لوز کارگو، صرف سنگل پارٹی' : 'Zero mixed cargo, strictly single client'}
              </p>
            </div>

            {/* Metric 3: Fleet Models */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-mono tracking-tight">
                  4
                </span>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  Categories
                </span>
              </div>
              <p className="text-sm font-extrabold text-slate-900 font-urdu mt-2">
                {isUrdu ? 'کمرشل فلیٹ ماڈلز' : 'Commercial Fleet Models'}
              </p>
              <p className="text-xs text-slate-500 font-urdu mt-0.5">
                {isUrdu ? 'شہزور، مزدا، سیمپل و بیڈفورڈ' : 'Shehzore, Mazda, Sample & Bedford'}
              </p>
            </div>

            {/* Metric 4: All-Pakistan Reach */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-700 font-urdu tracking-tight">
                  {isUrdu ? 'ملک گیر' : 'National'}
                </span>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  All Routes
                </span>
              </div>
              <p className="text-sm font-extrabold text-slate-900 font-urdu mt-2">
                {isUrdu ? 'موٹروے و ہائی وے روٹس' : 'Motorway & Port Corridors'}
              </p>
              <p className="text-xs text-slate-500 font-urdu mt-0.5">
                {isUrdu ? 'پنجاب، سندھ، کے پی کے و بندرگاہیں' : 'Connecting ports and economic hubs'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
