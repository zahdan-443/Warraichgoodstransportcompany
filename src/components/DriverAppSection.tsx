import React from 'react';
import { 
  Smartphone, 
  Download, 
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';

export const DriverAppSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const APP_DOWNLOAD_URL = 'https://zahdan-443.github.io/Warraich-Goods';

  const featureLines = [
    {
      titleEn: '1. Direct Driver & Trip Updates',
      titleUr: '1. ڈرائیور اور ٹرپ کی تازہ معلومات',
      descEn: 'Stay in touch with your driver on the road for location and timing updates.',
      descUr: 'سفر کے دوران ڈرائیور کا براہِ راست رابطہ اور لوکیشن اپڈیٹس۔'
    },
    {
      titleEn: '2. Loading Details & Bilty Records',
      titleUr: '2. لوڈنگ تفصیلات اور بلٹی ریکارڈ',
      descEn: 'Check bilty numbers, computer scale slips, and delivery receipts anytime.',
      descUr: 'کانٹا پرچی، بلٹی نمبرز اور ترسیلی رسیدوں تک فوری رسائی۔'
    },
    {
      titleEn: '3. 24/7 Office Support',
      titleUr: '3. 24 گھنٹے دفتر سے فوری رابطہ',
      descEn: 'Connect with our Samundri office anytime for quick truck booking and dispatch help.',
      descUr: 'گاڑی بک کرنے اور رہنمائی کے لیے ہمارے دفتر سے رابطہ۔'
    }
  ];

  return (
    <section id="app-download" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Download Info & 3 Feature Lines */}
          <div data-reveal="" className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono">
              <Smartphone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                {isUrdu ? 'ڈرائیور دوست — آفیشل موبائل ایپ' : 'Driver Dost — Official Android App'}
              </span>
            </div>

            {isUrdu ? (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight font-urdu">
                ہماری اینڈرائیڈ ایپ <span className="text-amber-500">ڈرائیور دوست (Driver Dost)</span> ڈاؤن لوڈ کریں
              </h2>
            ) : (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight font-sans">
                Download <span className="text-amber-500">Driver Dost</span> Android App
              </h2>
            )}

            <p className={`text-base sm:text-lg font-bold text-slate-700 leading-normal ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu 
                ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی کی آفیشل "ڈرائیور دوست" ایپ ڈاؤن لوڈ کریں اور لوڈنگ مینجمنٹ آسان بنائیں'
                : 'Warraich Goods official "Driver Dost" app for drivers, bilty slips, and daily trip records.'}
            </p>

            <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'روزمرہ روڈ کے استعمال، ڈرائیور لاگز، کارگو ڈسپیچ کوآرڈینیشن اور کمپیوٹرائزڈ بلٹی ریکارڈز تک اپنے موبائل سے براہِ راست رسائی حاصل کریں۔'
                : 'Access daily road usages, driver logs, cargo dispatch coordination, and computerized consignment records directly from your Android phone or tablet.'}
            </p>

            {/* 3 Short Feature Lines */}
            <div className="space-y-3 pt-2">
              {featureLines.map((feat, idx) => (
                <div
                  key={idx}
                  data-reveal=""
                  style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
                  className="flex items-start gap-3 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs card-interactive group"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-mono text-xs font-bold card-icon-nudge">
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
                aria-label="Download Driver Dost Android App"
              >
                <Download className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{isUrdu ? 'ڈرائیور دوست ایپ ڈاؤن لوڈ کریں' : 'Download Driver Dost App'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <span className="text-xs text-slate-500 font-mono text-center sm:text-left truncate">
                zahdan-443.github.io/Warraich-Goods
              </span>
            </div>

          </div>

          {/* Right Column: Smartphone Frame Mockup displaying /images/mobileapk.png */}
          <div data-reveal="" style={{ '--reveal-delay': '120ms' } as React.CSSProperties} className="lg:col-span-5 flex justify-center">
            
            {/* Phone Outer Chassis Frame */}
            <div className="relative w-64 sm:w-72 rounded-[40px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-800 card-interactive">
              
              {/* Speaker / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center gap-1.5 border border-slate-800/80">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-10 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Phone Screen Preview Image */}
              <div className="relative rounded-[32px] bg-slate-900 overflow-hidden border border-slate-800 aspect-[9/17] flex items-center justify-center">
                <img
                  src={getAssetUrl('images/mobileapk.png')}
                  alt="Driver Dost Official Android App Screen Preview - Warraich Goods"
                  width={540}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />

                {/* Bottom Home Indicator Bar */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
