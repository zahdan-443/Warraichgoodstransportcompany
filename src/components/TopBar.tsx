import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const TopBar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].topBar;

  return (
    <div id="top-utility-bar" className="bg-slate-50 text-slate-700 text-xs border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-2">
          
          {/* NTN and Registration Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="text-slate-500 font-medium hidden xs:inline">{t.registeredNtn}</span>
              <span className="text-slate-500 font-medium xs:hidden">NTN:</span>
              <span className="text-blue-700 font-bold tracking-wider font-mono">{COMPANY_INFO.ntn}</span>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.mainBranches}</span>
            </div>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Send email to Warraich Goods"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Quick Call Phone Numbers & Language Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="text-slate-500 font-medium hidden md:inline">{t.helpline}</span>
            
            {/* Primary Phone */}
            <a
              id="call-btn-top-1"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-2.5 py-1 rounded-lg transition-all shadow-sm active:scale-95 text-[11px] sm:text-xs"
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
              className="hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 font-medium px-2.5 py-1 rounded-lg transition-all border border-slate-200 hover:border-blue-400 active:scale-95 text-xs shadow-sm"
              title={t.callSecond}
              aria-label={`Call ${COMPANY_INFO.phone2}`}
            >
              <Phone className="w-3 h-3 text-emerald-600" />
              <span className="font-mono tracking-tight font-bold">{COMPANY_INFO.phone2}</span>
            </a>

            {/* Language Switcher Pill */}
            <button
              id="lang-toggle-topbar"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg transition-colors border border-slate-200 text-[11px] sm:text-xs font-bold cursor-pointer shadow-sm"
              aria-label={`Switch language to ${language === 'ur' ? 'English' : 'Urdu'}`}
              title="Switch Language / زبان تبدیل کریں"
            >
              <Globe className="w-3 h-3 text-blue-600 flex-shrink-0" />
              <span>{language === 'ur' ? 'English' : 'اردو'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};


