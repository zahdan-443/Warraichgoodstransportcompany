import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { TRANSLATIONS } from '../data/translations';
import { MOTION_CONFIG } from '../config/motionConfig';
import { SEO_METADATA_MAP, RouteSeoEntry } from '../data/seoMetadata';

export type Language = 'ur' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  translations: typeof TRANSLATIONS;
  t: typeof TRANSLATIONS['en'];
}

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

  const getRouteSeoMeta = (): RouteSeoEntry => {
    const normalized =
      location.pathname
        .replace(/^\/Warraichgoodstransportcompany/i, '')
        .replace(/\/+$/, '') || '/';
    return SEO_METADATA_MAP[normalized] || SEO_METADATA_MAP['/'];
  };

  const applyHeadMetadata = (targetLang: Language) => {
    if (typeof window === 'undefined') return;
    const seo = getRouteSeoMeta();
    const title = targetLang === 'en' ? seo.titleEn : seo.titleUr;
    const description = targetLang === 'en' ? seo.descriptionEn : seo.descriptionUr;

    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ur' ? 'rtl' : 'ltr';
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', seo.canonicalUrl);
    setMeta('link[rel="alternate"][hreflang="en"]', 'href', seo.canonicalUrl);
    setMeta('link[rel="alternate"][hreflang="x-default"]', 'href', seo.canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', seo.canonicalUrl);
    setMeta('meta[property="og:image"]', 'content', seo.ogImage);
    setMeta('meta[property="og:image:secure_url"]', 'content', seo.ogImage);
    setMeta('meta[property="og:image:type"]', 'content', seo.ogImageType);
    setMeta('meta[property="og:image:width"]', 'content', String(seo.ogImageWidth));
    setMeta('meta[property="og:image:height"]', 'content', String(seo.ogImageHeight));
    setMeta('meta[property="og:image:alt"]', 'content', seo.ogImageAlt);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:url"]', 'content', seo.canonicalUrl);
    setMeta('meta[name="twitter:image"]', 'content', seo.ogImage);
    setMeta('meta[name="twitter:image:alt"]', 'content', seo.ogImageAlt);
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
    t: TRANSLATIONS[language],
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
      t: TRANSLATIONS['en'],
    };
  }
  return context;
};
