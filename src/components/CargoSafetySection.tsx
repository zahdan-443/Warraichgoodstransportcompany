import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';

export const CargoSafetySection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].safety;

  const safetyFeatures = [
    {
      titleUrdu: 'ڈبل واٹر پروف ترپال کی ضمانت',
      titleEnglish: 'Waterproof Tarpaulin Protection',
      descUrdu: 'بارش، طوفان، تیز دھوپ اور گرد و غبار سے سامان کو 100% خشک اور محفوظ رکھنے کے لیے معیاری واٹر پروف ترپالیں لازمی لگائی جاتی ہیں۔',
      descEnglish: 'Thick waterproof PVC tarpaulins cover every open load to protect goods from rain, strong sun, and road dust.',
      borderColor: 'border-blue-200 hover:border-blue-400',
    },
    {
      titleUrdu: 'مضبوط رسیوں اور ٹائی ڈاؤن بیلٹس سے بندھائی',
      titleEnglish: 'Strong Ropes & Tie-Down Belts',
      descUrdu: 'گاڑی کے سفر کے دوران سامان کو ہلنے، پھسلنے یا ٹوٹنے سے روکنے کے لیے پروفیشنل طریقے سے رسیوں اور بیلٹس سے ٹائی کیا جاتا ہے۔',
      descEnglish: 'Heavy ropes and tie-down belts hold cargo firmly in place so nothing shifts or rubs during highway travel.',
      borderColor: 'border-amber-200 hover:border-amber-400',
    },
    {
      titleUrdu: 'لائسنس یافتہ تجربہ کار ڈرائیورز',
      titleEnglish: 'Licensed Highway Drivers',
      descUrdu: 'تمام ڈرائیورز کے پاس باقاعدہ کمرشل ڈرائیونگ لائسنس اور پاکستان کی اہم شاہراہوں پر محفوظ ڈرائیونگ کا طویل تجربہ ہوتا ہے۔',
      descEnglish: 'All of our drivers hold valid commercial licenses and have years of experience across Pakistan highways.',
      borderColor: 'border-slate-200 hover:border-blue-400',
    },
    {
      titleUrdu: 'کمپیوٹرائزڈ کانٹا و حکومتی وزن ضوابط',
      titleEnglish: 'Computerized Scale Slips',
      descUrdu: 'لوڈنگ کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی حاصل کی جاتی ہے اور روڈ ایکسل لوڈ قوانین کی مکمل پاسداری ہوتی ہے۔',
      descEnglish: 'Every loaded truck gets an official computerized scale slip after loading and follows motorway axle weight limits.',
      borderColor: 'border-slate-200 hover:border-blue-400',
    },
    {
      titleUrdu: '24 گھنٹے لائیو ڈرائیور رابطہ',
      titleEnglish: 'Direct Driver Contact',
      descUrdu: 'گاڑی روانہ ہونے کے بعد آپ کو ڈرائیور کا موبائل نمبر فراہم کیا جاتا ہے تاکہ آپ کسی بھی وقت لوکیشن معلوم کر سکیں۔',
      descEnglish: 'We share the driver’s direct mobile number as soon as the truck leaves so you can check on your load anytime.',
      borderColor: 'border-blue-200 hover:border-blue-400',
    },
    {
      titleUrdu: 'باقاعدہ ٹیکس انوائس اور شفاف بلنگ',
      titleEnglish: 'Tax Invoices & Written Bilty',
      descUrdu: 'کارپوریٹ ٹیکس قوانین کے مطابق باقاعدہ ٹیکس انوائس اور رسید جاری کی جاتی ہے، کوئی پوشیدہ یا غیر متوقع چارجز نہیں۔',
      descEnglish: 'Proper tax invoices and written bilty slips with clear upfront rates and no hidden charges.',
      borderColor: 'border-amber-200 hover:border-amber-400',
    }
  ];

  return (
    <section id="safety" className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div data-reveal="" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* Safety Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          {safetyFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                data-reveal=""
                data-reveal-variant="blur-in"
                style={{ '--reveal-delay': `${(idx % 3) * 70}ms` } as React.CSSProperties}
                className={`bg-white p-5 rounded-lg border ${feat.borderColor} hover:shadow-md shadow-sm flex flex-col justify-between group card-interactive`}
              >
                <div>
                  <p className="font-bold text-base text-slate-900 font-urdu mb-1.5">
                    {language === 'ur' ? feat.titleUrdu : feat.titleEnglish}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                    {language === 'ur' ? feat.descUrdu : feat.descEnglish}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Reassurance Banner with Visual Tarpaulin Protection Showcase */}
        <div data-reveal="" data-reveal-variant="zoom-in" className={`mt-8 sm:mt-12 bg-amber-50/40 text-slate-900 rounded-lg p-5 sm:p-7 border border-amber-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          
          {/* Image Showcase Frame */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden shadow-sm border border-amber-200">
            <img 
              src={getAssetUrl('images/safety-waterproof-tarpaulin.webp')} 
              alt="Waterproof Tarpaulin and Cargo Lashing Safety - Warraich Goods" 
              width={640}
              height={360}
              className="w-full h-48 sm:h-52 object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
              <span className="text-white text-xs font-semibold font-urdu bg-slate-950/80 px-2.5 py-1 rounded">
                {language === 'ur' ? '100% واٹر پروف ڈبل ترپال و مضبوط بندھائی' : 'Double Waterproof Tarpaulin & Strong Ropes'}
              </span>
            </div>
          </div>

          {/* Text & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-bold text-amber-900 font-urdu leading-snug">
                {language === 'ur' ? 'کیا آپ کو بارش، نمی یا موسمی اثرات سے حساس قیمتی سامان کے لیے محفوظ گاڑی چاہیے؟' : 'Sending goods that cannot get wet or dusty on the highway?'}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-urdu leading-relaxed">
                {language === 'ur' ? 'ہماری تمام اوپن اور جالی باڈی گاڑیوں میں نئی واٹر پروف ترپالیں اور انڈسٹریل ٹائی ڈاؤن رسیاں موجود ہوتی ہیں تاکہ آپ کا مال بارش، تیز دھوپ، آندھی اور دھول مٹی سے 100% محفوظ منزل تک پہنچے۔' : 'All our open and mesh-body trucks carry heavy waterproof PVC tarpaulins and strong ropes so rain, dust, and harsh sun stay out.'}
              </p>
            </div>

            <div>
              <a
                href="#corporate-credibility"
                className="btn-animated inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md font-urdu whitespace-nowrap cursor-pointer min-h-[44px]"
                aria-label="View Safety Details and Company Records"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-urdu font-bold">
                  {language === 'ur' ? 'حفاظتی پروٹوکولز و کارپوریٹ کریڈیبلٹی دیکھیں' : 'View Company & Safety Records'}
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
