import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Printer, 
  CheckCircle2, 
  Award, 
  PhoneCall, 
  ExternalLink,
  ChevronRight,
  Briefcase,
  Layers,
  Sparkles,
  Download,
  X,
  FileCheck2,
  Warehouse,
  Truck,
  UserCheck,
  Users,
  Camera
} from 'lucide-react';
import { COMPANY_INFO, CORPORATE_CREDENTIALS, FLEET_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

// ============================================================================
// TASK 3: HUMAN-CENTRIC OPERATIONS & REAL ON-GROUND TEAM PHOTOGRAPHY
// ============================================================================
// GROUND OPERATIONS & FIELD SHOWCASE
// ============================================================================
// To swap out any placeholder with final photos, simply replace the file path in ONE line below.
// NOTE: These placeholder images use neutral "فیلڈ آپریشنز" / "گراؤنڈ فوٹو" labels.
// Once genuine photos replace placeholders, stronger verification language can be restored:
// - Re-add 'نادرا تصدیق شدہ روڈ کیپٹن' / 'NADRA-Verified Driver' in title
// - Re-add 'تصدیق شدہ گراؤنڈ فوٹیج' / 'Verified Ground Operations' in footerLabel
// - Re-add 'حقیقی آپریشنز' / 'Live Ops' in footerStatus
// ============================================================================
export const GROUND_OPERATIONS_PHOTOS = [
  {
    id: 'yard-operations',
    // "Proprietor supervising operations"
    imageSrc: './images/owner-portrait.png',
    badgeUrdu: 'قیادت و فلیٹ سپروائزری',
    badgeEn: 'Leadership & Fleet Supervision',
    titleUrdu: 'پروپرائٹر زاہدان نصر وڑائچ — آپریشنل نگرانی',
    titleEn: 'Proprietor Zahdan Nasar Warraich — Operational Oversight',
    descUrdu: 'سمندری، کمالیہ اور پنجاب بھر میں فلیٹ کی براہ راست روانگی، کاغذات اور بلٹی کی نگرانی۔',
    descEn: 'Direct hands-on oversight of daily fleet dispatch, vehicle inspections, and client coordination.',
    alt: 'Zahdan Nasar Warraich - Proprietor of Warraich Goods Transport Company supervising fleet operations',
    footerLabelUrdu: 'فیلڈ آپریشنز',
    footerLabelEn: 'Field Operations',
    footerStatusUrdu: 'گراؤنڈ فوٹو',
    footerStatusEn: 'Ground Photo',
  },
  {
    id: 'driver-vehicle',
    // "Driver with vehicle (representative placeholder)"
    imageSrc: './images/placeholder-driver-vehicle.jpg',
    badgeUrdu: 'ڈرائیور مع گاڑی',
    badgeEn: 'Driver with Vehicle',
    titleUrdu: 'کمرشل روڈ کیپٹن مع گاڑی',
    titleEn: 'Commercial Highway Driver with Vehicle',
    descUrdu: 'تمام ہائی وے روٹس کے تجربہ کار، بااخلاق اور لائسنس یافتہ کمرشل ڈرائیورز۔',
    descEn: 'Experienced commercial highway drivers holding valid HTV licenses and transit records.',
    alt: 'Commercial Highway Driver with Freight Vehicle - Field Operations',
    footerLabelUrdu: 'فیلڈ آپریشنز',
    footerLabelEn: 'Field Operations',
    footerStatusUrdu: 'گراؤنڈ فوٹو',
    footerStatusEn: 'Ground Photo',
  },
  {
    id: 'loading-dispatch',
    // "Loading/dispatch point photo (representative placeholder)"
    imageSrc: './images/placeholder-loading-dispatch.jpg',
    badgeUrdu: 'لوڈنگ و ڈسپیچ پوائنٹ',
    badgeEn: 'Loading & Dispatch Point',
    titleUrdu: 'فیکٹری و گودام لوڈنگ اور ڈسپیچ پوائنٹ',
    titleEn: 'Warehouse Loading & Dispatch Bay',
    descUrdu: 'ڈبل واٹر پروف ترپال بندی، کانٹا معائنہ اور سیدھی نان اسٹاپ روانگی۔',
    descEn: 'Double waterproof tarpaulin sealing, scale verification, and direct highway departure.',
    alt: 'Warehouse Loading Bay and Direct Highway Dispatch Point - Field Operations',
    footerLabelUrdu: 'فیلڈ آپریشنز',
    footerLabelEn: 'Field Operations',
    footerStatusUrdu: 'گراؤنڈ فوٹو',
    footerStatusEn: 'Ground Photo',
  },
];

export const CorporateCredibilitySection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollToCalculator = () => {
    const calcSection = document.getElementById('booking');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="corporate-credibility" className="py-12 sm:py-18 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3.5 font-urdu shadow-sm">
            <Award className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>
              {isUrdu ? 'سرکاری تصدیق شدہ کارپوریٹ لاجسٹکس | B2B Credibility' : 'FBR Verified Corporate Logistics | Enterprise B2B'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu leading-relaxed">
            {isUrdu ? 'کارپوریٹ اعتبار، قانونی ساکھ اور B2B خدمات' : 'Corporate Credibility & Enterprise Freight Solutions'}
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base lg:text-lg font-urdu leading-relaxed">
            {isUrdu 
              ? 'ٹیکسٹائل ملز، فلور ملز، زرعی آڑھتیوں اور ملٹی نیشنل تجارتی اداروں کے لیے 100% قابلِ اعتماد اور قانونی طور پر تصدیق شدہ FTL ٹرانسپورٹ۔' 
              : 'Official vendor credibility for industrial mills, manufacturing plants, grain traders, and corporate procurement managers across Pakistan.'}
          </p>

          {/* Quick Actions (View Profile Deck & Corporate Inquiry) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-urdu">
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm shadow-sm hover:shadow-md transition-colors cursor-pointer min-h-[44px]"
            >
              <FileText className="w-4 h-4 fill-current flex-shrink-0" />
              <span>{isUrdu ? 'آفیشل کمپنی پروفائل اور وینڈر کارڈ دیکھیں' : 'View Corporate Profile & Vendor Deck'}</span>
            </button>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md cursor-pointer min-h-[44px]"
            >
              <Briefcase className="w-4 h-4 text-white flex-shrink-0" />
              <span>{isUrdu ? 'کارپوریٹ B2B کنٹریکٹ انکوائری' : 'Corporate Contract Inquiry'}</span>
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars of Corporate Credibility (Vibrant Accent Cards) */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16 ${isUrdu ? 'text-right' : 'text-left'}`}>
          
          {/* Pillar 1: Tax & Legal Registration */}
          <div className="bg-white border border-amber-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-md transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-amber-800 font-urdu block mb-1">
                {isUrdu ? 'ایف بی آر تصدیق شدہ' : 'FBR Verified'}
              </span>
              <p className="text-base font-bold text-slate-900 font-urdu mb-2">
                {isUrdu ? 'سرکاری رجسٹریشن و قانونی ساکھ' : 'FBR Registered Tax Compliance'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {isUrdu 
                  ? 'ایف بی آر میں ایکٹو ٹیکس پیئر کے طور پر رجسٹرڈ۔ کارپوریٹ کلائنٹس اور انڈسٹریل ملز کے لیے سیلز ٹیکس اور ودہولڈنگ ٹیکس کی باقاعدہ رسیدیں۔' 
                  : 'Active FBR taxpayer status enabling seamless corporate withholding tax compliance and corporate vendor audit approval.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-amber-800 font-semibold font-urdu">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{isUrdu ? '100% تصدیق شدہ بزنس اینٹیٹی' : '100% Verified Commercial Entity'}</span>
            </div>
          </div>

          {/* Pillar 2: Computerized Weighbridge & POD */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 font-urdu tracking-wider block mb-1">
                {isUrdu ? 'کانٹا پرچی اور باقاعدہ بلٹی' : 'Certified Scale Slip & POD'}
              </span>
              <p className="text-base font-bold text-slate-900 font-urdu mb-2">
                {isUrdu ? 'شفاف وزن اور دستخط شدہ POD' : 'Official Bilti & Signed POD'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {isUrdu 
                  ? 'لوڈنگ کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی اور سرکاری بلٹی جاری کی جاتی ہے۔ ان لوڈنگ پر وصول کنندہ کی مہر و دستخط کے ساتھ تصدیق۔' 
                  : 'Certified computerized weighbridge slips provided post-loading. Official consignment Bilti and receiver-stamped Proof of Delivery (POD) returned.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-700 font-semibold font-urdu">
              <FileCheck2 className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
              <span>{isUrdu ? 'زیرو وزن تنازعہ' : 'Zero Weight Discrepancy'}</span>
            </div>
          </div>

          {/* Pillar 3: Dedicated Full Truckload Policy */}
          <div className="bg-white border border-blue-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-blue-800 font-urdu tracking-wider block mb-1">
                {isUrdu ? '100% وقف شدہ سنگل پارٹی گاڑی' : '100% Dedicated Single Shipper'}
              </span>
              <p className="text-base font-bold text-slate-900 font-urdu mb-2">
                {isUrdu ? 'زیرو مکسنگ اور ڈائریکٹ ترسیل' : 'Zero Cargo Mix & Direct Transit'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {isUrdu 
                  ? 'ہم پارسل یا مکس مال نہیں اٹھاتے۔ پوری گاڑی صرف آپ کے مال کے لیے مخصوص ہوتی ہے۔ فیکٹری گیٹ سے منزل تک بغیر رکے ترسیل۔' 
                  : 'We strictly reject loose shared parcel mixing. Entire cargo bay is exclusively sealed for your consignment, delivering direct from factory to destination.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-800 font-semibold font-urdu">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{isUrdu ? 'پوائنٹ ٹو پوائنٹ ڈائریکٹ ہائی وے' : 'Direct Point-to-Point Transit'}</span>
            </div>
          </div>

          {/* Pillar 4: Leadership & Proprietor Governance */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-blue-800 font-urdu tracking-wider block mb-1">
                {isUrdu ? 'ذاتی نگرانی اور 20+ سالہ تجربہ' : 'Personal Executive Governance'}
              </span>
              <p className="text-base font-bold text-slate-900 font-urdu mb-2">
                {isUrdu ? 'ڈائریکٹ پروپرائٹر رابطہ' : 'Direct Proprietor Accountability'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {isUrdu 
                  ? `پروپرائٹر ${COMPANY_INFO.proprietorUrdu} تمام کارپوریٹ کنٹریکٹس اور گاڑیوں کے شیڈول کی ذاتی نگرانی کرتے ہیں، جس سے مکمل اعتماد ملتا ہے۔` 
                  : `Proprietor ${COMPANY_INFO.proprietorEnglish} personally manages fleet dispatches and major B2B contracts, ensuring zero corporate bottlenecks.`}
              </p>
            </div>
            <Link
              to="/about"
              className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-bold font-urdu hover:text-blue-800 transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5 flex-shrink-0 text-blue-600" />
              <span>{isUrdu ? 'پروپرائٹر تعارف و کاروباری کوائف' : 'View Proprietor Profile'}</span>
            </Link>
          </div>

        </div>

        {/* Corporate B2B Long-Term Contract Capabilities */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-8 lg:p-10 shadow-sm mb-12 sm:mb-16">
          <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 border-b border-slate-200 pb-5 sm:pb-6 mb-6 sm:mb-8 ${isUrdu ? 'text-right' : 'text-left'}`}>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold font-urdu mb-2">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isUrdu ? 'صنعتی و تجارتی اداروں کے لیے معاہدے' : 'B2B Enterprise Transport Agreements'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-urdu">
                {isUrdu ? 'کارپوریٹ کنٹریکٹ لاجسٹکس کے امتیازی فوائد' : 'Long-Term Corporate Freight Contract Privileges'}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-urdu leading-relaxed">
              {isUrdu 
                ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی ٹیکسٹائل ملز، شوگر ملز اور ڈسٹری بیوٹرز کے ساتھ سالانہ اور ماہانہ باقاعدہ ٹرانسپورٹیشن ایگریمنٹس پر فلیٹ فراہم کرتی ہے۔' 
                : 'Warraich Goods offers structured annual and monthly transportation contracts with dedicated fleet allocation and formal computerized billing.'}
            </p>
          </div>

          {/* B2B Logistics Visual Showcase & 4 Contract Perks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Visual Factory Warehouse Dispatch Showcase */}
            <div className="lg:col-span-4 relative rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-end min-h-[260px] lg:min-h-full">
              <img 
                src="./images/factory-warehouse.webp" 
                alt="Industrial Factory and Warehouse Logistics Loading Bay - Warraich Goods" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.parentElement?.classList.add('hidden');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="relative z-10 p-5 text-white">
                <span className="inline-block bg-amber-500 text-slate-950 text-[11px] font-bold px-2.5 py-0.5 rounded font-mono mb-2 uppercase tracking-wider">
                  B2B Industrial Freight
                </span>
                <p className="font-bold text-base font-urdu text-white leading-snug">
                  {isUrdu ? 'فیکٹری ڈسپیچ و گودام لاجسٹکس' : 'Factory Dispatch & Warehouse Fleet'}
                </p>
                <p className="text-xs text-slate-200 font-urdu mt-1 leading-relaxed">
                  {isUrdu 
                    ? 'صنعتی یونٹس، ملز اور مینوفیکچرنگ پلانٹس کے لیے مخصوص لوڈنگ' 
                    : 'Scheduled dedicated loading for textile mills, plants, and manufacturing units'}
                </p>
              </div>
            </div>

            {/* 4 Contract Perks Grid */}
            <div className={`lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
              {CORPORATE_CREDENTIALS.corporateContractPerks.map((perk, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex items-start gap-3.5 hover:border-blue-300 transition-colors shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 border border-blue-200 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 font-urdu">
                      {isUrdu ? perk.titleUr : perk.titleEn}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                      {isUrdu ? perk.descUr : perk.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Sectors Served Showcase */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4 text-center font-urdu">
              {isUrdu ? 'اہم صنعتی شعبے جو وڑائچ گڈز پر اعتماد کرتے ہیں:' : 'Key Industrial Sectors Trusting Warraich Goods:'}
            </p>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
              {CORPORATE_CREDENTIALS.corporateSectors.map((sector, sIdx) => (
                <div key={sIdx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg hover:bg-slate-100/80 transition-colors">
                  <span className="text-blue-900 font-bold text-xs sm:text-sm block font-urdu mb-1">
                    {isUrdu ? sector.nameUr : sector.nameEn}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-urdu leading-relaxed">
                    {isUrdu ? sector.detailsUr : sector.detailsEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HUMAN-CENTRIC ON-GROUND OPERATIONS PHOTOGRAPHY (Real People & Yard) */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/90">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold font-urdu mb-3 shadow-xs">
              <Users className="w-4 h-4 text-blue-700 flex-shrink-0" />
              <span>{isUrdu ? 'فیلڈ مینجمنٹ اور آن گراؤنڈ سروس' : 'Field Management & Ground Service'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-urdu">
              {isUrdu ? 'پروپرائٹر سپروائزری، تجربہ کار ڈرائیورز اور فیلڈ آپریشنز' : 'Operational Leadership, Experienced Drivers & Ground Operations'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-urdu max-w-2xl mx-auto leading-relaxed">
              {isUrdu 
                ? 'پروپرائٹر زاہدان نصر وڑائچ کی فلیٹ نگرانی، تجربہ کار کمرشل ڈرائیورز اور فیلڈ میں براہ راست لوڈنگ و روانگی کا منظم نظام۔' 
                : 'Hands-on operational oversight by Proprietor Zahdan Nasar Warraich, professional highway drivers, and dedicated dispatch standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {GROUND_OPERATIONS_PHOTOS.map((slot) => (
              <div 
                key={slot.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Fallback Support */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={slot.imageSrc} 
                    alt={slot.alt} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackDiv = parent.querySelector('.photo-fallback');
                        if (fallbackDiv) fallbackDiv.classList.remove('hidden');
                      }
                    }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Fallback Icon Box if image missing */}
                  <div className="photo-fallback hidden absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400 p-4">
                    <Camera className="w-10 h-10 mb-2 text-slate-400" />
                    <span className="text-xs font-bold font-mono text-slate-500">{slot.id}.jpg</span>
                  </div>

                  {/* Top Floating Badge */}
                  <div className={`absolute top-3 z-10 ${isUrdu ? 'left-3' : 'right-3'}`}>
                    <span className="inline-flex items-center gap-1 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 font-urdu shadow-sm">
                      <Camera className="w-3 h-3 text-amber-400 flex-shrink-0" />
                      <span>{isUrdu ? slot.badgeUrdu : slot.badgeEn}</span>
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`p-4 sm:p-5 flex-1 flex flex-col justify-between ${isUrdu ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 font-urdu leading-snug mb-1.5">
                      {isUrdu ? slot.titleUrdu : slot.titleEn}
                    </h4>
                    <p className="text-xs text-slate-600 font-urdu leading-relaxed">
                      {isUrdu ? slot.descUrdu : slot.descEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-urdu">
                    <span className="flex items-center gap-1 text-blue-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{isUrdu ? slot.footerLabelUrdu : slot.footerLabelEn}</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {isUrdu ? slot.footerStatusUrdu : slot.footerStatusEn}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* CORPORATE PROFILE & VENDOR CREDENTIALS MODAL (Printable) */}
      {/* ======================================================== */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white text-slate-900 rounded-lg max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                  WG
                </div>
                <div>
                  <p className="text-base sm:text-lg font-bold text-slate-950 font-urdu">
                    {isUrdu ? 'آفیشل کارپوریٹ پروفائل و وینڈر کارڈ' : 'Official Corporate Profile & Vendor Credibility Deck'}
                  </p>
                  <span className="text-xs text-slate-500 font-mono">NTN: {COMPANY_INFO.ntn}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-lg text-xs transition cursor-pointer font-urdu"
                  title="Print / Save PDF"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">{isUrdu ? 'پرنٹ / PDF' : 'Print / PDF'}</span>
                </button>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Corporate Card Body */}
            <div id="printable-corporate-profile" className="space-y-6">
              
              {/* Official Enterprise Letterhead */}
              <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
                <div>
                  <span className="inline-block bg-amber-100 text-amber-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                    {CORPORATE_CREDENTIALS.fbrStatus}
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-slate-950 font-urdu">
                    {COMPANY_INFO.nameUrdu}
                  </p>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    {COMPANY_INFO.nameEnglish}
                  </p>
                  <p className="text-xs text-slate-500 font-urdu mt-1">
                    {COMPANY_INFO.taglineUrdu}
                  </p>
                </div>

                <div className="text-xs space-y-1 bg-white p-3 rounded-lg border border-slate-200 shadow-sm font-mono text-center sm:text-right">
                  <div className="font-bold text-amber-600">NTN: {COMPANY_INFO.ntn}</div>
                  <div className="text-slate-700">Phone: {COMPANY_INFO.phone1}</div>
                  <div className="text-slate-700">{COMPANY_INFO.phone2}</div>
                  <div className="text-slate-500">{COMPANY_INFO.email}</div>
                </div>
              </div>

              {/* Company Facts Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-900 text-sm font-urdu border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'کاروباری رجسٹریشن کوائف' : 'Enterprise Registration Details'}</span>
                  </p>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">{isUrdu ? 'رجسٹرڈ نام:' : 'Registered Name:'}</span>
                    <span className="font-bold text-slate-900">{COMPANY_INFO.nameEnglish}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">{isUrdu ? 'ٹیکس شناختی نمبر (NTN):' : 'National Tax Number (NTN):'}</span>
                    <span className="font-bold font-mono text-amber-600">{COMPANY_INFO.ntn}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">{isUrdu ? 'چیف ایگزیکٹو / پروپرائٹر:' : 'Chief Executive / Proprietor:'}</span>
                    <span className="font-bold text-slate-900">{isUrdu ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">{isUrdu ? 'کاروباری نوعیت:' : 'Entity Type:'}</span>
                    <span className="font-bold text-slate-900">{isUrdu ? 'کمرشل گڈز ٹرانسپورٹ کیریئر' : 'Commercial Goods Carrier'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isUrdu ? 'سروس اسکوپ:' : 'Service Scope:'}</span>
                    <span className="font-bold text-blue-700">{isUrdu ? '100% فل ٹرک لوڈ (FTL Only)' : '100% Dedicated Full Truckload'}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-900 text-sm font-urdu border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Warehouse className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'سروس کوریج و بکنگ طریقہ کار' : 'Service Coverage & Booking'}</span>
                  </p>
                  <div className="py-1 border-b border-slate-100">
                    <span className="text-slate-500 block mb-0.5">{isUrdu ? 'سروس کوریج:' : 'Service Coverage:'}</span>
                    <span className="font-semibold text-slate-900 block font-urdu">
                      {isUrdu ? 'سمندری، کمالیہ، فیصل آباد، ٹوبہ ٹیک سنگھ، لاہور، کراچی اور ملک بھر کے تمام روٹس' : 'Samundri, Kamalia, Faisalabad, Toba Tek Singh, Lahore, Karachi & all major routes'}
                    </span>
                  </div>
                  <div className="py-1 border-b border-slate-100">
                    <span className="text-slate-500 block mb-0.5">{isUrdu ? 'بکنگ کا طریقہ کار:' : 'Booking Mode:'}</span>
                    <span className="font-semibold text-slate-900 block font-urdu">
                      {isUrdu ? 'فون کال (0300-5370443) اور واٹس ایپ پر 24 گھنٹے فوری بکنگ' : '24/7 Direct Booking via Phone (0300-5370443) & WhatsApp'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isUrdu ? 'آپریشنل اوقات:' : 'Operating Hours:'}</span>
                    <span className="font-bold text-slate-900">24/7 Round the Clock (7 Days)</span>
                  </div>
                </div>

              </div>

              {/* Fleet Capacity Table */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 text-sm font-urdu mb-2.5 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span>{isUrdu ? 'فلیٹ کیٹیگریز اور لوڈنگ گنجائش' : 'Fleet Specifications & Weight Classes'}</span>
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse font-urdu">
                    <thead>
                      <tr className="bg-slate-200 text-slate-800">
                        <th className="p-2 font-bold">{isUrdu ? 'گاڑی کا نام' : 'Vehicle Type'}</th>
                        <th className="p-2 font-bold">{isUrdu ? 'وزنی گنجائش' : 'Capacity'}</th>
                        <th className="p-2 font-bold">{isUrdu ? 'باڈی سائز' : 'Body Specs'}</th>
                        <th className="p-2 font-bold">{isUrdu ? 'موزوں کارگو' : 'Ideal Cargo'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {FLEET_DATA.map((v, idx) => (
                        <tr key={idx} className="hover:bg-white transition-colors">
                          <td className="p-2 font-bold text-slate-900">{isUrdu ? v.nameUrdu : v.nameEnglish}</td>
                          <td className="p-2 text-amber-700 font-semibold">{isUrdu ? v.capacityUrdu : v.capacity}</td>
                          <td className="p-2 text-slate-600">{v.dimensions}</td>
                          <td className="p-2 text-slate-500">{isUrdu ? v.idealForUrdu[0] : v.idealForEnglish[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formal SOP & Compliance Checklist */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900 text-sm font-urdu mb-2 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-blue-600" />
                  <span>{isUrdu ? 'معیاری آپریٹنگ طریقہ کار (SOPs) برائے کارپوریٹ کلائنٹس' : 'Standard Operating Procedures (SOPs) for Corporate Clients'}</span>
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-urdu">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{isUrdu ? '100% واٹر پروف ڈبل پی وی سی ترپال لازمی' : '100% Waterproof Heavy Double Tarpaulin'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{isUrdu ? 'روانگی کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی' : 'Computerized Scale Weight Slip on Loading'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{isUrdu ? 'نادرا بائیو میٹرک و لائسنس تصدیق شدہ ڈرائیورز' : 'NADRA Verified Biometric Drivers'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{isUrdu ? 'سرکاری بلٹی اور وصول کنندہ کی مہر شدہ رسید (POD)' : 'Formal Transport Bilti & Signed POD Receipt'}</span>
                  </div>
                </div>
              </div>

              {/* Proprietor Endorsement Stamp */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="font-urdu text-amber-900 text-center sm:text-start">
                  <strong>{isUrdu ? 'باضابطہ تصدیق:' : 'Official Endorsement:'}</strong> {isUrdu ? 'یہ کوائف وڑائچ گڈز ٹرانسپورٹ کمپنی کی آفیشل وینڈر تصدیق کے لیے جاری کیے گئے ہیں۔' : 'Issued by Warraich Goods Transport Company as official proof of corporate credibility.'}
                </div>
                <div className="text-center sm:text-right font-urdu font-bold text-slate-900">
                  <div className="text-amber-700">{isUrdu ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}</div>
                  <div className="text-[10px] text-slate-500 font-normal">{isUrdu ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}</div>
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 font-urdu">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition-colors cursor-pointer min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="font-urdu font-bold">
                  {isUrdu ? 'کاروباری پروفائل پرنٹ / محفوظ کریں' : 'Print / Save Profile'}
                </span>
              </button>

              <button
                onClick={() => setShowProfileModal(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-lg text-xs transition cursor-pointer min-h-[44px]"
              >
                {isUrdu ? 'بند کریں' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
