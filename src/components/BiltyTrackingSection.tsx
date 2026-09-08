import React, { useState } from 'react';
import { 
  Search, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  FileText, 
  Navigation, 
  Sparkles,
  ExternalLink,
  Printer
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyData';

interface BiltyData {
  biltyNo: string;
  date: string;
  origin: string;
  originHubUrdu: string;
  destination: string;
  destinationUrdu: string;
  vehicleType: string;
  vehicleTypeUrdu: string;
  regNumber: string;
  driverName: string;
  cargo: string;
  cargoUrdu: string;
  weight: string;
  status: 'in_transit' | 'delivered' | 'dispatched' | 'loading';
  currentCheckpoint: string;
  currentCheckpointUrdu: string;
  estimatedArrival: string;
  estimatedArrivalUrdu: string;
  route: string;
  step: number; // 1 to 4
}

const SAMPLE_BILTY_DATABASE: Record<string, BiltyData> = {
  'WGT-4431': {
    biltyNo: 'WGT-4431',
    date: '08 Sep 2026',
    origin: 'Samundri Main Terminal',
    originHubUrdu: 'سمندری مین اڈا (اوکاڑہ بائی پاس)',
    destination: 'Karachi Port / SITE Area',
    destinationUrdu: 'کراچی پورٹ / سائٹ ایریا',
    vehicleType: 'Mazda 6-Wheeler (FTL)',
    vehicleTypeUrdu: 'مزدا 6 وہیلر (مکمل گاڑی)',
    regNumber: 'FD-7844',
    driverName: 'Muhammad Aslam (Verified HTV)',
    cargo: 'Basmati Rice & Seed Sacks',
    cargoUrdu: 'باسمتی چاول و بیج کے تھیلے (فل لوڈ)',
    weight: '8.5 Tons (170 Bags)',
    status: 'in_transit',
    currentCheckpoint: 'M-5 Motorway near Sukkur Interchange',
    currentCheckpointUrdu: 'ایم 5 موٹروے نزدیک سکھر انٹرچینج (سفر جاری)',
    estimatedArrival: 'Tomorrow 09:30 AM',
    estimatedArrivalUrdu: 'کل صبح 09:30 بجے',
    route: 'Samundri -> Kamalia -> Multan -> Sukkur (M-5) -> Karachi',
    step: 3,
  },
  'WGT-8924': {
    biltyNo: 'WGT-8924',
    date: '07 Sep 2026',
    origin: 'Kamalia Terminal',
    originHubUrdu: 'کمالیہ برانچ اڈا (رجانہ روڈ)',
    destination: 'Lahore Sundar Industrial Estate',
    destinationUrdu: 'لاہور سندر انڈسٹریل اسٹیٹ',
    vehicleType: 'Hyundai Shehzore (FTL)',
    vehicleTypeUrdu: 'ہیونڈائی شہزور پک اپ (ایکسپریس)',
    regNumber: 'LE-3190',
    driverName: 'Tariq Mehmood (Verified LTV)',
    cargo: 'Textile Combed Cotton Yarn',
    cargoUrdu: 'ٹیکسٹائل کاٹن یارن (دھاگہ)',
    weight: '2.8 Tons',
    status: 'delivered',
    currentCheckpoint: 'Delivered at Consignee Mill Gate No. 2',
    currentCheckpointUrdu: 'مل گیٹ نمبر 2 پر بحفاظت ان لوڈ مکمل (دستخط وصول)',
    estimatedArrival: 'Delivered on Schedule',
    estimatedArrivalUrdu: 'بروقت ڈیلیور ہو چکا ہے',
    route: 'Kamalia -> Samundri -> M-3 Motorway -> Lahore Ring Road',
    step: 4,
  },
  'WGT-5370': {
    biltyNo: 'WGT-5370',
    date: '08 Sep 2026',
    origin: 'Samundri Main Terminal',
    originHubUrdu: 'سمندری اڈا',
    destination: 'Rawalpindi / Islamabad I-9',
    destinationUrdu: 'راولپنڈی / اسلام آباد I-9 انڈسٹریل زون',
    vehicleType: 'Bedford Heavy Long Haul',
    vehicleTypeUrdu: 'بیڈفورڈ ہیوی ٹرک (فل لوڈ)',
    regNumber: 'RI-9204',
    driverName: 'Sher Khan (Verified HTV)',
    cargo: 'Industrial Steel Pipe Fittings & Machinery',
    cargoUrdu: 'انڈسٹریل اسٹیل پائپس و فیکٹری مشینری',
    weight: '18 Tons',
    status: 'in_transit',
    currentCheckpoint: 'M-2 Motorway near Kallar Kahar Salt Range',
    currentCheckpointUrdu: 'ایم 2 موٹروے کلر کہار کے قریب (محفوظ سفر)',
    estimatedArrival: 'Tonight 11:45 PM',
    estimatedArrivalUrdu: 'آج رات 11:45 بجے',
    route: 'Samundri -> Faisalabad -> Pindi Bhattian -> M-2 Motorway -> Islamabad',
    step: 3,
  },
  'WGT-2190': {
    biltyNo: 'WGT-2190',
    date: '08 Sep 2026',
    origin: 'Kamalia Hub',
    originHubUrdu: 'کمالیہ برانچ اڈا',
    destination: 'Multan Industrial Estate',
    destinationUrdu: 'ملتان انڈسٹریل ایریا',
    vehicleType: 'Sample Extended Body',
    vehicleTypeUrdu: 'سیمپل ایکسٹینڈڈ ٹرک (بڑا باڈی والیم)',
    regNumber: 'MN-4402',
    driverName: 'Rashid Warraich (Verified HTV)',
    cargo: 'Agricultural Seeds & Animal Feed Bags',
    cargoUrdu: 'زرعی بیج و فیڈ بیگز (فل گاڑی)',
    weight: '11.5 Tons',
    status: 'dispatched',
    currentCheckpoint: 'Departed Kamalia Hub, entered M-4 Motorway',
    currentCheckpointUrdu: 'کمالیہ سے روانہ، ایم 4 موٹروے پر داخلہ',
    estimatedArrival: 'Today 06:00 PM',
    estimatedArrivalUrdu: 'آج شام 06:00 بجے',
    route: 'Kamalia -> Toba Tek Singh -> Shorkot -> Multan (M-4)',
    step: 2,
  },
};

export const BiltyTrackingSection: React.FC = () => {
  const { language, t: currentT } = useLanguage();
  const t = currentT.tracking;

  const [inputBilty, setInputBilty] = useState<string>('');
  const [trackedRecord, setTrackedRecord] = useState<BiltyData | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const handleTrack = (biltyCodeToTrack?: string) => {
    const rawQuery = (biltyCodeToTrack || inputBilty).trim().toUpperCase();
    if (!rawQuery) return;

    setSearched(true);

    // Normalize: if user enters '4431', check 'WGT-4431'
    let matchedKey = Object.keys(SAMPLE_BILTY_DATABASE).find(
      key => key === rawQuery || key.replace('WGT-', '') === rawQuery
    );

    if (matchedKey) {
      setTrackedRecord(SAMPLE_BILTY_DATABASE[matchedKey]);
      setInputBilty(matchedKey);
    } else {
      // Deterministic dynamic simulator for any custom number entered
      const cleanNum = rawQuery.replace(/[^0-9]/g, '') || '1048';
      const lastDigit = parseInt(cleanNum.slice(-1), 10) || 4;
      
      const vehiclePool = [
        { typeEn: 'Hyundai Shehzore Pickup (FTL)', typeUr: 'شہزور پک اپ (مکمل گاڑی)', capacity: '3 Tons' },
        { typeEn: 'Mazda 6-Wheeler Freight Truck', typeUr: 'مزدا 6 وہیلر (انڈسٹریل FTL)', capacity: '8.5 Tons' },
        { typeEn: 'Sample Extended Body Truck', typeUr: 'سیمپل ایکسٹینڈڈ ٹرک (بڑا والیم)', capacity: '12 Tons' },
        { typeEn: 'Bedford Heavy Long Haul', typeUr: 'بیڈفورڈ ہیوی کمرشل ٹرک', capacity: '20 Tons' },
      ];
      const vehicleChoice = vehiclePool[lastDigit % 4];

      const destinations = [
        { en: 'Karachi Port / Kemari', ur: 'کراچی پورٹ / کیماڑی' },
        { en: 'Lahore Multan Road Industrial Belt', ur: 'لاہور ملتان روڈ انڈسٹریل ایریا' },
        { en: 'Rawalpindi / Islamabad', ur: 'راولپنڈی / اسلام آباد' },
        { en: 'Faisalabad Textile Zone', ur: 'فیصل آباد ٹیکسٹائل کلسٹر' },
        { en: 'Multan / Khanewal Hub', ur: 'ملتان / خانیوال اڈا' },
        { en: 'Peshawar Ring Road Terminal', ur: 'پشاور رنگ روڈ اڈا' },
      ];
      const destChoice = destinations[lastDigit % destinations.length];

      const simulatedRecord: BiltyData = {
        biltyNo: rawQuery.startsWith('WGT-') ? rawQuery : `WGT-${rawQuery}`,
        date: 'Current Active Consignment',
        origin: 'Samundri Head Terminal (Okara Bypass)',
        originHubUrdu: 'سمندری مین اڈا (اوکاڑہ بائی پاس)',
        destination: destChoice.en,
        destinationUrdu: destChoice.ur,
        vehicleType: vehicleChoice.typeEn,
        vehicleTypeUrdu: vehicleChoice.typeUr,
        regNumber: `WGT-${cleanNum.slice(-4).padStart(4, '7')}`,
        driverName: 'Official Warraich Goods Fleet Driver (Biometrically Verified)',
        cargo: 'Dedicated Full Truckload Commercial Cargo',
        cargoUrdu: 'سنگل پارٹی مکمل گاڑی کمرشل کارگو (100% مخصوص)',
        weight: `${vehicleChoice.capacity} (Full Consignment)`,
        status: lastDigit % 2 === 0 ? 'in_transit' : 'dispatched',
        currentCheckpoint: 'En-route on National Motorway (Safe Speed 65-75 km/h)',
        currentCheckpointUrdu: 'قومی موٹروے پر زیرسفر (ڈائریکٹ نان اسٹاپ سفر جاری)',
        estimatedArrival: 'Transit as per Schedule',
        estimatedArrivalUrdu: 'شیڈول کے مطابق بروقت ترسیل',
        route: `Samundri/Kamalia Terminal -> ${destChoice.en}`,
        step: 3,
      };

      setTrackedRecord(simulatedRecord);
    }
  };

  const handleSelectSample = (sampleKey: string) => {
    setInputBilty(sampleKey);
    handleTrack(sampleKey);
  };

  // Freight Corridors (Inspired by PKG Logistics pkg.com.pk)
  const CORRIDORS = [
    {
      id: 'karachi-corridor',
      titleUrdu: 'پورٹ تا پنجاب ایکسپریس کوریڈور',
      titleEnglish: 'Karachi Port ↔ Central Punjab Corridor',
      routeUrdu: 'کراچی پورٹ / پورٹ قاسم ↔ سکھر ↔ ملتان ↔ کمالیہ ↔ سمندری',
      routeEnglish: 'Karachi Port ↔ Sukkur ↔ Multan ↔ Kamalia ↔ Samundri',
      transitTimeUrdu: '20 تا 24 گھنٹے (نان اسٹاپ FTL)',
      transitTimeEnglish: '20 - 24 Hours Direct',
      highway: 'M-5 Sukkur-Multan & N-5 Highway',
      popularCargoUrdu: 'پورٹ امپورٹ مال، انڈسٹریل خام مال، کھاد، ٹیکسٹائل و باسمتی چاول',
      badgeColor: 'border-emerald-300 bg-emerald-50 text-emerald-800',
    },
    {
      id: 'lahore-corridor',
      titleUrdu: 'وسطی پنجاب انڈسٹریل لنک',
      titleEnglish: 'Central Punjab Industrial Belt',
      routeUrdu: 'سمندری / کمالیہ ↔ فیصل آباد ↔ موٹروے M-3 ↔ لاہور / گوجرانوالہ',
      routeEnglish: 'Samundri / Kamalia ↔ Faisalabad ↔ M-3 Motorway ↔ Lahore / Gujranwala',
      transitTimeUrdu: '3 تا 5 گھنٹے ایکسپریس',
      transitTimeEnglish: '3 - 5 Hours Express',
      highway: 'M-3 / M-4 Motorway & Faisalabad Road',
      popularCargoUrdu: 'کاٹن یارن (دھاگہ)، فیکٹری مشینری، اسپیئر پارٹس و غلہ منڈی سپلائی',
      badgeColor: 'border-blue-300 bg-blue-50 text-blue-800',
    },
    {
      id: 'north-corridor',
      titleUrdu: 'نادرن کمرشل کوریڈور',
      titleEnglish: 'Northern Hub ↔ Twin Cities / KPK',
      routeUrdu: 'سمندری / کمالیہ ↔ ایم 4 ↔ پنڈی بھٹیاں ↔ ایم 2 ↔ اسلام آباد / پشاور',
      routeEnglish: 'Samundri / Kamalia ↔ M-4 ↔ Pindi Bhattian ↔ M-2 ↔ Islamabad / Peshawar',
      transitTimeUrdu: '6 تا 8 گھنٹے',
      transitTimeEnglish: '6 - 8 Hours Direct',
      highway: 'M-2 & M-4 Motorways via Salt Range',
      popularCargoUrdu: 'کمرشل ریٹیل لوڈ، زرعی بیج، سیمنٹ، اسٹیل پائپ و صنعتی خام مال',
      badgeColor: 'border-amber-300 bg-amber-50 text-amber-800',
    },
    {
      id: 'south-corridor',
      titleUrdu: 'جنوبی پنجاب و سندھ ایگرو روٹ',
      titleEnglish: 'South Punjab & Upper Sindh Agro Route',
      routeUrdu: 'کمالیہ / سمندری ↔ خانیوال ↔ ملتان ↔ بہاولپور ↔ رحیم یار خان',
      routeEnglish: 'Kamalia / Samundri ↔ Khanewal ↔ Multan ↔ Bahawalpur ↔ R.Y. Khan',
      transitTimeUrdu: '4 تا 7 گھنٹے',
      transitTimeEnglish: '4 - 7 Hours Direct',
      highway: 'M-4 / M-5 Motorway Links',
      popularCargoUrdu: 'گندم، مکئی، چاول، شوگر ملز چینی کے تھیلے، بیج اور لائیو اسٹاک فیڈ',
      badgeColor: 'border-purple-300 bg-purple-50 text-purple-800',
    },
  ];

  const getStatusBadge = (status: BiltyData['status']) => {
    switch (status) {
      case 'delivered':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 font-urdu">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            {language === 'ur' ? 'ڈیلیورڈ (محفوظ ترسیل)' : 'Delivered Safely'}
          </span>
        );
      case 'in_transit':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300 animate-pulse font-urdu">
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            {language === 'ur' ? 'موٹروے پر زیرسفر (In-Transit)' : 'In-Transit on Highway'}
          </span>
        );
      case 'dispatched':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 font-urdu">
            <Navigation className="w-3.5 h-3.5 text-amber-600" />
            {language === 'ur' ? 'اڈا سے روانہ (Dispatched)' : 'Dispatched from Hub'}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 font-urdu">
            <Clock className="w-3.5 h-3.5 text-slate-600" />
            {language === 'ur' ? 'لوڈنگ مکمل' : 'Loaded at Terminal'}
          </span>
        );
    }
  };

  return (
    <section 
      id="tracking" 
      className="py-14 sm:py-20 bg-slate-100/90 border-y border-slate-200 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 font-urdu">
            <FileText className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu tracking-tight leading-tight">
            {t.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-urdu leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Tracking Input Card (Corporate PKG Style) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-7 mb-12">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleTrack();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={inputBilty}
                onChange={(e) => setInputBilty(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm sm:text-base font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all uppercase placeholder:normal-case placeholder:font-sans"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-lg font-urdu whitespace-nowrap min-h-[48px]"
            >
              <span>{t.btnTrack}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Sample Buttons */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-urdu font-medium mr-1">
              {t.sampleNotice}
            </span>
            {Object.keys(SAMPLE_BILTY_DATABASE).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectSample(key)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 border border-slate-200 hover:border-blue-300 font-mono transition-colors text-[11px]"
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Tracking Result Display */}
        {searched && trackedRecord && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-16 animate-fadeIn">
            {/* Top Slip Header */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded font-mono">
                      OFFICIAL BILTY / چالان
                    </span>
                    <span className="text-xs text-slate-300 font-mono">
                      NTN: {COMPANY_INFO.ntn}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-mono tracking-wide text-white">
                    {trackedRecord.biltyNo}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {getStatusBadge(trackedRecord.status)}
                </div>
              </div>
            </div>

            {/* 4-Step Milestone Progress Bar */}
            <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                
                {/* Step 1 */}
                <div className={`p-3 rounded-xl border text-center ${trackedRecord.step >= 1 ? 'bg-white border-blue-300 shadow-sm' : 'bg-slate-100 border-slate-200 opacity-60'}`}>
                  <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">1</div>
                  <h5 className="font-bold text-xs text-slate-900 font-urdu">{language === 'ur' ? 'بلٹی بکنگ' : 'Bilty Booked'}</h5>
                  <p className="text-[10px] text-slate-500">{language === 'ur' ? 'سرکاری چالان جاری' : 'Slip Generated'}</p>
                </div>

                {/* Step 2 */}
                <div className={`p-3 rounded-xl border text-center ${trackedRecord.step >= 2 ? 'bg-white border-blue-300 shadow-sm' : 'bg-slate-100 border-slate-200 opacity-60'}`}>
                  <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</div>
                  <h5 className="font-bold text-xs text-slate-900 font-urdu">{language === 'ur' ? 'مکمل لوڈنگ' : 'FTL Loaded'}</h5>
                  <p className="text-[10px] text-slate-500">{language === 'ur' ? 'ترپال و سیفٹی چیک' : 'Tarpaulin Sealed'}</p>
                </div>

                {/* Step 3 */}
                <div className={`p-3 rounded-xl border text-center ${trackedRecord.step >= 3 ? 'bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-sm' : 'bg-slate-100 border-slate-200 opacity-60'}`}>
                  <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">3</div>
                  <h5 className="font-bold text-xs text-slate-900 font-urdu">{language === 'ur' ? 'موٹروے سفر' : 'In Transit'}</h5>
                  <p className="text-[10px] text-slate-500">{language === 'ur' ? 'نان اسٹاپ ایکسپریس' : 'Direct Highway'}</p>
                </div>

                {/* Step 4 */}
                <div className={`p-3 rounded-xl border text-center ${trackedRecord.step >= 4 ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-sm' : 'bg-slate-100 border-slate-200 opacity-60'}`}>
                  <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">4</div>
                  <h5 className="font-bold text-xs text-slate-900 font-urdu">{language === 'ur' ? 'منزل پر پہنچ' : 'Delivered'}</h5>
                  <p className="text-[10px] text-slate-500">{language === 'ur' ? 'بحفاظت وصولی' : 'Signed Handover'}</p>
                </div>

              </div>
            </div>

            {/* Bilty Core Details Grid */}
            <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Route & Destination */}
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {language === 'ur' ? 'روٹ و سفر کی تفصیل:' : 'Route & Transit:'}
                  </span>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base font-urdu">
                    <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{language === 'ur' ? trackedRecord.originHubUrdu : trackedRecord.origin}</span>
                    <span className="text-slate-400">➔</span>
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{language === 'ur' ? trackedRecord.destinationUrdu : trackedRecord.destination}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-mono">{trackedRecord.route}</p>
                </div>

                <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-xs space-y-1.5 font-urdu">
                  <div className="flex justify-between items-center text-amber-900 font-bold">
                    <span>{language === 'ur' ? 'موجودہ مقام / لائیو چوکی:' : 'Current Checkpoint:'}</span>
                    <span className="font-mono text-slate-800">{trackedRecord.date}</span>
                  </div>
                  <p className="text-slate-700 font-medium">
                    {language === 'ur' ? trackedRecord.currentCheckpointUrdu : trackedRecord.currentCheckpoint}
                  </p>
                  <p className="text-amber-800 font-bold text-[11px] pt-1">
                    {language === 'ur' ? `متوقع منزل پر آمد: ${trackedRecord.estimatedArrivalUrdu}` : `Estimated Arrival: ${trackedRecord.estimatedArrival}`}
                  </p>
                </div>
              </div>

              {/* Vehicle & Cargo Specs */}
              <div className="space-y-3 text-xs sm:text-sm">
                
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-urdu">{language === 'ur' ? 'گاڑی کی نوعیت:' : 'Assigned Vehicle:'}</span>
                  <span className="font-bold text-slate-900 font-urdu">
                    {language === 'ur' ? trackedRecord.vehicleTypeUrdu : trackedRecord.vehicleType}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-urdu">{language === 'ur' ? 'گاڑی نمبر (پلیٹ):' : 'Vehicle Plate No:'}</span>
                  <span className="font-bold text-blue-900 font-mono">{trackedRecord.regNumber}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-urdu">{language === 'ur' ? 'کارگو سامان:' : 'Cargo Description:'}</span>
                  <span className="font-bold text-slate-900 font-urdu">
                    {language === 'ur' ? trackedRecord.cargoUrdu : trackedRecord.cargo}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-urdu">{language === 'ur' ? 'وزن / گنجائش:' : 'Weight / Load:'}</span>
                  <span className="font-bold text-slate-900 font-mono">{trackedRecord.weight}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200">
                  <span className="text-emerald-900 font-bold font-urdu">{language === 'ur' ? 'سروس کی قسم:' : 'Service Type:'}</span>
                  <span className="font-bold text-emerald-800 font-urdu">
                    {language === 'ur' ? '100% مخصوص سنگل پارٹی FTL' : 'Dedicated Full Truckload (FTL)'}
                  </span>
                </div>

              </div>

            </div>

            {/* Quick Action Footer */}
            <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-urdu">
                <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
                <span>{language === 'ur' ? 'ڈائریکٹ نان اسٹاپ سفر — راستے میں گاڑی تبدیل نہیں کی جاتی' : 'Guaranteed direct point-to-point transit without transshipment'}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw1}?text=${encodeURIComponent(`السلام علیکم وڑائچ گڈز ٹرانسپورٹ! میں اپنی بلٹی ${trackedRecord.biltyNo} کی لائیو لوکیشن اور ڈرائیور اپڈیٹ معلوم کرنا چاہتا ہوں۔`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors font-urdu shadow-sm min-h-[40px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contactDispatcher}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors font-urdu shadow-sm min-h-[40px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.callHelpline}</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* National Freight Corridors (PKG Style Network Section) */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 font-urdu">
              <Navigation className="w-3.5 h-3.5 text-amber-700" />
              <span>{t.corridorsBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-urdu">
              {t.corridorsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-urdu mt-1">
              {t.corridorsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {CORRIDORS.map((corridor) => (
              <div
                key={corridor.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-base text-slate-900 font-urdu">
                      {language === 'ur' ? corridor.titleUrdu : corridor.titleEnglish}
                    </h4>
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-md font-bold font-mono border ${corridor.badgeColor}`}>
                      {language === 'ur' ? corridor.transitTimeUrdu : corridor.transitTimeEnglish}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 font-urdu mb-3">
                    <p className="flex items-center gap-1.5 text-slate-800 font-medium">
                      <span className="text-blue-600">🛣️</span>
                      <strong>{language === 'ur' ? 'روٹ:' : 'Route:'}</strong> {language === 'ur' ? corridor.routeUrdu : corridor.routeEnglish}
                    </p>
                    <p className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-amber-600">📦</span>
                      <strong>{language === 'ur' ? 'اہم سامان:' : 'Cargo:'}</strong> {corridor.popularCargoUrdu}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono uppercase">
                    {corridor.highway}
                  </span>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline font-urdu"
                  >
                    <span>{language === 'ur' ? 'اس روٹ پر گاڑی بک کریں ➔' : 'Book Truck on this Route ➔'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
