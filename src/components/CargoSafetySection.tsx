import React from 'react';
import { 
  ShieldCheck, 
  Umbrella, 
  Truck, 
  Clock, 
  Lock, 
  Scale, 
  CheckCircle2,
  FileCheck,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const CargoSafetySection: React.FC = () => {
  const safetyFeatures = [
    {
      icon: Umbrella,
      titleUrdu: 'ڈبل واٹر پروف ترپال کی ضمانت',
      descUrdu: 'بارش، طوفان، تیز دھوپ اور گرد و غبار سے سامان کو 100% خشک اور محفوظ رکھنے کے لیے معیاری واٹر پروف ترپالیں لازمی لگائی جاتی ہیں۔'
    },
    {
      icon: Lock,
      titleUrdu: 'مضبوط رسیوں اور ٹائی ڈاؤن بیلٹس سے بندھائی',
      descUrdu: 'گاڑی کے سفر کے دوران سامان کو ہلنے، پھسلنے یا ٹوٹنے سے روکنے کے لیے پروفیشنل طریقے سے رسیوں اور بیلٹس سے ٹائی کیا جاتا ہے۔'
    },
    {
      icon: ShieldCheck,
      titleUrdu: 'نادرا تصدیق شدہ تجربہ کار ڈرائیورز',
      descUrdu: 'تمام ڈرائیورز نادرا شناختی کارڈ، ڈرائیونگ لائسنس اور باقاعدہ ٹریک ریکارڈ کے ساتھ رجسٹرڈ اور انتہائی بااعتماد ہیں۔'
    },
    {
      icon: Scale,
      titleUrdu: 'کمپیوٹرائزڈ کانٹا و حکومتی وزن ضوابط',
      descUrdu: 'لوڈنگ کے فوری بعد کمپیوٹرائزڈ کانٹا پرچی حاصل کی جاتی ہے اور روڈ ایکسل لوڈ قوانین کی مکمل پاسداری ہوتی ہے۔'
    },
    {
      icon: Clock,
      titleUrdu: '24 گھنٹے لائیو ڈرائیور رابطہ',
      descUrdu: 'گاڑی روانہ ہونے کے بعد آپ کو ڈرائیور کا موبائل نمبر فراہم کیا جاتا ہے تاکہ آپ کسی بھی وقت لوکیشن معلوم کر سکیں۔'
    },
    {
      icon: FileCheck,
      titleUrdu: 'گورنمنٹ رجسٹرڈ NTN کے ساتھ شفاف بلنگ',
      descUrdu: `NTN: ${COMPANY_INFO.ntn} کے ساتھ باقاعدہ رجسٹرڈ ٹیکس چالان اور رسید جاری کی جاتی ہے، کوئی پوشیدہ یا غیر متوقع چارجز نہیں۔`
    }
  ];

  return (
    <section id="safety" className="py-16 md:py-24 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>سامان کی حفاظت کے بین الاقوامی معیارات</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
            کارگو اور فل ٹرک لوڈ کی 100% محفوظ ترسیل کی مالکانہ ضمانت
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-urdu">
            زاہدان نصر وڑائچ کی زیرِ نگرانی آپ کا قیمتی سامان انتہائی احتیاط، ڈبل ترپال اور نادرا ویریفائیڈ ڈرائیورز کے ذریعے بحفاظت پہنچایا جاتا ہے۔
          </p>
        </div>

        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {safetyFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 font-urdu mb-2">
                    {feat.titleUrdu}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-urdu">
                    {feat.descUrdu}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 font-urdu">
              کیا آپ کو حساس، قیمتی یا بارش سے متاثر ہونے والے سامان کے لیے گاڑی چاہیے؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-urdu">
              ہماری تمام اوپن اور جالی باڈی گاڑیوں میں نئی واٹر پروف ترپالیں موجود ہوتی ہیں تاکہ مال کو ایک قطرہ پانی بھی نہ لگے۔
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-lg font-urdu whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 fill-current" />
            <span>براہ راست بات کریں ({COMPANY_INFO.phone1})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
