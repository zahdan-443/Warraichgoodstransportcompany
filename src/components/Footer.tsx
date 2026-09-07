import React from 'react';
import { 
  Truck, 
  Phone, 
  Mail, 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const tFooter = TRANSLATIONS[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Top Banner inside Footer */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base lg:text-lg font-urdu">
            <Truck className="w-5 h-5 fill-current flex-shrink-0" />
            <span>{tFooter.bannerText}</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              id="footer-banner-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-900 transition-colors shadow font-mono min-h-[44px]"
              aria-label={`Call ${COMPANY_INFO.phone1}`}
            >
              {language === 'ur' ? 'کال کریں:' : 'Call:'} {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Brand Identity & Proprietor */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-0.5 flex items-center justify-center text-slate-950 font-bold flex-shrink-0 shadow-md overflow-hidden relative">
                <picture className="w-full h-full">
                  <source srcSet="./images/logo.webp" type="image/webp" />
                  <img 
                    src="./images/logo.png" 
                    alt="Warraich Goods Transport Company Official Logo" 
                    className="w-full h-full object-cover rounded-[10px]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </picture>
                <Truck className="w-6 h-6 text-slate-950 absolute pointer-events-none -z-10" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block font-urdu">
                  {language === 'ur' ? COMPANY_INFO.nameUrdu : COMPANY_INFO.nameEnglish}
                </span>
                <span className="text-[11px] sm:text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                  {COMPANY_INFO.nameEnglish}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-urdu">
              {language === 'ur' ? COMPANY_INFO.taglineUrdu : COMPANY_INFO.taglineEnglish}
            </p>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 text-xs font-urdu">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">{tFooter.proprietorLabel}:</span>
                <span className="text-white font-bold">{language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">{tFooter.ntnLabel}:</span>
                <span className="text-amber-400 font-mono font-bold">{COMPANY_INFO.ntn}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 font-urdu">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              {tFooter.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors py-1 block">{tFooter.navHome}</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors py-1 block">{tFooter.navFleet}</a>
              </li>
              <li>
                <a href="#corporate-credibility" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors py-1 block">
                  {language === 'ur' ? '🏢 کارپوریٹ اعتبار و وینڈر پروفائل' : '🏢 Corporate Credibility & Vendor Profile'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors py-1 block">{tFooter.navAbout}</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-amber-400 transition-colors py-1 block">{tFooter.navBooking}</a>
              </li>
              <li>
                <a href="#branches" className="hover:text-amber-400 transition-colors py-1 block">{tFooter.navBranches}</a>
              </li>
              <li>
                <a 
                  href={COMPANY_INFO.webAppUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold inline-flex items-center gap-1 hover:underline py-1"
                >
                  <span>{tFooter.navPortal}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Branches & Offices */}
          <div className="space-y-3 font-urdu">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              {tFooter.officesTitle}
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold block mb-0.5">{tFooter.branch1Title}:</span>
                <p className="text-slate-300">{tFooter.branch1Address}</p>
                <p className="text-slate-400 font-mono mt-1">{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</p>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold block mb-0.5">{tFooter.branch2Title}:</span>
                <p className="text-slate-300">{tFooter.branch2Address}</p>
                <p className="text-slate-400 font-mono mt-1">{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</p>
              </div>
            </div>
          </div>

          {/* Contact Direct & Email */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2 font-urdu">
              {tFooter.contactTitle}
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="flex items-center justify-between gap-2 text-slate-300 hover:text-amber-400 transition-colors p-3 bg-slate-900 rounded-xl border border-slate-800 min-h-[44px]"
                aria-label={`Call ${COMPANY_INFO.phone1}`}
              >
                <span className="font-mono font-bold text-amber-400">{COMPANY_INFO.phone1}</span>
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw2}`}
                className="flex items-center justify-between gap-2 text-slate-300 hover:text-amber-400 transition-colors p-3 bg-slate-900 rounded-xl border border-slate-800 min-h-[44px]"
                aria-label={`Call ${COMPANY_INFO.phone2}`}
              >
                <span className="font-mono">{COMPANY_INFO.phone2}</span>
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center justify-between gap-2 text-slate-300 hover:text-amber-400 transition-colors p-3 bg-slate-900 rounded-xl border border-slate-800 min-h-[44px]"
                aria-label={`Email ${COMPANY_INFO.email}`}
              >
                <span className="text-[12px] truncate">{COMPANY_INFO.email}</span>
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-urdu">
          <p className="text-slate-500 text-center sm:text-start">
            {tFooter.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 px-4 py-2.5 rounded-xl border border-slate-800 transition-colors cursor-pointer min-h-[44px]"
            aria-label="Back to top of page"
          >
            <span>{tFooter.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 flex-shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
};


