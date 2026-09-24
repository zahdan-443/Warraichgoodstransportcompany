import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  ExternalLink,
  ShieldCheck,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onOpenBookingModal?: () => void;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
  onCloseMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isMenuOpen: externalIsOpen, 
  onToggleMenu, 
  onCloseMenu 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const isUrdu = language === 'ur';
  const tNav = TRANSLATIONS[language].nav;

  // Support both controlled from App and internal fallback
  const isMenuVisible = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleToggle = () => {
    if (onToggleMenu) {
      onToggleMenu();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };
  const handleClose = () => {
    if (onCloseMenu) onCloseMenu();
    setInternalIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: tNav.fleet, href: '#fleet' },
    { label: tNav.tracking, href: '#tracking' },
    { label: tNav.calculator, href: '#booking' },
    { label: tNav.corporate, href: '#corporate-credibility' },
    { label: tNav.serviceAreas, href: '#branches' },
    { label: isUrdu ? 'کاروباری کارڈ' : 'Business Card', href: '#business-intro' },
  ];

  const allNavLinks = [
    { label: tNav.home, href: '#hero' },
    { label: tNav.serviceAreas, href: '#branches' },
    { label: tNav.fleet, href: '#fleet' },
    { label: tNav.tracking, href: '#tracking' },
    { label: tNav.calculator, href: '#booking' },
    { label: tNav.corporate, href: '#corporate-credibility' },
    { label: tNav.cargo, href: '#cargo' },
    { label: tNav.workflow, href: '#ftl-workflow' },
    { label: tNav.safety, href: '#safety' },
    { label: isUrdu ? 'کاروباری تعارف و کارڈ' : 'Business Card & Profile', href: '#business-intro' },
    { label: tNav.reviews, href: '#faq-reviews' },
  ];

  return (
    <header 
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-200 select-none ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5' 
          : 'bg-white border-b border-slate-200 py-2.5 sm:py-3.5 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Brand Logo & Single-Line Business Name */}
          <a 
            href="#hero" 
            className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0 py-0.5" 
            aria-label="Warraich Goods Transport Company Home"
          >
            {/* Logo Emblem */}
            <div className="relative w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 p-0.5 shadow-xs group-hover:shadow-md group-hover:scale-105 transition-all flex-shrink-0 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-white rounded-[10px] p-1 flex items-center justify-center overflow-hidden">
                <img
                  src="./images/logo.png"
                  alt="Warraich Goods Transport Company Official Logo"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 absolute pointer-events-none -z-10" />
              </div>
            </div>

            {/* Business Name: STRICTLY SINGLE LINE IN ACTIVE LANGUAGE */}
            <div className="min-w-0 flex items-center">
              {isUrdu ? (
                <span className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black font-urdu text-slate-950 whitespace-nowrap leading-none tracking-tight">
                  {COMPANY_INFO.nameUrdu}
                </span>
              ) : (
                <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black font-sans uppercase tracking-tight text-slate-950 whitespace-nowrap leading-none">
                  {COMPANY_INFO.nameEnglish}
                </span>
              )}
            </div>
          </a>

          {/* Right: Integrated Header Items (NTN Badge, Navigation, Language, Portal & Menu) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            
            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation menu">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-700 hover:bg-slate-100 px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors font-urdu whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Govt Registered / FBR NTN Badge (Visible on lg+) */}
            <div className="hidden lg:inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-2xs whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="font-urdu hidden 2xl:inline">{isUrdu ? 'رجسٹرڈ ادارہ •' : 'Govt. Reg •'}</span>
              <span className="font-mono text-[11px] font-bold">NTN: {COMPANY_INFO.ntn}</span>
            </div>

            {/* Driver Web Portal Link */}
            <a
              id="header-app-link-btn"
              href={COMPANY_INFO.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white font-medium px-3 py-1.5 rounded-lg text-xs transition-all shadow-xs cursor-pointer whitespace-nowrap"
              title="Open Transport Driver Portal"
              aria-label="Open Transport Portal"
            >
              <span>Portal</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>

            {/* Language Switcher Pill (Always accessible on all screen sizes) */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all border border-slate-200 text-xs font-bold cursor-pointer shadow-xs active:scale-95 whitespace-nowrap min-h-[32px]"
              aria-label={`Switch language to ${isUrdu ? 'English' : 'Urdu'}`}
              title="Switch Language / زبان تبدیل کریں"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span className={isUrdu ? 'font-sans' : 'font-urdu'}>
                {isUrdu ? 'English' : 'اردو'}
              </span>
            </button>

            {/* Mobile Menu Toggle Button (Mobile/Tablet only) */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={handleToggle}
              className="inline-flex xl:hidden items-center justify-center p-1.5 px-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-xs transition-all active:scale-95 cursor-pointer gap-1.5 min-h-[32px]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMenuVisible}
              title={isMenuVisible ? "Close Menu" : "Open Menu"}
            >
              {isMenuVisible ? (
                <X className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <Menu className="w-4 h-4 stroke-[2.5]" />
              )}
              <span className="text-xs font-black font-urdu leading-none hidden xs:inline">
                {isUrdu ? 'مینو' : 'Menu'}
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu & Overlay */}
      {isMenuVisible && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-[56px] sm:top-[64px] bg-slate-900/60 backdrop-blur-sm z-30 xl:hidden animate-fadeIn"
            onClick={handleClose}
            aria-hidden="true"
          />
          
          <div className="absolute top-full left-0 right-0 z-40 xl:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
            {/* Govt Registration Banner inside Mobile Drawer */}
            <div className="flex items-center justify-between bg-emerald-50 text-emerald-900 border border-emerald-200 px-3.5 py-2 rounded-xl mb-3 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-urdu">{isUrdu ? 'گورنمنٹ رجسٹرڈ ادارہ' : 'Govt. Registered Entity'}</span>
              </div>
              <span className="font-mono text-[11px] font-bold">NTN: {COMPANY_INFO.ntn}</span>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 mb-4">
              {allNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="flex items-center min-h-[42px] text-slate-800 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-urdu font-semibold transition-colors active:bg-blue-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="#business-intro"
                onClick={handleClose}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-center text-sm shadow-sm font-urdu"
              >
                <span>{isUrdu ? 'کاروباری تعارف و مکمل کارڈ دیکھیں' : 'View Business Card & Profile'}</span>
              </a>

              <a
                href={COMPANY_INFO.webAppUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl text-center text-sm"
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
