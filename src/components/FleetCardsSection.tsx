import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FLEET_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';
import { TiltCard } from './MotionPrimitives';

export const FleetCardsSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const getSingleLineDesc = (id: string) => {
    switch (id) {
      case 'shehzore':
        return isUrdu
          ? 'تیز رفتار لوکل و انٹرسٹی سنگل پارٹی فل گاڑی لوڈنگ۔'
          : 'Fast Shahzore pickups for local and city-to-city loads.';
      case 'mazda':
        return isUrdu
          ? 'درمیانے درجے کا کارگو اور بین الصوبائی فل ٹرک لوڈ۔'
          : 'Mid-size 6-wheeler trucks for factory stock and intercity trips.';
      case 'sample':
        return isUrdu
          ? 'توسیع شدہ چیسز اور والیم بیسڈ بلک صنعتی لوڈنگ۔'
          : 'Extended-body trucks for bulky and high-volume cargo.';
      case 'bedford':
        return isUrdu
          ? 'انتہائی وزنی اور طویل فاصلاتی کارگو و بندرگاہ ٹرانسپورٹ۔'
          : 'Heavy haulers for steel, machinery, and Karachi Port runs.';
      default:
        return '';
    }
  };

  return (
    <section id="fleet-overview" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 block mb-1">
            {isUrdu ? 'کمرشل ٹرک فلیٹ' : 'Commercial Fleet Types'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'ہماری 4 بنیادی کمرشل فلیٹ گاڑیاں' : 'Our 4 Core Truck Types'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {isUrdu
              ? 'شہزور سے لے کر بیڈفورڈ تک ہر قسم کے صنعتی، زرعی اور کمرشل کارگو کے لیے مکمل مخصوص گاڑیاں۔'
              : 'From 1-ton Shahzore pickups to 28-ton Bedford trucks — every vehicle is booked strictly for your load alone.'}
          </p>
        </div>

        {/* 4 Cards: Single Column on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FLEET_DATA.map((truck, idx) => {
            const title = isUrdu ? truck.nameUrdu : truck.nameEnglish;
            const capacity = isUrdu ? truck.capacityUrdu : truck.capacity;
            const altText = isUrdu ? (truck.altUrdu || truck.nameUrdu) : (truck.altEnglish || truck.nameEnglish);
            const singleLine = getSingleLineDesc(truck.id);
            const bgSrc = getAssetUrl(truck.image);

            return (
              <TiltCard
                key={truck.id}
                id={`fleet-card-${truck.id}`}
                data-reveal=""
                data-reveal-variant="zoom-in"
                style={{ '--reveal-delay': `${idx * 75}ms` } as React.CSSProperties}
                className="relative overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[280px] group card-interactive"
              >
                {/* Vehicle Background Image */}
                <img
                  src={bgSrc}
                  alt={altText}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center card-hover-zoom"
                />
                {/* Balanced Contrast Gradient Scrim (keeps upper vehicle photo clear and bright) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/5 group-hover:via-slate-950/35 transition-colors"
                />

                {/* Top: Capacity Badge only (unobstructed upper-left corner) */}
                <div className="relative z-10 flex items-center justify-end">
                  <span className="text-[11px] font-mono font-bold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/20 shadow-sm">
                    {capacity}
                  </span>
                </div>

                {/* Bottom Content & Link */}
                <div className="relative z-10 pt-14 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors font-urdu drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-100 font-urdu leading-normal line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {singleLine}
                  </p>

                  <div className="pt-3 border-t border-white/20">
                    <Link
                      to="/fleet"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 font-urdu group-hover:translate-x-1 transition-transform"
                    >
                      <span>{isUrdu ? 'مزید معلومات اور تفصیلات ←' : 'Learn more →'}</span>
                    </Link>
                  </div>
                </div>

              </TiltCard>
            );
          })}
        </div>

        {/* View All Link */}
        <div data-reveal="" className="mt-8 text-center">
          <Link
            to="/fleet"
            className="btn-animated inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-xs font-urdu"
          >
            <span>{isUrdu ? 'تمام گاڑیاں اور تفصیلات دیکھیں' : 'View all trucks & specs'}</span>
            <ArrowRight className={`btn-arrow-icon w-4 h-4 flex-shrink-0 ${isUrdu ? 'rotate-180' : ''}`} />
          </Link>
        </div>

      </div>
    </section>
  );
};
