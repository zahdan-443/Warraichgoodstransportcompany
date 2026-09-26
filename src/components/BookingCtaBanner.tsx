import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Truck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const BookingCtaBanner: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    isUrdu 
      ? 'السلام علیکم! میں وڑائچ گڈز ٹرانسپورٹ کمپنی سے لوڈنگ اور مکمل گاڑی (FTL) بکنگ و کرایہ معلوم کرنا چاہتا ہوں۔' 
      : 'Hello! I would like to inquire about FTL truck booking and freight rates with Warraich Goods Transport.'
  )}`;

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-850/80 border border-slate-700/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main Column */}
            <div className={`lg:col-span-8 space-y-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold font-urdu">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{isUrdu ? '100% شفاف ریٹس و کمپیوٹرائزڈ بلٹی' : '100% Transparent Rates & Verified Bilty'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-urdu tracking-tight leading-snug text-white">
                {isUrdu 
                  ? 'اپنی مطلوبہ گاڑی کا آن لائن کرایہ معلوم کریں اور فوری بکنگ حاصل کریں' 
                  : 'Calculate Instant Freight Rates & Book Your Dedicated Truckload'}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base font-urdu leading-relaxed max-w-3xl">
                {isUrdu
                  ? 'سمندری بائی پاس، کمالیہ رجانہ روڈ، فیصل آباد انڈسٹریل زون، لاہور، کراچی پورٹ اور ملک بھر کے تمام روٹس کے لیے شہزور، مزدا 6 وہیلر، سیمپل ٹرک اور بیڈفورڈ ہیوی ٹرکس کی باآسانی بکنگ۔ کوئی پوشیدہ چارجز نہیں۔'
                  : 'Instant online FTL cost estimation for Hyundai Shehzore, Mazda 6-wheeler, Sample truck, and Bedford heavy trailers from Samundri, Kamalia, and nationwide industrial hubs. Zero hidden charges.'}
              </p>

              {/* Badges / Guarantees Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200 font-urdu bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{isUrdu ? 'صرف سنگل پارٹی فل لوڈ' : 'Single-Party Dedicated FTL'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-urdu bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{isUrdu ? '24/7 فوری روانگی و ٹریکنگ' : '24/7 Express Dispatch'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-urdu bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60">
                  <Truck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{isUrdu ? 'ڈبل واٹر پروف ترپال تحفظ' : 'Waterproof Tarpaulin'}</span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
              <Link
                to="/booking"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-4 rounded-xl text-sm sm:text-base font-urdu transition-all duration-200 shadow-lg hover:shadow-amber-500/20 active:scale-98 min-h-[52px]"
              >
                <Calculator className="w-5 h-5 flex-shrink-0" />
                <span>{isUrdu ? 'آن لائن کرایہ کیلکولیٹر کھولیں' : 'Open Freight Rate Calculator'}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold px-3 py-3 rounded-lg text-xs font-urdu border border-slate-700 transition-colors min-h-[44px]"
                  aria-label="Call Warraich Goods Helpline"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isUrdu ? 'فوری کال کریں' : 'Call Helpline'}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-3 rounded-lg text-xs font-urdu transition-colors min-h-[44px]"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{isUrdu ? 'واٹس ایپ بکنگ' : 'WhatsApp'}</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-slate-400 font-mono">
                {COMPANY_INFO.phone1} • {COMPANY_INFO.phone2}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
