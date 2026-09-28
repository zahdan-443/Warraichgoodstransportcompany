import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Truck, 
  Weight, 
  Ruler, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles,
  ImageIcon,
  ArrowRight
} from 'lucide-react';
import { FLEET_DATA, COMPANY_INFO } from '../data/companyData';
import { VehicleInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FleetSectionProps {
  onSelectVehicleForBooking?: (vehicleId: string) => void;
  preview?: boolean;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicleForBooking, preview = false }) => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const { language } = useLanguage();
  const navigate = useNavigate();
  const tFleet = TRANSLATIONS[language].fleet;

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  const handleBook = (vehicleId: string) => {
    if (onSelectVehicleForBooking) {
      onSelectVehicleForBooking(vehicleId);
    }
    navigate('/booking', { state: { vehicleId } });
  };

  return (
    <section id="fleet" className="py-10 sm:py-16 md:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 mb-2 font-urdu">
            <Truck className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>{tFleet.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu tracking-tight">
            {tFleet.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu max-w-2xl mx-auto">
            {tFleet.subtitle}
          </p>
        </div>

        {/* Fleet Cards Grid (4 Distinct Trucks: Shehzore, Mazda, Sample, Bedford) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FLEET_DATA.map((truck: VehicleInfo) => {
            const hasError = imageErrorMap[truck.id];
            const truckName = language === 'ur' ? truck.nameUrdu : truck.nameEnglish;
            const truckSubtitle = language === 'ur' ? truck.subtitleUrdu : (truck.subtitleEnglish || truck.subtitleUrdu);
            const truckCapacity = language === 'ur' ? truck.capacityUrdu : truck.capacity;
            const truckBadge = language === 'ur' ? truck.badgeUrdu : (truck.badgeEnglish || truck.badgeUrdu);
            const idealList = language === 'ur' ? truck.idealForUrdu : truck.idealForEnglish;
            const altText = language === 'ur' ? (truck.altUrdu || truck.nameUrdu) : (truck.altEnglish || truck.nameEnglish);
            const imgSrc = truck.image || `./images/${truck.id}-truck.png`;

            return (
              <div 
                key={truck.id}
                id={`fleet-card-${truck.id}`}
                className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col group"
              >
                {/* Truck Photo Image Container with Clean Containment */}
                <div className="relative h-44 sm:h-48 bg-gradient-to-b from-slate-50 to-white overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                  {!hasError ? (
                    <img
                      src={imgSrc}
                      alt={altText}
                      width={640}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={() => {
                        handleImageError(truck.id);
                      }}
                    />
                  ) : (
                    /* Graphic Truck Fallback Card */
                    <div className="w-full h-full bg-slate-50 p-4 flex flex-col items-center justify-center text-center relative">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-2">
                        <Truck className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 font-urdu">{truckName}</span>
                      <span className="text-[10px] text-slate-500 font-mono mt-1 flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-blue-500" />
                        {truck.id}-truck.png
                      </span>
                    </div>
                  )}
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-white text-[11px] font-bold px-2 py-0.5 rounded font-urdu shadow-xs">
                    {truckBadge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-urdu">
                      {truckName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 mb-3 font-urdu">
                      {truckSubtitle}
                    </p>

                    {/* Specs Cards */}
                    <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-0.5 font-urdu">
                          <Weight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                          <span>{tFleet.capacityLabel}</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block font-urdu">
                          {truckCapacity}
                        </span>
                      </div>

                      <div className="border-r border-slate-200 pr-2">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-0.5 font-urdu">
                          <Ruler className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                          <span>{tFleet.dimensionsLabel}</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block font-urdu">
                          {truck.dimensions}
                        </span>
                      </div>
                    </div>

                    {/* Ideal Cargo List */}
                    <div className="space-y-1 mb-4">
                      <p className="text-xs font-semibold text-slate-700 tracking-wide font-urdu">
                        {tFleet.idealForLabel}
                      </p>
                      <ul className="space-y-1">
                        {idealList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-urdu">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Card Action Button (Single Clean Selection) */}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      id={`book-vehicle-${truck.id}-btn`}
                      onClick={() => handleBook(truck.id)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-xs text-xs sm:text-sm cursor-pointer active:scale-98 min-h-[40px] font-urdu"
                    >
                      <Truck className="w-4 h-4 text-amber-400" />
                      <span>{language === 'ur' ? 'کرایہ معلوم کریں و بکنگ' : 'Calculate Freight & Book'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* If in Preview Mode on Home Page, show CTA to full Fleet page */}
        {preview ? (
          <div className="mt-8 text-center">
            <Link
              to="/fleet"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-colors shadow-sm font-urdu"
            >
              <span>{language === 'ur' ? 'تمام گاڑیوں کی تفصیلات اور کارگو کیٹیگریز دیکھیں' : 'View Full Fleet Specifications & Cargo Types'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Special Services Note on Full Fleet Page */
          <div className="mt-8 sm:mt-12 bg-slate-900 text-white rounded-lg p-5 sm:p-7 shadow-sm border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 font-urdu">
            <div>
              <p className="text-base sm:text-lg font-bold text-white">
                {language === 'ur' ? 'کیا آپ کو مخصوص سائز یا لانگ ٹرم فیکٹری کنٹریکٹ چاہیے؟' : 'Need custom truck dimensions or monthly factory logistics contracts?'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {language === 'ur' ? 'ہم فیکٹریوں، ملز اور زرعی غلہ تاجروں کے ساتھ باقاعدہ ماہانہ FTL کنٹریکٹ بھی کرتے ہیں۔' : 'We offer regular contract haulage and corporate billing accounts for industrial clients nationwide.'}
              </p>
            </div>
            <Link
              to="/about"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm transition-colors min-h-[44px] shadow-sm cursor-pointer font-urdu"
              aria-label="View Corporate Business Profile"
            >
              <span>
                {language === 'ur' ? 'کاروباری تعارف و مکمل پروفائل دیکھیں' : 'View Corporate Profile'}
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

