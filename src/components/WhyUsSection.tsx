import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';
import { TiltCard } from './MotionPrimitives';

export const WhyUsSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const guarantees = [
    {
      id: 'ftl',
      titleEn: 'Dedicated Trucks Only',
      titleUr: 'صرف مخصوص فل لوڈ گاڑی',
      descEn: 'We book full trucks only, so your goods are never mixed with anyone else’s.',
      descUr: 'زیرو پارسل مکسنگ، صرف اور صرف سنگل پارٹی مال برداری بغیر کسی رکاوٹ کے۔',
      to: '/services',
      image: './images/why-dedicated-trucks-only.webp',
    },
    {
      id: 'scale',
      titleEn: 'Computer Scale Slips',
      titleUr: 'کمپیوٹرائزڈ کانٹا پرچی',
      descEn: 'Official weight slips from computer scales given right after loading.',
      descUr: 'لوڈنگ کے فوری بعد سرکاری کانٹا پرچی اور قانونی ایکسل لوڈ کی 100% پابندی۔',
      to: '/services',
      image: './images/why-computer-scale-slips.webp',
    },
    {
      id: 'safety',
      titleEn: 'Waterproof Tarpaulins',
      titleUr: 'ڈبل واٹر پروف ترپال تحفظ',
      descEn: 'Thick waterproof tarpaulins protect your load from rain, sun, and road dust.',
      descUr: 'بارش اور نمی سے مکمل حفاظت کے لیے ڈبل واٹر پروف ہیوی ترپال کی لازمی ضمانت۔',
      to: '/services',
      image: './images/why-waterproof-tarpaulins.webp',
    },
    {
      id: 'dispatch',
      titleEn: '24/7 Truck Booking',
      titleUr: '24/7 نان اسٹاپ روانگی',
      descEn: 'Call anytime for quick truck booking and direct phone contact with the driver.',
      descUr: 'ڈرائیور کا ذاتی رابطہ اور موٹروے پر نان اسٹاپ سفر، بروقت اور محفوظ ترسیل۔',
      to: '/booking',
      image: './images/why-24-7-truck-booking.webp',
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700 block mb-1">
            {isUrdu ? 'ہماری بنیادی ضمانتیں' : 'Our Guarantees'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'کارپوریٹ سطح کا اعتماد اور شفافیت' : 'Why Customers Choose Warraich Goods'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {isUrdu
              ? 'ہم عام پارسل یا لوز کارگو نہیں کرتے؛ ہماری تمام سروسز صرف سنگل پارٹی مال برداری کے لیے مخصوص ہیں۔'
              : 'We provide full dedicated trucks with clear rates, scale slips, and careful handling for every trip.'}
          </p>
        </div>

        {/* 4 Clean Cards: Single column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((item, idx) => {
            const title = isUrdu ? item.titleUr : item.titleEn;
            const desc = isUrdu ? item.descUr : item.descEn;

            return (
              <TiltCard
                key={item.id}
                data-reveal=""
                data-reveal-variant="zoom-in"
                style={{ '--reveal-delay': `${idx * 75}ms` } as React.CSSProperties}
                className="relative overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl flex flex-col justify-end min-h-[280px] group card-interactive"
              >
                {/* Background Photo */}
                <img
                  src={getAssetUrl(item.image)}
                  alt={title}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center card-hover-zoom"
                />
                {/* Balanced Contrast Gradient Scrim (keeps upper photo bright) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/5 group-hover:via-slate-950/45 transition-colors"
                />

                {/* Bottom Title, Description & Link */}
                <div className="relative z-10 pt-24 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors font-urdu drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-100 font-urdu leading-normal line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {desc}
                  </p>

                  <div className="pt-3 border-t border-white/20">
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 font-urdu group-hover:translate-x-1 transition-transform"
                    >
                      <span>{isUrdu ? 'مزید معلومات اور طریقہ کار ←' : 'Learn more →'}</span>
                    </Link>
                  </div>
                </div>

              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
