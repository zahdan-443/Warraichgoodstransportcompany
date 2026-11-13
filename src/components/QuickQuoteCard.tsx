import React, { useState } from 'react';
import { 
  MapPin, 
  Truck, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';
import { MASTER_CITIES, FLEET_DATA, COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const QuickQuoteCard: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [pickupCity, setPickupCity] = useState<string>('lahore');
  const [deliveryCity, setDeliveryCity] = useState<string>('karachi');
  const [vehicleId, setVehicleId] = useState<string>('mazda');

  const selectedVehicle = FLEET_DATA.find(v => v.id === vehicleId) || FLEET_DATA[0];
  const selectedPickup = MASTER_CITIES.find(c => c.id === pickupCity) || MASTER_CITIES[0];
  const selectedDelivery = MASTER_CITIES.find(c => c.id === deliveryCity) || MASTER_CITIES[11];

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const pickupLabel = isUrdu ? selectedPickup.nameUrdu : selectedPickup.nameEnglish;
    const deliveryLabel = isUrdu ? selectedDelivery.nameUrdu : selectedDelivery.nameEnglish;
    const vehicleLabel = isUrdu ? selectedVehicle.nameUrdu : selectedVehicle.nameEnglish;

    const message = isUrdu
      ? `السلام علیکم وڑائچ گڈز! مجھے مندرجہ ذیل روٹ کے لیے فل ٹرک لوڈ (FTL) کرایہ معلوم کرنا ہے:\n• روانگی مقام: ${pickupLabel}\n• منزل: ${deliveryLabel}\n• مطلوبہ گاڑی: ${vehicleLabel} (${selectedVehicle.capacityUrdu})\nبراہ کرم دستیاب گاڑی اور بہترین ریٹ شیئر فرمائیں۔ شکریہ!`
      : `Hello Warraich Goods! I need a dedicated FTL freight quote for:\n• Pickup City: ${pickupLabel}\n• Delivery City: ${deliveryLabel}\n• Vehicle Type: ${vehicleLabel} (${selectedVehicle.capacity})\nPlease provide the current rate and vehicle availability. Thank you!`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const generalWhatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    isUrdu 
      ? 'السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے لائیو فریٹ ریٹ اور گاڑی بکنگ معلوم کرنی ہے۔'
      : 'Hello Warraich Goods! I would like to chat regarding instant freight rates and truck booking.'
  )}`;

  return (
    <div id="quick-quote" className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-7 md:p-8">
        
        {/* Header Kicker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-amber-600 font-mono tracking-wider uppercase">
              {isUrdu ? 'فوری کوٹیشن' : 'Fast Freight Quote'}
            </span>
            <h2 className={`text-lg sm:text-xl font-black text-slate-950 leading-snug ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'آن لائن کرایہ معلوم کریں اور گاڑی بک کریں' : 'Check Route Rates & Book Online'}
            </h2>
          </div>
          
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
              {isUrdu ? 'صرف مکمل گاڑی' : 'Dedicated Trucks Only'}
            </span>
          </div>
        </div>

        {/* Quick Quote Form */}
        <form onSubmit={handleGetQuote} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            
            {/* 1. Pickup City */}
            <div>
              <label 
                htmlFor="quick-pickup-city" 
                className={`block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{isUrdu ? 'روانگی کا شہر:' : 'Pickup City:'}</span>
              </label>
              <select
                id="quick-pickup-city"
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className={`w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors cursor-pointer min-h-[46px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                required
              >
                {MASTER_CITIES.map((city) => (
                  <option key={city.id} value={city.id}>
                    {isUrdu ? city.dropdownUrdu : city.dropdownEnglish}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Delivery City */}
            <div>
              <label 
                htmlFor="quick-delivery-city" 
                className={`block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>{isUrdu ? 'منزل کا شہر:' : 'Delivery City:'}</span>
              </label>
              <select
                id="quick-delivery-city"
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
                className={`w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors cursor-pointer min-h-[46px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                required
              >
                {MASTER_CITIES.map((city) => (
                  <option key={city.id} value={city.id}>
                    {isUrdu ? city.dropdownUrdu : city.dropdownEnglish}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Vehicle Type */}
            <div>
              <label 
                htmlFor="quick-vehicle-type" 
                className={`block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                <Truck className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
                <span>{isUrdu ? 'مطلوبہ گاڑی:' : 'Vehicle Type:'}</span>
              </label>
              <select
                id="quick-vehicle-type"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className={`w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors cursor-pointer min-h-[46px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                required
              >
                {FLEET_DATA.map((v) => (
                  <option key={v.id} value={v.id}>
                    {isUrdu ? `${v.nameUrdu} (${v.capacityUrdu})` : `${v.nameEnglish} (${v.capacity})`}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              id="quick-quote-submit-btn"
              type="submit"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black px-8 py-3.5 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer min-h-[48px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
            >
              <span>{isUrdu ? 'واٹس ایپ پر فوری ریٹ معلوم کریں' : 'Get Quote on WhatsApp'}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>

            <a
              id="quick-quote-chat-link"
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors py-1 cursor-pointer ${isUrdu ? 'font-urdu' : 'font-sans'}`}
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
              <span>{isUrdu ? 'یا واٹس ایپ پر لائیو رابطہ کریں ←' : 'Chat on WhatsApp directly →'}</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};
