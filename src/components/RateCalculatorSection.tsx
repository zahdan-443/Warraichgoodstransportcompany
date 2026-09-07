import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  MapPin, 
  Truck, 
  Calendar, 
  Phone, 
  User, 
  Package, 
  MessageCircle, 
  CheckCircle2,
  Sparkles,
  Lock
} from 'lucide-react';
import { COMPANY_INFO, FLEET_DATA, PAKISTAN_CITIES, GOODS_TYPES } from '../data/companyData';
import { BookingFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface RateCalculatorSectionProps {
  selectedVehicleId?: string;
  selectedGoodsType?: string;
}

export const RateCalculatorSection: React.FC<RateCalculatorSectionProps> = ({ selectedVehicleId, selectedGoodsType }) => {
  const { language } = useLanguage();
  const tCalc = TRANSLATIONS[language].calculator;

  const [formData, setFormData] = useState<BookingFormData>({
    originCity: language === 'ur' ? 'سمندری (Samundri)' : 'Samundri',
    destinationCity: language === 'ur' ? 'لاہور (Lahore)' : 'Lahore',
    vehicleType: 'shehzore',
    goodsType: language === 'ur' ? 'زرعی اجناس (گندم، چاول، مکئی، کپاس، چارہ - فل گاڑی)' : 'Agricultural Produce (Wheat, Corn, Rice, Cotton - Full Truckload)',
    weight: language === 'ur' ? 'فل گاڑی لوڈ' : 'Full Truckload',
    loadingDate: new Date().toISOString().split('T')[0],
    customerName: '',
    customerPhone: '',
    specialInstructions: '',
  });

  useEffect(() => {
    if (selectedVehicleId) {
      setFormData(prev => ({ ...prev, vehicleType: selectedVehicleId }));
    }
  }, [selectedVehicleId]);

  useEffect(() => {
    if (selectedGoodsType) {
      setFormData(prev => ({ ...prev, goodsType: selectedGoodsType }));
    }
  }, [selectedGoodsType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Find vehicle details
  const currentVehicle = FLEET_DATA.find(v => v.id === formData.vehicleType) || FLEET_DATA[0];
  const vehicleName = language === 'ur' ? currentVehicle.nameUrdu : currentVehicle.nameEnglish;
  const vehicleCapacity = language === 'ur' ? currentVehicle.capacityUrdu : currentVehicle.capacity;
  const vehicleSubtitle = language === 'ur' ? currentVehicle.subtitleUrdu : (currentVehicle.subtitleEnglish || currentVehicle.subtitleUrdu);

  // Generate WhatsApp message formatted cleanly in Urdu or English based on user's preference
  const generateWhatsAppMessage = () => {
    if (language === 'ur') {
      return `*السلام علیکم وڑائچ گڈز ٹرانسپورٹ کمپنی!*
میں آن لائن پورٹل سے مکمل گاڑی (FTL) کی لوڈنگ اور کرایہ کے حوالے سے معلومات لینا چاہتا ہوں۔

📌 *مکمل ٹرک لوڈ (FTL) انکوائری:*
• *پہلا شہر (لوڈنگ پوائنٹ):* ${formData.originCity}
• *منزل کا شہر (ان لوڈنگ پوائنٹ):* ${formData.destinationCity}
• *مطلوبہ FTL گاڑی:* ${currentVehicle.nameUrdu} (${currentVehicle.capacityUrdu})
• *سامان کی نوعیت:* ${formData.goodsType}
• *تخمینی وزن / مقدار:* ${formData.weight || 'مکمل گاڑی'}
• *لوڈنگ کی تاریخ:* ${formData.loadingDate}
${formData.customerName ? `• *کلائنٹ کا نام:* ${formData.customerName}` : ''}
${formData.customerPhone ? `• *رابطہ نمبر:* ${formData.customerPhone}` : ''}
${formData.specialInstructions ? `• *اضافی ہدایات:* ${formData.specialInstructions}` : ''}

براہ کرم اس روٹ کے لیے مناسب ترین FTL کرایہ اور گاڑی کی فوری دستیابی سے آگاہ فرمائیں۔ جزاک اللہ!`;
    } else {
      return `*Hello Warraich Goods Transport Company!*
I would like to inquire about freight rates and truck availability for Full Truckload (FTL) haulage.

📌 *Full Truckload (FTL) Booking Inquiry:*
• *Origin (Loading Point):* ${formData.originCity}
• *Destination (Unloading Point):* ${formData.destinationCity}
• *Requested Truck:* ${currentVehicle.nameEnglish} (${currentVehicle.capacity})
• *Cargo Category:* ${formData.goodsType}
• *Estimated Weight / Volume:* ${formData.weight || 'Full Truckload'}
• *Loading Date:* ${formData.loadingDate}
${formData.customerName ? `• *Client / Company:* ${formData.customerName}` : ''}
${formData.customerPhone ? `• *Contact Phone:* ${formData.customerPhone}` : ''}
${formData.specialInstructions ? `• *Instructions:* ${formData.specialInstructions}` : ''}

Please advise regarding the most competitive freight quotation and earliest vehicle dispatch. Thank you!`;
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateWhatsAppMessage();
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>{tCalc.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            {tCalc.title}
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            {tCalc.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
            
            {/* Notice Bar */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-6 flex items-center justify-between gap-2 text-xs text-amber-900">
              <span className="font-medium">{tCalc.ftlNotice}</span>
              <Lock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              
              {/* Row 1: Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="booking-origin-city" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{tCalc.originLabel}:</span>
                  </label>
                  <select
                    id="booking-origin-city"
                    name="originCity"
                    value={formData.originCity}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                    required
                  >
                    {PAKISTAN_CITIES.map((city, idx) => (
                      <option key={idx} value={language === 'ur' ? city.urdu : city.en}>
                        {language === 'ur' ? city.urdu : `${city.en} (${city.urdu})`}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-destination-city" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{tCalc.destLabel}:</span>
                  </label>
                  <select
                    id="booking-destination-city"
                    name="destinationCity"
                    value={formData.destinationCity}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                    required
                  >
                    {PAKISTAN_CITIES.map((city, idx) => (
                      <option key={idx} value={language === 'ur' ? city.urdu : city.en}>
                        {language === 'ur' ? city.urdu : `${city.en} (${city.urdu})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Vehicle Selection & Loading Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="booking-vehicle-type" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-amber-500" />
                    <span>{tCalc.vehicleLabel}:</span>
                  </label>
                  <select
                    id="booking-vehicle-type"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                    required
                  >
                    {FLEET_DATA.map((v) => (
                      <option key={v.id} value={v.id}>
                        {language === 'ur' ? `${v.nameUrdu} — (${v.capacityUrdu})` : `${v.nameEnglish} (${v.capacity})`}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-loading-date" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{tCalc.dateLabel}:</span>
                  </label>
                  <input
                    id="booking-loading-date"
                    type="date"
                    name="loadingDate"
                    value={formData.loadingDate}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Goods Type & Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="booking-goods-type" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-amber-500" />
                    <span>{tCalc.cargoLabel}:</span>
                  </label>
                  <select
                    id="booking-goods-type"
                    name="goodsType"
                    value={formData.goodsType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                  >
                    {GOODS_TYPES.map((g) => (
                      <option key={g.id} value={language === 'ur' ? g.urdu : g.en}>
                        {language === 'ur' ? g.urdu : g.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-weight" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <span>{tCalc.weightLabel}:</span>
                  </label>
                  <input
                    id="booking-weight"
                    type="text"
                    name="weight"
                    placeholder={language === 'ur' ? 'مثال: فل ٹرک لوڈ / 8 ٹن' : 'e.g., Full Truckload / 8 Tons'}
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="booking-customer-name" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-slate-500" />
                    <span>{tCalc.nameLabel}:</span>
                  </label>
                  <input
                    id="booking-customer-name"
                    type="text"
                    name="customerName"
                    placeholder={language === 'ur' ? 'اپنا نام یا ادارے کا نام لکھیں' : 'Enter your name or business'}
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="booking-customer-phone" className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span>{tCalc.phoneLabel}:</span>
                  </label>
                  <input
                    id="booking-customer-phone"
                    type="tel"
                    name="customerPhone"
                    placeholder="0300-XXXXXXX"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label htmlFor="booking-instructions" className="block text-sm font-bold text-slate-800 mb-2">
                  {tCalc.notesLabel}:
                </label>
                <textarea
                  id="booking-instructions"
                  name="specialInstructions"
                  rows={2}
                  placeholder={language === 'ur' ? 'مثال: ترپال لازمی ہو، لوڈنگ فیکٹری گیٹ نمبر 2 سے کرنی ہے...' : 'e.g., Heavy waterproof tarpaulin required, loading at Gate 2...'}
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="booking-submit-whatsapp-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/20 text-base sm:text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>{tCalc.submitBtn}</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2">
                  {tCalc.submitHint}
                </p>
              </div>

            </form>
          </div>

          {/* Inquiry Summary & Quick Help Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Selected Vehicle & Route Preview */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-semibold text-amber-400">{tCalc.summaryTitle}</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block">{language === 'ur' ? 'روٹ (Route):' : 'Route:'}</span>
                  <p className="font-bold text-base text-white">
                    {formData.originCity} ➔ {formData.destinationCity}
                  </p>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block mb-1">{language === 'ur' ? 'منتخب FTL گاڑی:' : 'Selected FTL Vehicle:'}</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400">{vehicleName}</span>
                    <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-200">{vehicleCapacity}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{vehicleSubtitle}</p>
                </div>

                <div className="text-xs text-slate-300 space-y-1 bg-slate-800/40 p-3 rounded-xl">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'ur' ? 'تاریخ لوڈنگ:' : 'Date:'}</span>
                    <span className="font-semibold text-white font-mono">{formData.loadingDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'ur' ? 'سامان کی قسم:' : 'Cargo:'}</span>
                    <span className="font-semibold text-white truncate max-w-[160px]">{formData.goodsType}</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Helpline */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-400 mb-2">{language === 'ur' ? 'فوری ٹیلی فونک تصدیق کے لیے:' : 'For instant phone confirmation:'}</p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2.5 px-4 rounded-xl w-full text-sm transition-all shadow cursor-pointer"
                  aria-label={`Call ${COMPANY_INFO.phone1}`}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span className="font-mono">{COMPANY_INFO.phone1}</span>
                </a>
              </div>
            </div>

            {/* NTN Trust & Transparency Badge */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{tCalc.ntnBillingTitle}</h4>
                  <p className="text-xs text-slate-500 font-mono">NTN: {COMPANY_INFO.ntn}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {tCalc.ntnBillingDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

