import React from 'react';
import { 
  ShieldCheck, 
  Umbrella, 
  Clock, 
  Lock, 
  Scale, 
  FileCheck,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const CargoSafetySection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].safety;

  const safetyFeatures = [
    {
      icon: Umbrella,
      titleUrdu: 'ڈبل واٹر پروف ترپال کی ضمانت',
      titleEnglish: '100% Waterproof Heavy Tarpaulin Guarantee',
      descUrdu: 'بارش، طوفان، تیز دھوپ اور گرد و غبار سے سامان کو 100% خشک اور محفوظ رکھنے کے لیے معیاری واٹر پروف ترپالیں لازمی لگائی جاتی ہیں۔',
      descEnglish: 'High-density multi-layered PVC tarpaulins ensure your cargo stays dry and safe from rain, hail, sun, and road dust.',
      borderColor: 'border-blue-200 hover:border-blue-400',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: Lock,
      titleUrdu: 'مضبوط رسیوں اور ٹائی ڈاؤن بیلٹس سے بندھائی',
      titleEnglish: 'High-Tensile Straps & Heavy Tie-Downs',
      descUrdu: 'گاڑی کے سفر کے دوران سامان کو ہلنے، پھسلنے یا ٹوٹنے سے روکنے کے لیے پروفیشنل طریقے سے رسیوں اور بیلٹس سے ٹائی کیا جاتا ہے۔',
      descEnglish: 'Industrial-grade tie-downs and heavy nylon lashings secure freight to prevent any shift or friction during highway transit.',
      borderColor: 'border-amber-200 hover:border-amber-400',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: ShieldCheck,
      titleUrdu: 'نادرا تصدیق شدہ تجربہ کار ڈرائیورز',
      titleEnglish: 'NADRA-Verified Commercial Drivers',
      descUrdu: 'تمام ڈرائیورز نادرا شناختی کارڈ، ڈرائیونگ لائسنس اور باقاعدہ ٹریک ریکارڈ کے ساتھ رجسٹرڈ اور انتہائی بااعتماد ہیں۔',
      descEnglish: 'All highway captains undergo national identity verification, commercial licensing scrutiny, and proven safety records.',
      borderColor: 'border-slate-200 hover:border-blue-400',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: Scale,
      titleUrdu: 'کمپیوٹرائزڈ کانٹا و حکومتی وزن ضوابط',
      titleEnglish: 'Computerized Weighbridge & Axle Compliance',
      descUrdu: 'لوڈنگ کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی حاصل کی جاتی ہے اور روڈ ایکسل لوڈ قوانین کی مکمل پاسداری ہوتی ہے۔',
      descEnglish: 'Instant computerized scale slips provided at loading, adhering strictly to National Highway axle weight limits.',
      borderColor: 'border-slate-200 hover:border-blue-400',
      iconBg: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    {
      icon: Clock,
      titleUrdu: '24 گھنٹے لائیو ڈرائیور رابطہ',
      titleEnglish: '24/7 Direct Driver & Transit Tracking',
      descUrdu: 'گاڑی روانہ ہونے کے بعد آپ کو ڈرائیور کا موبائل نمبر فراہم کیا جاتا ہے تاکہ آپ کسی بھی وقت لوکیشن معلوم کر سکیں۔',
      descEnglish: 'Shippers receive direct mobile contact with the assigned truck driver for real-time highway ETA updates.',
      borderColor: 'border-blue-200 hover:border-blue-400',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: FileCheck,
      titleUrdu: 'باقاعدہ ٹیکس انوائس اور شفاف بلنگ',
      titleEnglish: 'Official Tax Invoicing & Clear Documentation',
      descUrdu: 'کارپوریٹ ٹیکس قوانین کے مطابق باقاعدہ ٹیکس انوائس اور رسید جاری کی جاتی ہے، کوئی پوشیدہ یا غیر متوقع چارجز نہیں۔',
      descEnglish: 'Government-compliant corporate documentation with transparent rates and zero surprise charges.',
      borderColor: 'border-amber-200 hover:border-amber-400',
      iconBg: 'bg-amber-50 text-amber-700 border-amber-100',
    }
  ];

  return (
    <section id="safety" className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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

        {/* Safety Grid (Multi-Color Cards) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          {safetyFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className={`bg-white p-5 rounded-lg border ${feat.borderColor} hover:shadow-md transition-all shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg ${feat.iconBg} border flex items-center justify-center mb-3.5 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-base text-slate-900 font-urdu mb-1.5">
                    {language === 'ur' ? feat.titleUrdu : feat.titleEnglish}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                    {language === 'ur' ? feat.descUrdu : feat.descEnglish}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner with Visual Tarpaulin Protection Showcase */}
        <div className={`mt-8 sm:mt-12 bg-amber-50/40 text-slate-900 rounded-lg p-5 sm:p-7 border border-amber-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          
          {/* Image Showcase Frame */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden shadow-sm border border-amber-200">
            <img 
              src="./images/cargo-safety.jpg" 
              alt="Waterproof Tarpaulin and Cargo Lashing Safety - Warraich Goods" 
              className="w-full h-48 sm:h-52 object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.parentElement?.classList.add('hidden');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
              <span className="text-white text-xs font-semibold font-urdu bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm">
                {language === 'ur' ? '100% واٹر پروف ڈبل ترپال و مضبوط بندھائی' : 'Double Waterproof Tarpaulin & Heavy Tie-Downs'}
              </span>
            </div>
          </div>

          {/* Text & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-bold text-amber-900 font-urdu leading-snug">
                {language === 'ur' ? 'کیا آپ کو بارش، نمی یا موسمی اثرات سے حساس قیمتی سامان کے لیے محفوظ گاڑی چاہیے؟' : 'Need safe dedicated transport for weather-sensitive commercial cargo?'}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-urdu leading-relaxed">
                {language === 'ur' ? 'ہماری تمام اوپن اور جالی باڈی گاڑیوں میں نئی واٹر پروف ترپالیں اور انڈسٹریل ٹائی ڈاؤن رسیاں موجود ہوتی ہیں تاکہ آپ کا مال بارش، تیز دھوپ، آندھی اور دھول مٹی سے 100% محفوظ منزل تک پہنچے۔' : 'Every vehicle carries double heavy waterproof PVC tarpaulins and industrial nylon tie-downs to ensure zero water damage or road friction during highway transit.'}
              </p>
            </div>

            <div>
              <a
                href="#corporate-credibility"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md font-urdu whitespace-nowrap cursor-pointer min-h-[44px]"
                aria-label="View Safety Certification and Corporate Credibility"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-urdu font-bold">
                  {language === 'ur' ? 'حفاظتی پروٹوکولز و کارپوریٹ کریڈیبلٹی دیکھیں' : 'View Safety Protocols & Verification'}
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
