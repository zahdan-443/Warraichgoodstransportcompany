import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  PhoneCall, 
  CheckCircle,
  Truck,
  FileCheck,
  Zap,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 font-urdu">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>ہمارے بنیادی اصول و FTL فوائد</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-urdu">
            صنعتی ادارے اور تاجر وڑائچ گڈز کا انتخاب کیوں کرتے ہیں؟
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg font-urdu">
            تاجر برادری، ٹیکسٹائل ملز مالکان اور کسانوں کا اولین بااعتماد فل ٹرک لوڈ پارٹنر
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-right hover:shadow-md transition-all hover:border-amber-400">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 ml-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">24/7 ہمہ وقت دستیابی</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              دن ہو یا رات، ایمرجنسی لوڈنگ اور ارجنٹ کارگو کے لیے ہماری گاڑیاں فوراً دستیاب ہوتی ہیں۔
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-right hover:shadow-md transition-all hover:border-amber-400">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 ml-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">100٪ مخصوص سنگل لوڈ</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              گاڑی میں صرف آپ کا سامان، زیرو مکسنگ، واٹر پروف ترپالیں اور بغیر نقصان کے تیز ترین ترسیل۔
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-right hover:shadow-md transition-all hover:border-amber-400">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 ml-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">مارکیٹ مسابقتی FTL ریٹس</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              ڈائریکٹ اڈا اور مالکانہ رابطہ ہونے کی وجہ سے بغیر مڈل مین کے انتہائی مناسب اور شفاف کرایہ۔
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-right hover:shadow-md transition-all hover:border-amber-400">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 ml-auto">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-urdu">براہ راست پروپرائٹر رابطہ</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-urdu">
              پروپرائٹر زاہدان نصر وڑائچ سے براہ راست گفتگو اور ہر مرحلے پر لائیو کوآرڈینیشن۔
            </p>
          </div>
        </div>

        {/* Official Registration Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold font-urdu mb-1">
              <FileCheck className="w-3.5 h-3.5" />
              <span>قانونی و ٹیکس تصدیق شدہ</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-urdu">
              گورنمنٹ آف پاکستان نیشنل ٹیکس نمبر (NTN: {COMPANY_INFO.ntn})
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-urdu">
              ہماری کمپنی مکمل طور پر رجسٹرڈ ہے اور تمام صنعتی و کاروباری کلائنٹس کو باقاعدہ چالان اور ٹیکس دستاویزات فراہم کی جاتی ہیں۔
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw1}`}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-lg font-urdu whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 fill-current" />
            <span>بکنگ ہیلپ لائن: {COMPANY_INFO.phone1}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
