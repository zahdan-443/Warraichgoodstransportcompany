import React, { useState } from 'react';
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
  Truck
} from 'lucide-react';
import { COMPANY_INFO, CORPORATE_CREDENTIALS, FLEET_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

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
    <section id="corporate-credibility" className="py-12 sm:py-18 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3.5 font-urdu shadow-sm">
            <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              {isUrdu ? 'سرکاری تصدیق شدہ کارپوریٹ لاجسٹکس | B2B Credibility' : 'FBR Verified Corporate Logistics | Enterprise B2B'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu tracking-tight">
            {isUrdu ? 'کارپوریٹ اعتبار، قانونی ساکھ اور B2B خدمات' : 'Corporate Credibility & Enterprise Freight Solutions'}
          </h2>
          <p className="text-slate-400 mt-2.5 text-sm sm:text-base lg:text-lg font-urdu leading-relaxed">
            {isUrdu 
              ? 'ٹیکسٹائل ملز، فلور ملز، زرعی آڑھتیوں اور ملٹی نیشنل تجارتی اداروں کے لیے 100% قابلِ اعتماد اور قانونی طور پر تصدیق شدہ FTL ٹرانسپورٹ۔' 
              : 'Official vendor credibility for industrial mills, manufacturing plants, grain traders, and corporate procurement managers across Pakistan.'}
          </p>

          {/* Quick Actions (View Profile Deck & Corporate Inquiry) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-urdu">
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-xl transition-transform active:scale-95 cursor-pointer min-h-[44px]"
            >
              <FileText className="w-4 h-4 fill-current flex-shrink-0" />
              <span>{isUrdu ? 'آفیشل کمپنی پروفائل اور وینڈر کارڈ دیکھیں' : 'View Corporate Profile & Vendor Deck'}</span>
            </button>

            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 px-5 py-3 rounded-2xl text-xs sm:text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              <Briefcase className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{isUrdu ? 'کارپوریٹ B2B کنٹریکٹ انکوائری' : 'Corporate Contract Inquiry'}</span>
            </button>
          </div>
        </div>

        {/* 4 Core Pillars of Corporate Credibility */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16 ${isUrdu ? 'text-right' : 'text-left'}`}>
          
          {/* Pillar 1: Tax & Legal Registration */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-amber-400 font-mono tracking-wider block mb-1">
                FBR NTN: {COMPANY_INFO.ntn}
              </span>
              <h3 className="text-base font-bold text-white font-urdu mb-2">
                {isUrdu ? 'سرکاری رجسٹریشن و قانونی ساکھ' : 'FBR Registered Tax Compliance'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                {isUrdu 
                  ? `ایف بی آر میں ایکٹو ٹیکس پیئر NTN: ${COMPANY_INFO.ntn} کے ساتھ رجسٹرڈ۔ کارپوریٹ کلائنٹس کے لیے سیلز ٹیکس اور ودہولڈنگ ٹیکس کی باقاعدہ رسیدیں۔` 
                  : `Active FBR taxpayer status (NTN: ${COMPANY_INFO.ntn}) enabling seamless corporate withholding tax compliance and corporate vendor audit approval.`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold font-urdu">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{isUrdu ? '100% تصدیق شدہ بزنس اینٹیٹی' : '100% Verified Commercial Entity'}</span>
            </div>
          </div>

          {/* Pillar 2: Computerized Weighbridge & POD */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-300 font-urdu tracking-wider block mb-1">
                {isUrdu ? 'کانٹا پرچی اور باقاعدہ بلٹی' : 'Certified Scale Slip & POD'}
              </span>
              <h3 className="text-base font-bold text-white font-urdu mb-2">
                {isUrdu ? 'شفاف وزن اور دستخط شدہ POD' : 'Official Bilti & Signed POD'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                {isUrdu 
                  ? 'لوڈنگ کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی اور سرکاری بلٹی جاری کی جاتی ہے۔ ان لوڈنگ پر وصول کنندہ کی مہر و دستخط کے ساتھ تصدیق۔' 
                  : 'Certified computerized weighbridge slips provided post-loading. Official consignment Bilti and receiver-stamped Proof of Delivery (POD) returned.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-300 font-semibold font-urdu">
              <FileCheck2 className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
              <span>{isUrdu ? 'زیرو وزن تنازعہ' : 'Zero Weight Discrepancy'}</span>
            </div>
          </div>

          {/* Pillar 3: Dedicated Full Truckload Policy */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-300 font-urdu tracking-wider block mb-1">
                {isUrdu ? '100% وقف شدہ سنگل پارٹی گاڑی' : '100% Dedicated Single Shipper'}
              </span>
              <h3 className="text-base font-bold text-white font-urdu mb-2">
                {isUrdu ? 'زیرو مکسنگ اور ڈائریکٹ ترسیل' : 'Zero Cargo Mix & Direct Transit'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                {isUrdu 
                  ? 'ہم پارسل یا مکس مال نہیں اٹھاتے۔ پوری گاڑی صرف آپ کے مال کے لیے مخصوص ہوتی ہے۔ فیکٹری گیٹ سے منزل تک بغیر رکے ترسیل۔' 
                  : 'We strictly reject loose shared parcel mixing. Entire cargo bay is exclusively sealed for your consignment, delivering direct from factory to destination.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold font-urdu">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{isUrdu ? 'پوائنٹ ٹو پوائنٹ ڈائریکٹ ہائی وے' : 'Direct Point-to-Point Transit'}</span>
            </div>
          </div>

          {/* Pillar 4: Leadership & Proprietor Governance */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className={`w-11 h-11 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 flex items-center justify-center mb-4 ${isUrdu ? 'ml-auto' : 'mr-auto'}`}>
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-300 font-urdu tracking-wider block mb-1">
                {isUrdu ? 'ذاتی نگرانی اور 20+ سالہ تجربہ' : 'Personal Executive Governance'}
              </span>
              <h3 className="text-base font-bold text-white font-urdu mb-2">
                {isUrdu ? 'ڈائریکٹ پروپرائٹر رابطہ' : 'Direct Proprietor Accountability'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                {isUrdu 
                  ? `پروپرائٹر ${COMPANY_INFO.proprietorUrdu} تمام کارپوریٹ کنٹریکٹس اور گاڑیوں کے شیڈول کی ذاتی نگرانی کرتے ہیں، جس سے مکمل اعتماد ملتا ہے۔` 
                  : `Proprietor ${COMPANY_INFO.proprietorEnglish} personally manages fleet dispatches and major B2B contracts, ensuring zero corporate bottlenecks.`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold font-mono">
              <PhoneCall className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{COMPANY_INFO.phone1}</span>
            </div>
          </div>

        </div>

        {/* Corporate B2B Long-Term Contract Capabilities */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl mb-12 sm:mb-16">
          <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 border-b border-slate-800 pb-5 sm:pb-6 mb-6 sm:mb-8 ${isUrdu ? 'text-right' : 'text-left'}`}>
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold font-urdu mb-2">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isUrdu ? 'صنعتی و تجارتی اداروں کے لیے معاہدے' : 'B2B Enterprise Transport Agreements'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-urdu">
                {isUrdu ? 'کارپوریٹ کنٹریکٹ لاجسٹکس کے امتیازی فوائد' : 'Long-Term Corporate Freight Contract Privileges'}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-urdu leading-relaxed">
              {isUrdu 
                ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی ٹیکسٹائل ملز، شوگر ملز اور ڈسٹری بیوٹرز کے ساتھ سالانہ اور ماہانہ باقاعدہ ٹرانسپورٹیشن ایگریمنٹس پر فلیٹ فراہم کرتی ہے۔' 
                : 'Warraich Goods offers structured annual and monthly transportation contracts with dedicated fleet allocation and formal computerized billing.'}
            </p>
          </div>

          {/* 4 Contract Perks Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
            {CORPORATE_CREDENTIALS.corporateContractPerks.map((perk, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800/90 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 sm:gap-4 hover:border-amber-400/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/20 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-white font-urdu">
                    {isUrdu ? perk.titleUr : perk.titleEn}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                    {isUrdu ? perk.descUr : perk.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sectors Served Showcase */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 text-center font-urdu">
              {isUrdu ? 'اہم صنعتی شعبے جو وڑائچ گڈز پر اعتماد کرتے ہیں:' : 'Key Industrial Sectors Trusting Warraich Goods:'}
            </h4>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
              {CORPORATE_CREDENTIALS.corporateSectors.map((sector, sIdx) => (
                <div key={sIdx} className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                  <span className="text-amber-400 font-bold text-xs sm:text-sm block font-urdu mb-1">
                    {isUrdu ? sector.nameUr : sector.nameEn}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-urdu leading-relaxed">
                    {isUrdu ? sector.detailsUr : sector.detailsEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* CORPORATE PROFILE & VENDOR CREDENTIALS MODAL (Printable) */}
      {/* ======================================================== */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white text-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                  WG
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-urdu">
                    {isUrdu ? 'آفیشل کارپوریٹ پروفائل و وینڈر کارڈ' : 'Official Corporate Profile & Vendor Credibility Deck'}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">NTN: {COMPANY_INFO.ntn}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer font-urdu"
                  title="Print / Save PDF"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">{isUrdu ? 'پرنٹ / PDF' : 'Print / PDF'}</span>
                </button>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Corporate Card Body */}
            <div id="printable-corporate-profile" className="space-y-6">
              
              {/* Official Enterprise Letterhead */}
              <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
                <div>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                    {CORPORATE_CREDENTIALS.fbrStatus}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-urdu">
                    {COMPANY_INFO.nameUrdu}
                  </h2>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    {COMPANY_INFO.nameEnglish}
                  </p>
                  <p className="text-xs text-slate-500 font-urdu mt-1">
                    {COMPANY_INFO.taglineUrdu}
                  </p>
                </div>

                <div className="text-xs space-y-1 bg-white p-3 rounded-xl border border-slate-200 shadow-sm font-mono text-center sm:text-right">
                  <div className="font-bold text-amber-600">NTN: {COMPANY_INFO.ntn}</div>
                  <div className="text-slate-700">Phone: {COMPANY_INFO.phone1}</div>
                  <div className="text-slate-700">{COMPANY_INFO.phone2}</div>
                  <div className="text-slate-500">{COMPANY_INFO.email}</div>
                </div>
              </div>

              {/* Company Facts Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm font-urdu border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'کاروباری رجسٹریشن کوائف' : 'Enterprise Registration Details'}</span>
                  </h4>
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
                    <span className="font-bold text-emerald-700">{isUrdu ? '100% فل ٹرک لوڈ (FTL Only)' : '100% Dedicated Full Truckload'}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm font-urdu border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Warehouse className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'آفیشل اڈے و ٹرمینلز' : 'Terminals & Official Offices'}</span>
                  </h4>
                  <div className="py-1 border-b border-slate-100">
                    <span className="text-slate-500 block mb-0.5">{isUrdu ? 'ہیڈ آفس سمندری اڈا:' : 'Head Office Samundri Adda:'}</span>
                    <span className="font-semibold text-slate-900 block font-urdu">{CORPORATE_CREDENTIALS.headOfficeAddressUrdu}</span>
                  </div>
                  <div className="py-1 border-b border-slate-100">
                    <span className="text-slate-500 block mb-0.5">{isUrdu ? 'کمالیہ برانچ اڈا:' : 'Kamalia Branch Adda:'}</span>
                    <span className="font-semibold text-slate-900 block font-urdu">{CORPORATE_CREDENTIALS.branchOfficeAddressUrdu}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isUrdu ? 'آپریشنل اوقات:' : 'Operating Hours:'}</span>
                    <span className="font-bold text-slate-900">24/7 Round the Clock (7 Days)</span>
                  </div>
                </div>

              </div>

              {/* Fleet Capacity Table */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm font-urdu mb-2.5 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span>{isUrdu ? 'فلیٹ کیٹیگریز اور لوڈنگ گنجائش' : 'Fleet Specifications & Weight Classes'}</span>
                </h4>
                
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
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm font-urdu mb-2 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  <span>{isUrdu ? 'معیاری آپریٹنگ طریقہ کار (SOPs) برائے کارپوریٹ کلائنٹس' : 'Standard Operating Procedures (SOPs) for Corporate Clients'}</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-urdu">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{isUrdu ? '100% واٹر پروف ڈبل پی وی سی ترپال لازمی' : '100% Waterproof Heavy Double Tarpaulin'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{isUrdu ? 'روانگی کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی' : 'Computerized Scale Weight Slip on Loading'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{isUrdu ? 'نادرا بائیو میٹرک و لائسنس تصدیق شدہ ڈرائیورز' : 'NADRA Verified Biometric Drivers'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{isUrdu ? 'سرکاری بلٹی اور وصول کنندہ کی مہر شدہ رسید (POD)' : 'Formal Transport Bilti & Signed POD Receipt'}</span>
                  </div>
                </div>
              </div>

              {/* Proprietor Endorsement Stamp */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
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
              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition cursor-pointer min-h-[44px]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{isUrdu ? `براہ راست کال کریں (${COMPANY_INFO.phone1})` : `Call Direct (${COMPANY_INFO.phone1})`}</span>
              </a>

              <button
                onClick={() => setShowProfileModal(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs transition cursor-pointer min-h-[44px]"
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
