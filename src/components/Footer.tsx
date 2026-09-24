import React from 'react';
import { 
  ExternalLink, 
  ArrowUp,
  Youtube,
  Facebook,
  MessageCircle,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}`;

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Official Social Media & Verified Profiles Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-6 border-b border-slate-800">
          <div className="text-center sm:text-start">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
              {isUrdu ? 'آفیشل سوشل میڈیا و نیٹ ورک' : 'Official Social Media & Channels'}
            </span>
            <p className="text-xs text-slate-400 font-urdu mt-0.5">
              {isUrdu 
                ? 'تازہ ترین فلیٹ ویڈیوز، لوڈنگ اپڈیٹس اور کسٹمر ریویوز کے لیے ہمارے ساتھ جڑیں' 
                : 'Follow our official channels for fleet dispatch updates, video tours, and customer feedback'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* YouTube Channel */}
            <a
              href={COMPANY_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm hover:scale-105"
              aria-label="Warraich Goods YouTube Channel"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>YouTube</span>
            </a>

            {/* Facebook Page */}
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm hover:scale-105"
              aria-label="Warraich Goods Facebook Page"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>Facebook</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm hover:scale-105"
              aria-label="Warraich Goods WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Helpline */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-xl text-xs font-bold transition hover:scale-105"
              aria-label="Warraich Goods Phone Helpline"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
          </div>
        </div>

        {/* Quick Navigation Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-urdu text-xs sm:text-sm text-slate-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'مرکزی صفحہ' : 'Home'}
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a href="#branches" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'سروس علاقے' : 'Service Areas'}
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
