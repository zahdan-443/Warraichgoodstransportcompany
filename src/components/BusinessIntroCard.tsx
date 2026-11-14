import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileCheck, 
  Truck, 
  UserCheck, 
  Clock, 
  Printer, 
  Award
} from 'lucide-react';
import { COMPANY_INFO, MASTER_CITIES } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';
import { useInView } from '../hooks/useMotion';

const HOME_PREVIEW_CITY_IDS = [
  'samundri',
  'faisalabad',
  'toba-tek-singh',
  'gojra',
  'jhang',
  'lahore',
  'multan',
  'rawalpindi',
  'islamabad',
  'karachi',
];

interface BusinessIntroCardProps {
  headingAs?: 'h1' | 'h2';
}

export const BusinessIntroCard: React.FC<BusinessIntroCardProps> = ({ headingAs = 'h2' }) => {
  const HeadingTag = headingAs;
  const { language } = useLanguage();
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const isMarqueeInView = useInView(marqueeRef, '80px');

  const isUrdu = language === 'ur';

  const previewCities = HOME_PREVIEW_CITY_IDS
    .map((id) => MASTER_CITIES.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="business-intro" className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 scroll-mt-20">
      <div id="about" className="sr-only" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div data-reveal="" className={`text-center max-w-3xl mx-auto mb-8 sm:mb-12 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-sm">
            <Award className="w-4 h-4 text-amber-700" />
            <span>{isUrdu ? 'کمپنی کی معلومات و رابطہ کوائف' : 'Official Company Information'}</span>
          </div>
          <HeadingTag className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            {isUrdu ? 'کمپنی کا تعارف، دفتر کا پتہ اور رابطہ' : 'Company Information & Office Address'}
          </HeadingTag>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isUrdu 
              ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی کے مصدقہ کوائف، دفتر کا پتہ، موبائل نمبر، سروس نیٹ ورک اور قانونی رجسٹریشن'
              : 'Business details, Samundri office address, contact details, and nationwide service coverage.'}
          </p>
        </div>

        {/* Master Introduction Card Container */}
        <div className="relative bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden print:shadow-none print:border-slate-400">
          
          {/* Top Decorative Header Strip */}
          <div className="h-2 bg-amber-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* 1. Header Hero Banner: Logo, Company Name & FBR Compliance */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Logo Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-amber-500 p-0.5 shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white rounded-md p-1.5 flex items-center justify-center">
                    <img 
                      src={getAssetUrl('images/logo.png')} 
                      alt="Warraich Goods Logo" 
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <Truck className="w-8 h-8 text-slate-900 absolute pointer-events-none -z-10" />
                  </div>
                </div>

                {/* Company Name & Registration */}
                <div>
                  {isUrdu ? (
                    <div className="font-urdu">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-tight">
                        {COMPANY_INFO.nameUrdu}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-urdu">
                        پاکستان بھر میں تیز رفتار اور محفوظ فل ٹرک لوڈ (FTL) مال برداری
                      </p>
                    </div>
                  ) : (
                    <div className="font-sans">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-950 uppercase tracking-tight leading-none">
                        {COMPANY_INFO.nameEnglish}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Nationwide Full Truckload (FTL) Freight Haulage Across Pakistan
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Badges & Print Profile Action */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-black px-3.5 py-1.5 rounded-lg text-xs font-mono shadow-xs border border-amber-400">
                  <FileCheck className="w-4 h-4 text-slate-950" />
                  <span>NTN: {COMPANY_INFO.ntn}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold font-urdu">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{isUrdu ? 'ایف بی آر ایکٹو ٹیکس پیئر' : 'Active Taxpayer (FBR)'}</span>
                </div>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer print:hidden"
                  title="Print Business Card"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span>{isUrdu ? 'پرنٹ کارڈ' : 'Print Card'}</span>
                </button>
              </div>

            </div>

            {/* 2. Three Pillars: Business Overview, Proprietor & Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-slate-200">
              
              {/* Pillar 1: Business Overview */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className={`flex items-center gap-2 text-amber-800 font-bold text-sm mb-2 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'کاروباری تعارف و تاریخ' : 'Business Introduction'}</span>
                  </div>
                  <p className={`text-xs sm:text-[13px] text-slate-700 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu 
                      ? 'ہم پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ کی خدمات فراہم کرتے ہیں۔ مناسب ریٹ اور بہترین سروس ہماری پہچان ہے۔ وڑائچ گڈز ٹرانسپورٹ کمپنی گھر کی شفٹنگ، دفتری منتقلی، کمرشل مال برداری اور 24/7 تیز رفتار گاڑی بکنگ کی قابل اعتماد سہولت فراہم کرتی ہے۔'
                      : 'Warraich Goods Transport Company offers trusted home shifting, office relocation, and local/inter-city goods transport services across Pakistan. We specialize in shifting, commercial load delivery, and fast vehicle booking with careful handling, clear bilty records, and affordable rates.'}
                  </p>
                </div>
                <div className={`mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  <span>{isUrdu ? '2008 سے پہلے سے خدمت میں • احتیاط سے ہینڈلنگ اور واضح بلٹی ریکارڈ' : 'Serving since before 2008 • Careful handling and clear bilty records'}</span>
                </div>
              </div>

              {/* Pillar 2: Proprietor Leadership */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className={`flex items-center gap-2 text-blue-900 font-bold text-sm mb-3 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>{isUrdu ? 'پروپرائٹر و قیادت' : 'Proprietor & Leadership'}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {/* Enlarged Executive Portrait Frame */}
                    <div className="w-28 h-32 sm:w-28 sm:h-36 rounded-xl p-1 bg-gradient-to-br from-amber-400 via-amber-500 to-slate-900 shadow-md flex-shrink-0">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-white border border-white/70">
                        <img 
                          src={getAssetUrl('images/owner-portrait.png')} 
                          alt={isUrdu ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                          width={160}
                          height={192}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className={`space-y-1.5 text-center sm:text-start ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                      <p className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                        {isUrdu ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                      </p>
                      <p className="text-xs font-semibold text-amber-700">
                        {isUrdu ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {isUrdu
                          ? 'تمام کارپوریٹ گاہکوں اور گاڑیوں کے شیڈول کی براہِ راست نگرانی پروپرائٹر خود کرتے ہیں، جس سے تاجر برادری کو مکمل شفافیت و تحفظ حاصل رہتا ہے۔'
                          : 'The proprietor personally oversees fleet operations and trip scheduling, so every booking has one person accountable.'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  <span>{isUrdu ? 'براہِ راست ذمے داری و شفاف لین دین' : 'Direct accountability & transparent billing'}</span>
                </div>
              </div>

              {/* Pillar 3: Core Freight Capabilities */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className={`flex items-center gap-2 text-blue-900 font-bold text-sm mb-2 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span>{isUrdu ? 'اہم خدمات و سہولیات' : 'Key Services & Fleet'}</span>
                  </div>
                  
                  <ul className={`space-y-2 text-xs text-slate-700 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{isUrdu ? 'مکمل گاڑی (FTL) براہ راست ترسیل' : 'Dedicated Full Truckload (FTL)'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{isUrdu ? 'زرعی اجناس، ٹیکسٹائل و فیکٹری خام مال' : 'Agricultural, textile & industrial cargo'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{isUrdu ? 'شہزور، مزدا، 22 تا 40 فٹ ٹرالر و بیڈفورڈ' : 'Shahzore, Mazda, Flatbeds & Bedford'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{isUrdu ? '100% واٹر پروف ترپال و موسمی تحفظ' : 'Waterproof tarpaulin & weather shield'}</span>
                    </li>
                  </ul>
                </div>

                <div className={`mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  <span>{isUrdu ? 'قانونی کمپیوٹرائزڈ بلٹی و وزن کی پرچی' : 'Computerized bilty & verified weight slips'}</span>
                </div>
              </div>

            </div>

            {/* 3. Service Areas (ہمارے سروس علاقے) */}
            <div id="branches" className="pt-8 border-t border-slate-200 scroll-mt-24">
              
              <div className="text-center sm:text-start mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>{isUrdu ? 'ملک گیر سروس نیٹ ورک' : 'Nationwide Service Network'}</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 font-urdu tracking-tight">
                  {isUrdu ? 'ہمارے سروس علاقے' : 'Our Service Areas'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-urdu mt-1.5 max-w-3xl">
                  {isUrdu
                    ? 'سمندری سے پاکستان کے تمام بڑے شہروں اور صنعتی مراکز کے لیے مکمل گاڑی (FTL) بکنگ دستیاب ہے۔'
                    : 'Dedicated Full Truckload (FTL) haulage from Samundri to commercial hubs across Pakistan:'}
                </p>
              </div>

              {/* 10 City Chips Auto-Scrolling Row (pauses on hover & off-screen) + Link */}
              <div
                ref={marqueeRef}
                data-reveal=""
                className={`bg-slate-50 border border-slate-200 rounded-lg p-5 shadow-sm ${
                  isMarqueeInView ? '' : 'anim-paused'
                }`}
              >
                <div className="marquee-container overflow-hidden">
                  <div className="marquee-track">
                    <div className="flex items-center gap-2.5 pr-2.5 flex-shrink-0">
                      {previewCities.map((city) => (
                        <span
                          key={city.id}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                            isUrdu ? 'font-urdu' : 'font-sans'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{isUrdu ? city.nameUrdu : city.nameEnglish}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2.5 pr-2.5 flex-shrink-0" aria-hidden="true">
                      {previewCities.map((city) => (
                        <span
                          key={`dup-${city.id}`}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold whitespace-nowrap ${
                            isUrdu ? 'font-urdu' : 'font-sans'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{isUrdu ? city.nameUrdu : city.nameEnglish}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <Link
                    to="/service-areas"
                    className={`inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-600 hover:underline transition ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    <span>{isUrdu ? 'تمام سروس کے علاقے دیکھیں ←' : 'View all service areas →'}</span>
                  </Link>
                </div>
              </div>

            </div>

            {/* 4. Office Address & Single Written Contact Details */}
            <div className="mt-6 bg-slate-900 text-white rounded-lg p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Office Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className={`text-[11px] text-slate-400 uppercase tracking-wider block ${isUrdu ? 'font-urdu' : 'font-mono'}`}>
                    {isUrdu ? 'دفتر کا پتہ' : 'Office Address'}
                  </span>
                  <p className={`text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? COMPANY_INFO.addressUrdu : COMPANY_INFO.addressEnglish}
                  </p>
                </div>
              </div>

              {/* Single Written Mobile Number */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className={`text-[11px] text-slate-400 uppercase tracking-wider block ${isUrdu ? 'font-urdu' : 'font-mono'}`}>
                    {isUrdu ? 'موبائل نمبر' : 'Mobile Number'}
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw1}`}
                    dir="ltr"
                    className="inline-block text-sm sm:text-base font-black font-mono text-amber-400 hover:text-amber-300 transition-colors mt-0.5 select-all"
                  >
                    {COMPANY_INFO.phone1}
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <span className={`text-[11px] text-slate-400 uppercase tracking-wider block ${isUrdu ? 'font-urdu' : 'font-mono'}`}>
                    {isUrdu ? 'آفیشل ای میل' : 'Official Email'}
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-block text-xs sm:text-sm font-bold font-mono text-white hover:text-amber-300 transition-colors mt-0.5 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className={`text-[11px] text-slate-400 uppercase tracking-wider block ${isUrdu ? 'font-urdu' : 'font-mono'}`}>
                    {isUrdu ? 'ورکنگ اوقات' : 'Operating Hours'}
                  </span>
                  <p className={`text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? '24/7 سروس دستیاب' : '24/7 Round-the-Clock'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
