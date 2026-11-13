import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { ContactStrip } from './ContactStrip';
import { getAssetUrl } from '../utils/assetPath';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    isUrdu
      ? 'السلام علیکم وڑائچ گڈز! مجھے گاڑی بکنگ اور کرایہ معلوم کرنا ہے۔'
      : 'Hello Warraich Goods, I need details about truck booking and freight rates.'
  )}`;

  return (
    <section id="hero" className="relative text-white overflow-hidden">
      
      {/* 1. Full-Width Real Photo Background with Dark Navy Overlay (~70%) */}
      <div className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36 overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('images/road-highway.webp')}
            alt="Warraich Goods Transport Commercial FTL Highway Transit"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback to factory warehouse if highway image fails
              e.currentTarget.src = getAssetUrl('images/factory-warehouse.webp');
            }}
          />
          {/* Dark Navy 70-75% Scrim Overlay */}
          <div className="absolute inset-0 bg-slate-950/75 backdrop-contrast-125" />
          {/* Subtle bottom gradient to blend smoothly */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          
          {/* Primary Large Headline with ONE Highlighted Amber Word */}
          {isUrdu ? (
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto font-urdu">
              پورے پاکستان کے لیے بااعتماد <span className="text-amber-400">مال برداری و شفٹنگ</span> سروس
            </h1>
          ) : (
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto font-sans">
              Reliable <span className="text-amber-400">Goods Transport</span> & Shifting Across Pakistan
            </h1>
          )}

          {/* Tagline Subtitle */}
          <p className={`text-base sm:text-xl font-bold text-slate-200 leading-relaxed max-w-3xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? COMPANY_INFO.taglineUrdu : 'Home shifting, office moving, and commercial goods transport since 2020.'}
          </p>

          {/* Short Subtext */}
          <p className={`text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu
              ? 'گھریلو سامان شفٹنگ، دفتری منتقلی اور کمرشل مال برداری کے لیے مزدا ٹرک، شہزور پک اپ اور ہیوی ٹرکس کی 24/7 تیز رفتار بکنگ۔ محفوظ ہینڈلنگ، کمپیوٹرائزڈ بلٹی اور مناسب ترین ریٹ۔'
              : 'We provide Shahzore pickups, Mazda trucks, and heavy haulers for full truckload trips anywhere in Pakistan. Careful handling, clear bilty receipts, and fair rates.'}
          </p>

          {/* 2 Primary Hero Buttons: "WhatsApp Us" (amber) & "Call Now" (outlined) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            {/* Amber Primary Button */}
            <a
              id="hero-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black px-7 py-3.5 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-amber-500/25 transition-all active:scale-98 cursor-pointer min-h-[48px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              aria-label="WhatsApp Warraich Goods"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>{isUrdu ? 'واٹس ایپ کریں' : 'WhatsApp Us'}</span>
            </a>

            {/* Outlined White Button */}
            <a
              id="hero-call-now-btn"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white hover:bg-white/10 active:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all active:scale-98 cursor-pointer min-h-[48px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              aria-label={`Call Warraich Goods at ${COMPANY_INFO.phone1}`}
            >
              <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{isUrdu ? 'کال کریں' : 'Call Now'}</span>
            </a>
          </div>

          {/* Real Facts Stats Row (Since 2020, Fleet Types, 24/7 Booking) */}
          <div className="pt-8 sm:pt-10 max-w-3xl mx-auto border-t border-slate-800/80">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center">
              
              {/* Stat 1: Since 2020 */}
              <div className="space-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-amber-400 block tracking-tight">
                  2020
                </span>
                <span className={`text-xs sm:text-sm font-bold text-white block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'سے خدمت میں' : 'Since 2020'}
                </span>
                <span className={`text-[11px] text-slate-400 hidden sm:block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? '24/7 ملک گیر سروس' : '24/7 Nationwide Routes'}
                </span>
              </div>

              {/* Stat 2: Fleet Types */}
              <div className="space-y-0.5 border-x border-slate-800">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-blue-400 block tracking-tight">
                  4
                </span>
                <span className={`text-xs sm:text-sm font-bold text-white block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'کمرشل فلیٹ ماڈلز' : 'Fleet Truck Types'}
                </span>
                <span className={`text-[11px] text-slate-400 hidden sm:block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'مزدا، شہزور، سیمپل، بیڈفورڈ' : 'Mazda, Shahzore, Heavy Haulers'}
                </span>
              </div>

              {/* Stat 3: 24/7 Booking */}
              <div className="space-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-emerald-400 block tracking-tight">
                  24/7
                </span>
                <span className={`text-xs sm:text-sm font-bold text-white block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'فاسٹ گاڑی بکنگ' : 'Fast Vehicle Booking'}
                </span>
                <span className={`text-[11px] text-slate-400 hidden sm:block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'شفٹنگ و مال برداری' : 'Shifting & Goods Transport'}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 2. Overlapping Contact Strip (Call, WhatsApp, Email) */}
      <div className="-mt-12 sm:-mt-16 md:-mt-20 pb-8 sm:pb-12 bg-slate-50">
        <ContactStrip />
      </div>

    </section>
  );
};
