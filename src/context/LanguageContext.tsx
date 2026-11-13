import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TRANSLATIONS } from '../data/translations';

export type Language = 'ur' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  translations: typeof TRANSLATIONS;
  t: typeof TRANSLATIONS['ur'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Read from localStorage or URL parameter
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'ur') {
        return urlLang;
      }
      const savedLang = localStorage.getItem('warraich_goods_lang');
      if (savedLang === 'en' || savedLang === 'ur') {
        return savedLang;
      }
    }
    return 'en'; // Default to English as requested
  });

  const isRtl = language === 'ur';

  const getRouteEnglishTitle = () => {
    if (typeof window === 'undefined') return 'Warraich Goods | Transport & Shifting';
    const rawPath = window.location.pathname
      .replace(/^\/Warraichgoodstransportcompany/i, '')
      .replace(/\/+$/, '') || '/';
    switch (rawPath) {
      case '/fleet':
        return 'Mazda, Shahzore & Truck | Warraich Goods';
      case '/services':
        return 'Goods Transport & Shifting Services | Warraich Goods';
      case '/booking':
        return 'Truck Booking & Rate Inquiry | Warraich Goods';
      case '/faq':
        return 'Frequently Asked Questions | Warraich Goods';
      case '/about':
        return 'About Us & Contact Details | Warraich Goods';
      case '/verify':
        return 'Bilty Verification | Warraich Goods';
      default:
        return 'Warraich Goods | Transport & Shifting';
    }
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('warraich_goods_lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ur' ? 'rtl' : 'ltr';

      // Update URL query parameter without full reload
      const url = new URL(window.location.href);
      if (newLang === 'ur') {
        url.searchParams.set('lang', 'ur');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState({}, '', url.toString());

      // Update document title and meta description dynamically
      if (newLang === 'en') {
        document.title = getRouteEnglishTitle();
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', 'Warraich Goods Transport Company offers home shifting, office relocation, and goods transport across Pakistan. Call 0300-5370443 for truck booking.');
        }
      } else {
        document.title = 'وڑائچ گڈز ٹرانسپورٹ کمپنی | Warraich Goods';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', 'ہم پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ کی خدمات فراہم کرتے ہیں۔ مناسب ریٹ اور بہترین سروس ہماری پہچان ہے۔ فون: 0300-5370443');
        }
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ur' ? 'en' : 'ur');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';

      if (language === 'en') {
        document.title = getRouteEnglishTitle();
      } else {
        document.title = 'وڑائچ گڈز ٹرانسپورٹ کمپنی | Warraich Goods';
      }
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    isRtl,
    translations: TRANSLATIONS,
    t: TRANSLATIONS[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      isRtl: false,
      translations: TRANSLATIONS,
      t: TRANSLATIONS['en']
    };
  }
  return context;
};

