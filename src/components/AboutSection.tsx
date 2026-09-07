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
    <section id="about" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold mb-3">
            <Award className="w-4 h-4 text-amber-700" />
            <span>{tAbout.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {tAbout.title}
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            {tAbout.subtitle}
          </p>
        </div>

        {/* Main Grid: Proprietor Spotlight + Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Proprietor Visual & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white relative shadow-xl overflow-hidden">
              
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 font-bold px-4 py-1.5 rounded-bl-2xl text-xs flex items-center gap-1.5 shadow font-urdu">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'ur' ? 'چیف ایگزیکٹو و پروپرائٹر' : 'Chief Executive & Proprietor'}</span>
              </div>

              {/* Portrait Image with WebP Picture and Fallback */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-amber-400/40 shadow-2xl mb-6 mt-4 group bg-slate-800 flex items-center justify-center">
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
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-slate-800 to-slate-900">
                    <UserCheck className="w-16 h-16 text-amber-400 mb-2" />
                    <span className="text-sm text-amber-300 font-bold">
                      {language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      {language === 'ur' ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end justify-center pb-2 pointer-events-none">
                  <span className="text-xs font-semibold text-amber-300 tracking-wider">
                    {COMPANY_INFO.proprietorEnglish}
                  </span>
                </div>
              </div>

              {/* Name and Designation */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-amber-400 font-urdu">
                  {language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish}
                </h3>
                <p className="text-slate-300 font-medium text-sm">
                  {language === 'ur' ? COMPANY_INFO.proprietorRoleUrdu : COMPANY_INFO.proprietorRoleEnglish}
                </p>

                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs text-slate-300 font-mono mt-2">
                  <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>NTN Certificate: <strong className="text-white font-bold">{COMPANY_INFO.ntn}</strong></span>
                </div>
              </div>

              {/* Direct Owner Contact Trigger */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col gap-2.5">
                <a
                  id="proprietor-call-direct-btn"
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                  aria-label={`Call proprietor at ${COMPANY_INFO.phone1}`}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{tAbout.callProprietor} ({COMPANY_INFO.phone1})</span>
                </a>
              </div>

            </div>
          </div>

          {/* Details & Core Commitments Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quote Box */}
            <div className="bg-amber-50/70 border-r-4 border-amber-500 p-5 rounded-2xl relative">
              <Quote className="w-8 h-8 text-amber-400/40 absolute left-4 top-4" />
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed font-urdu">
                &ldquo;{tAbout.quoteText}&rdquo;
              </p>
              <div className="mt-2 text-xs font-bold text-amber-900">
                — {language === 'ur' ? COMPANY_INFO.proprietorUrdu : COMPANY_INFO.proprietorEnglish} ({language === 'ur' ? 'پروپرائٹر، وڑائچ گڈز ٹرانسپورٹ کمپنی' : 'Proprietor, Warraich Goods Transport Company'})
              </div>
            </div>

            {/* Comprehensive Text */}
            <div className="text-slate-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p>{tAbout.storyP1}</p>
              <p>{tAbout.storyP2}</p>
            </div>

            {/* 4 Pillars of Excellence Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{tAbout.p1Title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{tAbout.p1Desc}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{tAbout.p2Title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{tAbout.p2Desc}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{tAbout.p3Title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{tAbout.p3Desc}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{tAbout.p4Title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{tAbout.p4Desc}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

