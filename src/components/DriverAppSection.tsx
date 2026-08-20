import React from 'react';
import { 
  Smartphone, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  FileText, 
  Users, 
  Compass 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const DriverAppSection: React.FC = () => {
  return (
    <section id="driver-app" className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text & Feature Highlights */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>ڈیجیٹل لاجسٹکس و آن لائن پورٹل</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-urdu-clean leading-tight">
              ڈرائیور و ٹرانسپورٹ مینجمنٹ ویب ایپ
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              وڑائچ گڈز ٹرانسپورٹ کمپنی اپنے ڈرائیوروں، فلیٹ اور کلائنٹس کے لیے جدید ڈیجیٹل سسٹم فراہم کرتی ہے۔ اب ٹرپ مینجمنٹ، لوڈنگ چالان، اور فلیٹ کوآرڈینیشن صرف ایک کلک کی دوری پر ہے۔
            </p>

            {/* App Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl flex-shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-urdu-clean">ڈرائیور ٹرپ ریکارڈ</h4>
                  <p className="text-xs text-slate-400 mt-0.5">گاڑیوں اور روٹس کی باقاعدہ تفویض۔</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-urdu-clean">ڈیجیٹل چالان و بلٹی</h4>
                  <p className="text-xs text-slate-400 mt-0.5">بروقت اور شفاف لوڈنگ ڈاکومنٹس۔</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-urdu-clean">لائیو ڈسپیچ کوآرڈینیشن</h4>
                  <p className="text-xs text-slate-400 mt-0.5">بروقت منزل پر ترسیل کی نگرانی۔</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-purple-500/20 text-purple-400 rounded-xl flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-urdu-clean">موبائل فرینڈلی رسائی</h4>
                  <p className="text-xs text-slate-400 mt-0.5">ہر سمارٹ فون پر فوراً کھلنے والی ایپ۔</p>
                </div>
              </div>
            </div>

            {/* Launch App Button CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="open-driver-app-main-btn"
                href={COMPANY_INFO.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-7 py-4 rounded-2xl shadow-xl shadow-blue-600/30 text-base sm:text-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>آن لائن ٹرانسپورٹ ایپ کھولیں (Web App)</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <span className="text-xs text-slate-400 text-center sm:text-right">
                براؤزر میں فوری طور پر لوڈ ہوتی ہے، انسٹالیشن کی ضرورت نہیں
              </span>
            </div>

          </div>

          {/* App UI Visual Card Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800 border-2 border-slate-700/80 rounded-3xl p-5 shadow-2xl relative">
              <div className="bg-slate-900 rounded-2xl p-4 border border-slate-700">
                
                {/* Mock Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">zahdan-443.github.io/warraichgoods43</span>
                </div>

                {/* App Screen Representation */}
                <div className="space-y-3 text-right">
                  <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-4 rounded-xl border border-blue-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded">Active App</span>
                      <h4 className="font-bold text-white text-sm font-urdu-clean">وڑائچ ٹرانسپورٹ سسٹم</h4>
                    </div>
                    <p className="text-xs text-blue-200 mt-1">ڈرائیور ریکارڈز، کارگو تفصیلات و لوڈنگ مینجمنٹ</p>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs space-y-2">
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="text-emerald-400 font-semibold">● جاری ٹرپس</span>
                      <span>100% آن لائن سسٹم</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>ڈرائیور پورٹل لاگ ان</span>
                      <span className="text-amber-400 font-bold">Zahdan Nasar Warraich</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={COMPANY_INFO.webAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                    >
                      <span>پورٹل پر تشریف لے جائیں ➔</span>
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
