import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Star, 
  Quote, 
  MessageSquareQuote,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const FaqAndReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language } = useLanguage();
  const tFaq = TRANSLATIONS[language].faq;
  const tRev = TRANSLATIONS[language].reviews;

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

  const testimonialsUrdu = [
    {
      name: 'چوہدری کاشف رسول',
      role: 'ٹیکسٹائل مل ڈائریکٹر، سمندری و فیصل آباد',
      rating: 5,
      comment: 'وڑائچ گڈز ٹرانسپورٹ کے ساتھ ہمارا گزشتہ 4 سال سے دھاگے اور کپڑے کی فل ٹرک لوڈنگ کا کنٹریکٹ ہے۔ زاہدان بھائی کی ذاتی نگرانی میں ہمارا مال ہمیشہ کراچی پورٹ اور لاہور مارکیٹ وقت پر اور 100% محفوظ پہنچتا ہے۔'
    },
    {
      name: 'ملک زبیر احمد',
      role: 'غلہ کمیشن ایجنٹ و آڑھتی، کمالیہ اناج منڈی',
      rating: 5,
      comment: 'گندم اور مکئی کے سیزن میں گاڑیوں کی کمی ہو جاتی ہے لیکن وڑائچ گڈز کے پاس مزدا اور سیمپل ٹرکس مناسب ریٹ اور بروقت دستیاب ہوتے ہیں۔ سنگل پارٹی لوڈ کی وجہ سے مال کبھی تاخیر کا شکار نہیں ہوتا۔'
    },
    {
      name: 'حاجی محمد رفیق',
      role: 'ہارڈ ویئر و سینیٹری ہول سیلر، لاہور',
      rating: 5,
      comment: 'سمندری اور کمالیہ سے فل گاڑی بکنگ کے لیے انتہائی قابلِ اعتماد سروس ہے۔ ڈرائیورز محتاط ہیں اور کبھی مال میں کوئی نقصان یا خراش تک نہیں آئی۔'
    }
  ];

  const testimonialsEnglish = [
    {
      name: 'Chaudhary Kashif Rasool',
      role: 'Textile Mill Director, Samundri & Faisalabad',
      rating: 5,
      comment: 'We have maintained a dedicated Full Truckload contract for textile yarn with Warraich Goods for over 4 years. Under personal management, our consignments reach Karachi Port and Lahore on time with pristine cargo safety.'
    },
    {
      name: 'Malik Zubair Ahmed',
      role: 'Grain Commission Agent, Kamalia Grain Market',
      rating: 5,
      comment: 'During peak wheat and corn seasons, truck availability is challenging. Warraich Goods always provides Mazda and Sample trucks at transparent rates. Since it is dedicated FTL, there is zero transit delay.'
    },
    {
      name: 'Haji Muhammad Rafiq',
      role: 'Hardware & Industrial Wholesaler, Lahore',
      rating: 5,
      comment: 'The most dependable freight service for full vehicle booking from Samundri and Kamalia. Courteous drivers, solid tarpaulin strapping, and never a single scratched carton.'
    }
  ];

  const currentTestimonials = language === 'ur' ? testimonialsUrdu : testimonialsEnglish;

  return (
    <section id="faq-reviews" className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: FAQs */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
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

          {/* Accordion list */}
          <div className="space-y-3">
            {currentFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className={`bg-white border ${isOpen ? 'border-indigo-300 shadow-md' : 'border-slate-200'} rounded-2xl overflow-hidden transition-all duration-200 shadow-sm`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-slate-50 transition-colors min-h-[48px]"
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
        </div>

        {/* Section 2: Testimonials & Client Trust */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
              <MessageSquareQuote className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>{tRev.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
              {tRev.title}
            </h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
              {tRev.subtitle}
            </p>

            {/* Google Business Profile Verified Link */}
            <a 
              href={COMPANY_INFO.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 text-slate-900 px-4 py-2 rounded-xl shadow-sm text-xs sm:text-sm font-urdu transition-colors group cursor-pointer"
              title="View Warraich Goods on Google Maps"
            >
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
              </div>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                {language === 'ur' ? 'گوگل میپس بزنس پروفائل و ریویوز' : 'Official Google Business Profile & Reviews'}
              </span>
              <span className="text-blue-600 border-l border-slate-200 pl-2 sm:pl-3 font-medium flex items-center gap-1 group-hover:underline text-xs">
                <span>{language === 'ur' ? 'میپ پر دیکھیں' : 'View on Maps'}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {currentTestimonials.map((t, idx) => {
              const borderStyles = [
                'border-indigo-200 hover:border-indigo-400 bg-gradient-to-b from-white to-indigo-50/20',
                'border-amber-200 hover:border-amber-400 bg-gradient-to-b from-white to-amber-50/20',
                'border-emerald-200 hover:border-emerald-400 bg-gradient-to-b from-white to-emerald-50/20'
              ];
              const borderStyle = borderStyles[idx % borderStyles.length];

              return (
                <div 
                  key={idx} 
                  className={`border-2 ${borderStyle} rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md transition-all`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Quote className="w-6 sm:w-7 h-6 sm:h-7 text-slate-300" />
                      <div className="flex gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-urdu">
                      &ldquo;{t.comment}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200">
                    <span className="font-bold text-slate-900 block text-sm sm:text-base font-urdu">
                      {t.name}
                    </span>
                    <span className="text-xs text-slate-500 block font-urdu">
                      {t.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Review and Feedback Action Bar */}
          <div className="mt-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1.5 text-center md:text-start font-urdu">
              <h4 className="text-lg sm:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{tRev.calloutTitle}</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                {tRev.calloutDesc}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer font-urdu"
                title="Write a Google Review"
              >
                <Star className="w-4 h-4 fill-current" />
                <span>{tRev.writeReviewBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  language === 'ur'
                    ? 'السلام علیکم زاہدان بھائی! میں وڑائچ گڈز ٹرانسپورٹ کمپنی کی سروس کے حوالے سے اپنا تاثرات اور ریویو شیئر کرنا چاہتا ہوں۔'
                    : 'Hello Zahdan brother! I would like to share feedback/review regarding Warraich Goods Transport Company services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer font-urdu"
                title="Share feedback on WhatsApp"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>{tRev.whatsappFeedbackBtn}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

