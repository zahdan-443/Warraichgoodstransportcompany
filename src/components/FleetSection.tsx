import React, { useState } from 'react';
import { 
  Truck, 
  Weight, 
  Ruler, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles,
  ImageIcon
} from 'lucide-react';
import { FLEET_DATA, COMPANY_INFO } from '../data/companyData';
import { VehicleInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FleetSectionProps {
  onSelectVehicleForBooking: (vehicleId: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicleForBooking }) => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const { language } = useLanguage();
  const tFleet = TRANSLATIONS[language].fleet;

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="fleet" className="py-10 sm:py-16 md:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <Truck className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>{tFleet.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {tFleet.title}
          </h2>
          <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg font-urdu">
            {tFleet.subtitle}
          </p>
        </div>

        {/* Fleet Cards Grid (4 Distinct Trucks: Shehzore, Mazda, Sample, Bedford) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FLEET_DATA.map((truck: VehicleInfo) => {
            const hasError = imageErrorMap[truck.id];
            const truckName = language === 'ur' ? truck.nameUrdu : truck.nameEnglish;
            const truckSubtitle = language === 'ur' ? truck.subtitleUrdu : (truck.subtitleEnglish || truck.subtitleUrdu);
            const truckCapacity = language === 'ur' ? truck.capacityUrdu : truck.capacity;
            const truckBadge = language === 'ur' ? truck.badgeUrdu : (truck.badgeEnglish || truck.badgeUrdu);
            const idealList = language === 'ur' ? truck.idealForUrdu : truck.idealForEnglish;
            const altText = language === 'ur' ? (truck.altUrdu || truck.nameUrdu) : (truck.altEnglish || truck.nameEnglish);
            const webpSrc = truck.webpImage || `./images/${truck.id}-truck.webp`;
            const fallbackSrc = truck.fallbackImage || truck.image;

            const badgeColorClass = 
              truck.id === 'shehzore' ? 'bg-emerald-600 text-white' :
              truck.id === 'mazda' ? 'bg-amber-500 text-slate-950' :
              truck.id === 'sample' ? 'bg-indigo-600 text-white' :
              'bg-blue-600 text-white';

            return (
              <div 
                key={truck.id}
                id={`fleet-card-${truck.id}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col group"
              >
                {/* Truck Photo Image Container with Picture WebP + Lazy Loading */}
                <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-200">
                  {!hasError ? (
                    <picture className="w-full h-full">
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={fallbackSrc}
                        alt={altText}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const currentSrc = e.currentTarget.getAttribute('src');
                          if (currentSrc?.startsWith('./assets/images/')) {
                            e.currentTarget.src = currentSrc.replace('./assets/images/', './images/');
                          } else {
                            handleImageError(truck.id);
                          }
                        }}
                      />
                    </picture>
                  ) : (
                    /* Graphic Truck Fallback Card */
                    <div className="w-full h-full bg-slate-50 p-4 flex flex-col items-center justify-center text-center relative">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-2">
                        <Truck className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 font-urdu">{truckName}</span>
                      <span className="text-[10px] text-slate-500 font-mono mt-1 flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-blue-500" />
                        {truck.id}-truck.webp
                      </span>
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className={`absolute top-2.5 right-2.5 ${badgeColorClass} px-2.5 py-1 rounded-md text-xs font-bold shadow-md font-urdu`}>
                    {truckBadge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-urdu">
                      {truckName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-3 font-urdu">
                      {truckSubtitle}
                    </p>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-0.5 font-urdu">
                          <Weight className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span>{tFleet.capacityLabel}</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block font-urdu">
                          {truckCapacity}
                        </span>
                      </div>

                      <div className="border-r border-slate-200 pr-2">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-0.5 font-urdu">
                          <Ruler className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{tFleet.dimensionsLabel}</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block font-urdu">
                          {truck.dimensions}
                        </span>
                      </div>
                    </div>

                    {/* Ideal Cargo List */}
                    <div className="space-y-1.5 mb-4">
                      <p className="text-xs font-semibold text-blue-900 tracking-wide font-urdu">
                        {tFleet.idealForLabel}
                      </p>
                      <ul className="space-y-1">
                        {idealList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-urdu">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Card Action Buttons */}
                  <div className="space-y-2 pt-3 border-t border-slate-200">
                    <button
                      id={`book-vehicle-${truck.id}-btn`}
                      onClick={() => onSelectVehicleForBooking(truck.id)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-lg transition-all shadow text-xs sm:text-sm cursor-pointer active:scale-95 min-h-[42px] font-urdu"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{tFleet.btnCheckRate}</span>
                    </button>

                    <a
                      id={`whatsapp-vehicle-${truck.id}-btn`}
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(language === 'ur' ? `السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے ${truck.nameUrdu} کی مکمل گاڑی (FTL) بکنگ اور کرایہ کے حوالے سے معلومات درکار ہیں۔` : `Hello! I would like to inquire about booking and freight rates for ${truck.nameEnglish} (FTL) with Warraich Goods.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold py-2 px-3 rounded-lg border border-emerald-300 text-xs transition-colors min-h-[38px] font-urdu"
                      aria-label={`Inquire about ${truck.nameEnglish} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{tFleet.btnWhatsApp}</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Special Services Note */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl p-5 sm:p-7 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 font-urdu">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              {language === 'ur' ? 'کیا آپ کو مخصوص سائز یا لانگ ٹرم فیکٹری کنٹریکٹ چاہیے؟' : 'Need custom truck dimensions or monthly factory logistics contracts?'}
            </h4>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              {language === 'ur' ? 'ہم فیکٹریوں، ملز اور زرعی غلہ تاجروں کے ساتھ باقاعدہ ماہانہ FTL کنٹریکٹ بھی کرتے ہیں۔' : 'We offer regular contract haulage and corporate billing accounts for industrial clients nationwide.'}
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all min-h-[44px] shadow"
            aria-label={`Call ${COMPANY_INFO.phone1}`}
          >
            <Phone className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{language === 'ur' ? `کال پر بات کریں (${COMPANY_INFO.phone1})` : `Call Us (${COMPANY_INFO.phone1})`}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

