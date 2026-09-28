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
  Lock,
  Copy,
  Check,
  Clock,
  ArrowRight,
  Building2
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
  const isUrdu = language === 'ur';

  const [isCorporateMode, setIsCorporateMode] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);
  const [formData, setFormData] = useState<BookingFormData>({
    originCity: language === 'ur' ? 'سمندری (Samundri)' : 'Samundri',
    destinationCity: language === 'ur' ? 'لاہور (Lahore)' : 'Lahore',
    vehicleType: 'shehzore',
    goodsType: language === 'ur' ? 'زرعی اجناس (گندم، چاول، مکئی، کپاس، چارہ - فل گاڑی)' : 'Agricultural Produce (Wheat, Corn, Rice, Cotton - Full Truckload)',
    weight: language === 'ur' ? 'فل گاڑی لوڈ' : 'Full Truckload',
    loadingDate: '',
    customerName: '',
    customerPhone: '',
    specialInstructions: '',
    isCorporateInquiry: false,
    companyName: '',
    monthlyTrips: '5-10 Trucks / Month',
    industryType: 'Textile / Mill',
  });

  // Set default date on client-side mount without causing hydration mismatch
  useEffect(() => {
    setFormData(prev => {
      if (!prev.loadingDate) {
        return { ...prev, loadingDate: new Date().toISOString().split('T')[0] };
      }
      return prev;
    });
  }, []);

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
    if (isCorporateMode) {
      if (language === 'ur') {
        return `*السلام علیکم وڑائچ گڈز ٹرانسپورٹ کمپنی!*
ہم اپنی کمپنی/مل کے لیے باقاعدہ *کارپوریٹ B2B ٹرانسپورٹ کنٹریکٹ اور FTL ریٹس* کے سلسلے میں رابطہ کر رہے ہیں۔

🏢 *کارپوریٹ کوائف و انکوائری:*
• *ادارے / مل کا نام:* ${formData.companyName || 'Corporate Client'}
• *رابطہ کار:* ${formData.customerName || 'Procurement Incharge'}
• *فون نمبر:* ${formData.customerPhone || 'N/A'}
• *باقاعدہ روٹ:* ${formData.originCity} ➔ ${formData.destinationCity}
• *مطلوبہ گاڑی کی کلاس:* ${currentVehicle.nameUrdu} (${currentVehicle.capacityUrdu})
• *ماہانہ تخمینی گاڑیاں:* ${formData.monthlyTrips || '5-10 Trucks / Month'}
• *سامان کی قسم:* ${formData.goodsType}
• *ٹیکس انوائسنگ / WHT:* FBR NTN: ${COMPANY_INFO.ntn} کے ساتھ باقاعدہ انوائس مطلوب ہے۔
${formData.specialInstructions ? `• *اضافی مطالبات:* ${formData.specialInstructions}` : ''}

براہ کرم کارپوریٹ ریٹس اور باقاعدہ کنٹریکٹ لاجسٹکس کے حوالے سے رہنمائی فرمائیں۔ شکریہ!`;
      } else {
        return `*Hello Warraich Goods Transport Company!*
We are reaching out for an official *Corporate B2B Freight Logistics Contract & FTL Rates* inquiry.

🏢 *Corporate Enterprise Details:*
• *Company / Mill Name:* ${formData.companyName || 'Corporate Client'}
• *Contact Person:* ${formData.customerName || 'Procurement Lead'}
• *Phone:* ${formData.customerPhone || 'N/A'}
• *Regular Freight Route:* ${formData.originCity} ➔ ${formData.destinationCity}
• *Required Truck Fleet:* ${currentVehicle.nameEnglish} (${currentVehicle.capacity})
• *Estimated Monthly Volume:* ${formData.monthlyTrips || '5-10 Trucks / Month'}
• *Cargo Category:* ${formData.goodsType}
• *Tax & Billing:* Computerized FBR NTN invoices and PODs required.
${formData.specialInstructions ? `• *Special Notes:* ${formData.specialInstructions}` : ''}

Please share your corporate rate quotation and vendor onboarding procedure. Thank you!`;
      }
    }

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

  const handleCopySummary = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => {
      setCopiedSummary(false);
    }, 2500);
  };

  const quickRoutes = [
    { origin: isUrdu ? 'سمندری (Samundri)' : 'Samundri', dest: isUrdu ? 'کراچی (Karachi)' : 'Karachi', labelUr: 'سمندری ➔ کراچی پورٹ', labelEn: 'Samundri ➔ Karachi' },
    { origin: isUrdu ? 'سمندری (Samundri)' : 'Samundri', dest: isUrdu ? 'لاہور (Lahore)' : 'Lahore', labelUr: 'سمندری ➔ لاہور', labelEn: 'Samundri ➔ Lahore' },
    { origin: isUrdu ? 'کمالیہ (Kamalia)' : 'Kamalia', dest: isUrdu ? 'کراچی (Karachi)' : 'Karachi', labelUr: 'کمالیہ ➔ کراچی پورٹ', labelEn: 'Kamalia ➔ Karachi' },
    { origin: isUrdu ? 'سمندری (Samundri)' : 'Samundri', dest: isUrdu ? 'اسلام آباد (Islamabad)' : 'Islamabad', labelUr: 'سمندری ➔ اسلام آباد', labelEn: 'Samundri ➔ Islamabad' },
    { origin: isUrdu ? 'سمندری (Samundri)' : 'Samundri', dest: isUrdu ? 'ملتان (Multan)' : 'Multan', labelUr: 'سمندری ➔ ملتان', labelEn: 'Samundri ➔ Multan' },
  ];

  const getRouteInsight = () => {
    const dest = (formData.destinationCity || '').toLowerCase();
    if (dest.includes('karachi') || dest.includes('کراچی')) {
      return {
        corridorUr: 'M-4 تا M-5 ملتان سکھر موٹروے و کراچی پورٹ (KPT / QICT)',
        corridorEn: 'M-4 to M-5 Motorway Corridor & Karachi Ports',
        transitUr: '24 تا 30 گھنٹے (نان اسٹاپ ایکسپریس FTL)',
        transitEn: '24 - 30 Hours (Dedicated Non-Stop)',
      };
    }
    if (dest.includes('lahore') || dest.includes('لاہور') || dest.includes('sheikhupura') || dest.includes('شیخوپورہ')) {
      return {
        corridorUr: 'M-3 موٹروے براستہ رجانہ و شرقپور انٹرچینج',
        corridorEn: 'M-3 Motorway via Rajana & Sharqpur Interchanges',
        transitUr: '3 تا 4 گھنٹے (سیم ڈے ڈائریکٹ ڈلیوری)',
        transitEn: '3 - 4 Hours (Same-Day Delivery)',
      };
    }
    if (dest.includes('islamabad') || dest.includes('اسلام آباد') || dest.includes('rawalpindi') || dest.includes('راولپنڈی') || dest.includes('peshawar') || dest.includes('پشاور')) {
      return {
        corridorUr: 'M-4 تا M-2 موٹروے کوریڈور (ناردرن انڈسٹریل زون)',
        corridorEn: 'M-4 to M-2 Motorway Link (Northern Hubs)',
        transitUr: '6 تا 8 گھنٹے ایکسپریس ٹرانزٹ',
        transitEn: '6 - 8 Hours Express Transit',
      };
    }
    if (dest.includes('multan') || dest.includes('ملتان') || dest.includes('bahawalpur') || dest.includes('بہاولپور')) {
      return {
        corridorUr: 'M-4 تا M-5 موٹروے لنک (جنوبی پنجاب کوریڈور)',
        corridorEn: 'M-4 to M-5 Motorway Link (South Punjab)',
        transitUr: '3 تا 5 گھنٹے ایکسپریس ڈلیوری',
        transitEn: '3 - 5 Hours Express Delivery',
      };
    }
    return {
      corridorUr: 'قومی موٹروے و ہائی وے کوریڈور (براہ راست FTL مال برداری)',
      corridorEn: 'National Highway & Motorway Corridor (Direct FTL)',
      transitUr: 'نان اسٹاپ براہِ راست ٹرانزٹ',
      transitEn: 'Direct Non-Stop Express Dispatch',
    };
  };

  const routeInsight = getRouteInsight();

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateWhatsAppMessage();
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
    try {
      const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!win) {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section id="booking" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border border-blue-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
            <Calculator className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>{tCalc.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {tCalc.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
            {tCalc.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Booking Form Card */}
          <div className="lg:col-span-8 bg-white rounded-lg p-5 sm:p-8 shadow-sm border border-slate-200">
            
            {/* Booking Mode Selector Tabs (Single FTL vs Corporate B2B) */}
            <div className="flex bg-slate-100 p-1.5 rounded-lg mb-5 sm:mb-6 border border-slate-200">
              <button
                type="button"
                onClick={() => setIsCorporateMode(false)}
                className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer font-urdu ${
                  !isCorporateMode 
                    ? 'bg-amber-500 text-slate-950 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'ur' ? 'سنگل FTL گاڑی بکنگ' : 'Single Trip FTL Booking'}
              </button>
              
              <button
                type="button"
                onClick={() => setIsCorporateMode(true)}
                className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer font-urdu flex items-center justify-center gap-1.5 ${
                  isCorporateMode 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? 'کارپوریٹ B2B کنٹریکٹ انکوائری' : 'Corporate B2B Contract'}</span>
              </button>
            </div>

            {/* Notice Bar */}
            <div className={`rounded-lg p-3 sm:p-3.5 mb-5 sm:mb-6 flex items-center justify-between gap-2 text-xs font-urdu ${
              isCorporateMode 
                ? 'bg-amber-50 text-amber-900 border border-amber-300' 
                : 'bg-blue-50 text-blue-900 border border-blue-200'
            }`}>
              <span className="font-medium">
                {isCorporateMode 
                  ? (language === 'ur' 
                      ? 'ملز اور کارپوریٹ اداروں کے لیے باقاعدہ ماہانہ کنٹریکٹ ریٹس، مخصوص فلیٹ اور FBR NTN انوائسنگ۔' 
                      : 'Structured monthly B2B freight contracts with dedicated fleet allocation and certified NTN tax billing.')
                  : tCalc.ftlNotice}
              </span>
              <Lock className="w-4 h-4 flex-shrink-0 text-amber-600" />
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Corporate Exclusive Fields (When in Corporate Mode) */}
              {isCorporateMode && (
                <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-lg space-y-4">
                  <div className="text-xs font-bold text-amber-900 font-urdu flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>{language === 'ur' ? 'کارپوریٹ و انڈسٹریل کوائف:' : 'Corporate Enterprise Information:'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-company-name" className="block text-xs font-semibold text-slate-700 mb-1.5 font-urdu">
                        {language === 'ur' ? 'کمپنی / ٹیکسٹائل / فلور مل کا نام:' : 'Company / Industrial Mill Name:'}
                      </label>
                      <input
                        id="booking-company-name"
                        type="text"
                        name="companyName"
                        placeholder={language === 'ur' ? 'مثال: الفلاح ٹیکسٹائل ملز' : 'e.g., Al-Falah Textile Mills'}
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-amber-500 focus:outline-none min-h-[44px]"
                        required={isCorporateMode}
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-monthly-trips" className="block text-xs font-semibold text-slate-700 mb-1.5 font-urdu">
                        {language === 'ur' ? 'ماہانہ مطلوبہ گاڑیوں کا تخمینہ:' : 'Estimated Monthly Truckloads:'}
                      </label>
                      <select
                        id="booking-monthly-trips"
                        name="monthlyTrips"
                        value={formData.monthlyTrips}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-amber-500 focus:outline-none min-h-[44px]"
                      >
                        <option value="5-10 Trucks / Month">{language === 'ur' ? '5 تا 10 گاڑیاں ماہانہ' : '5 - 10 Trucks / Month'}</option>
                        <option value="11-25 Trucks / Month">{language === 'ur' ? '11 تا 25 گاڑیاں ماہانہ' : '11 - 25 Trucks / Month'}</option>
                        <option value="26-50+ Trucks / Month">{language === 'ur' ? '26 تا 50+ گاڑیاں ماہانہ' : '26 - 50+ Trucks / Month'}</option>
                        <option value="Daily Dedicated Fleet">{language === 'ur' ? 'روزانہ مستقل مخصوص فلیٹ' : 'Daily Dedicated Fleet'}</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Popular Routes Quick-Select Chips (Frictionless UX) */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 font-urdu">
                  {isUrdu ? 'مقبول ترین کوریڈورز (فوری انتخاب):' : 'Popular Corridors (Quick Select):'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {quickRoutes.map((r, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, originCity: r.origin, destinationCity: r.dest }))}
                      className="text-xs bg-slate-100 hover:bg-amber-100 hover:text-amber-950 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 hover:border-amber-300 transition-colors font-urdu cursor-pointer active:scale-95"
                    >
                      {isUrdu ? r.labelUr : r.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 1: Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-origin-city" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{tCalc.originLabel}:</span>
                  </label>
                  <select
                    id="booking-origin-city"
                    name="originCity"
                    value={formData.originCity}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-500 focus:outline-none min-h-[44px]"
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
                  <label htmlFor="booking-destination-city" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{tCalc.destLabel}:</span>
                  </label>
                  <select
                    id="booking-destination-city"
                    name="destinationCity"
                    value={formData.destinationCity}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-500 focus:outline-none min-h-[44px]"
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

              {/* Dynamic Route Transit Insight */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-urdu text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">{isUrdu ? routeInsight.corridorUr : routeInsight.corridorEn}</span>
                </div>
                <span className="font-mono font-bold text-blue-700 whitespace-nowrap self-start sm:self-auto">
                  {isUrdu ? routeInsight.transitUr : routeInsight.transitEn}
                </span>
              </div>

              {/* Row 2: Vehicle Visual Selector & Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1.5 font-urdu">
                  <Truck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{tCalc.vehicleLabel}:</span>
                </label>

                {/* 4-Vehicle Visual Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FLEET_DATA.map((v) => {
                    const isSelected = formData.vehicleType === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, vehicleType: v.id }))}
                        className={`p-2.5 rounded-lg border text-right transition-all flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/30 text-slate-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <Truck className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-600' : 'text-slate-400'}`} />
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                            {isUrdu ? v.capacityUrdu : v.capacity}
                          </span>
                        </div>
                        <span className="text-xs font-bold font-urdu">
                          {isUrdu ? v.nameUrdu : v.nameEnglish}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Loading Date Row */}
              <div>
                <label htmlFor="booking-loading-date" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                  <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{tCalc.dateLabel}:</span>
                </label>
                <input
                  id="booking-loading-date"
                  type="date"
                  name="loadingDate"
                  value={formData.loadingDate}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-500 focus:outline-none min-h-[44px]"
                  required
                />
              </div>

              {/* Row 3: Goods Type & Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-goods-type" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                    <Package className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{tCalc.cargoLabel}:</span>
                  </label>
                  <select
                    id="booking-goods-type"
                    name="goodsType"
                    value={formData.goodsType}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-500 focus:outline-none min-h-[44px]"
                  >
                    {GOODS_TYPES.map((g) => (
                      <option key={g.id} value={language === 'ur' ? g.urdu : g.en}>
                        {language === 'ur' ? g.urdu : g.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-weight" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                    <span>{tCalc.weightLabel}:</span>
                  </label>
                  <input
                    id="booking-weight"
                    type="text"
                    name="weight"
                    placeholder={language === 'ur' ? 'مثال: فل ٹرک لوڈ / 8 ٹن' : 'e.g., Full Truckload / 8 Tons'}
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-500 focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>

              {/* Row 4: Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-customer-name" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                    <User className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>{tCalc.nameLabel}:</span>
                  </label>
                  <input
                    id="booking-customer-name"
                    type="text"
                    name="customerName"
                    placeholder={language === 'ur' ? 'اپنا نام یا ادارے کا نام لکھیں' : 'Enter your name or business'}
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-500 focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="booking-customer-phone" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5 font-urdu">
                    <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>{tCalc.phoneLabel}:</span>
                  </label>
                  <input
                    id="booking-customer-phone"
                    type="tel"
                    name="customerPhone"
                    placeholder="0300-XXXXXXX"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm font-mono focus:border-blue-500 focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label htmlFor="booking-instructions" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 font-urdu">
                  {tCalc.notesLabel}:
                </label>
                <textarea
                  id="booking-instructions"
                  name="specialInstructions"
                  rows={2}
                  placeholder={language === 'ur' ? 'مثال: ترپال لازمی ہو، لوڈنگ فیکٹری گیٹ نمبر 2 سے کرنی ہے...' : 'e.g., Heavy waterproof tarpaulin required, loading at Gate 2...'}
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit & Copy Actions */}
              <div className="pt-2 space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  <button
                    id="booking-submit-whatsapp-btn"
                    type="submit"
                    className={`sm:col-span-8 flex items-center justify-center gap-2.5 font-bold py-3.5 px-6 rounded-xl shadow-xs text-sm sm:text-base transition-all cursor-pointer min-h-[48px] font-urdu active:scale-98 ${
                      isCorporateMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                    <span>
                      {isCorporateMode 
                        ? (language === 'ur' ? 'کارپوریٹ انکوائری واٹس ایپ پر بھیجیں' : 'Send B2B Inquiry on WhatsApp')
                        : tCalc.submitBtn}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="sm:col-span-4 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 px-4 rounded-xl border border-slate-200 transition-all cursor-pointer min-h-[48px] font-urdu text-xs sm:text-sm active:scale-98"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-emerald-700 font-bold">{isUrdu ? 'کوائف کاپی ہو گئے!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        <span>{isUrdu ? 'کوائف کاپی کریں' : 'Copy Load Info'}</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-slate-500 font-urdu">
                  {isCorporateMode 
                    ? (language === 'ur' ? 'براہ راست پروپرائٹر کے ساتھ آفیشل واٹس ایپ پر رابطہ اور کوٹیشن شیئرنگ' : 'Direct liaison with Proprietor for corporate vendor evaluation and rate agreement.')
                    : tCalc.submitHint}
                </p>
              </div>

            </form>
          </div>

          {/* Inquiry Summary & Quick Help Card */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            
            {/* Selected Vehicle & Route Preview */}
            <div className="bg-white text-slate-900 rounded-lg p-5 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-xs font-bold text-blue-700 font-urdu">{tCalc.summaryTitle}</span>
                <Calculator className="w-4 h-4 text-amber-500" />
              </div>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block font-urdu">{language === 'ur' ? 'روٹ (Route):' : 'Route:'}</span>
                  <p className="font-bold text-sm sm:text-base text-slate-900">
                    {formData.originCity} ➔ {formData.destinationCity}
                  </p>
                </div>

                <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-200">
                  <span className="text-xs text-blue-800 block mb-1 font-urdu font-medium">{language === 'ur' ? 'منتخب FTL گاڑی:' : 'Selected FTL Vehicle:'}</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-900 text-sm sm:text-base">{vehicleName}</span>
                    <span className="text-xs bg-white px-2 py-0.5 rounded text-blue-800 border border-blue-200 font-bold">{vehicleCapacity}</span>
                  </div>
                  <p className="text-xs text-blue-700 mt-1 font-urdu">{vehicleSubtitle}</p>
                </div>

                <div className="text-xs text-slate-700 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-urdu">{language === 'ur' ? 'تاریخ لوڈنگ:' : 'Date:'}</span>
                    <span className="font-semibold text-slate-900 font-mono">{formData.loadingDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-urdu">{language === 'ur' ? 'سامان کی قسم:' : 'Cargo:'}</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[160px] font-urdu">{formData.goodsType}</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Helpline */}
              <div className="mt-5 pt-3 border-t border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-2 font-urdu">{language === 'ur' ? 'فوری ٹیلی فونک تصدیق کے لیے:' : 'For instant phone confirmation:'}</p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg w-full text-sm transition-colors shadow-sm cursor-pointer min-h-[44px]"
                  aria-label={`Call ${COMPANY_INFO.phone1}`}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span className="font-urdu font-bold">{language === 'ur' ? 'بکنگ کے لیے ابھی کال ملائیں' : 'Call for Booking'}</span>
                </a>
              </div>
            </div>

            {/* Trust & Transparency Badge */}
            <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm font-urdu">{language === 'ur' ? 'کمپیوٹرائزڈ کانٹا پرچی و باقاعدہ رسید' : 'Computerized Weighbridge Slip & Invoice'}</p>
                  <p className="text-xs text-amber-800 font-urdu">{language === 'ur' ? '100% شفاف اور محفوظ ڈیلنگ' : '100% Transparent & Secure'}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {tCalc.ntnBillingDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

