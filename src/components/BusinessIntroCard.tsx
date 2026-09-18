import React, { useState } from 'react';
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
  Copy, 
  Check, 
  ExternalLink,
  Award
} from 'lucide-react';
import { COMPANY_INFO, BRANCHES_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const BusinessIntroCard: React.FC = () => {
  const { language } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const isUrdu = language === 'ur';

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="business-intro" className="py-12 sm:py-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 border-t border-slate-200 scroll-mt-20">
      <div id="about" className="sr-only" />
      <div id="branches" className="sr-only" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className={`text-center max-w-3xl mx-auto mb-8 sm:mb-12 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-sm">
            <Award className="w-4 h-4 text-amber-700" />
            <span>{isUrdu ? 'آفیشل بزنس پروفائل و تعارفی کارڈ' : 'Official Business Introduction & Directory'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            {isUrdu ? 'کاروباری تعارف و مکمل رابطہ کوائف' : 'Business Profile & Official Credentials'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isUrdu 
              ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی کے مصدقہ کوائف، ہیڈ آفس و برانچز کے پتے، پروپرائٹر معلومات اور قانونی رجسٹریشن'
              : 'Verified credentials, head office & branch locations, proprietor leadership, and tax compliance summary.'}
          </p>
        </div>

        {/* Master Introduction Card Container */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden print:shadow-none print:border-slate-400">
          
          {/* Top Decorative Header Strip */}
          <div className="h-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* 1. Header Hero Banner: Logo, Company Name & FBR Compliance */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Logo Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 p-0.5 shadow-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white rounded-[14px] p-1.5 flex items-center justify-center">
                    <img 
                      src="./images/logo.png" 
                      alt="Warraich Goods Logo" 
                      className="w-full h-full object-contain"
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
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1.5 rounded-xl text-xs font-bold font-mono">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>NTN: {COMPANY_INFO.ntn}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1.5 rounded-xl text-xs font-bold font-urdu">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>{isUrdu ? 'ایکٹیو ٹیکس پیئر (FBR)' : 'Active Taxpayer (FBR)'}</span>
                </div>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer print:hidden"
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
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2 font-urdu">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'کاروباری تعارف و تاریخ' : 'Business Introduction'}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-urdu">
                    {isUrdu 
                      ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی سمندری و کمالیہ سے شروع ہو کر اب ملک کے تمام بڑے صنعتی و تجارتی مراکز تک تیز رفتار اور براہ راست مال برداری مہیا کر رہی ہے۔ ہمارا بنیادی فوکس معیاری گاڑیاں، وقت کی پابندی اور سامان کی مکمل حفاظت ہے۔'
                      : 'Warraich Goods Transport Company delivers direct, dedicated Full Truckload freight transit connecting Punjab, Sindh, KPK, and Balochistan. Our core focus is vehicle reliability, strict schedule adherence, and cargo safety.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-urdu">
                  <span>{isUrdu ? 'ماہانہ فیکٹری کنٹریکٹس و کسٹم سائز گاڑیاں دستیاب' : 'Monthly corporate contracts and custom haulage available'}</span>
                </div>
              </div>

              {/* Pillar 2: Proprietor Leadership */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2 font-urdu">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>{isUrdu ? 'پروپرائٹر و قیادت' : 'Proprietor & Leadership'}</span>
                  </div>
                  
                  <div className="space-y-1.5 font-urdu">
                    <p className="text-base font-extrabold text-slate-900">
                      {isUrdu ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                    </p>
                    <p className="text-xs font-semibold text-amber-700">
                      {isUrdu ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {isUrdu
                        ? 'تمام کارپوریٹ گاہکوں اور گاڑیوں کے شیڈول کی براہِ راست نگرانی پروپرائٹر خود کرتے ہیں، جس سے تاجر برادری اور فیکٹری مالکان کو مکمل شفافیت و تحفظ حاصل رہتا ہے۔'
                        : 'Proprietor personally oversees fleet operations, industrial contracts, and schedule integrity, ensuring complete accountability.'}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-urdu">
                  <span>{isUrdu ? 'براہِ راست ذمے داری و شفاف لین دین' : 'Direct accountability & transparent billing'}</span>
                </div>
              </div>

              {/* Pillar 3: Core Freight Capabilities */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2 font-urdu">
                    <Truck className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? 'اہم خدمات و سہولیات' : 'Key Services & Fleet'}</span>
                  </div>
                  
                  <ul className="space-y-2 text-xs text-slate-700 font-urdu">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                      <span>{isUrdu ? 'مکمل گاڑی (FTL) براہ راست ترسیل' : 'Dedicated Full Truckload (FTL)'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                      <span>{isUrdu ? 'زرعی اجناس، ٹیکسٹائل و فیکٹری خام مال' : 'Agricultural, textile & industrial cargo'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                      <span>{isUrdu ? 'شہزور، مزدا، 22 تا 40 فٹ ٹرالر و بیڈفورڈ' : 'Shehzore, Mazda, Flatbeds & Bedford'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                      <span>{isUrdu ? '100% واٹر پروف ترپال و موسمی تحفظ' : 'Waterproof tarpaulin & weather shield'}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-urdu">
                  <span>{isUrdu ? 'قانونی کمپیوٹرائزڈ بلٹی و وزن کی پرچی' : 'Computerized bilty & verified weight slips'}</span>
                </div>
              </div>

            </div>

            {/* 3. Official Branches, Addresses & Contact Numbers */}
            <div className="pt-8">
              
              <h4 className="text-lg font-bold text-slate-900 mb-6 font-urdu text-center sm:text-start flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>{isUrdu ? 'باضابطہ برانچز، پتے اور رابطہ ڈائریکٹری' : 'Official Branch Addresses & Directory'}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Branch 1: Samundri Main Hub */}
                <div className="bg-gradient-to-br from-amber-50/50 via-white to-slate-50 rounded-2xl p-5 sm:p-6 border border-amber-200 shadow-sm relative group">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                        {isUrdu ? 'ہیڈ آفس / مرکزی اڈا' : 'Head Office'}
                      </span>
                      <h5 className="text-base sm:text-lg font-bold text-slate-900 font-urdu mt-1.5">
                        {isUrdu ? 'سمندری اڈا (ضلع فیصل آباد)' : 'Samundri Hub (Faisalabad Dist.)'}
                      </h5>
                    </div>

                    <button
                      onClick={() => handleCopy(BRANCHES_DATA[0].addressUrdu, 'samundri')}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 bg-white border border-slate-200 hover:border-slate-300 px-2 py-1 rounded-lg transition shadow-xs cursor-pointer print:hidden"
                      title="Copy Address"
                    >
                      {copiedKey === 'samundri' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">{isUrdu ? 'کاپی ہوگیا' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{isUrdu ? 'پتہ کاپی' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5 text-xs text-slate-700 font-urdu mb-4">
                    <p className="font-semibold text-slate-900 flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{isUrdu ? BRANCHES_DATA[0].addressUrdu : BRANCHES_DATA[0].addressEnglish}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mr-5">
                      {isUrdu ? 'قریب: 466 چوک، اوکاڑہ بائی پاس، سمندری' : 'Near 466 Chowk, Okara Bypass, Samundri'}
                    </p>
                  </div>

                  {/* Phone & Map Link */}
                  <div className="pt-3 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-900 font-mono font-bold">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>{BRANCHES_DATA[0].phone1}</span>
                      <span className="text-[10px] text-slate-500 font-sans font-normal">(Jazz)</span>
                    </div>

                    <a
                      href={BRANCHES_DATA[0].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-bold font-urdu print:hidden"
                    >
                      <span>{isUrdu ? 'گوگل میپ لوکیشن' : 'Open in Maps'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Branch 2: Kamalia Branch */}
                <div className="bg-gradient-to-br from-blue-50/40 via-white to-slate-50 rounded-2xl p-5 sm:p-6 border border-blue-200 shadow-sm relative group">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block bg-blue-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                        {isUrdu ? 'برانچ آفس' : 'Branch Office'}
                      </span>
                      <h5 className="text-base sm:text-lg font-bold text-slate-900 font-urdu mt-1.5">
                        {isUrdu ? 'کمالیہ برانچ (ضلع ٹوبہ ٹیک سنگھ)' : 'Kamalia Branch (Toba Dist.)'}
                      </h5>
                    </div>

                    <button
                      onClick={() => handleCopy(BRANCHES_DATA[1].addressUrdu, 'kamalia')}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 bg-white border border-slate-200 hover:border-slate-300 px-2 py-1 rounded-lg transition shadow-xs cursor-pointer print:hidden"
                      title="Copy Address"
                    >
                      {copiedKey === 'kamalia' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">{isUrdu ? 'کاپی ہوگیا' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{isUrdu ? 'پتہ کاپی' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5 text-xs text-slate-700 font-urdu mb-4">
                    <p className="font-semibold text-slate-900 flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{isUrdu ? BRANCHES_DATA[1].addressUrdu : BRANCHES_DATA[1].addressEnglish}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mr-5">
                      {isUrdu ? 'قریب: رجانہ روڈ، بلمقابل رائل پیلس، کمالیہ' : 'Near Rajana Road, Opp Royal Palace, Kamalia'}
                    </p>
                  </div>

                  {/* Phone & Map Link */}
                  <div className="pt-3 border-t border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-900 font-mono font-bold">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>{BRANCHES_DATA[1].phone2}</span>
                      <span className="text-[10px] text-slate-500 font-sans font-normal">(Ufone)</span>
                    </div>

                    <a
                      href={BRANCHES_DATA[1].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-bold font-urdu print:hidden"
                    >
                      <span>{isUrdu ? 'گوگل میپ لوکیشن' : 'Open in Maps'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Universal Official Email & Support Timing Ribbon */}
              <div className="mt-6 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Official Email</span>
                    <p className="text-xs sm:text-sm font-bold font-mono text-white">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="font-urdu">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                      {isUrdu ? 'ورکنگ اوقات' : 'Operating Hours'}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-400">
                      {isUrdu ? '24/7 راؤنڈ دی کلاک ترسیل و لوڈنگ' : '24/7 Round-the-Clock Transit'}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Card Footer Watermark */}
          <div className="bg-slate-50 px-6 sm:px-10 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-urdu">
            <span>
              {isUrdu 
                ? '© وڑائچ گڈز ٹرانسپورٹ کمپنی - جملہ حقوق بحقِ ادارہ محفوظ ہیں' 
                : '© Warraich Goods Transport Company. All rights reserved.'}
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              VERIFIED TRANSPORT BUSINESS • NTN {COMPANY_INFO.ntn}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
