import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const FaqAndReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language } = useLanguage();
  const tFaq = TRANSLATIONS[language].reviews;

  const faqsUrdu = [
    {
      q: 'کیا وڑائچ گڈز ٹرانسپورٹ چھوٹے پارسل یا کچا مال مکس کرتی ہے؟',
      a: 'نہیں، ہم صرف پوری گاڑی (فل لوڈ) بک کرتے ہیں۔ پوری گاڑی صرف آپ کے مال کے لیے مخصوص ہوتی ہے اور مال مکس نہیں ہوتا۔'
    },
    {
      q: 'کرایہ کا تعین کیسے ہوتا ہے؟',
      a: 'کرایہ کا تعین شہروں کے درمیانی فاصلے، مطلوبہ گاڑی کے سائز اور سامان کی قسم کے مطابق ہوتا ہے۔ کوئی پوشیدہ چارجز نہیں ہوتے۔'
    },
    {
      q: 'کیا بارش اور خراب موسم میں مال کی حفاظت کا انتظام ہوتا ہے؟',
      a: 'جی بالکل! ہماری تمام گاڑیوں پر مضبوط واٹر پروف ترپالیں اور مضبوط رسیاں موجود ہوتی ہیں۔ بارش اور گرد و غبار سے سامان کا مکمل تحفظ یقینی بنایا جاتا ہے۔'
    },
    {
      q: 'گھریلو شفٹنگ یا مال برداری کے لیے گاڑی کیسے بک کریں؟',
      a: 'آپ کسی بھی وقت فون کال یا واٹس ایپ (0300-5370443) پر رابطہ کر کے اپنا روٹ اور سامان بتا کر گاڑی بک کر سکتے ہیں۔'
    },
    {
      q: 'آپ کے پاس کون کون سی گاڑیاں دستیاب ہیں؟',
      a: 'ہمارے پاس شہزور پک اپ (1 تا 3.5 ٹن)، مزدا 6 وہیلر (4 تا 10 ٹن)، سیمپل ٹرک (8 تا 16 ٹن) اور بڑے بیڈفورڈ ٹرکس دستیاب ہیں۔'
    },
    {
      q: 'کیا بلٹی اور کانٹا پرچی دی جاتی ہے؟',
      a: 'جی ہاں، ہر مال کی روانگی پر باقاعدہ کمپیوٹرائزڈ کانٹا پرچی اور تصدیق شدہ بلٹی رسید دی جاتی ہے۔'
    }
  ];

  const faqsEnglish = [
    {
      q: 'Do you handle small parcels or loose packages?',
      a: 'No, we only book full dedicated trucks. The entire vehicle is reserved for your goods, so nothing is mixed with other shipments.'
    },
    {
      q: 'How are freight rates calculated?',
      a: 'Rates depend on the travel distance between cities, the truck size you need, and your cargo type. We provide clear rates with no hidden costs.'
    },
    {
      q: 'Do you protect cargo from rain and dust?',
      a: 'Yes. All our trucks carry heavy waterproof tarpaulins and strong ropes to protect your goods in all weather conditions.'
    },
    {
      q: 'How can I book a truck for house shifting or commercial delivery?',
      a: 'Call or WhatsApp us at 0300-5370443 anytime. Share your pickup city, drop-off location, and load details for a quick quote and truck booking.'
    },
    {
      q: 'What types of trucks are in your fleet?',
      a: 'We have Shahzore pickups (1 to 3.5 tons), Mazda 6-wheeler trucks (4 to 10 tons), Sample trucks (8 to 16 tons), and heavy Bedford haulers (15 to 28+ tons).'
    },
    {
      q: 'Do you provide bilty receipts and weighbridge slips?',
      a: 'Yes. Every shipment includes a bilty receipt with consignment details and computerized weighbridge scale slips.'
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

                  <div className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50 font-urdu ${isOpen ? 'block' : 'hidden'}`}>
                    {faq.a}
                  </div>
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
                    : 'We do not publish artificial testimonials. Our reputation is built on dependable freight service since 2020. You can explore our service areas network or contact us directly on WhatsApp.'}
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
