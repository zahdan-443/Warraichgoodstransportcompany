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
  Award,
  Route,
  Navigation,
  CheckCircle2,
  Tag,
  Youtube,
  Facebook,
  MessageCircle,
  Star
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS, GOOGLE_REVIEW_URL } from '../data/companyData';
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
              ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی کے مصدقہ کوائف، سروس نیٹ ورک، پروپرائٹر معلومات اور قانونی رجسٹریشن'
              : 'Verified credentials, nationwide service coverage network, proprietor leadership, and tax compliance summary.'}
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
                    ? 'ہم پورے پاکستان میں سنگل پارٹی 100% مخصوص فل ٹرک لوڈ (FTL) مال برداری کی آن کال و آن لائن سہولت فراہم کرتے ہیں۔ نیچے دیے گئے تمام شہروں اور صنعتی روٹس کے لیے فوری بکنگ دستیاب ہے:'
                    : 'We provide dedicated 100% Full Truckload (FTL) freight haulage across Pakistan with direct phone and WhatsApp booking. Daily fleet availability across all key commercial hubs:'}
                </p>
              </div>

              {/* Two 60-Word Urdu SEO Paragraphs for Samundri & Kamalia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
                {/* Samundri Service Area Paragraph */}
                <div className="bg-gradient-to-br from-amber-50/70 via-white to-slate-50 border border-amber-200 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-amber-100">
                    <span className="font-bold text-slate-900 text-sm font-urdu flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-amber-600" />
                      <span>سمندری سے مال برداری و بکنگ (Samundri Service)</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold bg-amber-200/70 text-amber-950 px-2 py-0.5 rounded-md">
                      24/7 On-Call
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 font-urdu leading-relaxed">
                    سمندری اور ملحقہ علاقوں کے تاجروں اور زمینداروں کے لیے سمندری سے مال کی بکنگ (Samundri se maal ki booking) چوبیس گھنٹے دستیاب ہے۔ ہمارے پاس زرعی اجناس، ٹیکسٹائل، کھاد اور انڈسٹریل سامان کی ترسیل کے لیے شہزور، مزدا، سیمپل اور بیڈفورڈ (Shehzore, Mazda, Bedford) ہر وقت تیار ہیں۔ آپ صرف فون یا واٹس ایپ پر رابطہ کریں۔ ہم فوری طور پر مخصوص FTL گاڑی آپ کے گودام یا فیکٹری روانہ کرتے ہیں۔ گاڑی بغیر کسی تاخیر کے سیدھی منزل پر پہنچتی ہے۔
                  </p>
                  <div className="mt-3.5 pt-3 border-t border-amber-100/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-500 font-urdu">آن کال و واٹس ایپ بکنگ:</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:03005370443"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-lg transition"
                      >
                        <Phone className="w-3 h-3 text-amber-700" />
                        <span>0300-5370443</span>
                      </a>
                      <a
                        href="https://wa.me/923005370443"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-lg transition"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Kamalia Service Area Paragraph */}
                <div className="bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 border border-emerald-200 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-emerald-100">
                    <span className="font-bold text-slate-900 text-sm font-urdu flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-emerald-600" />
                      <span>کمالیہ سے گڈز ٹرانسپورٹ (Kamalia Service)</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold bg-emerald-200/70 text-emerald-950 px-2 py-0.5 rounded-md">
                      24/7 On-Call
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 font-urdu leading-relaxed">
                    کمالیہ، رجانہ، پیر محل اور غلہ منڈی کے تاجروں کے لیے کمالیہ سے گڈز ٹرانسپورٹ (Kamalia se goods transport) کی سروس دستیاب ہے۔ مکئی، گندم، چینی، کپاس اور پولٹری فیڈ کی ترسیل کے لیے شہزور، مزدا، سیمپل اور بیڈفورڈ (Shehzore, Mazda, Bedford) ہر وقت تیار رہتے ہیں۔ ہم 100% فل ٹرک لوڈ پر گاڑیاں فوری روانہ کرتے ہیں۔ پورے پاکستان کے لیے شفاف کرایہ اور محفوظ مال برداری اب ایک فون کال پر میسر ہے۔
                  </p>
                  <div className="mt-3.5 pt-3 border-t border-emerald-100/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-500 font-urdu">آن کال و واٹس ایپ بکنگ:</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:03005370443"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-lg transition"
                      >
                        <Phone className="w-3 h-3 text-emerald-700" />
                        <span>0300-5370443</span>
                      </a>
                      <a
                        href="https://wa.me/923005370443"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-lg transition"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* 14 Service Area Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {SERVICE_AREAS.map((area) => (
                  <div 
                    key={area.id}
                    className="bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-amber-300 rounded-xl p-3.5 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="font-extrabold text-slate-900 text-sm font-urdu leading-snug">
                            {area.nameUrdu} <span className="text-xs font-semibold text-slate-500 font-sans">({area.nameEnglish})</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 font-urdu leading-tight mb-3">
                        {isUrdu ? area.descriptionUrdu : area.descriptionEnglish}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-1.5">
                      <a
                        href={`tel:${area.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2 py-1.5 rounded-lg text-xs transition active:scale-95 shadow-2xs font-urdu"
                        title={`Call ${area.nameEnglish} (0300-5370443)`}
                        aria-label={`Call Warraich Goods for ${area.nameEnglish}`}
                      >
                        <Phone className="w-3 h-3 fill-current" />
                        <span>{isUrdu ? `کال ${area.nameUrdu}` : `Call ${area.nameEnglish}`}</span>
                      </a>

                      <a
                        href={area.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2 py-1.5 rounded-lg text-xs transition active:scale-95 shadow-2xs font-urdu"
                        title={`WhatsApp booking for ${area.nameEnglish}`}
                        aria-label={`WhatsApp Booking for ${area.nameEnglish}`}
                      >
                        <MessageCircle className="w-3 h-3 fill-current" />
                        <span>{isUrdu ? `واٹس ایپ ${area.nameUrdu}` : `WhatsApp ${area.nameEnglish}`}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Review us on Google Button Below Service Areas */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-amber-50/80 via-white to-amber-50/50 border border-amber-200/90 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-urdu">
                      {isUrdu ? 'کیا آپ نے وڑائچ گڈز ٹرانسپورٹ کے ساتھ مال کی بکنگ کی ہے؟' : 'Have you booked cargo with Warraich Goods?'}
                    </h4>
                    <p className="text-xs text-slate-600 font-urdu mt-0.5">
                      {isUrdu ? 'ہمارے ڈرائیورز، بکنگ اور ترسیل کے متعلق اپنی قیمتی رائے اور ریٹنگ گوگل پر شیئر کریں۔' : 'Share your rating and feedback on our Google profile.'}
                    </p>
                  </div>
                </div>

                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-urdu transition shadow-sm hover:scale-105 active:scale-95 flex-shrink-0"
                  aria-label="Review Warraich Goods Transport Company on Google"
                >
                  <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>{isUrdu ? 'گوگل پر ہمارا ریویو دیں' : 'Review us on Google'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
                </a>
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

              {/* Official Social Media Channels Banner */}
              <div className="mt-4 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-700 font-urdu">
                    {isUrdu ? 'آفیشل سوشل چینلز و تصدیق شدہ نیٹ ورک:' : 'Official Verified Channels:'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {/* YouTube Link */}
                  <a
                    href={COMPANY_INFO.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 hover:border-red-300 px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition shadow-2xs hover:scale-105"
                    title="Official YouTube Channel"
                  >
                    <Youtube className="w-4 h-4 fill-current text-red-600" />
                    <span>{COMPANY_INFO.youtubeHandle}</span>
                    <ExternalLink className="w-3 h-3 text-red-400" />
                  </a>

                  {/* Facebook Link */}
                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 hover:border-blue-300 px-3 py-1.5 rounded-xl text-xs font-bold font-urdu transition shadow-2xs hover:scale-105"
                    title="Official Facebook Page"
                  >
                    <Facebook className="w-4 h-4 fill-current text-blue-600" />
                    <span>{isUrdu ? 'فیس بک پیج' : 'Facebook Page'}</span>
                    <ExternalLink className="w-3 h-3 text-blue-400" />
                  </a>
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
