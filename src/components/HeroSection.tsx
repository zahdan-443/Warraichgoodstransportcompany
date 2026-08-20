import React from 'react';
import { 
  PhoneCall, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Truck,
  MessageCircle,
  Award,
  Zap,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-12 md:py-20 border-b border-slate-800">
      
      {/* Background Graphic Grid Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px), radial-gradient(#3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* FTL Verified Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-urdu">100% فل ٹرک لوڈ (FTL) سپیشلسٹ — سنگل پارٹی مخصوص گاڑی</span>
              <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] font-mono">NTN: {COMPANY_INFO.ntn}</span>
            </div>

            {/* Core Promotional Tagline (Urdu Highlight) */}
            <div className="space-y-2">
              <span className="text-amber-400 text-2xl sm:text-4xl font-black font-urdu block">
                {COMPANY_INFO.nameUrdu}
              </span>
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-urdu leading-relaxed">
                {COMPANY_INFO.taglineUrdu}
              </h1>
            </div>

            {/* Subtitle & Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-urdu">
              پنجاب، سندھ، خیبر پختونخوا، بلوچستان اور آزاد کشمیر سمیت پورے پاکستان میں زرعی اجناس، فیکٹری کے سامان، صنعتی اشیاء، ٹیکسٹائل اور بلک کارگو کی نان اسٹاپ پوائنٹ ٹو پوائنٹ FTL ترسیل۔
            </p>

            {/* FTL Exclusivity Notice Pill */}
            <div className="bg-slate-800/90 border border-amber-500/30 p-3.5 rounded-2xl flex items-center justify-end gap-3 text-right">
              <div className="text-xs text-slate-200 font-urdu leading-relaxed">
                🔒 <strong className="text-amber-400">صرف مکمل ٹرک (FTL):</strong> ہم عام لوز کارگو / پارسل ڈیل نہیں کرتے۔ ہر کلائنٹ کے لیے گاڑی مکمل مخصوص ہوتی ہے۔
              </div>
              <Lock className="w-5 h-5 text-amber-400 flex-shrink-0" />
            </div>

            {/* Feature Highlights Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 font-urdu">
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">فوری مخصوص گاڑی لوڈنگ</span>
              </div>

              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">مناسب و شفاف ریٹس</span>
              </div>

              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-xl text-xs sm:text-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">براہ راست مالکانہ رابطہ</span>
              </div>
            </div>

            {/* Conversion CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              
              {/* Primary Call CTA */}
              <a
                id="hero-call-now-btn"
                href={`tel:${COMPANY_INFO.phoneRaw1}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-6 py-4 rounded-xl shadow-xl shadow-amber-500/20 text-base sm:text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 pulse-glow font-urdu cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 fill-current" />
                <span>مکمل گاڑی بکنگ کے لیے کال کریں</span>
              </a>

              {/* Driver & Transport Management Web App CTA */}
              <a
                id="hero-open-app-btn"
                href={COMPANY_INFO.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-5 py-4 rounded-xl border border-blue-400/30 hover:border-blue-400 text-base transition-all shadow-lg shadow-blue-600/10 font-urdu cursor-pointer"
              >
                <span>آن لائن ٹرانسپورٹ پورٹل</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* WhatsApp Quick Quote CTA */}
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('السلام علیکم! وڑائچ گڈز ٹرانسپورٹ کمپنی سے مکمل گاڑی (FTL) کی لوڈنگ اور ریٹ معلوم کرنا ہے۔')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-4 rounded-xl border border-emerald-400/30 text-base transition-all font-urdu cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واٹس ایپ چیٹ</span>
              </a>

            </div>

            {/* Proprietor Quick Endorsement */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2 font-urdu">
              <Award className="w-4 h-4 text-amber-400" />
              <span>زیرنگرانی: <strong className="text-white">{COMPANY_INFO.proprietorUrdu}</strong> (پروپرائٹر و چیف ایگزیکٹو)</span>
            </div>

          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden">
              
              {/* Top Accent bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-blue-500"></div>
              
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
                <div className="text-right">
                  <h3 className="text-xl font-bold text-white font-urdu">مکمل ٹرک لوڈ (FTL) فلیٹ</h3>
                  <p className="text-xs text-slate-400">سنگل گاہک کی مخصوص گاڑی ہمہ وقت دستیاب</p>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-semibold font-urdu">
                  24/7 بکنگ فعال
                </div>
              </div>

              {/* Fleet Preview Snapshot 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                
                {/* 1. Shehzore */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-amber-400/40 transition-colors text-right">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">1-3.5 ٹن</span>
                    <Truck className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-urdu">شہزور (Shehzore)</h4>
                  <p className="text-[11px] text-slate-400">مکمل گاڑی ایکسپریس لوڈنگ</p>
                </div>

                {/* 2. Mazda */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-amber-400/40 transition-colors text-right">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">4-10 ٹن</span>
                    <Truck className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-urdu">مزدا 6 وہیلر</h4>
                  <p className="text-[11px] text-slate-400">انڈسٹریل و زرعی FTL ٹرک</p>
                </div>

                {/* 3. Sample Truck */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-amber-400/40 transition-colors text-right">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">8-16 ٹن</span>
                    <Truck className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-urdu">سیمپل ٹرک</h4>
                  <p className="text-[11px] text-slate-400">توسیع شدہ فریم و والیم FTL</p>
                </div>

                {/* 4. Bedford */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-amber-400/40 transition-colors text-right">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">15-28+ ٹن</span>
                    <Truck className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-urdu">بیڈفورڈ ہیوی</h4>
                  <p className="text-[11px] text-slate-400">ہیوی ڈیوٹی بلک FTL</p>
                </div>

              </div>

              {/* Quick Branch Highlights */}
              <div className="bg-slate-950/80 rounded-2xl p-3.5 border border-slate-800 text-xs space-y-2 font-urdu">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-amber-400">📍 سمندری ہیڈ آفس:</span>
                  <span className="font-mono">0300-5370443</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-amber-400">📍 کمالیہ برانچ:</span>
                  <span className="font-mono">0339-5370443</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
