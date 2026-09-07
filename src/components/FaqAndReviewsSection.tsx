import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Star, 
  Quote, 
  MessageSquareQuote,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
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
    <section id="faq-reviews" className="py-12 sm:py-16 md:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: FAQs */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
              <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{tFaq.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu">
              {tFaq.title}
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base font-urdu">
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
                  className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-slate-800/60 transition-colors min-h-[48px]"
                  >
                    <span className="font-bold text-sm sm:text-base text-white leading-relaxed text-start font-urdu">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 bg-slate-950 font-urdu">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Testimonials & Client Trust */}
        <div className="pt-8 sm:pt-10 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
              <MessageSquareQuote className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{tRev.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu">
              {tRev.title}
            </h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base font-urdu">
              {tRev.subtitle}
            </p>

            {/* Google Rating Trust Pill */}
            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-slate-900 border border-slate-800 text-white px-3.5 sm:px-4 py-2 rounded-lg shadow text-xs sm:text-sm font-urdu">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
              </div>
              <span className="font-bold text-amber-400">4.9 / 5.0</span>
              <span className="text-slate-400 border-l border-slate-800 pl-2 sm:pl-3">
                {language === 'ur' ? 'گوگل ویریفائیڈ 120+ تجارتی ریٹنگز' : '120+ Verified Client Reviews'}
              </span>
              <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 ml-0.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {currentTestimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:border-amber-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Quote className="w-6 sm:w-7 h-6 sm:h-7 text-amber-400/30" />
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-urdu">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <span className="font-bold text-white block text-sm sm:text-base font-urdu">
                    {t.name}
                  </span>
                  <span className="text-xs text-slate-400 block font-urdu">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

