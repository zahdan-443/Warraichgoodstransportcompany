import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowUp,
  Youtube,
  Facebook,
  MessageCircle,
  Phone,
  Star,
  Share2,
  Check,
  Twitter,
  Linkedin
} from 'lucide-react';
import { COMPANY_INFO, GOOGLE_REVIEW_URL, SITE_URL } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}`;
  const shareUrl = SITE_URL;
  const shareTitle = isUrdu 
    ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی - سمندری و کمالیہ سے ملک گیر فل ٹرک لوڈ (FTL) مال برداری'
    : 'Warraich Goods Transport Company - Nationwide FTL Truck Booking & Logistics';

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* 1. Official Social Media & Verified Profiles Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
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

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
            {/* YouTube Channel */}
            <a
              href={COMPANY_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
              aria-label="Warraich Goods YouTube Channel"
            >
              <Youtube className="w-4 h-4 fill-current text-slate-300" />
              <span>YouTube</span>
            </a>

            {/* Facebook Page */}
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
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
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
              aria-label="Warraich Goods WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Helpline */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
              aria-label="Warraich Goods Phone Helpline"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>

            {/* Review us on Google */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-400/50 px-3.5 py-1.5 rounded-lg text-xs font-bold font-urdu transition shadow-sm"
              aria-label="Review Warraich Goods Transport Company on Google"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
              <span>{isUrdu ? 'گوگل پر ہمارا ریویو دیں' : 'Review us on Google'}</span>
            </a>
          </div>
        </div>

        {/* 2. Social Media Sharing Bar */}
        <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-start">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
              <Share2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-bold text-white text-xs sm:text-sm font-urdu block">
                {isUrdu ? 'ہماری سروس اپنے دوستوں اور کاروباری احباب کے ساتھ شیئر کریں:' : 'Share Warraich Goods with your business network:'}
              </span>
              <p className="text-[11px] text-slate-400 font-urdu mt-0.5">
                {isUrdu 
                  ? 'واٹس ایپ، فیس بک یا لنکڈ ان پر شیئر کریں تاکہ دیگر تاجر بھی معیاری FTL ٹرانسپورٹ سے فائدہ اٹھا سکیں' 
                  : 'Spread the word across WhatsApp, Facebook, LinkedIn & Twitter'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {/* Share on WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}\n${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold font-urdu transition shadow-sm"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{isUrdu ? 'واٹس ایپ پر شیئر' : 'Share WhatsApp'}</span>
            </a>

            {/* Share on Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-3.5 h-3.5 fill-current" />
              <span>{isUrdu ? 'فیس بک پر شیئر' : 'Share Facebook'}</span>
            </a>

            {/* Share on LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>

            {/* Share on Twitter / X */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-black hover:bg-slate-800 text-white border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
              aria-label="Share on X Twitter"
            >
              <Twitter className="w-3.5 h-3.5 fill-current" />
              <span>X (Twitter)</span>
            </a>

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold font-urdu transition cursor-pointer"
              aria-label="Copy website link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-blue-400">{isUrdu ? 'لنک کاپی ہو گیا!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isUrdu ? 'لنک کاپی کریں' : 'Copy Link'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. Quick Navigation Links Bar (Distinct Internal Page Links) */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-urdu text-xs sm:text-sm text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'مرکزی تعارف و ہوم' : 'Company Overview'}
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link to="/fleet" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'گاڑیوں اور ٹرکس کی اقسام' : 'Commercial Truck Fleet'}
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link to="/services" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'سروسز، قانونی ساکھ و حفاظت' : 'Services & Cargo Safety'}
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link to="/booking" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'FTL کرایہ معلوم کریں اور بکنگ' : 'FTL Rate Estimation & Booking'}
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link to="/faq" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'عام سوالات و کلائنٹ ریویوز' : 'FAQs & Customer Reviews'}
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link to="/about" className="hover:text-amber-400 transition-colors py-1">
            {isUrdu ? 'مصدقہ کاروباری تعارفی کارڈ' : 'Verified Business Card'}
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a 
            href={COMPANY_INFO.webAppUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-400 font-bold inline-flex items-center gap-1 hover:underline py-1"
          >
            <span>{isUrdu ? 'ڈرائیور پورٹل لاگ ان' : 'Driver Portal Access'}</span>
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
            className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg border border-slate-700 transition-colors cursor-pointer min-h-[38px]"
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
