import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Clock } from 'lucide-react';
import { MASTER_CITIES, ServiceAreaRegion } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

const REGION_GROUPS: {
  id: ServiceAreaRegion;
  titleEn: string;
  titleUr: string;
}[] = [
  { id: 'near-samundri', titleEn: 'Near Samundri', titleUr: 'سمندری کے قریبی شہر' },
  { id: 'punjab', titleEn: 'Punjab', titleUr: 'پنجاب' },
  { id: 'rest-of-pakistan', titleEn: 'Rest of Pakistan', titleUr: 'پاکستان کے دیگر شہر' },
];

const TOP_SAMUNDRI_CORRIDORS = [
  {
    destId: 'lahore',
    routeEn: 'Samundri ➔ Lahore',
    routeUr: 'سمندری ➔ لاہور',
    highwayEn: 'M-3 Motorway Corridor',
    highwayUr: 'براستہ M-3 موٹروے',
    transitEn: '2.5 – 3.5 hrs',
    transitUr: '2.5 تا 3.5 گھنٹے',
  },
  {
    destId: 'gujranwala',
    routeEn: 'Samundri ➔ Sargodha / Gujranwala',
    routeUr: 'سمندری ➔ سرگودھا / گوجرانوالہ',
    highwayEn: 'Regional Punjab Belts',
    highwayUr: 'وسطی پنجاب کوریڈور',
    transitEn: '2.5 – 3.5 hrs',
    transitUr: '2.5 تا 3.5 گھنٹے',
  },
  {
    destId: 'multan',
    routeEn: 'Samundri ➔ Multan',
    routeUr: 'سمندری ➔ ملتان',
    highwayEn: 'M-4 & M-5 Motorway',
    highwayUr: 'براستہ M-4 و M-5 موٹروے',
    transitEn: '3.5 – 4.5 hrs',
    transitUr: '3.5 تا 4.5 گھنٹے',
  },
  {
    destId: 'islamabad',
    routeEn: 'Samundri ➔ Rawalpindi / Islamabad',
    routeUr: 'سمندری ➔ راولپنڈی و اسلام آباد',
    highwayEn: 'M-4 & M-2 Motorway',
    highwayUr: 'براستہ M-4 و M-2 موٹروے',
    transitEn: '4.5 – 5.5 hrs',
    transitUr: '4.5 تا 5.5 گھنٹے',
  },
  {
    destId: 'peshawar',
    routeEn: 'Samundri ➔ Peshawar',
    routeUr: 'سمندری ➔ پشاور',
    highwayEn: 'M-2 & M-1 Motorway',
    highwayUr: 'براستہ M-2 و M-1 موٹروے',
    transitEn: '7 – 8.5 hrs',
    transitUr: '7 تا 8.5 گھنٹے',
  },
  {
    destId: 'karachi',
    routeEn: 'Samundri ➔ Karachi Port (KPT / QICT)',
    routeUr: 'سمندری ➔ کراچی پورٹ (KPT / QICT)',
    highwayEn: 'M-4, M-5 & N-5 Highway',
    highwayUr: 'براستہ M-4، M-5 اور N-5',
    transitEn: '24 – 30 hrs',
    transitUr: '24 تا 30 گھنٹے',
  },
];

export const ServiceAreasPage: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <div className="bg-slate-50">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
              {isUrdu ? 'سمندری، ضلع فیصل آباد سے ملک بھر میں سروس' : 'From Samundri, District Faisalabad'}
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            {isUrdu ? 'سروس کے علاقے' : 'Service Areas'}
          </h1>

          <p
            className={`mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            {isUrdu
              ? 'ہمارا دفتر سمندری، ضلع فیصل آباد میں واقع ہے۔ ہم سمندری سے نیچے دیے گئے تمام شہروں کے لیے گاڑیاں بک کرتے ہیں اور ان شہروں سے واپسی لوڈ (بیک ہال) سمندری تک بھی لاتے ہیں۔'
              : 'Our office is in Samundri, District Faisalabad. We book trucks from Samundri to the cities below and bring backhaul loads back to Samundri.'}
          </p>
        </div>
      </section>

      {/* City Groups */}
      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {REGION_GROUPS.map((group, idx) => {
            const cities = MASTER_CITIES.filter((city) => city.region === group.id);
            return (
              <div
                key={group.id}
                data-reveal=""
                style={{ '--reveal-delay': `${idx * 80}ms` } as React.CSSProperties}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm card-interactive group"
              >
                <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
                  <h2
                    className={`text-xl sm:text-2xl font-black text-slate-950 ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    {isUrdu ? group.titleUr : group.titleEn}
                  </h2>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {cities.length} {isUrdu ? 'شہر' : 'Cities'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cities.map((city) => (
                    <span
                      key={city.id}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold transition-colors hover:border-amber-300 hover:bg-amber-50/40 ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span>{isUrdu ? city.nameUrdu : city.nameEnglish}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top Routes & Estimated Transit Times from Samundri */}
      <section className="pb-10 sm:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div
            data-reveal=""
            className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-amber-600 block">
                  {isUrdu ? 'ٹرانزٹ ٹائم گائیڈ' : 'Express Transit Guide'}
                </span>
                <h2
                  className={`text-xl sm:text-2xl font-black text-slate-950 mt-0.5 ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  {isUrdu
                    ? 'سمندری سے اہم شہروں کے روٹس اور متوقع وقت'
                    : 'Top Routes & Estimated Transit Times from Samundri'}
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {isUrdu ? 'نان اسٹاپ FTL ڈسپیچ' : 'Direct Non-Stop FTL'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {TOP_SAMUNDRI_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.destId}
                  className="bg-slate-50 border border-slate-200 hover:border-amber-300 rounded-xl p-4 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="min-w-0">
                    <h3
                      className={`text-sm sm:text-base font-bold text-slate-950 truncate ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      {isUrdu ? corridor.routeUr : corridor.routeEn}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-600">
                      <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                        {isUrdu ? corridor.highwayUr : corridor.highwayEn}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono font-bold text-blue-700">
                        <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{isUrdu ? corridor.transitUr : corridor.transitEn}</span>
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/booking"
                    state={{ originId: 'samundri', destinationId: corridor.destId }}
                    className={`flex-shrink-0 inline-flex items-center gap-1 bg-white hover:bg-amber-500 text-slate-900 border border-slate-300 hover:border-amber-500 font-bold px-3 py-2 rounded-lg text-xs transition-colors ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    <span>{isUrdu ? 'کرایہ' : 'Rate'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation CTA (No duplicate phone/Call/WhatsApp buttons) */}
      <section className="pb-12 sm:pb-16 pt-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className={isUrdu ? 'font-urdu text-center sm:text-start' : 'font-sans text-center sm:text-start'}>
              <h2 className="text-lg sm:text-xl font-black text-slate-950">
                {isUrdu ? 'گاڑی بک کرنی ہے یا کرایہ معلوم کرنا ہے؟' : 'Need a Truck or Freight Rate for These Cities?'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {isUrdu
                  ? 'روٹ کا کرایہ چیک کریں یا ہمارے سمندری دفتر کی مکمل معلومات دیکھیں۔'
                  : 'Use our rate inquiry form or view our Samundri office address and contact details.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                to="/booking"
                className={`inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors shadow-sm ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                <span>{isUrdu ? 'کرایہ و بکنگ' : 'Rates & Booking'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                <span>{isUrdu ? 'کمپنی و رابطہ کوائف' : 'Company Contact Info'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
