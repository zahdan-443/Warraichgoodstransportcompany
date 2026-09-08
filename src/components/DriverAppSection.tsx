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
    <section id="driver-app" className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Text & Feature Highlights */}
          <div className={`lg:col-span-7 space-y-4 sm:space-y-5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 text-blue-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-urdu shadow-sm">
              <Smartphone className="w-4 h-4 text-blue-700 flex-shrink-0" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu leading-tight">
              {t.title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-urdu">
              {language === 'ur' 
                ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی اپنے ڈرائیوروں، فلیٹ اور کلائنٹس کے لیے جدید ڈیجیٹل سسٹم فراہم کرتی ہے۔ اب ٹرپ مینجمنٹ، لوڈنگ چالان، اور فلیٹ کوآرڈینیشن صرف ایک کلک کی دوری پر ہے۔'
                : 'Warraich Goods Transport Company provides a streamlined digital management system for our drivers, fleet, and corporate clients. Trip assignments, loading bilty documents, and route coordination are all managed seamlessly.'}
            </p>

            {/* App Features List with Multi-Color accents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-blue-50/60 border border-blue-200 p-3.5 rounded-2xl flex items-start gap-3 shadow-sm">
                <div className="p-2.5 bg-blue-600 text-white rounded-xl flex-shrink-0 shadow-sm">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 font-urdu">
                    {language === 'ur' ? 'ڈرائیور ٹرپ ریکارڈ' : 'Driver Trip Records'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-urdu font-medium">
                    {language === 'ur' ? 'گاڑیوں اور روٹس کی باقاعدہ تفویض۔' : 'Clear vehicle assignments & route tracking.'}
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 p-3.5 rounded-2xl flex items-start gap-3 shadow-sm">
                <div className="p-2.5 bg-emerald-600 text-white rounded-xl flex-shrink-0 shadow-sm">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 font-urdu">
                    {language === 'ur' ? 'ڈیجیٹل چالان و بلٹی' : 'Digital Bilty & Challan'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-urdu font-medium">
                    {language === 'ur' ? 'بروقت اور شفاف لوڈنگ ڈاکومنٹس۔' : 'Transparent, verifiable loading documentation.'}
                  </p>
                </div>
              </div>

              <div className="bg-purple-50/60 border border-purple-200 p-3.5 rounded-2xl flex items-start gap-3 shadow-sm">
                <div className="p-2.5 bg-purple-600 text-white rounded-xl flex-shrink-0 shadow-sm">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 font-urdu">
                    {language === 'ur' ? 'لائیو ڈسپیچ کوآرڈینیشن' : 'Live Dispatch Coordination'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-urdu font-medium">
                    {language === 'ur' ? 'بروقت منزل پر ترسیل کی نگرانی۔' : 'Continuous highway progress monitoring.'}
                  </p>
                </div>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 p-3.5 rounded-2xl flex items-start gap-3 shadow-sm">
                <div className="p-2.5 bg-amber-500 text-slate-950 rounded-xl flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 font-urdu">
                    {language === 'ur' ? 'موبائل فرینڈلی رسائی' : 'Mobile-Optimized Portal'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-urdu font-medium">
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
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md text-xs sm:text-sm transition-all font-urdu min-h-[44px]"
                aria-label="Open Daily Road Usages and Transport Web App"
              >
                <span>{t.btnLaunch}</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>

              <span className={`text-[11px] sm:text-xs text-slate-500 font-urdu ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                {language === 'ur' ? 'براؤزر میں فوری طور پر لوڈ ہوتی ہے، انسٹالیشن کی ضرورت نہیں' : 'Loads instantly in your mobile or desktop browser without installation.'}
              </span>
            </div>

          </div>

          {/* App UI Visual Card Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-lg relative">
              <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm">
                
                {/* Mock Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono truncate max-w-[240px]">zahdan-443.github.io/Warraich-Goods</span>
                </div>

                {/* App Screen Representation */}
                <div className={`space-y-2.5 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded font-mono">Daily Road Usage</span>
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm font-urdu">
                        {language === 'ur' ? 'روزمرہ روڈ یوزجز ایپ' : 'Warraich Road Usages App'}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 font-urdu font-medium">
                      {language === 'ur' ? 'روزمرہ روڈ کے استعمال، ڈرائیور ریکارڈز و لوڈنگ مینجمنٹ' : 'Daily road usages, driver logs, cargo dispatch & trip records'}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5 font-urdu">
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="text-emerald-700 font-bold text-[11px]">● {language === 'ur' ? 'جاری ٹرپس' : 'Active Trips'}</span>
                      <span className="text-[11px] text-slate-500">{language === 'ur' ? '100% آن لائن سسٹم' : '100% Online'}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 text-[11px]">
                      <span>{language === 'ur' ? 'پورٹل لاگ ان' : 'Portal Access'}</span>
                      <span className="text-blue-700 font-bold">{COMPANY_INFO.proprietorEnglish}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href={COMPANY_INFO.webAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors font-urdu shadow-sm min-h-[40px]"
                      aria-label="Access daily road usages portal"
                    >
                      <span>{language === 'ur' ? 'ڈیلی روڈ یوزجز ایپ کھولیں ➔' : 'Proceed to Daily Road Usage App ➔'}</span>
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
