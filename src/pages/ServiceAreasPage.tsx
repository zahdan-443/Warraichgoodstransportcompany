import React from 'react';
import { MapPin } from 'lucide-react';
import { MASTER_CITIES, ServiceAreaRegion } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { ContactStrip } from '../components/ContactStrip';

const REGION_GROUPS: {
  id: ServiceAreaRegion;
  titleEn: string;
  titleUr: string;
}[] = [
  { id: 'near-samundri', titleEn: 'Near Samundri', titleUr: 'سمندری کے قریبی شہر' },
  { id: 'punjab', titleEn: 'Punjab', titleUr: 'پنجاب' },
  { id: 'rest-of-pakistan', titleEn: 'Rest of Pakistan', titleUr: 'پاکستان کے دیگر شہر' },
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

      {/* Contact Strip */}
      <section className="pb-12 sm:pb-16 pt-2">
        <ContactStrip />
      </section>
    </div>
  );
};
