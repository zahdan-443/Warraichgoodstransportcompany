import React from 'react';
import { 
  MapPin, 
  Phone, 
  ExternalLink, 
  Navigation, 
  Clock
} from 'lucide-react';
import { BRANCHES_DATA, COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const BranchesSection: React.FC = () => {
  const { language } = useLanguage();
  const tBranches = TRANSLATIONS[language].branches;

  return (
    <section id="branches" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border border-blue-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
            <MapPin className="w-4 h-4 text-blue-700" />
            <span>{tBranches.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            {tBranches.title}
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            {tBranches.subtitle}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BRANCHES_DATA.map((branch) => {
            const branchName = language === 'ur' ? branch.nameUrdu : branch.nameEnglish;
            const branchAddress = language === 'ur' ? branch.addressUrdu : branch.addressEnglish;

            return (
              <div
                key={branch.id}
                id={`branch-card-${branch.id}`}
                className="bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 to-blue-600"></div>

                <div>
                  {/* Badge & City */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {branch.cityEnglish}
                    </span>
                    {branch.isHeadOffice ? (
                      <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-sm">
                        {language === 'ur' ? 'ہیڈ آفس (مین اڈا)' : 'Head Office'}
                      </span>
                    ) : (
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {language === 'ur' ? 'سب برانچ' : 'Sub Branch'}
                      </span>
                    )}
                  </div>

                  {/* Branch Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {branchName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-5">
                    {branch.nameEnglish}
                  </p>

                  {/* Address Box */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-slate-400 block">{tBranches.addressLabel}</span>
                        <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                          {branchAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{tBranches.timingLabel}: <strong className="text-slate-800">{tBranches.timingValue}</strong></span>
                    </div>
                  </div>

                  {/* Contact Numbers Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw1}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 hover:bg-amber-100 transition-colors"
                      aria-label={`Primary contact ${branch.phone1}`}
                    >
                      <Phone className="w-4 h-4 text-amber-600" />
                      <div>
                        <span className="text-[10px] text-amber-700 block">{tBranches.phonePrimary}:</span>
                        <span className="text-xs sm:text-sm font-mono font-bold">{branch.phone1}</span>
                      </div>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw2}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 transition-colors"
                      aria-label={`Secondary contact ${branch.phone2}`}
                    >
                      <Phone className="w-4 h-4 text-slate-600" />
                      <div>
                        <span className="text-[10px] text-slate-500 block">{tBranches.phoneSecondary}:</span>
                        <span className="text-xs sm:text-sm font-mono font-bold">{branch.phone2}</span>
                      </div>
                    </a>
                  </div>

                </div>

                {/* Google Maps Actions */}
                <div className="pt-2 border-t border-slate-200">
                  <a
                    id={`open-map-${branch.id}-btn`}
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-blue-600/20 text-sm transition-all transform active:scale-95"
                    aria-label={`Open Google Maps location for ${branch.nameEnglish}`}
                  >
                    <Navigation className="w-4 h-4 animate-pulse" />
                    <span>{tBranches.btnMap}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Nationwide Route Coverage Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-xl sm:text-2xl font-bold text-amber-400">
                {language === 'ur' ? 'پنجاب و سندھ تا خیبر پختونخوا اور بلوچستان' : 'Nationwide Full Truckload Network Across Pakistan'}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {language === 'ur' 
                  ? 'ہم سمندری اور کمالیہ سے فیصل آباد، لاہور، کراچی، راولپنڈی، اسلام آباد، ملتان، پشاور، کوئٹہ، سکھر، حیدرآباد، گوجرانوالہ، سیالکوٹ سمیت پاکستان کے ہر قصبے اور صنعتی زون میں گاڑیاں لوڈ کرتے ہیں۔'
                  : 'Daily dispatching from Samundri & Kamalia to Karachi Port, Lahore, Faisalabad, Rawalpindi, Islamabad, Multan, Peshawar, Quetta, Sukkur, and all nationwide industrial hubs.'}
              </p>
            </div>
            <div className="text-center md:text-end">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
                aria-label={`Call for route booking ${COMPANY_INFO.phone1}`}
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{language === 'ur' ? 'روٹ بکنگ کے لیے کال کریں' : 'Call for Route Booking'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

