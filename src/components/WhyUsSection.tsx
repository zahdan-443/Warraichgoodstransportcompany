import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Umbrella, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyUsSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const guarantees = [
    {
      id: 'ftl',
      titleEn: '100% Dedicated FTL Only',
      titleUr: 'صرف مخصوص فل لوڈ گاڑی',
      descEn: 'Zero cargo mixing, strictly single client per vehicle dispatch from pickup to destination.',
      descUr: 'زیرو پارسل مکسنگ، صرف اور صرف سنگل پارٹی مال برداری بغیر کسی رکاوٹ کے۔',
      icon: ShieldCheck,
      to: '/services',
      accent: 'text-blue-600 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'scale',
      titleEn: 'Certified Scale Slips',
      titleUr: 'کمپیوٹرائزڈ کانٹا پرچی',
      descEn: 'Official computerized weighbridge tickets provided immediately post-loading for axle compliance.',
      descUr: 'لوڈنگ کے فوری بعد سرکاری کانٹا پرچی اور قانونی ایکسل لوڈ کی 100% پابندی۔',
      icon: Scale,
      to: '/services',
      accent: 'text-amber-600 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'safety',
      titleEn: 'Double Waterproof Tarpaulin',
      titleUr: 'ڈبل واٹر پروف ترپال تحفظ',
      descEn: 'Mandatory industrial double tarpaulins ensuring your cargo stays 100% dry and protected.',
      descUr: 'بارش اور نمی سے مکمل حفاظت کے لیے ڈبل واٹر پروف ہیوی ترپال کی لازمی ضمانت۔',
      icon: Umbrella,
      to: '/services',
      accent: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'dispatch',
      titleEn: '24/7 Express Dispatch',
      titleUr: '24/7 نان اسٹاپ روانگی',
      descEn: 'Direct driver mobile contact and real-time highway coordination across all cities in Pakistan.',
      descUr: 'ڈرائیور کا ذاتی رابطہ اور موٹروے پر نان اسٹاپ سفر، بروقت اور محفوظ ترسیل۔',
      icon: Clock,
      to: '/booking',
      accent: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20'
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 block mb-1">
            {isUrdu ? 'ہماری بنیادی ضمانتیں' : 'Core FTL Guarantees'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'کارپوریٹ سطح کا اعتماد اور شفافیت' : 'Why Leading Shippers Choose Warraich Goods'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {isUrdu
              ? 'ہم عام پارسل یا لوز کارگو نہیں کرتے؛ ہماری تمام سروسز صرف سنجیدہ صنعتی اور تجارتی کلائنٹس کے لیے مخصوص ہیں۔'
              : 'Enterprise-grade transport accountability designed specifically for commercial and industrial supply chains.'}
          </p>
        </div>

        {/* 4 Clean Cards: Single column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((item) => {
            const IconComponent = item.icon;
            const title = isUrdu ? item.titleUr : item.titleEn;
            const desc = isUrdu ? item.descUr : item.descEn;

            return (
              <div 
                key={item.id}
                className="relative overflow-hidden bg-white hover:bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                {/* Subtle Faint Large Watermark Icon in Corner */}
                <IconComponent 
                  className="absolute -bottom-3 -right-3 w-24 h-24 text-slate-900/5 group-hover:text-blue-500/10 transition-colors pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-3">
                  
                  {/* Rounded Icon Box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${item.accent} group-hover:scale-105 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Short Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors font-urdu">
                    {title}
                  </h3>

                  {/* ONE Line of Text */}
                  <p className="text-xs sm:text-sm text-slate-600 font-urdu leading-normal line-clamp-2">
                    {desc}
                  </p>

                </div>

                {/* Learn More Link */}
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-100">
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-600 font-urdu group-hover:translate-x-1 transition-all"
                  >
                    <span>{isUrdu ? 'مزید معلومات اور طریقہ کار ←' : 'Learn more →'}</span>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
