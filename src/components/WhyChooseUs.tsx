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
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
            {t.title}
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-urdu">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-amber-400 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">{t.f1Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              {t.f1Desc}
            </p>
          </div>

          <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-amber-400 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">{t.f2Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              {t.f2Desc}
            </p>
          </div>

          <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-amber-400 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">{t.f3Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              {t.f3Desc}
            </p>
          </div>

          <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-amber-400 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className={`w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 ${language === 'ur' ? 'ml-auto' : 'mr-auto'}`}>
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">{t.f4Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              {t.f4Desc}
            </p>
          </div>
        </div>

        {/* Official Registration Banner */}
        <div className={`bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold font-urdu mb-1">
              <FileCheck className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'قانونی و ٹیکس تصدیق شدہ' : 'Tax Registered Business'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-urdu">
              {t.ntnTitle} (NTN: {COMPANY_INFO.ntn})
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-urdu">
              {t.ntnDesc}
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-lg font-urdu whitespace-nowrap cursor-pointer"
            aria-label={`${t.helplineBtn}: ${COMPANY_INFO.phone1}`}
          >
            <PhoneCall className="w-4 h-4 fill-current" />
            <span>{t.helplineBtn}: {COMPANY_INFO.phone1}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
