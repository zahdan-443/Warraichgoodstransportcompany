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
    <section id="branches" className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
            <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>{tBranches.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {tBranches.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
            {tBranches.subtitle}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {BRANCHES_DATA.map((branch) => {
            const branchName = language === 'ur' ? branch.nameUrdu : branch.nameEnglish;
            const branchAddress = language === 'ur' ? branch.addressUrdu : branch.addressEnglish;
            const isHead = branch.isHeadOffice;

            return (
              <div
                key={branch.id}
                id={`branch-card-${branch.id}`}
                className={`bg-white border-2 ${isHead ? 'border-blue-200 hover:border-blue-400' : 'border-emerald-200 hover:border-emerald-400'} rounded-2xl p-5 sm:p-7 shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
              >
                <div>
                  {/* Badge & City */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-xs font-bold font-mono ${isHead ? 'text-blue-700' : 'text-emerald-700'}`}>
                      {branch.cityEnglish}
                    </span>
                    {branch.isHeadOffice ? (
                      <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-lg shadow-sm font-urdu">
                        {language === 'ur' ? 'ہیڈ آفس (مین اڈا)' : 'Head Office'}
                      </span>
                    ) : (
                      <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-3 py-1 rounded-lg shadow-sm font-urdu">
                        {language === 'ur' ? 'سب برانچ' : 'Sub Branch'}
                      </span>
                    )}
                  </div>

                  {/* Branch Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-urdu mb-1">
                    {branchName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4 font-urdu">
                    {branch.nameEnglish}
                  </p>

                  {/* Address Box */}
                  <div className={`${isHead ? 'bg-blue-50/60 border-blue-200' : 'bg-emerald-50/60 border-emerald-200'} p-4 rounded-xl border mb-4 space-y-2.5`}>
                    <div className="flex items-start gap-2.5">
                      <MapPin className={`w-4 h-4 ${isHead ? 'text-blue-600' : 'text-emerald-600'} flex-shrink-0 mt-0.5`} />
                      <div>
                        <span className="text-[11px] text-slate-500 block font-urdu font-semibold">{tBranches.addressLabel}</span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed font-urdu">
                          {branchAddress}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 pt-2 border-t ${isHead ? 'border-blue-200' : 'border-emerald-200'} text-xs text-slate-600 font-urdu`}>
                      <Clock className={`w-3.5 h-3.5 ${isHead ? 'text-blue-600' : 'text-emerald-600'} flex-shrink-0`} />
                      <span>{tBranches.timingLabel}: <strong className="text-slate-900">{tBranches.timingValue}</strong></span>
                    </div>
                  </div>

                  {/* Contact Numbers Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 sm:mb-5">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw1}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/40 transition-colors min-h-[44px] shadow-sm"
                      aria-label={`Primary contact ${branch.phone1}`}
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-bold font-mono text-slate-900">{branch.phone1}</span>
                      </div>
                      <span className="text-[10px] text-blue-700 bg-blue-100 font-bold px-1.5 py-0.5 rounded font-urdu">{tBranches.phonePrimary}</span>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw2}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/40 transition-colors min-h-[44px] shadow-sm"
                      aria-label={`Secondary contact ${branch.phone2}`}
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs font-bold font-mono text-slate-900">{branch.phone2}</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 font-bold px-1.5 py-0.5 rounded font-urdu">{tBranches.phoneSecondary}</span>
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
                    className={`w-full flex items-center justify-center gap-2 ${isHead ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md min-h-[44px] font-urdu cursor-pointer`}
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
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-slate-900 rounded-2xl p-5 sm:p-7 border border-blue-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
            <div className="md:col-span-2 space-y-1 sm:space-y-1.5">
              <h4 className="text-lg sm:text-xl font-bold text-blue-950 font-urdu">
                {language === 'ur' ? 'پنجاب و سندھ تا خیبر پختونخوا اور بلوچستان' : 'Nationwide Full Truckload Network Across Pakistan'}
              </h4>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-urdu">
                {language === 'ur' 
                  ? 'ہم سمندری اور کمالیہ سے فیصل آباد، لاہور، کراچی، راولپنڈی، اسلام آباد، ملتان، پشاور، کوئٹہ، سکھر، حیدرآباد، گوجرانوالہ، سیالکوٹ سمیت پاکستان کے ہر قصبے اور صنعتی زون میں گاڑیاں لوڈ کرتے ہیں۔'
                  : 'Daily dispatching from Samundri & Kamalia to Karachi Port, Lahore, Faisalabad, Rawalpindi, Islamabad, Multan, Peshawar, Quetta, Sukkur, and all nationwide industrial hubs.'}
              </p>
            </div>
            <div className="text-center md:text-end">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md min-h-[44px] font-urdu"
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

