import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Route as RouteIcon,
  Truck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  FileCheck2,
  Package,
} from 'lucide-react';
import {
  CORRIDOR_BY_PATH,
  CORRIDOR_SEO_PAGES,
  CorridorSeoEntry,
} from '../data/corridorsData';
import { COMPANY_INFO, FLEET_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';
import { TiltCard } from '../components/MotionPrimitives';

interface CorridorSeoPageProps {
  corridorPath?: string;
}

export const CorridorSeoPage: React.FC<CorridorSeoPageProps> = ({ corridorPath }) => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const normalizedPath =
    (corridorPath || location.pathname).replace(/\/+$/, '') ||
    '/goods-transport-faisalabad-samundri';
  const corridor: CorridorSeoEntry =
    CORRIDOR_BY_PATH[normalizedPath] || CORRIDOR_SEO_PAGES[0];

  const whatsappText = isUrdu
    ? `السلام علیکم وڑائچ گڈز ٹرانسپورٹ کمپنی! مجھے ${corridor.titleUr} کے لیے گاڑی اور کرایہ معلوم کرنا ہے۔`
    : `Hello Warraich Goods Transport Company, I need a truck quote for ${corridor.titleEn}.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const highlights = isUrdu ? corridor.highlightsUr : corridor.highlightsEn;
  const cargoTags = isUrdu ? corridor.cargoTagsUr : corridor.cargoTagsEn;
  const relatedCorridors = corridor.relatedSlugs
    .map((slug) => CORRIDOR_SEO_PAGES.find((c) => c.slug === slug))
    .filter((c): c is CorridorSeoEntry => Boolean(c));

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="bg-slate-50 text-slate-900">
      {/* 1. Hero Section */}
      <section className="bg-slate-950 text-white py-10 sm:py-14 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className={`flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-5 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <Link to="/" className="hover:text-amber-400 transition-colors">
              {isUrdu ? 'مرکزی صفحہ' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/service-areas" className="hover:text-amber-400 transition-colors">
              {isUrdu ? 'سروس کے علاقے' : 'Service Areas'}
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">
              {isUrdu ? corridor.shortLinkLabelUr : corridor.shortLinkLabelEn}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                  {isUrdu ? corridor.badgeUr : corridor.badgeEn}
                </span>
              </div>

              <h1
                className={`text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu ? corridor.h1Ur : corridor.h1En}
              </h1>

              <p
                className={`text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu ? corridor.heroSummaryUr : corridor.heroSummaryEn}
              </p>

              {/* Corridor Key Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    <RouteIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{isUrdu ? 'ہائی وے روٹ' : 'Highway Corridor'}</span>
                  </div>
                  <p
                    className={`mt-1 text-xs sm:text-sm font-bold text-white leading-snug ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    {isUrdu ? corridor.highwayUr : corridor.highwayEn}
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{isUrdu ? 'متوقع سفر' : 'Estimated Transit'}</span>
                  </div>
                  <p
                    className={`mt-1 text-xs sm:text-sm font-bold text-white leading-snug ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    {isUrdu ? corridor.transitUr : corridor.transitEn}
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{isUrdu ? 'کوریج' : 'Coverage'}</span>
                  </div>
                  <p
                    className={`mt-1 text-xs sm:text-sm font-bold text-white leading-snug ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    {isUrdu ? corridor.distanceUr : corridor.distanceEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/booking"
                  state={{
                    originId: corridor.originId,
                    destinationId: corridor.destinationId,
                  }}
                  className={`btn-animated inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-3 rounded-xl text-sm shadow-sm transition-colors ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <span>{isUrdu ? 'اس روٹ کا کرایہ معلوم کریں' : 'Get Route Freight Rate'}</span>
                  <ArrowRight
                    className={`btn-arrow-icon w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`}
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-animated inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{isUrdu ? 'واٹس ایپ بکنگ' : 'WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className={`btn-animated inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/70 bg-white/5 hover:bg-white/10 text-white font-bold px-4 py-3 rounded-xl text-sm transition-colors ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{COMPANY_INFO.phone1}</span>
                </a>
              </div>
            </div>

            {/* Hero Dedicated Image Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={getAssetUrl(corridor.image)}
                  alt={isUrdu ? corridor.imageAltUr : corridor.imageAltEn}
                  width={800}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-64 sm:h-80 object-cover object-center"
                />
                <div className="bg-slate-900/95 border-t border-slate-800 p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-bold text-amber-400 truncate ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      {isUrdu ? COMPANY_INFO.nameUrdu : COMPANY_INFO.nameEnglish}
                    </p>
                    <p
                      className={`text-xs text-slate-300 truncate mt-0.5 ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      {isUrdu ? COMPANY_INFO.addressUrdu : COMPANY_INFO.addressEnglish}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-[11px] font-mono font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-1 rounded-md">
                    NTN {COMPANY_INFO.ntn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Route Advantages & Cargo Specialization Bar */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <h2
                className={`text-lg sm:text-xl font-black text-slate-950 ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu
                  ? 'اس روٹ پر ہماری نمایاں سہولیات'
                  : 'Route Dispatch & Compliance Highlights'}
              </h2>
            </div>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <h2
                className={`text-lg sm:text-xl font-black text-slate-950 ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu ? 'اس روٹ پر منتقل ہونے والا مال' : 'Common Cargo Hauled'}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cargoTags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
              <FileCheck2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                {isUrdu
                  ? 'تحریری بلٹی، کمپیوٹرائزڈ کانٹا پرچی اور ڈبل واٹر پروف ترپال ہر سفر میں شامل ہے۔'
                  : 'Written bilty, computer scale slips, and double waterproof tarpaulins included.'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Route Guide (3 Detailed Prose Blocks) */}
      <section className="py-10 sm:py-14 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          {corridor.sections.map((sec, idx) => (
            <article
              key={idx}
              data-reveal=""
              style={{ '--reveal-delay': `${idx * 65}ms` } as React.CSSProperties}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3"
            >
              <h2
                className={`text-xl sm:text-2xl font-black text-slate-950 ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu ? sec.headingUr : sec.headingEn}
              </h2>
              {(isUrdu ? sec.bodyUr : sec.bodyEn).map((para, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-sm sm:text-base text-slate-700 leading-relaxed ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  {para}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* 4. Real 4-Truck Fleet Selector for This Route */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700 block mb-1">
              {isUrdu ? 'دستیاب کمرشل فلیٹ' : 'Dedicated Fleet Options'}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-black text-slate-950 ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              {isUrdu
                ? 'اس روٹ کے لیے ہماری 4 مستند گاڑیاں'
                : 'Choose Your Truck Size for This Route'}
            </h2>
            <p
              className={`mt-2 text-xs sm:text-sm text-slate-600 ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              {isUrdu
                ? 'اپنے مال کے وزن کے مطابق شہزور، مزدا، سیمپل یا بیڈفورڈ فل گاڑی منتخب کریں۔'
                : 'Select the right capacity from our 4 commercial trucks — booked strictly for your load alone.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLEET_DATA.map((truck, idx) => (
              <TiltCard
                key={truck.id}
                data-reveal=""
                data-reveal-variant="zoom-in"
                style={{ '--reveal-delay': `${idx * 65}ms` } as React.CSSProperties}
                className="bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm card-interactive"
              >
                <div>
                  <div className="relative h-44 bg-slate-900">
                    <img
                      src={getAssetUrl(truck.image)}
                      alt={isUrdu ? truck.altUrdu || truck.nameUrdu : truck.altEnglish || truck.nameEnglish}
                      width={560}
                      height={312}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-mono font-bold text-amber-300 bg-slate-950/85 px-2.5 py-1 rounded-md border border-white/15">
                      {isUrdu ? truck.capacityUrdu : truck.capacity}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3
                      className={`text-base sm:text-lg font-black text-slate-950 ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      {isUrdu ? truck.nameUrdu : truck.nameEnglish}
                    </h3>
                    <p
                      className={`text-xs text-slate-600 leading-relaxed ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      {isUrdu ? truck.subtitleUrdu : truck.subtitleEnglish}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <Link
                    to="/booking"
                    state={{
                      originId: corridor.originId,
                      destinationId: corridor.destinationId,
                      vehicleId: truck.id,
                    }}
                    className={`btn-animated w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    <span>
                      {isUrdu ? `${truck.nameUrdu} کا کرایہ لیں` : `Quote ${truck.nameEnglish.split(' ')[0]}`}
                    </span>
                    <ArrowRight
                      className={`btn-arrow-icon w-3.5 h-3.5 ${isUrdu ? 'rotate-180' : ''}`}
                    />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Route-Specific FAQ Accordion */}
      <section className="py-12 sm:py-14 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-700 block mb-1">
              {isUrdu ? 'روٹ سے متعلق سوالات' : 'Route Questions'}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-black text-slate-950 ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              {isUrdu
                ? `${corridor.titleUr} کے عام سوالات`
                : `Frequently Asked Questions — ${corridor.shortLinkLabelEn}`}
            </h2>
          </div>

          <div className="space-y-3">
            {corridor.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-4 px-5 flex items-center justify-between gap-4 text-start hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span
                      className={`font-bold text-sm sm:text-base text-slate-900 leading-relaxed ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      {isUrdu ? faq.questionUr : faq.questionEn}
                    </span>
                    <ChevronDown
                      className={`faq-chevron w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`faq-accordion ${isOpen ? 'faq-accordion-open' : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-accordion-inner">
                      <div
                        className={`px-5 pb-4 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50 ${
                          isUrdu ? 'font-urdu' : 'font-sans'
                        }`}
                      >
                        {isUrdu ? faq.answerUr : faq.answerEn}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Related Corridors & Internal Links */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2
                className={`text-xl sm:text-2xl font-black text-slate-950 ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu
                  ? 'دیگر اہم روٹس اور بیک ہال سروسز'
                  : 'Explore Related Pakistan Corridors & Backhaul Routes'}
              </h2>
              <p
                className={`text-xs sm:text-sm text-slate-600 mt-1 ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu
                  ? 'سمندری، فیصل آباد اور ملک بھر کے اہم تجارتی شہروں کے لیے براہِ راست ٹرک بکنگ۔'
                  : 'Direct city pages served from our Okara Bypass, Near 466 Chowk, Samundri office.'}
              </p>
            </div>
            <Link
              to="/service-areas"
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-600 ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              <span>{isUrdu ? 'تمام 42+ شہر دیکھیں' : 'View All 42+ Service Areas'}</span>
              <ArrowRight className={`w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCorridors.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.path}
                className="group bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-400 rounded-xl p-4 transition-colors flex flex-col justify-between gap-2 card-interactive"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-700 block">
                    {isUrdu ? rel.transitUr : rel.transitEn}
                  </span>
                  <h3
                    className={`text-sm sm:text-base font-black text-slate-950 mt-1 group-hover:text-amber-700 ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    {isUrdu ? rel.titleUr : rel.titleEn}
                  </h3>
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold text-blue-700 ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <span>{isUrdu ? 'روٹ کی تفصیل دیکھیں' : 'View route details'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isUrdu ? 'rotate-180' : ''}`} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
