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
  ShieldCheck,
  Lock
} from 'lucide-react';
import { COMPANY_INFO, FLEET_DATA, PAKISTAN_CITIES, GOODS_TYPES } from '../data/companyData';
import { BookingFormData } from '../types';

interface RateCalculatorSectionProps {
  selectedVehicleId?: string;
}

export const RateCalculatorSection: React.FC<RateCalculatorSectionProps> = ({ selectedVehicleId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    originCity: 'سمندری (Samundri)',
    destinationCity: 'لاہور (Lahore)',
    vehicleType: 'shehzore',
    goodsType: 'زرعی اجناس (گندم، چاول، مکئی، کپاس، چارہ - فل گاڑی)',
    weight: 'فل گاڑی لوڈ',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Find vehicle details
  const currentVehicle = FLEET_DATA.find(v => v.id === formData.vehicleType) || FLEET_DATA[0];

  // Generate WhatsApp message formatted cleanly in Urdu + English
  const generateWhatsAppMessage = () => {
    const message = `*السلام علیکم وڑائچ گڈز ٹرانسپورٹ کمپنی!*
میں آن لائن پورٹل سے مکمل گاڑی (FTL) کی لوڈنگ اور کرایہ کے حوالے سے معلومات لینا چاہتا ہوں۔

📌 *مکمل ٹرک لوڈ (FTL) انکوائری:*
• *پہلا شہر (لوڈنگ پوائنٹ):* ${formData.originCity}
• *منزل کا شہر (ان لوڈنگ پوائنٹ):* ${formData.destinationCity}
• *مطلوبہ FTL گاڑی:* ${currentVehicle.nameUrdu} (${currentVehicle.capacity})
• *سامان کی نوعیت:* ${formData.goodsType}
• *تخمینی وزن / مقدار:* ${formData.weight || 'مکمل گاڑی'}
• *لوڈنگ کی تاریخ:* ${formData.loadingDate}
${formData.customerName ? `• *کلائنٹ کا نام:* ${formData.customerName}` : ''}
${formData.customerPhone ? `• *رابطہ نمبر:* ${formData.customerPhone}` : ''}
${formData.specialInstructions ? `• *اضافی ہدایات:* ${formData.specialInstructions}` : ''}

براہ کرم اس روٹ کے لیے مناسب ترین FTL کرایہ اور گاڑی کی فوری دستیابی سے آگاہ فرمائیں۔ جزاک اللہ!`;

    return message;
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
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>آن لائن FTL کرایہ معلوم کریں و بکنگ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
            مکمل گاڑی (FTL) ریٹ انکوائری و فوری واٹس ایپ بکنگ
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-urdu">
            اپنے روٹ اور مطلوبہ گاڑی کا انتخاب کریں اور 5 منٹ میں براہ راست واٹس ایپ پر مناسب ترین کرایہ حاصل کریں۔
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 text-right">
            
            {/* Notice Bar */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-6 flex items-center justify-end gap-2 text-xs text-amber-900 font-urdu">
              <span>ہم صرف 100% فل ٹرک لوڈ (FTL) سروس دیتے ہیں، لوز کارگو / پارسل ڈیل نہیں کرتے۔</span>
              <Lock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              
              {/* Row 1: Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>پہلا شہر (کہاں سے لوڈ کرنا ہے):</span>
                    <MapPin className="w-4 h-4 text-amber-500" />
                  </label>
                  <select
                    id="booking-origin-city"
                    name="originCity"
                    value={formData.originCity}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                    required
                  >
                    {PAKISTAN_CITIES.map((city, idx) => (
                      <option key={idx} value={city.urdu}>{city.urdu}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>منزل کا شہر (کہاں پہنچانا ہے):</span>
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </label>
                  <select
                    id="booking-destination-city"
                    name="destinationCity"
                    value={formData.destinationCity}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                    required
                  >
                    {PAKISTAN_CITIES.map((city, idx) => (
                      <option key={idx} value={city.urdu}>{city.urdu}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Vehicle Selection & Loading Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>مطلوبہ FTL گاڑی کا انتخاب:</span>
                    <Truck className="w-4 h-4 text-amber-500" />
                  </label>
                  <select
                    id="booking-vehicle-type"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                    required
                  >
                    {FLEET_DATA.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.nameUrdu} — ({v.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>لوڈنگ کی تاریخ (Date):</span>
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </label>
                  <input
                    id="booking-loading-date"
                    type="date"
                    name="loadingDate"
                    value={formData.loadingDate}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Goods Type & Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>سامان کی قسم (Cargo Type):</span>
                    <Package className="w-4 h-4 text-amber-500" />
                  </label>
                  <select
                    id="booking-goods-type"
                    name="goodsType"
                    value={formData.goodsType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                  >
                    {GOODS_TYPES.map((g) => (
                      <option key={g.id} value={g.urdu}>{g.urdu}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>تخمینی وزن / تفصیل:</span>
                    <span className="text-xs text-slate-400 font-normal">(مثلاً: 10 ٹن یا فل لوڈ)</span>
                  </label>
                  <input
                    id="booking-weight"
                    type="text"
                    name="weight"
                    placeholder="مثال: فل ٹرک لوڈ / 8 ٹن"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                  />
                </div>
              </div>

              {/* Row 4: Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>آپ کا نام یا کمپنی (Client Name):</span>
                    <User className="w-4 h-4 text-slate-500" />
                  </label>
                  <input
                    id="booking-customer-name"
                    type="text"
                    name="customerName"
                    placeholder="اپنا نام یا ادارے کا نام لکھیں"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu flex items-center justify-end gap-1.5">
                    <span>آپ کا فون نمبر (Phone Number):</span>
                    <Phone className="w-4 h-4 text-slate-500" />
                  </label>
                  <input
                    id="booking-customer-phone"
                    type="tel"
                    name="customerPhone"
                    placeholder="0300-XXXXXXX"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-mono"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2 font-urdu">
                  کوئی اضافی ہدایات یا تفصیل:
                </label>
                <textarea
                  id="booking-instructions"
                  name="specialInstructions"
                  rows={2}
                  placeholder="مثال: ترپال لازمی ہو، لوڈنگ فیکٹری گیٹ نمبر 2 سے کرنی ہے..."
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none focus:border-amber-500 transition-all text-right font-urdu"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="booking-submit-whatsapp-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/20 text-base sm:text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-urdu"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>واٹس ایپ پر FTL ریٹ معلوم کریں اور گاڑی بک کریں</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2 font-urdu">
                  بٹن دبانے پر آپ کی منتخب کردہ تفصیلات کے ساتھ براہ راست آفیشل واٹس ایپ چیٹ کھل جائے گی۔
                </p>
              </div>

            </form>
          </div>

          {/* Inquiry Summary & Quick Help Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Selected Vehicle & Route Preview */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 text-right">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-semibold text-amber-400 font-urdu">انکوائری خلاصہ (FTL)</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block font-urdu">روٹ (Route):</span>
                  <p className="font-bold text-base text-white font-urdu">
                    {formData.originCity} ➔ {formData.destinationCity}
                  </p>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block mb-1 font-urdu">منتخب FTL گاڑی:</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400 font-urdu">{currentVehicle.nameUrdu}</span>
                    <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-200 font-urdu">{currentVehicle.capacity}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-urdu">{currentVehicle.subtitleUrdu}</p>
                </div>

                <div className="text-xs text-slate-300 space-y-1 bg-slate-800/40 p-3 rounded-xl font-urdu">
                  <div className="flex justify-between">
                    <span className="text-slate-400">تاریخ لوڈنگ:</span>
                    <span className="font-semibold text-white font-mono">{formData.loadingDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">سامان کی قسم:</span>
                    <span className="font-semibold text-white truncate max-w-[160px]">{formData.goodsType}</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Helpline */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-center font-urdu">
                <p className="text-xs text-slate-400 mb-2">فوری ٹیلی فونک تصدیق کے لیے:</p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2.5 px-4 rounded-xl w-full text-sm transition-all shadow cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span className="font-mono">{COMPANY_INFO.phone1}</span>
                </a>
              </div>
            </div>

            {/* NTN Trust & Transparency Badge */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-right">
              <div className="flex items-center gap-3 justify-end mb-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-urdu">سرکاری NTN رجسٹرڈ بلنگ</h4>
                  <p className="text-xs text-slate-500 font-mono">NTN: {COMPANY_INFO.ntn}</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                ہر لوڈنگ پر باقاعدہ کمپیوٹر کانٹا پرچی اور ٹیکس انوائس فراہم کی جاتی ہے۔
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
