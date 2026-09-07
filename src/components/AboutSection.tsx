import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Phone, 
  Clock, 
  HeartHandshake, 
  Quote,
  UserCheck,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { language } = useLanguage();
  const tAbout = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold mb-3 font-urdu">
            <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{tAbout.badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-urdu">
            {tAbout.title}
          </h2>
          <p className="text-slate-300 mt-2 sm:mt-3 text-sm sm:text-base font-urdu">
            {tAbout.subtitle}
          </p>
        </div>

        {/* Main Grid: Proprietor Spotlight + Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Proprietor Visual & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-xl p-5 sm:p-7 text-white relative shadow-xl border border-slate-800 overflow-hidden">
              
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-bl-lg text-[11px] sm:text-xs flex items-center gap-1.5 shadow font-urdu">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{language === 'ur' ? 'چیف ایگزیکٹو و پروپرائٹر' : 'Chief Executive & Proprietor'}</span>
              </div>

              {/* Portrait Image with WebP Picture and Fallback */}
              <div className="relative mx-auto w-36 h-36 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl mb-4 sm:mb-5 mt-6 sm:mt-4 group bg-slate-950 flex items-center justify-center">
                {!imgError ? (
                  <picture className="w-full h-full">
                    <source srcSet="./images/owner-portrait.webp" type="image/webp" />
                    <img
                      src="./images/owner-portrait.jpg"
                      alt={`${COMPANY_INFO.proprietorEnglish} - Chief Executive & Proprietor of Warraich Goods Transport Company`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={() => setImgError(true)}
                    />
                  </picture>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-slate-950">
                    <UserCheck className="w-12 sm:w-14 h-12 sm:h-14 text-amber-400 mb-2" />
                    <span className="text-sm text-amber-400 font-bold font-urdu">
                      {language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 font-urdu">
                      {language === 'ur' ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-center pb-2 pointer-events-none">
                  <span className="text-xs font-semibold text-slate-300 tracking-wider font-mono">
                    {COMPANY_INFO.proprietorEnglish}
                  </span>
                </div>
              </div>

              {/* Name and Designation */}
              <div className="text-center space-y-1 sm:space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black text-amber-400 font-urdu">
                  {language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                </h3>
                <p className="text-slate-300 font-medium text-xs sm:text-sm font-urdu">
                  {language === 'ur' ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}
                </p>

                <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg text-[11px] sm:text-xs text-slate-300 font-mono mt-1">
                  <FileCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>NTN: <strong className="text-amber-400 font-bold">{COMPANY_INFO.ntn}</strong></span>
                </div>
              </div>

              {/* Direct Owner Contact Trigger */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2">
                <a
                  id="proprietor-call-direct-btn"
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg transition-all shadow text-xs sm:text-sm cursor-pointer min-h-[44px] font-urdu"
                  aria-label={`Call proprietor at ${COMPANY_INFO.phone1}`}
                >
                  <Phone className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>{tAbout.callProprietor} ({COMPANY_INFO.phone1})</span>
                </a>
              </div>

            </div>
          </div>

          {/* Details & Core Commitments Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Quote Box */}
            <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-amber-500 p-4 sm:p-5 rounded-xl relative">
              <Quote className="w-6 sm:w-7 h-6 sm:h-7 text-amber-500/20 absolute left-3 top-3 sm:left-4 sm:top-4" />
              <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed font-urdu">
                &ldquo;{tAbout.quoteText}&rdquo;
              </p>
              <div className="mt-2 text-xs font-bold text-amber-400 font-urdu">
                — {language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish} ({language === 'ur' ? 'پروپرائٹر، وڑائچ گڈز ٹرانسپورٹ کمپنی' : 'Proprietor, Warraich Goods Transport Company'})
              </div>
            </div>

            {/* Comprehensive Text */}
            <div className="text-slate-300 leading-relaxed space-y-2.5 text-xs sm:text-sm font-urdu">
              <p>{tAbout.storyP1}</p>
              <p>{tAbout.storyP2}</p>
            </div>

            {/* 4 Pillars of Excellence Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-950 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm font-urdu">{tAbout.p1Title}</h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">{tAbout.p1Desc}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-950 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm font-urdu">{tAbout.p2Title}</h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">{tAbout.p2Desc}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-950 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm font-urdu">{tAbout.p3Title}</h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">{tAbout.p3Desc}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-950 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm font-urdu">{tAbout.p4Title}</h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">{tAbout.p4Desc}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

