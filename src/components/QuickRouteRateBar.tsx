import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Truck, ArrowRight, Calculator } from 'lucide-react';
import { MASTER_CITIES, FLEET_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

const QUICK_BAR_CITIES = [
  'samundri',
  'faisalabad',
  'gojra',
  'toba-tek-singh',
  'kamalia',
  'sahiwal',
  'okara',
  'lahore',
  'multan',
  'rawalpindi',
  'islamabad',
  'gujranwala',
  'sialkot',
  'sargodha',
  'bahawalpur',
  'rahim-yar-khan',
  'karachi',
  'hyderabad',
  'sukkur',
  'peshawar',
  'quetta',
]
  .map((id) => MASTER_CITIES.find((c) => c.id === id))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export const QuickRouteRateBar: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const navigate = useNavigate();

  const [originId, setOriginId] = useState<string>('samundri');
  const [destinationId, setDestinationId] = useState<string>('karachi');
  const [vehicleId, setVehicleId] = useState<string>('mazda');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking', {
      state: {
        originId,
        destinationId,
        vehicleId,
      },
    });
  };

  return (
    <section
      aria-label={isUrdu ? 'فوری روٹ اور کرایہ چیک کریں' : 'Quick Route Rate Estimator'}
      className="bg-slate-950 border-b border-slate-800 py-5 sm:py-6"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-end gap-3.5 sm:gap-4">
            {/* Heading Pill */}
            <div className="lg:w-48 flex-shrink-0 flex items-center gap-2.5 pb-1 lg:pb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-xs sm:text-sm font-black text-slate-950 leading-tight ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'فوری کرایہ و بکنگ' : 'Quick Route Quote'}
                </p>
                <p className={`text-[11px] text-slate-500 leading-tight mt-0.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'روٹ اور گاڑی منتخب کریں' : 'Pick cities & truck type'}
                </p>
              </div>
            </div>

            {/* 3 Quick Selectors */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Origin */}
              <div>
                <label
                  htmlFor="quick-origin-city"
                  className={`block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>{isUrdu ? 'لوڈنگ شہر (From)' : 'From City'}</span>
                </label>
                <select
                  id="quick-origin-city"
                  value={originId}
                  onChange={(e) => setOriginId(e.target.value)}
                  className={`w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-amber-500 focus:outline-none min-h-[44px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                >
                  {QUICK_BAR_CITIES.map((city) => (
                    <option key={city.id} value={city.id}>
                      {isUrdu ? city.dropdownUrdu : city.dropdownEnglish}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div>
                <label
                  htmlFor="quick-destination-city"
                  className={`block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{isUrdu ? 'منزل کا شہر (To)' : 'To City'}</span>
                </label>
                <select
                  id="quick-destination-city"
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className={`w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-amber-500 focus:outline-none min-h-[44px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                >
                  {QUICK_BAR_CITIES.map((city) => (
                    <option key={city.id} value={city.id}>
                      {isUrdu ? city.dropdownUrdu : city.dropdownEnglish}
                    </option>
                  ))}
                </select>
              </div>

              {/* Truck Type */}
              <div>
                <label
                  htmlFor="quick-truck-type"
                  className={`block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                >
                  <Truck className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>{isUrdu ? 'مطلوبہ گاڑی' : 'Truck Type'}</span>
                </label>
                <select
                  id="quick-truck-type"
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                  className={`w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-amber-500 focus:outline-none min-h-[44px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                >
                  {FLEET_DATA.map((v) => (
                    <option key={v.id} value={v.id}>
                      {isUrdu ? `${v.nameUrdu} (${v.capacityUrdu})` : `${v.nameEnglish} (${v.capacity})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="quick-route-submit-btn"
              type="submit"
              className={`lg:w-auto w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-colors active:scale-98 cursor-pointer min-h-[44px] whitespace-nowrap ${isUrdu ? 'font-urdu' : 'font-sans'}`}
            >
              <span>{isUrdu ? 'کرایہ چیک کریں' : 'Check Rate & Book'}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
