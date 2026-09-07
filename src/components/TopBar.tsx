import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const TopBar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].topBar;

  return (
    <div id="top-utility-bar" className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-2">
          
          {/* NTN and Registration Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-900 px-2 sm:px-2.5 py-1 rounded-md border border-slate-800 text-[11px] sm:text-xs">
              <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-slate-400 font-medium hidden xs:inline">{t.registeredNtn}</span>
              <span className="text-slate-400 font-medium xs:hidden">NTN:</span>
              <span className="text-amber-400 font-bold tracking-wider font-mono">{COMPANY_INFO.ntn}</span>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.mainBranches}</span>
            </div>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              aria-label="Send email to Warraich Goods"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Quick Call Phone Numbers & Language Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="text-slate-400 font-medium hidden md:inline">{t.helpline}</span>
            
            {/* Primary Phone */}
            <a
              id="call-btn-top-1"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2 sm:px-2.5 py-1 rounded-md transition-all shadow-sm active:scale-95 text-[11px] sm:text-xs"
              title={t.callFirst}
              aria-label={`Call ${COMPANY_INFO.phone1}`}
            >
              <Phone className="w-3 h-3 fill-current flex-shrink-0" />
              <span className="font-mono tracking-tight font-black">{COMPANY_INFO.phone1}</span>
            </a>

            {/* Secondary Phone (hidden on small mobile to prevent wrapping) */}
            <a
              id="call-btn-top-2"
              href={`tel:${COMPANY_INFO.phoneRaw2}`}
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium px-2.5 py-1 rounded-md transition-all border border-slate-700 hover:border-amber-400/50 active:scale-95 text-xs"
              title={t.callSecond}
              aria-label={`Call ${COMPANY_INFO.phone2}`}
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-mono tracking-tight">{COMPANY_INFO.phone2}</span>
            </a>

            {/* Language Switcher Pill */}
            <button
              id="lang-toggle-topbar"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-amber-300 px-2 sm:px-2.5 py-1 rounded-md transition-colors border border-amber-400/30 text-[11px] sm:text-xs font-semibold cursor-pointer"
              aria-label={`Switch language to ${language === 'ur' ? 'English' : 'Urdu'}`}
              title="Switch Language / زبان تبدیل کریں"
            >
              <Globe className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <span>{language === 'ur' ? 'English' : 'اردو'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};


