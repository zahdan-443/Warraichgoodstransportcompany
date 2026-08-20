import React, { useState } from 'react';
import { 
  Truck, 
  Weight, 
  Ruler, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  Zap,
  ImageIcon
} from 'lucide-react';
import { FLEET_DATA, COMPANY_INFO } from '../data/companyData';
import { VehicleInfo } from '../types';

interface FleetSectionProps {
  onSelectVehicleForBooking: (vehicleId: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicleForBooking }) => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="fleet" className="py-16 md:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>ہمارا جدید فل ٹرک لوڈ (FTL) فلیٹ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-urdu">
            ہر قسم کے وزنی و صنعتی کارگو کے لیے مخصوص گاڑیاں
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg font-urdu">
            پورے پاکستان کے تمام روٹس پر شہزور، مزدا، سیمپل اور بیڈفورڈ ٹرکس مناسب ترین کرائے پر سنگل پارٹی مکمل لوڈ کے لیے دستیاب ہیں
          </p>
        </div>

        {/* Fleet Cards Grid (4 Distinct Trucks: Shehzore, Mazda, Sample, Bedford) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_DATA.map((truck: VehicleInfo) => {
            const hasError = imageErrorMap[truck.id];

            return (
              <div 
                key={truck.id}
                id={`fleet-card-${truck.id}`}
                className="bg-slate-800/90 border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Truck Photo Image Container */}
                <div className="relative h-52 bg-slate-950 overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={truck.image}
                      alt={truck.nameUrdu}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const currentSrc = e.currentTarget.getAttribute('src');
                        if (currentSrc?.startsWith('./assets/images/')) {
                          e.currentTarget.src = currentSrc.replace('./assets/images/', '/assets/images/');
                        } else if (currentSrc?.startsWith('/assets/images/')) {
                          e.currentTarget.src = currentSrc.replace('/assets/images/', './images/');
                        } else if (currentSrc?.startsWith('./images/')) {
                          e.currentTarget.src = currentSrc.replace('./images/', '/images/');
                        } else {
                          handleImageError(truck.id);
                        }
                      }}
                    />
                  ) : (
                    /* Elegant Graphic Truck Fallback Card */
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-4 flex flex-col items-center justify-center text-center relative">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
                        <Truck className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-bold text-white font-urdu">{truck.nameUrdu}</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-1 flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-amber-400" />
                        {truck.image}
                      </span>
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-amber-400 px-3 py-1 rounded-full text-xs font-bold shadow-md font-urdu">
                    {truck.badgeUrdu}
                  </div>

                  {/* English Name Pill */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-sm text-slate-300 px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-slate-700">
                    {truck.nameEnglish}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between text-right">
                  <div>
                    
                    {/* Urdu Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-urdu group-hover:text-amber-400 transition-colors">
                      {truck.nameUrdu}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-4 font-urdu">
                      {truck.subtitleUrdu}
                    </p>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-urdu">
                          <Weight className="w-3.5 h-3.5 text-amber-400" />
                          <span>وزن / گنجائش:</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white block font-urdu">
                          {truck.capacityUrdu}
                        </span>
                      </div>

                      <div className="text-right border-r border-slate-800 pr-2">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-urdu">
                          <Ruler className="w-3.5 h-3.5 text-amber-400" />
                          <span>باڈی سائز:</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white block font-urdu">
                          {truck.dimensions}
                        </span>
                      </div>
                    </div>

                    {/* Ideal Cargo List */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-semibold text-amber-400 tracking-wide font-urdu">
                        موزوں ترین فل ٹرک لوڈ (FTL):
                      </p>
                      <ul className="space-y-1.5">
                        {truck.idealForUrdu.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-urdu">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Card Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-slate-700/60">
                    <button
                      id={`book-vehicle-${truck.id}-btn`}
                      onClick={() => onSelectVehicleForBooking(truck.id)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-sm cursor-pointer active:scale-95 font-urdu"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>اس گاڑی کا FTL کرایہ معلوم کریں</span>
                    </button>

                    <a
                      id={`whatsapp-vehicle-${truck.id}-btn`}
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے ${truck.nameUrdu} کی مکمل گاڑی (FTL) بکنگ اور کرایہ کے حوالے سے معلومات درکار ہیں۔`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-700/70 hover:bg-emerald-600 hover:text-white text-slate-200 font-medium py-2 px-3 rounded-xl border border-slate-600 hover:border-emerald-500 text-xs transition-colors font-urdu"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>واٹس ایپ پر رابطہ کریں</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Special Services Note */}
        <div className="mt-12 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center text-slate-300 text-sm sm:text-base max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-lg font-bold text-white font-urdu">کیا آپ کو مخصوص سائز یا لانگ ٹرم فیکٹری کنٹریکٹ چاہیے؟</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-urdu">ہم فیکٹریوں، ملز اور زرعی غلہ تاجروں کے ساتھ باقاعدہ ماہانہ FTL کنٹریکٹ بھی کرتے ہیں۔</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all font-urdu"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>کال پر بات کریں ({COMPANY_INFO.phone1})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
