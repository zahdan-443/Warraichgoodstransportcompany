import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck,
  MapPin,
  ExternalLink,
  MessageSquareQuote
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const FaqAndReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language } = useLanguage();
  const tFaq = TRANSLATIONS[language].faq;

  const faqsUrdu = [
    {
      q: 'کیا وڑائچ گڈز ٹرانسپورٹ چھوٹے پارسل یا لوز کارگو (LTL) بک کرتی ہے؟',
      a: 'نہیں، ہم لوز کارگو، چھوٹے پارسل یا پارٹ لوڈ (LTL) ڈیل نہیں کرتے۔ ہماری تمام گاڑیاں (شہزور، مزدا، سیمپل، بیڈفورڈ) 100% فل ٹرک لوڈ (FTL) یعنی صرف ایک ہی پارٹی/گاہک کے مخصوص مال کے لیے روانہ کی جاتی ہیں۔'
    },
    {
      q: 'فل ٹرک لوڈ (FTL) کرایہ کا تعین کس طرح ہوتا ہے؟',
      a: 'کرایہ کا تعین فاصلہ (کلو میٹر)، مطلوبہ گاڑی کی قسم (شہزور، مزدا، سیمپل، بیڈفورڈ) اور لوڈنگ و ان لوڈنگ پوائنٹس کے مطابق شفاف انداز میں ہوتا ہے۔ بلنگ پر کوئی غیر متوقع پوشیدہ چارجز نہیں ہوتے۔'
    },
    {
      q: 'کیا بارش اور خراب موسم میں مال کے لیے ترپال کی مکمل ضمانت ہوتی ہے؟',
      a: 'جی بالکل! ہماری تمام اوپن اور جالی باڈی گاڑیوں میں ڈبل واٹر پروف ہیوی ترپالیں اور مضبوط ٹائی ڈاؤن رسیاں موجود ہوتی ہیں۔ بارش، گرد و غبار اور دھوپ سے سامان کا 100% تحفظ یقینی بنایا جاتا ہے۔'
    },
    {
      q: 'سمندری اور کمالیہ اڈے سے گاڑی کتنی دیر میں دستیاب ہو جاتی ہے؟',
      a: 'ہمارے پاس سمندری مین اڈا اور کمالیہ برانچ میں شہزور، مزدا اور بیڈفورڈ گاڑیاں اسٹینڈ بائی رہتی ہیں۔ رابطہ کرنے پر قریبی تحصیلوں، فیکٹریوں یا غلہ منڈی میں گاڑی فوری لوڈنگ کے لیے حاضر کر دی جاتی ہے۔'
    },
    {
      q: 'کیا فیکٹریوں، ملز اور تجارتی اداروں کے ساتھ باقاعدہ کنٹریکٹ ہو سکتا ہے؟',
      a: 'جی ہاں، وڑائچ گڈز ٹرانسپورٹ کمپنی ٹیکسٹائل ملز، فلور ملز، سیمنٹ ایجنسیوں، شوگر ملز اور تجارتی اداروں کے ساتھ باقاعدہ FTL لاجسٹکس معاہدے پر گاڑیاں فراہم کرتی ہے۔'
    },
    {
      q: 'کیا ڈرائیورز کی شناخت اور گاڑی کے کاغذات کی سرکاری تصدیق ہوتی ہے؟',
      a: 'جی ہاں، تمام ڈرائیورز نادرا شناختی کارڈ، ڈرائیونگ لائسنس اور باقاعدہ تصدیق شدہ ٹریک ریکارڈ کے ساتھ رجسٹرڈ ہوتے ہیں۔'
    }
  ];

  const faqsEnglish = [
    {
      q: 'Does Warraich Goods handle small loose parcels or mixed LTL shipments?',
      a: 'No, we do not accept loose parcel mixing or partial loads (LTL). All our trucks (Shehzore, Mazda, Sample, Bedford) operate strictly on a 100% Full Truckload (FTL) basis, dedicated exclusively to a single client with zero cargo mixing.'
    },
    {
      q: 'How is the freight rate for a Full Truckload (FTL) determined?',
      a: 'Rates are determined transparently according to route distance (km), selected vehicle class (Shehzore, Mazda, Sample, Bedford), and specific loading/unloading terminals. There are strictly no hidden surprise fees.'
    },
    {
      q: 'Do you provide full waterproof tarpaulin covers for bad weather & rain protection?',
      a: 'Yes, absolutely! Every vehicle in our fleet is equipped with heavy-duty double waterproof tarpaulins and high-tensile tie-down straps, ensuring 100% weather and moisture protection throughout transit.'
    },
    {
      q: 'How quickly can a dedicated truck be dispatched from Samundri and Kamalia?',
      a: 'We maintain standby trucks at our Samundri Central Hub and Kamalia Branch. Upon phone or WhatsApp confirmation, vehicles are dispatched immediately to local factories, warehouses, or grain markets.'
    },
    {
      q: 'Can industrial factories and corporations establish regular haulage contracts?',
      a: 'Yes, Warraich Goods Transport Company regularly signs long-term corporate logistics and haulage service agreements with textile mills, grain traders, and cement distributors with formal computerized billing.'
    },
    {
      q: 'Are your drivers and transport documentation officially verified?',
      a: 'Yes, all drivers are fully vetted with government NADRA CNIC verification, commercial driving licenses, and clean highway transit track records.'
    }
  ];

  const currentFaqs = language === 'ur' ? faqsUrdu : faqsEnglish;

  return (
    <section id="faq-reviews" className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section: FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-900 border border-indigo-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
              <HelpCircle className="w-4 h-4 text-indigo-700 flex-shrink-0" />
              <span>{tFaq.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
              {tFaq.title}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
              {tFaq.subtitle}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {currentFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm hover:border-slate-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-5 flex items-center justify-between gap-4 text-start hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-relaxed text-start font-urdu">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-indigo-50/30 font-urdu">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Transparent Google Business Profile & Direct Feedback Box (No fake reviews) */}
          <div className="mt-10 sm:mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/60">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-start font-urdu">
                <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>{language === 'ur' ? '100% مستند و حقیقی ٹرانسپورٹ سروس' : '100% Authentic Freight Service'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{language === 'ur' ? 'گوگل میپس پر لوکیشن دیکھیں یا رائے شیئر کریں' : 'View Google Maps Location or Share Feedback'}</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  {language === 'ur' 
                    ? 'ہم کسی قسم کے فرضی جائزے یا خود سے لکھے ہوئے ریویوز شائع نہیں کرتے۔ ہماری ساکھ اور پہچان فیلڈ میں برسیوں کی ایمانداری ہے۔ آپ گوگل میپس پر ہمارے اصل اڈے دیکھ سکتے ہیں یا براہِ راست واٹس ایپ پر رابطہ کر سکتے ہیں۔'
                    : 'We do not publish artificial testimonials. Our reputation is built on decades of dependable freight service. You can explore our official Google Maps hubs or contact us directly on WhatsApp.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href={COMPANY_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer font-urdu"
                  title="View Warraich Goods on Google Maps"
                >
                  <MapPin className="w-4 h-4 text-white" />
                  <span>{language === 'ur' ? 'گوگل میپ پر اڈا دیکھیں' : 'View on Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    language === 'ur'
                      ? 'السلام علیکم زاہدان بھائی! میں وڑائچ گڈز ٹرانسپورٹ کے حوالے سے اپنا فیڈ بیک اور رائے شیئر کرنا چاہتا ہوں۔'
                      : 'Hello Zahdan brother! I would like to share my feedback regarding Warraich Goods Transport services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer font-urdu"
                  title="Share feedback on WhatsApp"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>{language === 'ur' ? 'واٹس ایپ پر رابطہ کریں' : 'Contact on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
