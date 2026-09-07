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
    <section className="py-12 sm:py-16 md:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          <div className={`bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center mb-3.5 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-urdu">{t.f1Title}</h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-urdu">
              {t.f1Desc}
            </p>
          </div>

          <div className={`bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center mb-3.5 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-urdu">{t.f2Title}</h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-urdu">
              {t.f2Desc}
            </p>
          </div>

          <div className={`bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center mb-3.5 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-urdu">{t.f3Title}</h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-urdu">
              {t.f3Desc}
            </p>
          </div>

          <div className={`bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow-md ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center mb-3.5 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white font-urdu">{t.f4Title}</h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-urdu">
              {t.f4Desc}
            </p>
          </div>
        </div>

        {/* Official Registration Banner */}
        <div className={`bg-slate-900 text-white rounded-xl p-5 sm:p-7 border border-slate-800 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-slate-950 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-md text-xs font-semibold font-urdu mb-1">
              <FileCheck className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{language === 'ur' ? 'قانونی و ٹیکس تصدیق شدہ' : 'Tax Registered Business'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-urdu">
              {t.ntnTitle} (NTN: {COMPANY_INFO.ntn})
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-urdu">
              {t.ntnDesc}
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm transition-all shadow font-urdu whitespace-nowrap cursor-pointer min-h-[44px]"
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
