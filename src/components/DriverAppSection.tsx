import React from 'react';
import { 
  Smartphone, 
  ExternalLink, 
  ShieldCheck, 
  Truck, 
  FileText, 
  Compass 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const DriverAppSection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].driverApp;

  return (
    <section id="driver-app" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Text & Feature Highlights */}
          <div className={`lg:col-span-7 space-y-4 sm:space-y-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            
            <div className="inline-flex items-center gap-2 bg-slate-950 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold font-urdu">
              <Smartphone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu leading-tight">
              {t.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-urdu">
              {language === 'ur' 
                ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی اپنے ڈرائیوروں، فلیٹ اور کلائنٹس کے لیے جدید ڈیجیٹل سسٹم فراہم کرتی ہے۔ اب ٹرپ مینجمنٹ، لوڈنگ چالان، اور فلیٹ کوآرڈینیشن صرف ایک کلک کی دوری پر ہے۔'
                : 'Warraich Goods Transport Company provides a streamlined digital management system for our drivers, fleet, and corporate clients. Trip assignments, loading bilty documents, and route coordination are all managed seamlessly.'}
            </p>

            {/* App Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white font-urdu">
                    {language === 'ur' ? 'ڈرائیور ٹرپ ریکارڈ' : 'Driver Trip Records'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">
                    {language === 'ur' ? 'گاڑیوں اور روٹس کی باقاعدہ تفویض۔' : 'Clear vehicle assignments & route tracking.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white font-urdu">
                    {language === 'ur' ? 'ڈیجیٹل چالان و بلٹی' : 'Digital Bilty & Challan'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">
                    {language === 'ur' ? 'بروقت اور شفاف لوڈنگ ڈاکومنٹس۔' : 'Transparent, verifiable loading documentation.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white font-urdu">
                    {language === 'ur' ? 'لائیو ڈسپیچ کوآرڈینیشن' : 'Live Dispatch Coordination'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">
                    {language === 'ur' ? 'بروقت منزل پر ترسیل کی نگرانی۔' : 'Continuous highway progress monitoring.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 text-amber-400 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white font-urdu">
                    {language === 'ur' ? 'موبائل فرینڈلی رسائی' : 'Mobile-Optimized Portal'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-urdu">
                    {language === 'ur' ? 'ہر سمارٹ فون پر فوراً کھلنے والی ایپ۔' : 'Instant access on any smartphone or tablet.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Launch App Button CTA */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                id="open-driver-app-main-btn"
                href={COMPANY_INFO.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg shadow text-xs sm:text-sm transition-all font-urdu min-h-[44px]"
                aria-label="Open Driver & Transport Management Web App"
              >
                <span>{language === 'ur' ? 'آن لائن ٹرانسپورٹ ایپ کھولیں (Web App)' : 'Open Transport Web App'}</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>

              <span className={`text-[11px] sm:text-xs text-slate-400 font-urdu ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                {language === 'ur' ? 'براؤزر میں فوری طور پر لوڈ ہوتی ہے، انسٹالیشن کی ضرورت نہیں' : 'Loads instantly in your mobile or desktop browser without installation.'}
              </span>
            </div>

          </div>

          {/* App UI Visual Card Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-xl relative">
              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 border border-slate-800">
                
                {/* Mock Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono truncate max-w-[200px]">zahdan-443.github.io/warraichgoods43</span>
                </div>

                {/* App Screen Representation */}
                <div className={`space-y-2.5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                  <div className="bg-slate-950 p-3 sm:p-4 rounded-lg border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded font-mono">Active App</span>
                      <h4 className="font-bold text-white text-xs sm:text-sm font-urdu">
                        {language === 'ur' ? 'وڑائچ ٹرانسپورٹ سسٹم' : 'Warraich Transport System'}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 font-urdu">
                      {language === 'ur' ? 'ڈرائیور ریکارڈز، کارگو تفصیلات و لوڈنگ مینجمنٹ' : 'Driver records, cargo dispatch & trip management'}
                    </p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5 font-urdu">
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="text-emerald-400 font-semibold text-[11px]">● {language === 'ur' ? 'جاری ٹرپس' : 'Active Trips'}</span>
                      <span className="text-[11px] text-slate-400">{language === 'ur' ? '100% آن لائن سسٹم' : '100% Online'}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400 text-[11px]">
                      <span>{language === 'ur' ? 'ڈرائیور پورٹل لاگ ان' : 'Driver Portal Access'}</span>
                      <span className="text-amber-400 font-bold">{COMPANY_INFO.proprietorEnglish}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href={COMPANY_INFO.webAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 hover:border-amber-500/40 font-bold py-2.5 rounded-lg text-xs transition-colors font-urdu min-h-[40px]"
                      aria-label="Access driver portal"
                    >
                      <span>{language === 'ur' ? 'پورٹل پر تشریف لے جائیں ➔' : 'Proceed to Driver Portal ➔'}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
