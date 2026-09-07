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
      descEnglish: 'High-density multi-layered PVC tarpaulins ensure your cargo stays dry and safe from rain, hail, sun, and road dust.'
    },
    {
      icon: Lock,
      titleUrdu: 'مضبوط رسیوں اور ٹائی ڈاؤن بیلٹس سے بندھائی',
      titleEnglish: 'High-Tensile Straps & Heavy Tie-Downs',
      descUrdu: 'گاڑی کے سفر کے دوران سامان کو ہلنے، پھسلنے یا ٹوٹنے سے روکنے کے لیے پروفیشنل طریقے سے رسیوں اور بیلٹس سے ٹائی کیا جاتا ہے۔',
      descEnglish: 'Industrial-grade tie-downs and heavy nylon lashings secure freight to prevent any shift or friction during highway transit.'
    },
    {
      icon: ShieldCheck,
      titleUrdu: 'نادرا تصدیق شدہ تجربہ کار ڈرائیورز',
      titleEnglish: 'NADRA-Verified Commercial Drivers',
      descUrdu: 'تمام ڈرائیورز نادرا شناختی کارڈ، ڈرائیونگ لائسنس اور باقاعدہ ٹریک ریکارڈ کے ساتھ رجسٹرڈ اور انتہائی بااعتماد ہیں۔',
      descEnglish: 'All highway captains undergo national identity verification, commercial licensing scrutiny, and proven safety records.'
    },
    {
      icon: Scale,
      titleUrdu: 'کمپیوٹرائزڈ کانٹا و حکومتی وزن ضوابط',
      titleEnglish: 'Computerized Weighbridge & Axle Compliance',
      descUrdu: 'لوڈنگ کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی حاصل کی جاتی ہے اور روڈ ایکسل لوڈ قوانین کی مکمل پاسداری ہوتی ہے۔',
      descEnglish: 'Instant computerized scale slips provided at loading, adhering strictly to National Highway axle weight limits.'
    },
    {
      icon: Clock,
      titleUrdu: '24 گھنٹے لائیو ڈرائیور رابطہ',
      titleEnglish: '24/7 Direct Driver & Transit Tracking',
      descUrdu: 'گاڑی روانہ ہونے کے بعد آپ کو ڈرائیور کا موبائل نمبر فراہم کیا جاتا ہے تاکہ آپ کسی بھی وقت لوکیشن معلوم کر سکیں۔',
      descEnglish: 'Shippers receive direct mobile contact with the assigned truck driver for real-time highway ETA updates.'
    },
    {
      icon: FileCheck,
      titleUrdu: 'گورنمنٹ رجسٹرڈ NTN کے ساتھ شفاف بلنگ',
      titleEnglish: 'Official NTN Registered Invoicing',
      descUrdu: `NTN: ${COMPANY_INFO.ntn} کے ساتھ باقاعدہ رجسٹرڈ ٹیکس چالان اور رسید جاری کی جاتی ہے، کوئی پوشیدہ یا غیر متوقع چارجز نہیں۔`,
      descEnglish: `Government-approved NTN (${COMPANY_INFO.ntn}) documentation with transparent rates and zero surprise charges.`
    }
  ];

  return (
    <section id="safety" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-950 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* Safety Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          {safetyFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center mb-3.5 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white font-urdu mb-1.5">
                    {language === 'ur' ? feat.titleUrdu : feat.titleEnglish}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                    {language === 'ur' ? feat.descUrdu : feat.descEnglish}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className={`mt-8 sm:mt-12 bg-slate-950 text-white rounded-xl p-5 sm:p-7 border border-slate-800 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-amber-400 font-urdu">
              {language === 'ur' ? 'کیا آپ کو حساس، قیمتی یا بارش سے متاثر ہونے والے سامان کے لیے گاڑی چاہیے؟' : 'Need safe dedicated transport for weather-sensitive commercial cargo?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-urdu">
              {language === 'ur' ? 'ہماری تمام اوپن اور جالی باڈی گاڑیوں میں نئی واٹر پروف ترپالیں موجود ہوتی ہیں تاکہ مال کو ایک قطرہ پانی بھی نہ لگے۔' : 'Every vehicle carries double heavy waterproof tarpaulins to ensure zero water damage or moisture exposure.'}
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm transition-all shadow font-urdu whitespace-nowrap cursor-pointer min-h-[44px]"
            aria-label={`Call proprietor at ${COMPANY_INFO.phone1}`}
          >
            <PhoneCall className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{language === 'ur' ? `براہ راست بات کریں (${COMPANY_INFO.phone1})` : `Call Proprietor (${COMPANY_INFO.phone1})`}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
