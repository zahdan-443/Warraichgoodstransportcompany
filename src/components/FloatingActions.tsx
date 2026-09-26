import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, Calculator, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isUrdu = language === 'ur';

  const handleBookingAction = () => {
    if (location.pathname === '/booking') {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/booking');
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    isUrdu 
      ? 'السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے لوڈنگ اور مکمل گاڑی (FTL) بکنگ کے حوالے سے رابطہ کیا ہے۔' 
      : 'Hello! I am contacting Warraich Goods Transport regarding freight truckload loading and rates.'
  )}`;

  return (
    <>
      {/* 1. MOBILE-ONLY BOTTOM FLOATING DOCK (Clean, full touch-width, non-intrusive) */}
      <div 
        id="mobile-action-dock" 
        className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 safe-area-pb shadow-md"
      >
        <div className="grid grid-cols-3 gap-2 items-center max-w-md mx-auto">
          {/* Quick Call */}
          <a
            id="mobile-dock-call-btn"
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-amber-500 active:bg-amber-400 text-slate-950 font-bold transition-transform active:scale-95 shadow-sm"
            aria-label={isUrdu ? 'کال کریں' : 'Call'}
          >
            <Phone className="w-5 h-5 fill-current mb-0.5" />
            <span className="text-xs font-urdu font-bold leading-normal">
              {isUrdu ? 'فوری کال' : 'Call Now'}
            </span>
          </a>

          {/* Quick WhatsApp */}
          <a
            id="mobile-dock-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-blue-600 active:bg-blue-500 text-white font-bold transition-transform active:scale-95 shadow-sm min-h-[48px]"
            aria-label={isUrdu ? 'واٹس ایپ' : 'WhatsApp'}
          >
            <MessageCircle className="w-5 h-5 fill-current mb-0.5" />
            <span className="text-xs font-urdu font-bold leading-normal">
              {isUrdu ? 'واٹس ایپ' : 'WhatsApp'}
            </span>
          </a>

          {/* Rate / Booking Navigation */}
          <button
            id="mobile-dock-booking-btn"
            onClick={handleBookingAction}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-100 active:bg-slate-200 text-slate-800 font-bold border border-slate-200 transition-transform active:scale-95 shadow-sm cursor-pointer min-h-[48px]"
            aria-label={isUrdu ? 'کرایہ معلوم کریں' : 'Calculate Rate'}
          >
            <Calculator className="w-5 h-5 text-slate-700 mb-0.5" />
            <span className="text-xs font-urdu font-bold leading-normal">
              {isUrdu ? 'کرایہ دیکھیں' : 'Rate Calc'}
            </span>
          </button>
        </div>
      </div>

      {/* 2. DESKTOP FLOATING WHATSAPP BUTTON (Hidden on mobile to prevent clutter) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2">
        {/* Chat Tooltip Bubble */}
        {showTooltip && (
          <div className="relative bg-white text-slate-900 text-xs py-2.5 px-4 rounded-lg shadow-md border border-slate-200 flex items-center gap-2 max-w-xs text-right">
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full cursor-pointer"
              title={isUrdu ? 'بند کریں' : 'Dismiss'}
              aria-label={isUrdu ? 'بند کریں' : 'Dismiss'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="space-y-0.5">
              <p className="font-extrabold text-blue-700 font-urdu">
                {isUrdu ? 'فوری ریٹ معلوم کریں' : 'Instant Rate Inquiry'}
              </p>
              <p className="text-[11px] text-slate-600 font-urdu">
                {isUrdu ? 'واٹس ایپ پر 24/7 لائیو رابطہ' : 'Live WhatsApp Support 24/7'}
              </p>
            </div>
            <div className="w-2.5 h-2.5 bg-white border-r border-b border-slate-200 absolute -bottom-1.5 right-6 rotate-45"></div>
          </div>
        )}

        {/* WhatsApp Floating Circle */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 group"
          aria-label={isUrdu ? 'واٹس ایپ پر رابطہ کریں' : 'Contact on WhatsApp'}
        >
          <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-25"></span>
          <MessageCircle className="w-8 h-8 fill-current text-white relative z-10" />
        </a>
      </div>
    </>
  );
};

