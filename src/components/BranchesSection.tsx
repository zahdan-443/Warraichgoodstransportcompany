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
    <section id="branches" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-950 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{tBranches.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu">
            {tBranches.title}
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base font-urdu">
            {tBranches.subtitle}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {BRANCHES_DATA.map((branch) => {
            const branchName = language === 'ur' ? branch.nameUrdu : branch.nameEnglish;
            const branchAddress = language === 'ur' ? branch.addressUrdu : branch.addressEnglish;

            return (
              <div
                key={branch.id}
                id={`branch-card-${branch.id}`}
                className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 sm:p-7 shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  {/* Badge & City */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-semibold text-slate-400 font-mono">
                      {branch.cityEnglish}
                    </span>
                    {branch.isHeadOffice ? (
                      <span className="bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-0.5 rounded shadow-sm font-urdu">
                        {language === 'ur' ? 'ہیڈ آفس (مین اڈا)' : 'Head Office'}
                      </span>
                    ) : (
                      <span className="bg-slate-900 text-slate-300 border border-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm font-urdu">
                        {language === 'ur' ? 'سب برانچ' : 'Sub Branch'}
                      </span>
                    )}
                  </div>

                  {/* Branch Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-urdu mb-1">
                    {branchName}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-4 font-urdu">
                    {branch.nameEnglish}
                  </p>

                  {/* Address Box */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 mb-4 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] text-slate-400 block font-urdu">{tBranches.addressLabel}</span>
                        <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed font-urdu">
                          {branchAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300 font-urdu">
                      <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{tBranches.timingLabel}: <strong className="text-white">{tBranches.timingValue}</strong></span>
                    </div>
                  </div>

                  {/* Contact Numbers Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 sm:mb-5">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw1}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500/50 hover:text-white transition-colors min-h-[44px]"
                      aria-label={`Primary contact ${branch.phone1}`}
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="text-xs font-bold font-mono">{branch.phone1}</span>
                      </div>
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-urdu">{tBranches.phonePrimary}</span>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw2}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500/50 hover:text-white transition-colors min-h-[44px]"
                      aria-label={`Secondary contact ${branch.phone2}`}
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="text-xs font-bold font-mono">{branch.phone2}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded font-urdu">{tBranches.phoneSecondary}</span>
                    </a>
                  </div>

                </div>

                {/* Google Maps Actions */}
                <div className="pt-2 border-t border-slate-800">
                  <a
                    id={`open-map-${branch.id}-btn`}
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-amber-400 font-bold py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-all min-h-[44px] font-urdu cursor-pointer"
                    aria-label={`Open Google Maps location for ${branch.nameEnglish}`}
                  >
                    <Navigation className="w-4 h-4 flex-shrink-0" />
                    <span>{tBranches.btnMap}</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Nationwide Route Coverage Banner */}
        <div className="mt-8 sm:mt-12 bg-slate-950 text-white rounded-xl p-5 sm:p-7 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
            <div className="md:col-span-2 space-y-1 sm:space-y-1.5">
              <h4 className="text-lg sm:text-xl font-bold text-amber-400 font-urdu">
                {language === 'ur' ? 'پنجاب و سندھ تا خیبر پختونخوا اور بلوچستان' : 'Nationwide Full Truckload Network Across Pakistan'}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-urdu">
                {language === 'ur' 
                  ? 'ہم سمندری اور کمالیہ سے فیصل آباد، لاہور، کراچی، راولپنڈی، اسلام آباد، ملتان، پشاور، کوئٹہ، سکھر، حیدرآباد، گوجرانوالہ، سیالکوٹ سمیت پاکستان کے ہر قصبے اور صنعتی زون میں گاڑیاں لوڈ کرتے ہیں۔'
                  : 'Daily dispatching from Samundri & Kamalia to Karachi Port, Lahore, Faisalabad, Rawalpindi, Islamabad, Multan, Peshawar, Quetta, Sukkur, and all nationwide industrial hubs.'}
              </p>
            </div>
            <div className="text-center md:text-end">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all shadow min-h-[44px] font-urdu"
                aria-label={`Call for route booking ${COMPANY_INFO.phone1}`}
              >
                <Phone className="w-4 h-4 fill-current flex-shrink-0" />
                <span>{language === 'ur' ? 'روٹ بکنگ کے لیے کال کریں' : 'Call for Route Booking'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

