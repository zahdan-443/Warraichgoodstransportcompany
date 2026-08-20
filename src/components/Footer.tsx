import React from 'react';
import { 
  Truck, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Top Banner inside Footer */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <div className="flex items-center gap-2 font-bold font-urdu-heading text-base sm:text-lg">
            <Truck className="w-5 h-5 fill-current" />
            <span>پورے پاکستان میں فوری اور سستی لوڈنگ کے لیے آج ہی رابطہ کریں!</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              id="footer-banner-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="bg-slate-950 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-slate-900 transition-colors shadow font-mono"
            >
              کال کریں: {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-right">
          
          {/* Brand Identity & Proprietor */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-end">
              <div className="text-right">
                <span className="text-2xl font-bold text-white font-urdu block">
                  {COMPANY_INFO.nameUrdu}
                </span>
                <span className="text-xs text-amber-400 font-semibold font-display uppercase tracking-wider block">
                  {COMPANY_INFO.nameEnglish}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-0.5 flex items-center justify-center text-slate-950 font-bold flex-shrink-0 shadow-md overflow-hidden relative">
                <img 
                  src="./assets/images/logo.png" 
                  alt="Warraich Goods" 
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <Truck className="w-6 h-6 text-slate-950 absolute pointer-events-none -z-10" />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-urdu">
              {COMPANY_INFO.taglineUrdu}
            </p>

            <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 font-urdu-clean">پروپرائٹر:</span>
                <span className="text-white font-bold font-urdu">{COMPANY_INFO.proprietorUrdu}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 font-urdu-clean">نیشنل ٹیکس نمبر (NTN):</span>
                <span className="text-amber-400 font-mono font-bold">{COMPANY_INFO.ntn}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-urdu border-b border-slate-800 pb-2">
              اہم لنکس
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-urdu">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">ہوم پیج (Home)</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">ہماری گاڑیاں (شہزور، مزدا، سیمپل، بیڈفورڈ)</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">تعارف و پروپرائٹر (زاہدان نصر وڑائچ)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-amber-400 transition-colors">آن لائن کرایہ معلوم کریں و بکنگ</a>
              </li>
              <li>
                <a href="#branches" className="hover:text-amber-400 transition-colors">سمندری اور کمالیہ اڈا لوکیشنز</a>
              </li>
              <li>
                <a 
                  href={COMPANY_INFO.webAppUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>آن لائن ڈرائیور پورٹل ایپ</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Branches & Offices */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-urdu border-b border-slate-800 pb-2">
              دفاتر کے پتے و فون
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800/80 font-urdu">
                <span className="text-amber-400 font-bold block mb-0.5">📍 سمندری برانچ (مین اڈا):</span>
                <p className="text-slate-300">مخالف نیو لاری اڈا / فیصل آباد روڈ، سمندری</p>
                <p className="text-slate-400 font-mono mt-1">0300-5370443 / 0339-5370443</p>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800/80 font-urdu">
                <span className="text-amber-400 font-bold block mb-0.5">📍 کمالیہ برانچ:</span>
                <p className="text-slate-300">نزد چیچہ وطنی بائی پاس، ٹرک اڈا، کمالیہ</p>
                <p className="text-slate-400 font-mono mt-1">0300-5370443 / 0339-5370443</p>
              </div>
            </div>
          </div>

          {/* Contact Direct & Email */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-urdu border-b border-slate-800 pb-2">
              براہ راست رابطہ
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="flex items-center justify-end gap-2 text-slate-300 hover:text-amber-400 transition-colors p-2.5 bg-slate-900 rounded-xl border border-slate-800"
              >
                <span className="font-mono font-bold text-amber-400">{COMPANY_INFO.phone1}</span>
                <Phone className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw2}`}
                className="flex items-center justify-end gap-2 text-slate-300 hover:text-amber-400 transition-colors p-2.5 bg-slate-900 rounded-xl border border-slate-800"
              >
                <span className="font-mono">{COMPANY_INFO.phone2}</span>
                <Phone className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center justify-end gap-2 text-slate-300 hover:text-amber-400 transition-colors p-2.5 bg-slate-900 rounded-xl border border-slate-800"
              >
                <span className="text-[12px] truncate">{COMPANY_INFO.email}</span>
                <Mail className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-right font-urdu-clean">
            © {new Date().getFullYear()} {COMPANY_INFO.nameEnglish} ({COMPANY_INFO.nameUrdu}). تمام حقوق محفوظ ہیں۔ NTN: {COMPANY_INFO.ntn}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 px-3.5 py-2 rounded-xl border border-slate-800 transition-colors font-urdu-clean cursor-pointer"
          >
            <span>اوپر جائیں (Top)</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

