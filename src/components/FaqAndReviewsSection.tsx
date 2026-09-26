import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const tFaq = TRANSLATIONS[language].reviews;

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
      q: 'سمندری اور کمالیہ سے مال برداری اور ٹرانسپورٹ سروس کیسے حاصل کریں؟',
      a: 'سمندری اور کمالیہ سمیت پورے پنجاب اور پاکستان کے لیے مال کی بکنگ فون کال اور واٹس ایپ پر 24 گھنٹے دستیاب ہے۔ ہم سمندری اور کمالیہ کی معروف گڈز ٹرانسپورٹ کمپنی کے طور پر فیصل آباد ریجن (FIEDMC)، لاہور، کراچی پورٹ، راولپنڈی اور پورے پاکستان کے لیے 100% مخصوص FTL ٹرک بکنگ فراہم کرتے ہیں۔'
    },
    {
      q: 'کیا آپ سمندری سے ٹریلر اور فل ٹرک بکنگ فراہم کرتے ہیں؟',
      a: 'جی ہاں! ہمارے پاس شہزور (1 تا 3.5 ٹن)، مزدا 6 وہیلر (4 تا 10 ٹن)، سیمپل ٹرک (8 تا 16 ٹن) اور 22 تا 28+ فٹ بیڈفورڈ ہیوی ٹرکس و ٹریلر ٹرانسپورٹ سمندری اور کمالیہ سے 24 گھنٹے آن ڈیمانڈ دستیاب ہیں۔ کمپیوٹرائزڈ کانٹا پرچی اور تصدیق شدہ بلٹی ہر گاڑی کے ساتھ دی جاتی ہے۔'
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
      q: 'How can I book goods transport service from Samundri and Kamalia?',
      a: 'Direct booking for Samundri, Kamalia, and all Pakistan routes is available 24/7 via phone call and WhatsApp. As a premier freight carrier in Samundri and Kamalia, we connect the Faisalabad industrial region directly to Karachi Port, Lahore, Rawalpindi, and all nationwide destinations with dedicated FTL trucks.'
    },
    {
      q: 'How can I arrange truck booking and trailer transport in Samundri for heavy commercial loads?',
      a: 'Instant commercial truck and trailer booking in Samundri and Kamalia is available 24/7. Simply call or WhatsApp 0300-5370443 or 0339-5370443. We dispatch Hyundai Shehzore (1-3.5 Tons), Mazda 6-wheeler (4-10 Tons), Sample haulers (8-16 Tons), and heavy Bedford trucks / trailers (15-28+ Tons) with digital weighbridge scale slips.'
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
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
              <HelpCircle className="w-4 h-4 text-blue-700 flex-shrink-0" />
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
                  className="border border-slate-200 rounded-lg overflow-hidden transition-all bg-white shadow-sm hover:border-slate-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-5 flex items-center justify-between gap-4 text-start hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-relaxed text-start font-urdu">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50 font-urdu">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Transparent Google Business Profile & Direct Feedback Box (No fake reviews) */}
          <div className="mt-10 sm:mt-12 bg-slate-900 text-white rounded-lg p-6 sm:p-8 shadow-sm border border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-start font-urdu">
                <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>{language === 'ur' ? '100% مستند و حقیقی ٹرانسپورٹ سروس' : '100% Authentic Freight Service'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>{language === 'ur' ? 'مصدقہ سروس نیٹ ورک و براہ راست رابطہ' : 'Verified Service Network & Direct Contact'}</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  {language === 'ur' 
                    ? 'ہم کسی قسم کے فرضی جائزے یا خود سے لکھے ہوئے ریویوز شائع نہیں کرتے۔ ہماری ساکھ اور پہچان فیلڈ میں برسوں کی ایمانداری ہے۔ آپ ہمارے سروس علاقے ملاحظہ فرما سکتے ہیں یا براہِ راست فون و واٹس ایپ پر رابطہ کر سکتے ہیں۔'
                    : 'We do not publish artificial testimonials. Our reputation is built on decades of dependable freight service. You can explore our service areas network or contact us directly on WhatsApp.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/booking"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md active:scale-95 cursor-pointer font-urdu"
                  title="View Service Areas"
                >
                  <MapPin className="w-4 h-4 text-white" />
                  <span>{language === 'ur' ? 'شہروں کی فہرست و روٹس' : 'Explore Cities & Corridors'}</span>
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md active:scale-95 cursor-pointer font-urdu"
                  title="View Warraich Goods Business Profile"
                >
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>{language === 'ur' ? 'آفیشل کارڈ و کوائف ملاحظہ کریں' : 'View Official Directory Card'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
