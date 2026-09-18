import React from 'react';
import { 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Quick Navigation Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-urdu text-xs sm:text-sm text-slate-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'مرکزی صفحہ' : 'Home'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a href="#fleet" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'ہمارا فلیٹ' : 'Fleet'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a href="#tracking" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'بلٹی ٹریکنگ' : 'Bilty Tracking'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a href="#booking" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'کرایہ کیلکولیٹر' : 'Rate Calculator'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a href="#corporate-credibility" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'کارپوریٹ کوائف' : 'Corporate Profile'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a href="#business-intro" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'کاروباری تعارف و کارڈ' : 'Business Card'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a 
            href={COMPANY_INFO.webAppUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-400 font-bold inline-flex items-center gap-1 hover:underline py-1"
          >
            <span>{isUrdu ? 'ڈرائیور پورٹل' : 'Driver Portal'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-urdu text-slate-400">
          <p className="text-center sm:text-start">
            {isUrdu 
              ? `© ${new Date().getFullYear()} ${COMPANY_INFO.nameUrdu} — جملہ حقوق بحقِ ادارہ محفوظ ہیں۔` 
              : `© ${new Date().getFullYear()} ${COMPANY_INFO.nameEnglish}. All rights reserved.`}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-xl border border-slate-700 transition-colors cursor-pointer min-h-[38px]"
            aria-label="Back to top of page"
          >
            <span>{isUrdu ? 'اوپر جائیں' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 flex-shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
};
