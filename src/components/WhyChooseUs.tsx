import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  PhoneCall, 
  FileCheck,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].why;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards with Multi-Color accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          <div className={`bg-white p-5 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3.5 shadow-sm ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 font-urdu">{t.f1Title}</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-urdu font-medium">
              {t.f1Desc}
            </p>
          </div>

          <div className={`bg-white p-5 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3.5 shadow-sm ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 font-urdu">{t.f2Title}</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-urdu font-medium">
              {t.f2Desc}
            </p>
          </div>

          <div className={`bg-white p-5 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3.5 shadow-sm ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 font-urdu">{t.f3Title}</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-urdu font-medium">
              {t.f3Desc}
            </p>
          </div>

          <div className={`bg-white p-5 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3.5 shadow-sm ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 font-urdu">{t.f4Title}</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-urdu font-medium">
              {t.f4Desc}
            </p>
          </div>
        </div>

        {/* Official Registration Banner */}
        <div className={`bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-slate-900 rounded-2xl p-5 sm:p-7 border border-blue-200 shadow-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-white text-emerald-700 border border-emerald-300 px-3 py-1 rounded-full text-xs font-bold font-urdu mb-1 shadow-sm">
              <FileCheck className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{language === 'ur' ? 'قانونی و ٹیکس تصدیق شدہ' : 'Tax Registered Business'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-urdu">
              {t.ntnTitle} (<span className="text-blue-700 font-mono">NTN: {COMPANY_INFO.ntn}</span>)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-urdu font-medium">
              {t.ntnDesc}
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md font-urdu whitespace-nowrap cursor-pointer min-h-[44px]"
            aria-label={`${t.helplineBtn}: ${COMPANY_INFO.phone1}`}
          >
            <PhoneCall className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{t.helplineBtn}: {COMPANY_INFO.phone1}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
