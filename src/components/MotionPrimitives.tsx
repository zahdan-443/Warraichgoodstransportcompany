import React, { useEffect, useRef, useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Scale,
  Umbrella,
  FileCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { MOTION_CONFIG } from '../config/motionConfig';
import { prefersReducedMotion, useInView } from '../hooks/useMotion';
import { useLanguage } from '../context/LanguageContext';

/* ============================================================================
   1. <Reveal> — Scroll-reveal wrapper supporting 5 GPU/RTL-aware variants
   ============================================================================ */
export type RevealVariant = 'fade-up' | 'slide-left' | 'slide-right' | 'zoom-in' | 'blur-in';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) => {
  return (
    <Tag
      data-reveal=""
      data-reveal-variant={variant === 'fade-up' ? undefined : variant}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
};

/* ============================================================================
   2. <CountUp> — Counts up once when scrolled into view (SSR-safe initial text)
   ============================================================================ */
interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 650,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState<number>(end);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = spanRef.current;
    if (
      !el ||
      !MOTION_CONFIG.countUp ||
      prefersReducedMotion() ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setDisplayValue(end);
      return;
    }

    let rafId: number | null = null;

    const runAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const startTime = performance.now();
      const range = end - start;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplayValue(Math.round(start + range * eased));
        if (t < 1) {
          rafId = window.requestAnimationFrame(step);
        } else {
          setDisplayValue(end);
        }
      };

      setDisplayValue(start);
      rafId = window.requestAnimationFrame(step);
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      runAnimation();
      return () => {
        if (rafId !== null) window.cancelAnimationFrame(rafId);
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [end, start, duration]);

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

/* ============================================================================
   3. <TiltCard> — Desktop 3D tilt & border glow; touch-device press fallback
   ============================================================================ */
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTiltDeg?: number;
  glowClassName?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTiltDeg = 4.5,
  glowClassName = 'tilt-card-glow',
  style,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const canHoverTilt = () =>
    MOTION_CONFIG.tiltCards &&
    typeof window !== 'undefined' &&
    !prefersReducedMotion() &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canHoverTilt() || e.pointerType === 'touch') return;
    const el = cardRef.current;
    if (!el) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * (maxTiltDeg * 2);
      const rotateX = (0.5 - py) * (maxTiltDeg * 2);

      el.style.willChange = 'transform';
      el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -4px, 0)`;
      el.style.setProperty('--glow-x', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--glow-y', `${(py * 100).toFixed(1)}%`);
      el.classList.add('is-tilting');
    });
  };

  const handlePointerLeave = () => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.willChange = 'auto';
    el.classList.remove('is-tilting');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={style}
      className={`tilt-card ${className}`}
      {...rest}
    >
      {MOTION_CONFIG.tiltCards && (
        <span aria-hidden="true" className={glowClassName} />
      )}
      {children}
    </div>
  );
};

/* ============================================================================
   4. <AnimatedNumberRoll> — Rolls/slides smoothly when rate/capacity updates
   ============================================================================ */
interface AnimatedNumberRollProps {
  value: string | number;
  className?: string;
}

export const AnimatedNumberRoll: React.FC<AnimatedNumberRollProps> = ({
  value,
  className = '',
}) => {
  const stringVal = String(value);
  if (!MOTION_CONFIG.numberRoll) {
    return <span className={`tabular-nums ${className}`}>{stringVal}</span>;
  }

  return (
    <span key={stringVal} className={`inline-block tabular-nums number-roll-enter ${className}`}>
      {stringVal}
    </span>
  );
};

/* ============================================================================
   5. <RouteTruckTrack> — Animated From -> To route bar with moving truck
   ============================================================================ */
interface RouteTruckTrackProps {
  fromLabel: string;
  toLabel: string;
  badgeLabel?: string;
  compact?: boolean;
  className?: string;
}

export const RouteTruckTrack: React.FC<RouteTruckTrackProps> = ({
  fromLabel,
  toLabel,
  badgeLabel,
  compact = false,
  className = '',
}) => {
  const { isRtl } = useLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(trackRef, '60px');

  if (!MOTION_CONFIG.routeTrackTruck) return null;

  return (
    <div
      ref={trackRef}
      className={`flex items-center justify-between gap-2.5 sm:gap-4 ${
        compact ? 'px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90' : 'px-3.5 py-2.5 rounded-lg bg-slate-900 text-white border border-slate-800'
      } ${inView ? '' : 'anim-paused'} ${className}`}
    >
      {/* Origin Node */}
      <div className="flex items-center gap-1.5 min-w-0 flex-shrink-0 max-w-[34%]">
        <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" aria-hidden="true" />
        <span
          className={`text-[11px] sm:text-xs font-bold truncate ${
            compact ? 'text-slate-900' : 'text-white'
          } ${isRtl ? 'font-urdu' : 'font-sans'}`}
        >
          {fromLabel}
        </span>
      </div>

      {/* Highway Track + Moving Truck */}
      <div className="relative flex-1 h-5 flex items-center overflow-hidden min-w-[68px]" aria-hidden="true">
        <div
          className={`w-full border-b border-dashed ${
            compact ? 'border-amber-500/70' : 'border-amber-400/60'
          }`}
        />
        <div className="route-track-truck absolute top-1/2 -translate-y-1/2 left-0 flex items-center text-amber-500">
          <Truck className={`w-4 h-4 ${isRtl ? '-scale-x-100' : ''}`} />
        </div>
        {badgeLabel && (
          <span
            className={`relative z-10 mx-auto px-1.5 text-[10px] font-mono font-bold rounded ${
              compact ? 'bg-slate-50 text-slate-500' : 'bg-slate-900 text-amber-300'
            }`}
          >
            {badgeLabel}
          </span>
        )}
      </div>

      {/* Destination Node */}
      <div className="flex items-center gap-1.5 min-w-0 flex-shrink-0 max-w-[34%] justify-end">
        <span
          className={`text-[11px] sm:text-xs font-bold truncate ${
            compact ? 'text-slate-900' : 'text-white'
          } ${isRtl ? 'font-urdu' : 'font-sans'}`}
        >
          {toLabel}
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
};

/* ============================================================================
   6. <TrustCarousel> — Auto-sliding factual service trust highlights (pause on hover)
   ============================================================================ */
const TRUST_SLIDES = [
  {
    id: 'heritage',
    icon: Clock,
    titleEn: 'Serving Across Pakistan Since 2008 (18+ Years)',
    titleUr: '2008 سے ملک بھر میں بااعتماد سروس (18+ سال)',
    descEn: 'Years of practical Samundri and nationwide highway dispatch expertise with direct owner accountability.',
    descUr: 'سمندری اور پاکستان بھر کی شاہراہوں پر برسوں کا عملی تجربہ اور پروپرائٹر کی براہِ راست نگرانی۔',
    tagEn: 'Established Heritage',
    tagUr: 'مستند تجربہ',
  },
  {
    id: 'fbr',
    icon: FileCheck,
    titleEn: 'Active FBR Taxpayer — NTN: 7779394-1',
    titleUr: 'ایف بی آر ایکٹو ٹیکس پیئر — NTN: 7779394-1',
    descEn: 'Proper tax invoicing, signed Proof of Delivery (POD), and official computerized bilty slips for every trip.',
    descUr: 'باقاعدہ ٹیکس انوائسنگ، وصول کنندہ کے دستخط شدہ رسید (POD) اور تصدیق شدہ کمپیوٹرائزڈ بلٹی۔',
    tagEn: 'Verified Registration',
    tagUr: 'قانونی رجسٹریشن',
  },
  {
    id: 'ftl',
    icon: Truck,
    titleEn: '100% Dedicated Full Truckload (Zero Cargo Mixing)',
    titleUr: '100% مخصوص سنگل پارٹی گاڑی (زیرو مکسنگ)',
    descEn: 'Your entire Shahzore, Mazda, Sample, or Bedford carries only your consignment straight to the destination.',
    descUr: 'پوری گاڑی صرف آپ کے مال کے لیے وقف ہوتی ہے، راستے میں کوئی دوسرا مال یا پارسل مکس نہیں کیا جاتا۔',
    tagEn: 'Dedicated FTL',
    tagUr: 'مخصوص گاڑی',
  },
  {
    id: 'scale',
    icon: Scale,
    titleEn: 'Computerized Weighbridge & Axle Compliance',
    titleUr: 'کمپیوٹرائزڈ کانٹا پرچی اور وزن کی درست پیمائش',
    descEn: 'Official computer scale weight slips provided right at pickup alongside complete highway axle-load compliance.',
    descUr: 'لوڈنگ کے فوری بعد سرکاری کمپیوٹرائزڈ کانٹا پرچی اور موٹروے ایکسل قوانین کی مکمل پابندی۔',
    tagEn: 'Transparent Weight',
    tagUr: 'شفاف وزن',
  },
  {
    id: 'tarpaulin',
    icon: Umbrella,
    titleEn: 'Double Waterproof Tarpaulins & Direct Driver Link',
    titleUr: 'ڈبل واٹر پروف ترپال اور ڈرائیور سے براہ راست رابطہ',
    descEn: 'Heavy PVC weather protection against rain and dust, plus your assigned driver’s mobile number at dispatch.',
    descUr: 'بارش اور گرد و غبار سے بچاؤ کے لیے ڈبل واٹر پروف ترپال اور روانگی کے وقت ڈرائیور کا نمبر۔',
    tagEn: 'All-Weather Shield',
    tagUr: 'موسمی تحفظ',
  },
];

export const TrustCarousel: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const isUrdu = language === 'ur';
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, '80px');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideCount = TRUST_SLIDES.length;

  useEffect(() => {
    if (
      !MOTION_CONFIG.trustCarousel ||
      !inView ||
      isPaused ||
      prefersReducedMotion()
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (!document.documentElement.classList.contains('is-scrolling')) {
        setActiveIndex((prev) => (prev + 1) % slideCount);
      }
    }, 4200);

    return () => window.clearInterval(timer);
  }, [inView, isPaused, slideCount]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slideCount);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className="mt-10 sm:mt-12 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm"
      role="region"
      aria-roledescription="carousel"
      aria-label={isUrdu ? 'ہماری خدمات کی مصدقہ ضمانتیں' : 'Verified Service Guarantees'}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <span className={`text-xs sm:text-sm font-black text-slate-900 block ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'مصدقہ سروس ضمانتیں اور اعتماد' : 'Verified Service & Trust Standards'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5" dir="ltr">
          <button
            type="button"
            onClick={isRtl ? goNext : goPrev}
            aria-label={isUrdu ? 'پچھلی سلائیڈ' : 'Previous guarantee'}
            className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={isRtl ? goPrev : goNext}
            aria-label={isUrdu ? 'اگلی سلائیڈ' : 'Next guarantee'}
            className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sliding Track */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div
          dir="ltr"
          className="flex trust-carousel-track"
          style={{
            transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
          }}
        >
          {TRUST_SLIDES.map((slide) => {
            const Icon = slide.icon;
            return (
              <div
                key={slide.id}
                dir={isRtl ? 'rtl' : 'ltr'}
                className="w-full flex-shrink-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`flex-1 min-w-0 ${isUrdu ? 'font-urdu text-right' : 'font-sans text-left'}`}>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                    {isUrdu ? slide.tagUr : slide.tagEn}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950">
                    {isUrdu ? slide.titleUr : slide.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {isUrdu ? slide.descUr : slide.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-3.5" role="tablist" aria-label="Guarantee slides">
        {TRUST_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            aria-label={`Slide ${idx + 1}: ${isUrdu ? slide.tagUr : slide.tagEn}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeIndex === idx ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
