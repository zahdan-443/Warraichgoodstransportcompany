import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Star, 
  Quote, 
  CheckCircle2, 
  MessageSquareQuote,
  ShieldCheck,
  Building,
  UserCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FaqAndReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      questionUrdu: 'کیا وڑائچ گڈز ٹرانسپورٹ چھوٹے پارسل یا لوز کارگو (LTL) بک کرتی ہے؟',
      answerUrdu: 'نہیں، ہم لوز کارگو، چھوٹے پارسل یا پارٹ لوڈ (LTL) ڈیل نہیں کرتے۔ ہماری تمام گاڑیاں (شہزور، مزدا، سیمپل، بیڈفورڈ) 100% فل ٹرک لوڈ (FTL) یعنی صرف ایک ہی پارٹی/گاہک کے مخصوص مال کے لیے روانہ کی جاتی ہیں۔'
    },
    {
      questionUrdu: 'فل ٹرک لوڈ (FTL) کرایہ کا تعین کس طرح ہوتا ہے؟',
      answerUrdu: 'کرایہ کا تعین فاصلہ (کلو میٹر)، مطلوبہ گاڑی کی قسم (شہزور، مزدا، سیمپل، بیڈفورڈ) اور لوڈنگ و ان لوڈنگ پوائنٹس کے مطابق شفاف انداز میں ہوتا ہے۔ بلنگ پر کوئی غیر متوقع پوشیدہ چارجز نہیں ہوتے۔'
    },
    {
      questionUrdu: 'کیا بارش اور خراب موسم میں مال کے لیے ترپال کی مکمل ضمانت ہوتی ہے؟',
      answerUrdu: 'جی بالکل! ہماری تمام اوپن اور جالی باڈی گاڑیوں میں ڈبل واٹر پروف ہیوی ترپالیں اور مضبوط ٹائی ڈاؤن رسیاں موجود ہوتی ہیں۔ بارش، گرد و غبار اور دھوپ سے سامان کا 100% تحفظ یقینی بنایا جاتا ہے۔'
    },
    {
      questionUrdu: 'سمندری اور کمالیہ اڈے سے گاڑی کتنی دیر میں دستیاب ہو جاتی ہے؟',
      answerUrdu: 'ہمارے پاس سمندری مین اڈا اور کمالیہ برانچ میں شہزور، مزدا اور بیڈفورڈ گاڑیاں اسٹینڈ بائی رہتی ہیں۔ رابطہ کرنے پر قریبی تحصیلوں، فیکٹریوں یا غلہ منڈی میں گاڑی فوری لوڈنگ کے لیے حاضر کر دی جاتی ہے۔'
    },
    {
      questionUrdu: 'کیا فیکٹریوں، ملز اور تجارتی اداروں کے ساتھ باقاعدہ کنٹریکٹ ہو سکتا ہے؟',
      answerUrdu: 'جی ہاں، وڑائچ گڈز ٹرانسپورٹ کمپنی ٹیکسٹائل ملز، فلور ملز، سیمنٹ ایجنسیوں، شوگر ملز اور تجارتی اداروں کے ساتھ باقاعدہ FTL لاجسٹکس معاہدے پر گاڑیاں فراہم کرتی ہے۔'
    },
    {
      questionUrdu: 'کیا ڈرائیورز کی شناخت اور گاڑی کے کاغذات کی سرکاری تصدیق ہوتی ہے؟',
      answerUrdu: 'جی ہاں، تمام ڈرائیورز نادرا شناختی کارڈ، ڈرائیونگ لائسنس اور باقاعدہ تصدیق شدہ ٹریک ریکارڈ کے ساتھ رجسٹرڈ ہوتے ہیں۔'
    }
  ];

  const testimonials = [
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

  return (
    <section id="faq-reviews" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: FAQs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>اکثر پوچھے جانے والے سوالات</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
              فل ٹرک لوڈ (FTL) ٹرانسپورٹ کے متعلق اہم سوالات
            </h2>
            <p className="text-slate-600 mt-2 text-base font-urdu">
              اگر آپ کے ذہن میں مزید کوئی سوال ہو تو آپ ہم سے براہ راست فون یا واٹس ایپ پر رابطہ کر سکتے ہیں۔
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-3.5 text-right">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-right gap-4 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
                    <span className="font-bold text-base sm:text-lg text-slate-950 font-urdu leading-relaxed">
                      {faq.questionUrdu}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-200 font-urdu bg-white">
                      {faq.answerUrdu}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Testimonials & Client Trust */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
              <MessageSquareQuote className="w-4 h-4 text-emerald-700" />
              <span>تجارتی گاہکوں کا اعتماد و تاثرات</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
              ہمارے معزز کلائنٹس اور فیکٹری مالکان کی آراء
            </h3>
            <p className="text-slate-600 mt-2 text-base font-urdu">
              سالہا سال سے ٹیکسٹائل ملز، غلہ تاجروں اور صنعتی اداروں کا وڑائچ گڈز پر مکمل اعتماد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-amber-500/30" />
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed font-urdu">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <span className="font-bold text-slate-950 block font-urdu text-base">
                    {t.name}
                  </span>
                  <span className="text-xs text-slate-500 block font-urdu">
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
