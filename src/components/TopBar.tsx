import React from 'react';
import { Mail, MapPin, ShieldCheck, Globe, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface TopBarProps {
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ isMenuOpen, onToggleMenu }) => {
  const { language, toggleLanguage } = useLanguage();
  const isUrdu = language === 'ur';
  const t = TRANSLATIONS[language].topBar;

  return (
    <div id="top-utility-bar" className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-3">
          
          {/* Left: NTN and Govt Registration Verification */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="inline-flex items-center gap-1.5 bg-slate-800 text-emerald-400 border border-slate-700/80 px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="font-urdu">{isUrdu ? 'گورنمنٹ رجسٹرڈ ادارہ' : 'Govt. Registered Entity'}</span>
              <span className="text-slate-600 hidden xs:inline">•</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-slate-300 hidden xs:inline">NTN: {COMPANY_INFO.ntn}</span>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="font-urdu">{t.mainBranches}</span>
            </div>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors text-xs"
              aria-label="Send email to Warraich Goods"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Right Side: Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Language Switcher Button */}
            <button
              id="lang-toggle-topbar"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-amber-300 px-2.5 sm:px-3 py-1 rounded-md transition-all border border-slate-700 text-xs font-bold cursor-pointer shadow-xs active:scale-95"
              aria-label={`Switch language to ${isUrdu ? 'English' : 'Urdu'}`}
              title="Switch Language / زبان تبدیل کریں"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className={isUrdu ? 'font-sans' : 'font-urdu'}>
                {isUrdu ? 'English' : 'اردو'}
              </span>
            </button>

            {/* Compact Side Menu Toggle Button (Mobile/Tablet) */}
            {onToggleMenu && (
              <button
                id="topbar-side-menu-btn"
                onClick={onToggleMenu}
                className="inline-flex lg:hidden items-center justify-center p-1 sm:p-1.5 px-2.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-xs transition-all active:scale-95 cursor-pointer gap-1.5 min-h-[30px]"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isMenuOpen}
                title={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMenuOpen ? (
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                ) : (
                  <Menu className="w-3.5 h-3.5 stroke-[2.5]" />
                )}
                <span className="text-xs font-black font-urdu leading-none">
                  {isUrdu ? 'مینو' : 'Menu'}
                </span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
