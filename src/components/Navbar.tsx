import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  PhoneCall, 
  Menu, 
  X, 
  ExternalLink, 
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const tNav = TRANSLATIONS[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: tNav.fleet, href: '#fleet' },
    { label: tNav.corporate, href: '#corporate-credibility' },
    { label: tNav.cargo, href: '#cargo' },
    { label: tNav.workflow, href: '#ftl-workflow' },
    { label: tNav.calculator, href: '#booking' },
    { label: tNav.branches, href: '#branches' },
  ];

  const allNavLinks = [
    { label: tNav.home, href: '#hero' },
    { label: tNav.fleet, href: '#fleet' },
    { label: tNav.corporate, href: '#corporate-credibility' },
    { label: tNav.cargo, href: '#cargo' },
    { label: tNav.workflow, href: '#ftl-workflow' },
    { label: tNav.safety, href: '#safety' },
    { label: tNav.calculator, href: '#booking' },
    { label: tNav.about, href: '#about' },
    { label: tNav.branches, href: '#branches' },
    { label: tNav.reviews, href: '#faq-reviews' },
  ];

  return (
    <header 
      id="main-navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-2.5' 
          : 'bg-slate-950 border-b border-slate-800 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-amber-500/40 p-0.5 shadow-md group-hover:border-amber-400 transition-colors flex-shrink-0 flex items-center justify-center overflow-hidden">
              <picture>
                <source srcSet="./images/logo.webp" type="image/webp" />
                <img 
                  src="./images/logo.png" 
                  alt="Warraich Goods Transport Company Official Fleet Logo" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    const currentSrc = e.currentTarget.getAttribute('src');
                    if (currentSrc === './images/logo.png') {
                      e.currentTarget.src = '/images/logo.png';
                    }
                  }}
                />
              </picture>
              <Truck className="w-6 h-6 text-slate-950 absolute pointer-events-none -z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold text-white tracking-wide font-urdu">
                  {language === 'ur' ? COMPANY_INFO.nameUrdu : COMPANY_INFO.nameEnglish}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-amber-400/90 font-semibold tracking-wider uppercase font-mono">
                {language === 'ur' ? COMPANY_INFO.nameEnglish : COMPANY_INFO.nameUrdu}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 hover:bg-slate-900 px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors font-urdu"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Direct Call, Portal & Language Toggle */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-400/40 text-xs font-semibold transition-colors cursor-pointer"
              aria-label={`Switch to ${language === 'ur' ? 'English' : 'Urdu'}`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'ur' ? 'English' : 'اردو'}</span>
            </button>

            <a
              id="header-instant-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-xl shadow-md text-xs xl:text-sm transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
              aria-label={`Call ${COMPANY_INFO.phone1}`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{tNav.callNow}</span>
            </a>

            <a
              id="header-app-link-btn"
              href={COMPANY_INFO.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-blue-700 hover:bg-blue-600 text-white font-medium px-2.5 py-1.5 rounded-xl border border-blue-500/30 text-xs xl:text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap"
              title="Open Transport Driver Portal"
              aria-label="Open Transport Portal"
            >
              <span>Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-lg bg-slate-800 text-amber-300 border border-slate-700 text-xs font-semibold"
              aria-label="Toggle language"
            >
              {language === 'ur' ? 'EN' : 'اردو'}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu & Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-[110px] bg-slate-950/70 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          <div className="relative z-40 lg:hidden bg-slate-900 border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 animate-fadeIn max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="space-y-1 mb-4">
              {allNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center min-h-[44px] text-slate-200 hover:text-amber-400 hover:bg-slate-800 px-4 py-2 rounded-xl text-sm font-urdu transition-colors active:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-2.5 rounded-xl text-center text-sm border border-amber-400/30"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>{language === 'ur' ? 'Switch to English' : 'اردو میں دیکھیں'}</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-center text-sm shadow-md"
                aria-label={`Call ${COMPANY_INFO.phone1}`}
              >
                <PhoneCall className="w-4 h-4" />
                <span>{tNav.callNow} ({COMPANY_INFO.phone1})</span>
              </a>

              <a
                href={COMPANY_INFO.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-medium py-2.5 rounded-xl text-center text-sm"
                aria-label="Open Driver Web App Portal"
              >
                <span>Driver Web Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

