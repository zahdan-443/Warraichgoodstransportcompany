import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { TRANSLATIONS } from '../data/translations';
import { MOTION_CONFIG } from '../config/motionConfig';

export type Language = 'ur' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  translations: typeof TRANSLATIONS;
  t: typeof TRANSLATIONS['en'];
}

interface RouteSeoMeta {
  title: string;
  description: string;
  canonical: string;
}

const BASE_SITE_URL = 'https://zahdan-443.github.io/Warraichgoodstransportcompany';

const ROUTE_SEO_MAP: Record<string, RouteSeoMeta> = {
  '/': {
    title: 'Warraich Goods | Transport & Shifting',
    description: 'Home shifting, office relocation and goods transport from Samundri across Pakistan and from all Pakistan To Samundri. Call 0300-5370443 for truck booking.',
    canonical: `${BASE_SITE_URL}/`,
  },
  '/fleet': {
    title: 'Mazda, Shahzore & Bedford Truck Booking | Warraich Goods',
    description: 'Shahzore pickups, Mazda trucks, and heavy haulers for home shifting and commercial transport across Pakistan. Call 0300-5370443.',
    canonical: `${BASE_SITE_URL}/fleet/`,
  },
  '/services': {
    title: 'Goods Transport & Shifting Services | Warraich Goods',
    description: 'Dedicated truck transport, home shifting, and office moving services from Samundri to all cities in Pakistan. NTN 7779394-1.',
    canonical: `${BASE_SITE_URL}/services/`,
  },
  '/booking': {
    title: 'Truck Booking & Rate Inquiry | Warraich Goods',
    description: 'Get freight rates and book a truck for home shifting or goods delivery across Pakistan via WhatsApp or phone at 0300-5370443.',
    canonical: `${BASE_SITE_URL}/booking/`,
  },
  '/service-areas': {
    title: 'Service Areas Across Pakistan | Warraich Goods',
    description: 'Warraich Goods books trucks from Samundri, District Faisalabad to cities across Punjab and Pakistan, plus backhaul loads to Samundri.',
    canonical: `${BASE_SITE_URL}/service-areas/`,
  },
  '/faq': {
    title: 'Frequently Asked Questions | Warraich Goods',
    description: 'Answers to common questions about truck booking, freight charges, bilty receipts, and goods transport across Pakistan.',
    canonical: `${BASE_SITE_URL}/faq/`,
  },
  '/about': {
    title: 'About Us & Contact Details | Warraich Goods',
    description: 'Warraich Goods Transport Company is a local transport business based in Samundri, Faisalabad, serving routes across Pakistan since 2008.',
    canonical: `${BASE_SITE_URL}/about/`,
  },
  '/verify': {
    title: 'Bilty Verification | Warraich Goods',
    description: 'Verify your official bilty receipt and consignment details online with Warraich Goods Transport Company. Phone: 0300-5370443.',
    canonical: `${BASE_SITE_URL}/verify/`,
  },
};

const LANG_STORAGE_KEY = 'warraich_goods_lang_v2';
const LEGACY_LANG_STORAGE_KEY = 'warraich_goods_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>(() => {
    // Read explicit URL parameter or versioned saved preference; otherwise default to English
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(LEGACY_LANG_STORAGE_KEY);
      } catch {
        // Ignore storage errors
      }
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'ur') {
        return urlLang;
      }
      try {
        const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
        if (savedLang === 'en' || savedLang === 'ur') {
          return savedLang;
        }
      } catch {
        // Ignore storage errors
      }
    }
    return 'en';
  });

  const isRtl = language === 'ur';

  const getRouteSeoMeta = (): RouteSeoMeta => {
    const normalized = location.pathname
      .replace(/^\/Warraichgoodstransportcompany/i, '')
      .replace(/\/+$/, '') || '/';
    return ROUTE_SEO_MAP[normalized] || ROUTE_SEO_MAP['/'];
  };

  const applyHeadMetadata = (targetLang: Language) => {
    if (typeof window === 'undefined') return;
    const seo = getRouteSeoMeta();
    const title = targetLang === 'en' ? seo.title : 'وڑائچ گڈز ٹرانسپورٹ کمپنی | Warraich Goods';
    const description = targetLang === 'en'
      ? seo.description
      : 'ہم پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ کی خدمات فراہم کرتے ہیں۔ مناسب ریٹ اور بہترین سروس ہماری پہچان ہے۔ فون: 0300-5370443';

    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ur' ? 'rtl' : 'ltr';
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', seo.canonical);
    setMeta('link[rel="alternate"][hreflang="en"]', 'href', seo.canonical);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', seo.canonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:url"]', 'content', seo.canonical);
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LANG_STORAGE_KEY, newLang);
      } catch {
        // Ignore storage errors
      }

      // Brief smooth cross-transition on language change
      if (
        MOTION_CONFIG.languageTransition &&
        typeof window.matchMedia === 'function' &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        const root = document.documentElement;
        root.classList.remove('lang-switching');
        void root.offsetWidth;
        root.classList.add('lang-switching');
        window.setTimeout(() => root.classList.remove('lang-switching'), 240);
      }

      // Update URL query parameter without full reload
      const url = new URL(window.location.href);
      if (newLang === 'ur') {
        url.searchParams.set('lang', 'ur');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState({}, '', url.toString());

      applyHeadMetadata(newLang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ur' ? 'en' : 'ur');
  };

  useEffect(() => {
    applyHeadMetadata(language);
  }, [language, location.pathname]);

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

