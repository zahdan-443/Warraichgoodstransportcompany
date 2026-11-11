import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, ShieldCheck, Scale, Sparkles } from 'lucide-react';
import { FLEET_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const FleetCardsSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  // Short single-line descriptions strictly derived from companyData.ts
  const getSingleLineDesc = (id: string) => {
    switch (id) {
      case 'shehzore':
        return isUrdu
          ? 'تیز رفتار لوکل و انٹرسٹی سنگل پارٹی فل گاڑی لوڈنگ۔'
          : 'High-speed local & intercity dedicated single-shipper pickup.';
      case 'mazda':
        return isUrdu
          ? 'درمیانے درجے کا کارگو اور بین الصوبائی فل ٹرک لوڈ۔'
          : 'Medium-weight industrial freight & interprovincial highway hauls.';
      case 'sample':
        return isUrdu
          ? 'توسیع شدہ چیسز اور والیم بیسڈ بلک صنعتی لوڈنگ۔'
          : 'Extended chassis hauler for high-volume volumetric cargo.';
      case 'bedford':
        return isUrdu
          ? 'انتہائی وزنی اور طویل فاصلاتی کارگو و بندرگاہ ٹرانسپورٹ۔'
          : 'Heavy-duty long haul freight, structural steel & bulk port hauls.';
      default:
        return '';
    }
  };

  return (
    <section id="fleet-overview" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 block mb-1">
            {isUrdu ? 'کمرشل ٹرک فلیٹ' : 'Commercial Fleet Types'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'ہماری 4 بنیادی کمرشل فلیٹ گاڑیاں' : 'Our 4 Core Commercial Fleet Models'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {isUrdu
              ? 'شہزور سے لے کر بیڈفورڈ تک ہر قسم کے صنعتی، زرعی اور کمرشل کارگو کے لیے مکمل مخصوص گاڑیاں۔'
              : 'From 1-ton Shehzore pickups to 28-ton heavy Bedford trailers, dedicated strictly to single-party freight.'}
          </p>
        </div>

        {/* 4 Cards: Single Column on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FLEET_DATA.map((truck) => {
            const title = isUrdu ? truck.nameUrdu : truck.nameEnglish;
            const capacity = isUrdu ? truck.capacityUrdu : truck.capacity;
            const singleLine = getSingleLineDesc(truck.id);

            return (
              <div 
                key={truck.id}
                id={`fleet-card-${truck.id}`}
                className="relative overflow-hidden bg-slate-50/60 hover:bg-white border border-slate-200/90 hover:border-amber-400 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                {/* Subtle Faint Large Watermark Icon in Corner */}
                <Truck 
                  className="absolute -bottom-3 -right-3 w-24 h-24 text-slate-900/5 group-hover:text-amber-500/10 transition-colors pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-3">
                  
                  {/* Top: Rounded Icon Box & Capacity */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Truck className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {capacity}
                    </span>
                  </div>

                  {/* Short Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors font-urdu">
                    {title}
                  </h3>

                  {/* ONE Line of Text (Strictly no bullet list) */}
                  <p className="text-xs sm:text-sm text-slate-600 font-urdu leading-normal line-clamp-2">
                    {singleLine}
                  </p>

                </div>

                {/* Bottom: Learn More Link */}
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-200/60">
                  <Link
                    to="/fleet"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-600 font-urdu group-hover:translate-x-1 transition-all"
                  >
                    <span>{isUrdu ? 'مزید معلومات اور تفصیلات ←' : 'Learn more →'}</span>
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
