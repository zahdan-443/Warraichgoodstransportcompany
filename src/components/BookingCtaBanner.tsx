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
        <div data-reveal="" className="bg-slate-850/80 border border-slate-700/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main Column */}
            <div className={`lg:col-span-8 space-y-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold font-urdu">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>{isUrdu ? '100% شفاف ریٹس و کمپیوٹرائزڈ بلٹی' : '100% Transparent Rates & Verified Bilty'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-urdu tracking-tight leading-snug text-white">
                {isUrdu 
                  ? 'اپنی مطلوبہ گاڑی کا آن لائن کرایہ معلوم کریں اور فوری بکنگ حاصل کریں' 
                  : 'Calculate Instant Freight Rates & Book Your Dedicated Truckload'}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base font-urdu leading-relaxed max-w-3xl">
                {isUrdu
                  ? 'ہم پورے پاکستان کے لیے محفوظ اور بروقت مال برداری اور شفٹنگ کی خدمات فراہم کرتے ہیں۔ مناسب ریٹ اور بہترین سروس ہماری پہچان ہے۔ مزدا ٹرک، شہزور پک اپ اور ہیوی ٹرکس کی 24/7 فوری آن لائن بکنگ۔'
                  : 'Warraich Goods Transport Company offers trusted home shifting, office relocation, commercial load delivery, and fast vehicle booking across Pakistan with versatile Mazda trucks, Shahzore pickups, and heavy haulers.'}
              </p>

              {/* Guarantees Strip (Clean unboxed inline) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200 font-urdu bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{isUrdu ? 'صرف سنگل پارٹی فل لوڈ' : 'Single-Party Dedicated FTL'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-urdu bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-700/60">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{isUrdu ? '24/7 فوری روانگی و ٹریکنگ' : '24/7 Express Dispatch'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-urdu bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-700/60">
                  <Truck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{isUrdu ? 'ڈبل واٹر پروف ترپال تحفظ' : 'Waterproof Tarpaulin'}</span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
              <Link
                to="/booking"
                className="cta-subtle-pulse w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-4 rounded-xl text-sm sm:text-base font-urdu transition-all duration-200 shadow-lg hover:shadow-amber-500/20 active:scale-98 min-h-[52px]"
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
                {COMPANY_INFO.phone1}
              </p>
            </div>

          </div>

          {/* Expanded Informational Freight Logistics Content (Enhances Visibility & Text-to-HTML Ratio) */}
          <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
            <div className={`space-y-2 ${isUrdu ? 'text-right font-urdu' : 'text-left'}`}>
              <h3 className="text-white text-sm sm:text-base font-bold font-urdu">
                {isUrdu ? '24/7 ملک گیر مال برداری و شفٹنگ' : '24/7 Nationwide Goods Transport & Shifting'}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {isUrdu
                  ? 'وڑائچ گڈز ٹرانسپورٹ کمپنی روزانہ کی بنیاد پر پورے پاکستان کے تمام شہروں اور صنعتی روٹس کے لیے نان اسٹاپ مزدا ٹرکس، شہزور پک اپس اور ہیوی ہالرز روانہ کرتی ہے۔'
                  : 'Operating daily reliable freight dispatches across all major cities, commercial hubs, and nationwide corridors across Pakistan since 2020.'}
              </p>
            </div>

            <div className={`space-y-2 ${isUrdu ? 'text-right font-urdu' : 'text-left'}`}>
              <h3 className="text-white text-sm sm:text-base font-bold font-urdu">
                {isUrdu ? '100% مخصوص فل لوڈ و قانونی تحفظ' : 'Single-Shipper Integrity & FBR Compliance'}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {isUrdu
                  ? 'ہم کسی بھی قسم کا لوز کارگو، پارسل یا مخلوط سامان نہیں لادتے۔ ہر بکنگ پر کمپیوٹرائزڈ کانٹا پرچی، اصل بلٹی اور رجسٹرڈ انکم ٹیکس و سیلز ٹیکس انوائس فراہم کی جاتی ہے۔'
                  : 'Strict zero mixed cargo policy. Every consignment is supported by computerized weighbridge scale slips, verified bilty documentation, and FBR NTN tax compliance.'}
              </p>
            </div>

            <div className={`space-y-2 ${isUrdu ? 'text-right font-urdu' : 'text-left'}`}>
              <h3 className="text-white text-sm sm:text-base font-bold font-urdu">
                {isUrdu ? 'ملک گیر ہائی وے و موٹروے نیٹ ورک' : 'Nationwide Motorway & Highway Corridors'}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {isUrdu
                  ? 'موٹروے ایم-4، ایم-2، ایم-3، ایم-5 اور قومی شاہراہ این-5 کے ذریعے لاہور، کراچی، راولپنڈی، اسلام آباد، پشاور، ملتان، کوئٹہ اور تمام صنعتی زونز تک برق رفتار محفوظ ترسیل۔'
                  : 'Fast point-to-point transit via Motorways M-4, M-2, M-3, M-5 and National Highway N-5 to Lahore, Karachi Port, Islamabad, Multan, and major economic corridors.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
