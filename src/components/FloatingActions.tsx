import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, Calculator, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const prefilledText = isUrdu
    ? 'السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے لوڈنگ، مکمل گاڑی (FTL) بکنگ اور کرایہ معلوم کرنا ہے۔'
    : 'Hello Warraich Goods! I would like to inquire about FTL truck booking, rates, and dispatch.';

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(prefilledText)}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2">
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label={isUrdu ? 'واٹس ایپ پر فوری رابطہ کریں' : 'Chat on WhatsApp'}
        title={isUrdu ? 'واٹس ایپ پر فوری رابطہ کریں' : 'Chat on WhatsApp'}
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white relative z-10" />
      </a>
    </aside>
  );
};


