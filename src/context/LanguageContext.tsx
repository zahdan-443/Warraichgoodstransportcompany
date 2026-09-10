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
    return 'ur'; // Default to Urdu
  });

  const isRtl = language === 'ur';

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('warraich_goods_lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ur' ? 'rtl' : 'ltr';

      // Update URL query parameter without full reload
      const url = new URL(window.location.href);
      if (newLang === 'en') {
        url.searchParams.set('lang', 'en');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState({}, '', url.toString());

      // Update document title and meta description dynamically
      if (newLang === 'en') {
        document.title = 'Warraich Goods Transport Company | Nationwide FTL Freight Pakistan';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', 'Dedicated Full Truckload (FTL) freight transport across Pakistan. Hyundai Shehzore, Mazda 6-wheeler, Sample extended, and Bedford trucks.');
        }
      } else {
        document.title = 'وڑائچ گڈز ٹرانسپورٹ کمپنی | Warraich Goods Transport Company';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', 'پورے پاکستان کے لیے فل ٹرک لوڈ (FTL) سروس: شہزور، مزدا، سیمپل اور بیڈفورڈ ٹرک مناسب ترین ریٹ پر۔ پروپرائٹر: زاہدان نصر وڑائچ — 0300-5370443');
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
        document.title = 'Warraich Goods Transport Company | Nationwide FTL Freight Pakistan';
      } else {
        document.title = 'وڑائچ گڈز ٹرانسپورٹ کمپنی | Warraich Goods Transport Company';
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
      language: 'ur',
      setLanguage: () => {},
      toggleLanguage: () => {},
      isRtl: true,
      translations: TRANSLATIONS,
      t: TRANSLATIONS['ur']
    };
  }
  return context;
};

