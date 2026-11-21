import React, { useMemo, useRef } from 'react';
import { PhoneCall, MessageCircle, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';
import { useInView, useParallax } from '../hooks/useMotion';
import { MOTION_CONFIG } from '../config/motionConfig';
import { CountUp } from './MotionPrimitives';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const heroRef = useRef<HTMLElement | null>(null);
  const bgLayerRef = useRef<HTMLDivElement | null>(null);
  const contentLayerRef = useRef<HTMLDivElement | null>(null);
  const roadLayerRef = useRef<HTMLDivElement | null>(null);
  const isHeroInView = useInView(heroRef, '100px');

  const parallaxLayers = useMemo(
    () => [
      { ref: bgLayerRef, speed: 0.16, maxOffset: 64 },
      { ref: contentLayerRef, speed: -0.05, maxOffset: 24 },
      { ref: roadLayerRef, speed: -0.04, maxOffset: 16 },
    ],
    []
  );

  useParallax(heroRef, parallaxLayers, isHeroInView);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    isUrdu
      ? 'السلام علیکم وڑائچ گڈز ٹرانسپورٹ کمپنی! مجھے گاڑی بکنگ اور کرایہ معلوم کرنا ہے۔'
      : 'Hello Warraich Goods, I need details about truck booking and freight rates.'
  )}`;

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative text-white overflow-hidden ${isHeroInView ? '' : 'anim-paused'}`}
    >
      
      {/* 1. Full-Width Real Photo Background with Dark Navy Overlay (~70%) */}
      <div className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden">
        
        {/* Layer 1: Parallax Background Image Container (Ken Burns transform only; never animate opacity) */}
        <div ref={bgLayerRef} className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={getAssetUrl('images/hero-highway-background.webp')}
            alt="Warraich Goods Transport Commercial FTL Highway Transit"
            width={1280}
            height={714}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center hero-ken-burns"
            onError={(e) => {
              e.currentTarget.src = getAssetUrl('images/corporate-factory-dispatch.webp');
            }}
          />
          {/* Dark Navy 70-75% Scrim Overlay */}
          <div className="absolute inset-0 bg-slate-950/75" />
          {/* Subtle bottom gradient to blend smoothly */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* Layer 2: Foreground Content Container */}
        <div ref={contentLayerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          
          {/* Primary Large Headline with ONE Highlighted Amber Word */}
          <div className="hero-stagger-1">
            {isUrdu ? (
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto font-urdu">
                پورے پاکستان کے لیے بااعتماد <span className="text-amber-400">مال برداری و شفٹنگ</span> سروس
              </h1>
            ) : (
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto font-sans">
                Reliable <span className="text-amber-400">Goods Transport</span> & Shifting Across Pakistan
              </h1>
            )}
          </div>

          {/* Tagline Subtitle */}
          <div className="hero-stagger-2">
            <p className={`text-base sm:text-xl font-bold text-slate-200 leading-relaxed max-w-3xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? COMPANY_INFO.taglineUrdu : 'Home shifting, office moving and goods transport from Samundri across Pakistan. Serving since 2008.'}
            </p>
          </div>

          {/* Short Subtext */}
          <div className="hero-stagger-3">
            <p className={`text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'گھریلو سامان شفٹنگ، دفتری منتقلی اور کمرشل مال برداری کے لیے مزدا ٹرک، شہزور پک اپ اور ہیوی ٹرکس کی 24/7 تیز رفتار بکنگ۔ محفوظ ہینڈلنگ، کمپیوٹرائزڈ بلٹی اور مناسب ترین ریٹ۔'
                : 'We provide Shahzore pickups, Mazda trucks, and heavy haulers for full truckload trips anywhere in Pakistan. Careful handling, clear bilty receipts, and fair rates.'}
            </p>
          </div>

          {/* 2 Primary Hero Buttons: "WhatsApp Us" (amber floating + pulse) & "Call Now" (outlined) */}
          <div className="hero-stagger-4 pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            {/* Amber Primary Button with gentle floating + subtle pulse */}
            <div className={`w-full sm:w-auto ${MOTION_CONFIG.heroFloatingCta ? 'cta-gentle-float' : ''}`}>
              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-subtle-pulse btn-animated w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black px-7 py-3.5 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-amber-500/25 min-h-[48px] cursor-pointer ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                aria-label="WhatsApp Warraich Goods"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>{isUrdu ? 'واٹس ایپ کریں' : 'WhatsApp Us'}</span>
              </a>
            </div>

            {/* Outlined White Button */}
            <a
              id="hero-call-now-btn"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className={`btn-animated w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white hover:bg-white/10 active:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base cursor-pointer min-h-[48px] ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              aria-label={`Call Warraich Goods at ${COMPANY_INFO.phone1}`}
            >
              <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{isUrdu ? 'کال کریں' : 'Call Now'}</span>
            </a>
          </div>

          {/* Real Facts Stats Row with CountUp (18+ Years, 4 Fleet Truck Types, 24/7 Booking & Support) */}
          <div className="pt-8 sm:pt-10 max-w-3xl mx-auto border-t border-slate-800/80">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center items-center">
              
              {/* Stat 1: 18+ Years | Serving Since 2008 */}
              <div className="space-y-1">
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 block tracking-tight ${isUrdu ? 'font-urdu' : 'font-mono tabular-nums'}`}>
                  {isUrdu ? (
                    <>
                      <CountUp end={18} start={1} suffix="+" duration={650} /> سال
                    </>
                  ) : (
                    <>
                      <CountUp end={18} start={1} suffix="+" duration={650} /> Years
                    </>
                  )}
                </span>
                <span className={`text-xs sm:text-sm font-bold text-white block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? '2008 سے خدمت میں' : 'Serving Since 2008'}
                </span>
              </div>

              {/* Stat 2: 4 | Fleet Truck Types */}
              <div className="space-y-1 border-x border-slate-800">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tabular-nums text-blue-400 block tracking-tight">
                  <CountUp end={4} start={1} duration={500} />
                </span>
                <span className={`text-xs sm:text-sm font-bold text-white block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'کمرشل فلیٹ ماڈلز' : 'Fleet Truck Types'}
                </span>
              </div>

              {/* Stat 3: 24/7 | Booking & Support */}
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tabular-nums text-emerald-400 block tracking-tight">
                  <CountUp end={24} start={0} suffix="/7" duration={600} />
                </span>
                <span className={`text-xs sm:text-sm font-bold text-white block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'بکنگ و سپورٹ' : 'Booking & Support'}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Layer 3: Animated Highway Road Lines + Driving Truck at Bottom of Hero */}
        {MOTION_CONFIG.heroRoadAndTruck && (
          <div
            ref={roadLayerRef}
            dir="ltr"
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-5 sm:bottom-6 h-10 overflow-x-clip overflow-y-visible z-10"
          >
            <div className="hero-road-lines absolute left-0 bottom-1 h-[1.5px]" />
            <div className="hero-truck-drive absolute left-0 bottom-2.5 flex items-center text-amber-400/95">
              <Truck className="w-5 h-5 shrink-0" />
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
