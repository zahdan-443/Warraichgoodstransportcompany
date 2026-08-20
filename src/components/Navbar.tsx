import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  PhoneCall, 
  Menu, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  Calculator,
  Info,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { label: 'ہوم', href: '#hero' },
    { label: 'گاڑیاں (FTL)', href: '#fleet' },
    { label: 'صنعتی و زرعی مال', href: '#cargo' },
    { label: 'FTL طریقہ کار', href: '#ftl-workflow' },
    { label: 'کارگو حفاظت', href: '#safety' },
    { label: 'کرایہ و بکنگ', href: '#booking' },
    { label: 'شاخیں (برانچز)', href: '#branches' },
    { label: 'تعارف و سوالات', href: '#faq-reviews' },
  ];

  return (
    <header 
      id="main-navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-2.5' 
          : 'bg-slate-900 border-b border-slate-800/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group text-right">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-0.5 shadow-md group-hover:scale-105 transition-transform flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img 
                src="./assets/images/logo.png" 
                alt="Warraich Goods Transport Company" 
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  const currentSrc = e.currentTarget.getAttribute('src');
                  if (currentSrc === './assets/images/logo.png') {
                    e.currentTarget.src = '/assets/images/logo.png';
                  } else if (currentSrc === '/assets/images/logo.png') {
                    e.currentTarget.src = './images/logo.png';
                  } else {
                    e.currentTarget.style.display = 'none';
                  }
                }}
              />
              <Truck className="w-6 h-6 text-slate-950 absolute pointer-events-none -z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide font-urdu">
                  {COMPANY_INFO.nameUrdu}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-amber-400 font-semibold tracking-wider uppercase font-mono">
                {COMPANY_INFO.nameEnglish}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-200 hover:text-amber-400 hover:bg-slate-800/70 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 font-urdu"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Direct Call & App */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-instant-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-amber-500/20 text-sm transition-all transform active:scale-95 font-urdu cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>فوری FTL کال</span>
            </a>

            <a
              id="header-app-link-btn"
              href={COMPANY_INFO.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white font-medium px-3.5 py-2 rounded-xl border border-blue-500/30 text-sm transition-all shadow-sm font-urdu cursor-pointer"
              title="آن لائن ٹرانسپورٹ ایپ کھولیں"
            >
              <span>ٹرانسپورٹ پورٹل</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="space-y-1.5 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-right text-slate-200 hover:text-amber-400 hover:bg-slate-800 px-4 py-2.5 rounded-xl text-base font-urdu transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-center text-sm font-urdu"
            >
              <PhoneCall className="w-4 h-4" />
              <span>فوری کال کریں ({COMPANY_INFO.phone1})</span>
            </a>

            <a
              href={COMPANY_INFO.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-medium py-2.5 rounded-xl text-center text-sm font-urdu"
            >
              <span>آن لائن ٹرانسپورٹ پورٹل</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
