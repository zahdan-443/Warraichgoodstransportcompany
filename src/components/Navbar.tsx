import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Truck, 
  ExternalLink,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';

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
  const [underline, setUnderline] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });
  const navRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isUrdu = language === 'ur';

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
    const updateScrollState = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (progressBarRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
        progressBarRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      }
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  useEffect(() => {
    const updateUnderline = () => {
      const navEl = navRef.current;
      if (!navEl) return;
      const activeEl = navEl.querySelector<HTMLElement>('[data-nav-active="true"]');
      if (activeEl) {
        setUnderline({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          visible: true,
        });
      } else {
        setUnderline((prev) => ({ ...prev, visible: false }));
      }
    };
    updateUnderline();
    window.addEventListener('resize', updateUnderline, { passive: true });
    return () => window.removeEventListener('resize', updateUnderline);
  }, [location.pathname, language]);

  const navLinks = isUrdu ? [
    { label: 'مرکزی صفحہ', to: '/' },
    { label: 'ہماری گاڑیاں', to: '/fleet' },
    { label: 'سروسز و ساکھ', to: '/services' },
    { label: 'کرایہ و بکنگ', to: '/booking' },
    { label: 'عام سوالات', to: '/faq' },
    { label: 'کاروباری تعارف', to: '/about' },
  ] : [
    { label: 'Home', to: '/' },
    { label: 'Fleet', to: '/fleet' },
    { label: 'Services', to: '/services' },
    { label: 'Rates & Booking', to: '/booking' },
    { label: 'FAQs', to: '/faq' },
    { label: 'About Us', to: '/about' },
  ];

  const allNavLinks = isUrdu ? [
    { label: 'مرکزی صفحہ', to: '/' },
    { label: 'ہماری گاڑیاں (فلیٹ)', to: '/fleet' },
    { label: 'سروسز و حفاظتی ضمانتیں', to: '/services' },
    { label: 'آن لائن کرایہ و بکنگ', to: '/booking' },
    { label: 'عام سوالات و جائزے', to: '/faq' },
    { label: 'کاروباری تعارف و کوائف', to: '/about' },
  ] : [
    { label: 'Home', to: '/' },
    { label: 'Commercial Fleet', to: '/fleet' },
    { label: 'Services & Guarantees', to: '/services' },
    { label: 'Rate Calculator & Booking', to: '/booking' },
    { label: 'FAQs & Reviews', to: '/faq' },
    { label: 'Business Profile & Credentials', to: '/about' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' || location.pathname === '';
    return location.pathname.startsWith(to);
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 select-none bg-white/95 backdrop-blur-md border-b border-slate-200 ${
        scrolled ? 'shadow-md' : 'shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-2 transition-[height] duration-200 ${scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'}`}>
          
          {/* Left: Brand Logo & Single-Line Business Name */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group flex-shrink min-w-0 py-1" 
            aria-label="Warraich Goods Transport Company Home"
            onClick={handleClose}
          >
            {/* Logo Emblem (compact 36px on mobile, 42px on desktop) */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500 p-0.5 shadow-xs flex-shrink-0 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-white rounded-md p-0.5 flex items-center justify-center overflow-hidden">
                <img
                  src={getAssetUrl('images/logo.png')}
                  alt="Warraich Goods Transport Company Official Logo"
                  width={40}
                  height={40}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 absolute pointer-events-none -z-10" />
              </div>
            </div>

            {/* Business Name: Two Lines */}
            <div className="min-w-0 flex flex-col justify-center">
              {isUrdu ? (
                <>
                  <span className="text-base sm:text-xl font-black font-urdu text-slate-950 leading-tight">
                    وڑائچ گڈز
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold font-urdu text-amber-700 leading-none mt-0.5">
                    ٹرانسپورٹ کمپنی
                  </span>
                </>
              ) : (
                <>
                  <span className="text-sm sm:text-base lg:text-lg font-black font-sans uppercase tracking-tight text-slate-950 leading-tight">
                    Warraich Goods
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold font-sans uppercase tracking-wider text-amber-700 leading-none mt-0.5">
                    Transport Company
                  </span>
                </>
              )}
            </div>
          </Link>

          {/* Right: Desktop Navigation vs Mobile Hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            
            {/* Desktop Navigation Links with Sliding Active Underline */}
            <nav ref={navRef} className="hidden xl:flex items-center gap-1 relative py-1" aria-label="Main navigation menu">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-nav-active={active ? 'true' : undefined}
                    className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${isUrdu ? 'font-urdu' : 'font-sans'} whitespace-nowrap ${
                      active 
                        ? 'text-blue-700 bg-blue-50/80 font-bold' 
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <span
                aria-hidden="true"
                className="nav-active-underline pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-amber-500"
                style={{
                  transform: `translate3d(${underline.left}px, 0, 0)`,
                  width: `${underline.width}px`,
                  opacity: underline.visible ? 1 : 0,
                }}
              />
            </nav>

            {/* Desktop Driver Web Portal Link */}
            <a
              id="header-app-link-btn"
              href={COMPANY_INFO.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white font-medium px-3 py-1.5 rounded-lg text-xs transition-colors shadow-xs cursor-pointer whitespace-nowrap"
              title={isUrdu ? 'ڈرائیور پورٹل کھولیں' : 'Open Transport Driver Portal'}
              aria-label="Open Transport Portal"
            >
              <span>{isUrdu ? 'ڈرائیور پورٹل' : 'Portal'}</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>

            {/* Desktop Language Switcher */}
            <button
              id="lang-toggle-btn-desktop"
              onClick={toggleLanguage}
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition-colors border border-slate-200 text-xs font-bold cursor-pointer shadow-xs active:scale-95 whitespace-nowrap min-h-[34px]"
              aria-label={`Switch language to ${isUrdu ? 'English' : 'Urdu'}`}
              title={isUrdu ? 'Switch to English' : 'اردو میں دیکھیں'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span className={isUrdu ? 'font-sans font-semibold' : 'font-urdu font-bold'}>
                {isUrdu ? 'English' : 'اردو'}
              </span>
            </button>

            {/* Mobile Hamburger Toggle Button (Exclusively visible on mobile) */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={handleToggle}
              className="inline-flex xl:hidden items-center justify-center w-10 h-10 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-xs transition-colors active:scale-95 cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMenuVisible}
              title={isMenuVisible ? "Close Menu" : "Open Menu"}
            >
              {isMenuVisible ? (
                <X className="w-5 h-5 stroke-[2.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.5]" />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu & Overlay */}
      {isMenuVisible && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-14 sm:top-16 bg-slate-900/60 backdrop-blur-sm z-30 xl:hidden animate-fadeIn"
            onClick={handleClose}
            aria-hidden="true"
          />
          
          <div className="mobile-drawer-enter absolute top-full left-0 right-0 z-40 xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-4 pb-6 max-h-[calc(100vh-64px)] overflow-y-auto">
            
            {/* Top Row: Language Toggle inside Mobile Drawer */}
            <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                {isUrdu ? 'زبان منتخب کریں:' : 'Select Language:'}
              </span>
              <button
                id="lang-toggle-btn-mobile"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className={isUrdu ? 'font-sans' : 'font-urdu'}>
                  {isUrdu ? 'Switch to English' : 'اردو میں دیکھیں'}
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 mb-4">
              {allNavLinks.map((link, idx) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleClose}
                    style={{ animationDelay: `${idx * 35}ms` }}
                    className={`mobile-item-stagger flex items-center min-h-[44px] px-3.5 py-2.5 rounded-lg text-sm ${isUrdu ? 'font-urdu' : 'font-sans'} font-semibold transition-colors ${
                      active
                        ? 'text-blue-700 bg-blue-50 font-bold border border-blue-200'
                        : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.webAppUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-center text-xs transition"
                aria-label="Open Driver Web App Portal"
              >
                <span>{isUrdu ? 'ڈرائیور ویب پورٹل' : 'Driver Web Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </>
      )}

      {/* Thin Amber Scroll-Progress Bar Under Navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-transparent pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-amber-500"
          style={{
            transform: 'scaleX(0)',
            transformOrigin: isUrdu ? 'right center' : 'left center',
          }}
        />
      </div>
    </header>
  );
};

