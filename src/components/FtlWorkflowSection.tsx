import React from 'react';
import { 
  Phone, 
  Truck, 
  Scale, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Layers, 
  AlertCircle,
  Building2,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FtlWorkflowSection: React.FC = () => {
  const workflowSteps = [
    {
      stepNumber: '01',
      titleUrdu: 'فوری رابطہ اور FTL کوٹیشن',
      titleEnglish: '1. Instant Inquiry & Dedicated Truck Quote',
      descUrdu: 'کال یا واٹس ایپ کے ذریعے اپنے سامان کی نوعیت، وزن اور لوڈنگ/ان لوڈنگ لوکیشن بتائیں۔ آپ کو فوری مکمل گاڑی (FTL) کا فکسڈ شفاف ریٹ دیا جائے گا۔',
      icon: Phone,
      tag: '5 منٹ رسپانس'
    },
    {
      stepNumber: '02',
      titleUrdu: 'مخصوص گاڑی کی بروقت آمد',
      titleEnglish: '2. Vehicle Dispatch to Loading Point',
      descUrdu: 'شہزور، مزدا، سیمپل یا بیڈفورڈ میں سے موزوں ترین گاڑی فوری طور پر آپ کے گودام، فیکٹری یا غلہ منڈی میں لوڈنگ کے لیے حاضر کر دی جاتی ہے۔',
      icon: Truck,
      tag: '100% مخصوص گاڑی'
    },
    {
      stepNumber: '03',
      titleUrdu: 'محفوظ لوڈنگ و کمپیوٹر کانٹا',
      titleEnglish: '3. Professional Loading & Tarpaulin Protection',
      descUrdu: 'سامان کو گاڑی میں محفوظ طریقے سے لوڈ کیا جاتا ہے، کمپیوٹرائزڈ کانٹا پرچی کے مطابق وزن کا تعین اور ڈبل واٹر پروف ترپال باندھی جاتی ہے۔',
      icon: Scale,
      tag: 'مکمل واٹر پروفنگ'
    },
    {
      stepNumber: '04',
      titleUrdu: 'براہ راست نان اسٹاپ ترسیل',
      titleEnglish: '4. Direct Non-Stop Transit & Handover',
      descUrdu: 'گاڑی بغیر کسی درمیانی اسٹاپ یا گودام ٹرانسفر کے سیدھی آپ کی منزل پر پہنچتی ہے اور دستخط شدہ رسید کے ساتھ مال کلائنٹ کے حوالے ہوتا ہے۔',
      icon: CheckCircle2,
      tag: 'زیرو کارگو مکسنگ'
    }
  ];

  const ftlPillars = [
    {
      icon: Zap,
      titleUrdu: 'براہ راست تیز ترین ترسیل (Non-Stop Transit)',
      descUrdu: 'عام پارسل (LTL) کے برعکس، FTL میں گاڑی کسی اور کا مال اٹھانے کے لیے نہیں رکتی۔ لوڈنگ کے بعد گاڑی سیدھی منزل کی طرف روانہ ہوتی ہے۔'
    },
    {
      icon: Lock,
      titleUrdu: '100% محفوظ — کوئی سامان مکس نہیں ہوتا',
      descUrdu: 'پوری گاڑی میں صرف اور صرف آپ کا مال لوڈ ہوتا ہے۔ کسی دوسرے گاہک کا سامان ساتھ نہ ہونے کی وجہ سے گمشدگی یا ٹوٹ پھوٹ کا خطرہ صفر ہے۔'
    },
    {
      icon: ShieldCheck,
      titleUrdu: 'گوداموں میں سامان کی بار بار ان لوڈنگ نہیں',
      descUrdu: 'LTL سروسز میں سامان کو بار بار مختلف گوداموں میں منتقل کیا جاتا ہے جس سے نقصان ہوتا ہے۔ FTL میں گاڑی لوڈ ہو کر سیدھی ان لوڈنگ پوائنٹ پر ہی کھلتی ہے۔'
    },
    {
      icon: Clock,
      titleUrdu: 'آپ کی مرضی کا شیڈول اور ٹائمنگ',
      descUrdu: 'گاڑی کب لوڈ ہونی ہے اور کب پہنچنی ہے، یہ وقت آپ اپنی کاروباری ضرورت کے مطابق طے کرتے ہیں۔ 24 گھنٹے سروس دستیاب ہے۔'
    }
  ];

  return (
    <section id="ftl-workflow" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>100% فل ٹرک لوڈ (FTL) بکنگ طریقہ کار</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-urdu">
            صرف مکمل وقف گاڑی (Full Truckload) — آسان اور تیز ترین بکنگ
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg font-urdu">
            ہم لوز پارسل یا پارٹ لوڈ (LTL) ڈیل نہیں کرتے۔ ہمارے پاس صرف سنگل پارٹی کی مکمل مخصوص گاڑی ڈائریکٹ بک کی جاتی ہے۔
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-right">
          {workflowSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/50 rounded-3xl p-6 relative transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400 font-mono">
                      {s.stepNumber}
                    </span>
                    <span className="bg-slate-900 text-amber-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full font-urdu">
                      {s.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-urdu mb-1">
                    {s.titleUrdu}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-display mb-3">
                    {s.titleEnglish}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                    {s.descUrdu}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FTL Core Advantages vs Loose Cargo Notice Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8 text-right">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold font-urdu mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>کاروباری اداروں اور فیکٹریوں کے لیے بہترین انتخاب</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-urdu">
                فل ٹرک لوڈ (FTL) کے اہم فوائد
              </h3>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 text-xs text-amber-300 max-w-md font-urdu">
              ⚠️ <strong className="text-amber-400">واضح پالیسی:</strong> وڑائچ گڈز ٹرانسپورٹ کمپنی لوز کارگو / پارسل (LTL) بک نہیں کرتی۔ ہماری تمام گاڑیاں سنگل پارٹی کے مکمل لوڈ کے لیے وقف ہوتی ہیں۔
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            {ftlPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white font-urdu">
                      {p.titleUrdu}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-urdu">
                      {p.descUrdu}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct CTA */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-urdu">
            <span className="text-slate-400">
              کیا آپ کو فیکٹری خام مال، زرعی غلہ یا ہیوی سامان کے لیے مکمل گاڑی چاہیے؟
            </span>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition cursor-pointer text-sm font-urdu shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>ابھی گاڑی بک کریں ({COMPANY_INFO.phone1})</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
