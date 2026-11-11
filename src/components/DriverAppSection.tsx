import React from 'react';
import { 
  Smartphone, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Truck,
  FileText,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const DriverAppSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const APP_DOWNLOAD_URL = 'https://zahdan-443.github.io/Warraich-Goods';

  const featureLines = [
    {
      titleEn: '1. Real-Time Consignment & Driver Tracking',
      titleUr: '1. لائیو کنسائنمنٹ اور ڈرائیور ٹریکنگ',
      descEn: 'Direct driver GPS coordinates and motorway progress updates throughout transit.',
      descUr: 'سفر کے دوران ڈرائیور کا براہِ راست رابطہ اور موٹروے پر لائیو لوکیشن اپڈیٹس۔'
    },
    {
      titleEn: '2. Digital Loading Challan & Bilty Records',
      titleUr: '2. ڈیجیٹل لوڈنگ چالان و کمپیوٹرائزڈ بلٹی',
      descEn: 'Instant access to certified weighbridge slips, bilty numbers, and signed delivery receipts.',
      descUr: 'سرکاری کانٹا پرچی، بلٹی نمبرز اور تصدیق شدہ ترسیلی رسیدوں تک فوری رسائی۔'
    },
    {
      titleEn: '3. Direct 24/7 Fleet & Dispatcher Coordination',
      titleUr: '3. چوبیس گھنٹے فلیٹ کوآرڈینیشن و فوری رابطہ',
      descEn: 'Direct liaison with Warraich Goods central dispatch for rapid load scheduling and delivery.',
      descUr: 'فوری لوڈ شیڈولنگ اور تیز ترسیل کے لیے وڑائچ گڈز ہیڈ آفس سے براہِ راست رابطہ۔'
    }
  ];

  return (
    <section id="app-download" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Download Info & 3 Feature Lines */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono">
              <Smartphone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                {isUrdu ? 'آفیشل موبائل ایپلی کیشن' : 'Official Mobile Application'}
              </span>
            </div>

            {isUrdu ? (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight font-urdu">
                ہماری <span className="text-amber-500">اینڈرائیڈ ایپ</span> ڈاؤن لوڈ کریں
              </h2>
            ) : (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight font-sans">
                Download our <span className="text-amber-500">Android App</span>
              </h2>
            )}

            <p className={`text-base sm:text-lg font-bold text-slate-700 leading-normal ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu 
                ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی کی آفیشل اینڈرائیڈ ایپ ڈاؤن لوڈ کریں اور لوڈنگ مینجمنٹ آسان بنائیں'
                : 'Warraich Goods Transport Company Official Fleet & Driver Logistics Portal.'}
            </p>

            <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'روزمرہ روڈ کے استعمال، ڈرائیور لاگز، کارگو ڈسپیچ کوآرڈینیشن اور کمپیوٹرائزڈ بلٹی ریکارڈز تک اپنے موبائل سے براہِ راست رسائی حاصل کریں۔'
                : 'Access daily road usages, driver logs, cargo dispatch coordination, and computerized consignment records directly from your Android phone or tablet.'}
            </p>

            {/* 3 Short Feature Lines */}
            <div className="space-y-3 pt-2">
              {featureLines.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className={`text-xs sm:text-sm font-bold text-slate-900 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                      {isUrdu ? feat.titleUr : feat.titleEn}
                    </h3>
                    <p className={`text-xs text-slate-500 mt-0.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                      {isUrdu ? feat.descUr : feat.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CTA Button linking to APP_DOWNLOAD_URL */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="app-download-btn"
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md active:scale-98 cursor-pointer min-h-[48px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                aria-label="Download Warraich Goods Android App"
              >
                <Download className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{isUrdu ? 'اینڈرائیڈ ایپ ڈاؤن لوڈ کریں' : 'Download Android App'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <span className="text-xs text-slate-500 font-mono text-center sm:text-left truncate">
                zahdan-443.github.io/Warraich-Goods
              </span>
            </div>

          </div>

          {/* Right Column: Smartphone Frame Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            
            {/* Phone Outer Chassis Frame */}
            <div className="relative w-64 sm:w-72 rounded-[40px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-800">
              
              {/* Speaker / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-10 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Phone Screen Display */}
              <div className="relative rounded-[32px] bg-slate-900 overflow-hidden border border-slate-800 p-4 pt-10 text-white space-y-3">
                
                {/* App Screen Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-amber-500 p-0.5 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-slate-950" />
                    </div>
                    <span className="text-xs font-bold font-mono tracking-tight text-white">
                      {isUrdu ? 'وڑائچ گڈز ایپ' : 'Warraich Goods'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                    {isUrdu ? 'ورژن 2.4 فعال' : 'v2.4 Active'}
                  </span>
                </div>

                {/* Card 1: Active Trip */}
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 font-bold block">
                    {isUrdu ? 'لائیو ڈسپیچ چالان #452' : 'LIVE DISPATCH #CN-452'}
                  </span>
                  <p className={`text-xs font-bold text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? 'پنجاب ➔ کراچی پورٹ' : 'Punjab ➔ Karachi Port'}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                    <span>{isUrdu ? 'ایم 5 سکھر موٹروے' : 'M-5 Sukkur Motorway'}</span>
                    <span className="text-emerald-400">{isUrdu ? 'بروقت سفر' : 'On Schedule'}</span>
                  </div>
                </div>

                {/* Card 2: Driver Checklist */}
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400">
                    {isUrdu ? 'لوڈنگ تفصیلات' : 'LOADING SPECIFICATIONS'}
                  </span>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`text-slate-300 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                      {isUrdu ? 'گاڑی: مزدا 6 وہیلر' : 'Truck: Mazda 6-Wheeler'}
                    </span>
                    <span className="font-mono text-amber-400 font-bold">
                      {isUrdu ? '8.5 ٹن وزن' : '8.5 Tons'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                      {isUrdu ? 'ڈبل واٹر پروف ترپال مکمل' : 'Double Tarpaulin Verified'}
                    </span>
                  </div>
                </div>

                {/* Card 3: Direct Call */}
                <div className="bg-blue-600 rounded-xl p-3 text-center text-white">
                  <span className={`text-[11px] font-bold block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? `ہیڈ آفس ہیلپ لائن: ${COMPANY_INFO.phone1}` : `Helpline: ${COMPANY_INFO.phone1}`}
                  </span>
                  <span className="text-[10px] opacity-80 font-mono">
                    {isUrdu ? '24/7 فل ٹرک لوڈ سروس' : '24/7 Single-Party FTL Support'}
                  </span>
                </div>

                {/* Home Indicator Bar */}
                <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-2" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
