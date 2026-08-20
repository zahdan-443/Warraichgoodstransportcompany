import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating WhatsApp Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Chat Tooltip Bubble */}
        {showTooltip && (
          <div className="relative bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2 max-w-xs animate-bounce text-right">
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-full"
              title="بند کریں"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="space-y-0.5">
              <p className="font-bold text-amber-400 font-urdu-clean">فوری ریٹ معلوم کریں</p>
              <p className="text-[11px] text-slate-300">واٹس ایپ پر 24/7 لائیو رابطہ</p>
            </div>
            <div className="w-2 h-2 bg-slate-900 border-r border-b border-slate-700 absolute -bottom-1 right-6 rotate-45"></div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے لوڈنگ کے حوالے سے رابطہ کیا ہے۔')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Contact on WhatsApp"
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
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>
    </>
  );
};
