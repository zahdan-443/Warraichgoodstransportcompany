import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { language } = useLanguage();

  const isUrdu = language === 'ur';

  return (
    <>
      {/* Floating WhatsApp Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Chat Tooltip Bubble */}
        {showTooltip && (
          <div className="relative bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2 max-w-xs animate-bounce text-right">
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-full cursor-pointer"
              title={isUrdu ? 'بند کریں' : 'Dismiss'}
              aria-label={isUrdu ? 'بند کریں' : 'Dismiss'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="space-y-0.5">
              <p className="font-bold text-amber-400">
                {isUrdu ? 'فوری ریٹ معلوم کریں' : 'Instant Rate Inquiry'}
              </p>
              <p className="text-[11px] text-slate-300">
                {isUrdu ? 'واٹس ایپ پر 24/7 لائیو رابطہ' : 'Live WhatsApp Support 24/7'}
              </p>
            </div>
            <div className="w-2 h-2 bg-slate-900 border-r border-b border-slate-700 absolute -bottom-1 right-6 rotate-45"></div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
            isUrdu 
              ? 'السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے لوڈنگ کے حوالے سے رابطہ کیا ہے۔' 
              : 'Hello! I am contacting Warraich Goods Transport regarding freight truckload loading.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label={isUrdu ? 'واٹس ایپ پر رابطہ کریں' : 'Contact on WhatsApp'}
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30"></span>
          
          <MessageCircle className="w-8 h-8 fill-current text-white relative z-10" />
        </a>
      </div>

      {/* Floating Quick Call Button (Mobile Only, Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 sm:hidden">
        <a
          id="floating-call-btn"
          href={`tel:${COMPANY_INFO.phoneRaw1}`}
          className="w-13 h-13 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 active:scale-90 transition-transform"
          aria-label={isUrdu ? 'ابھی کال کریں' : 'Call Now'}
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>
    </>
  );
};

