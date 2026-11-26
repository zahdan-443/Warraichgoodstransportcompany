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
import { MAIN_FAQS } from '../data/faqData';
import { TrustCarousel } from './MotionPrimitives';

export const FaqAndReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language } = useLanguage();
  const tFaq = TRANSLATIONS[language].reviews;

  const currentFaqs = MAIN_FAQS.map((item) => ({
    q: language === 'ur' ? item.questionUr : item.questionEn,
    a: language === 'ur' ? item.answerUr : item.answerEn,
  }));

  return (
    <section id="faq-reviews" className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section: FAQs */}
        <div className="max-w-4xl mx-auto">
          <div data-reveal="" className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
              <HelpCircle className="w-4 h-4 text-blue-700 flex-shrink-0" />
              <span>{tFaq.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
              {tFaq.title}
            </h1>
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
                  data-reveal=""
                  style={{ '--reveal-delay': `${index * 60}ms` } as React.CSSProperties}
                  className="card-interactive border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:border-slate-300"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-5 flex items-center justify-between gap-4 text-start hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-relaxed text-start font-urdu">
                      {faq.q}
                    </span>
                    <ChevronDown className={`faq-chevron w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`faq-accordion ${isOpen ? 'faq-accordion-open' : ''}`} aria-hidden={!isOpen}>
                    <div className="faq-accordion-inner">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50 font-urdu">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Auto-Sliding Verified Trust & Service Standards Carousel (pauses on hover) */}
          <div data-reveal="">
            <TrustCarousel />
          </div>

          {/* Transparent Google Business Profile & Direct Feedback Box (No fake reviews) */}
          <div data-reveal="" data-reveal-variant="zoom-in" className="mt-8 bg-slate-900 text-white rounded-lg p-6 sm:p-8 shadow-sm border border-slate-800">
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
                    : 'We do not publish fake reviews. Our reputation comes from honest, dependable transport work since 2008. You can check our service areas or reach us directly on phone or WhatsApp.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/booking"
                  className="btn-animated w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md cursor-pointer font-urdu"
                  title="View Service Areas"
                >
                  <MapPin className="w-4 h-4 text-white" />
                  <span>{language === 'ur' ? 'شہروں کی فہرست و روٹس' : 'Explore Cities & Corridors'}</span>
                </Link>

                <Link
                  to="/about"
                  className="btn-animated w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md cursor-pointer font-urdu"
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
