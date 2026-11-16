import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  ArrowRight,
  Receipt,
  Users,
  Wallet,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BookingTrustGuidesProps {
  onSelectVehicle?: (vehicleId: string) => void;
  bgClass?: string;
}

export const BookingTrustGuides: React.FC<BookingTrustGuidesProps> = ({
  onSelectVehicle,
  bgClass = 'bg-white',
}) => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const truckFitTiers = [
    {
      id: 'shehzore',
      nameEn: 'Shahzore Pickup',
      nameUr: 'شہزور پک اپ',
      specEn: '1 – 3.5 Tons • 10–12 ft',
      specUr: '1 تا 3.5 ٹن • 10 تا 12 فٹ',
      bestForEn: '1–2 room house shifting, shop stock, or 15–35 grain/seed sacks.',
      bestForUr: '1 سے 2 کمروں کا گھریلو سامان، دکان اسٹاک یا 15 تا 35 زرعی بوریاں۔',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      id: 'mazda',
      nameEn: 'Mazda 6-Wheeler',
      nameUr: 'مزدا 6 وہیلر',
      specEn: '4 – 10 Tons • 14–18 ft',
      specUr: '4 تا 10 ٹن • 14 تا 18 فٹ',
      bestForEn: '3–4 bed house shifting, 40–100 grain/sugar bags, yarn & fabric.',
      bestForUr: 'مکمل گھر شفٹنگ، 40 تا 100 چینی/غلہ بوریاں یا ٹیکسٹائل دھاگہ و کپڑا۔',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      id: 'sample',
      nameEn: 'Sample Extended',
      nameUr: 'سیمپل ٹرک',
      specEn: '8 – 16 Tons • 18–22 ft',
      specUr: '8 تا 16 ٹن • 18 تا 22 فٹ',
      bestForEn: 'High-volume factory cartons, poultry feed, cotton bales & chemical drums.',
      bestForUr: 'زیادہ والیم والے کارٹن، پولٹری فیڈ، کاٹن بیلز اور فیکٹری خام مال۔',
      badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      id: 'bedford',
      nameEn: 'Bedford Heavy',
      nameUr: 'بیڈفورڈ ہیوی ٹرک',
      specEn: '15 – 28+ Tons • 22–28+ ft',
      specUr: '15 تا 28+ ٹن • 22 تا 28+ فٹ',
      bestForEn: 'Heavy plant machinery, steel girders, cement & Karachi Port long-hauls.',
      bestForUr: 'ہیوی مشینری، لوہا و اسٹیل، سیمنٹ اور کراچی پورٹ کے طویل روٹس۔',
      badgeClass: 'bg-slate-100 text-slate-800 border-slate-300',
    },
  ];

  const transparencyPoints = [
    {
      icon: Receipt,
      titleEn: 'Motorway & Highway Toll Tax',
      titleUr: 'موٹروے و ہائی وے ٹول ٹیکس',
      descEn: 'All route toll charges (M-3, M-4, M-5) are clarified upfront before truck dispatch with zero surprise fees.',
      descUr: 'روٹ کے تمام ٹول ٹیکس (M-3، M-4، M-5) روانگی سے پہلے طے کیے جاتے ہیں، کوئی پوشیدہ چارجز نہیں۔',
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: Users,
      titleEn: 'Loading Labor & Packing Options',
      titleUr: 'لوڈنگ لیبر اور پیکنگ سہولت',
      descEn: 'Standard quotes cover dedicated truck transport; loading/unloading labor and packing wraps can be arranged on request.',
      descUr: 'بنیادی کرایہ صرف مکمل گاڑی کا ہوتا ہے؛ ضرورت پڑنے پر لوڈنگ/ان لوڈنگ لیبر اور پیکنگ کا انتظام الگ ہو سکتا ہے۔',
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      icon: Wallet,
      titleEn: 'Clear Advance & Delivery Payment',
      titleUr: 'ادائیگی کا شفاف طریقہ کار',
      descEn: 'Agreed partial advance upon loading and computer scale slip, with the balance settled safely upon unloading.',
      descUr: 'لوڈنگ اور کانٹا پرچی کے وقت طے شدہ ایڈوانس اور باقی کرایہ منزل پر سامان پہنچنے کے بعد ادا کیا جاتا ہے۔',
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: ShieldCheck,
      titleEn: '100% Dedicated Single-Party Load',
      titleUr: 'صرف سنگل پارٹی فل لوڈ پالیسی',
      descEn: 'You never share space with another shipper. Sealed tarpaulins, verified bilty, and direct driver contact included.',
      descUr: 'گاڑی میں کسی دوسرے کا مال نہیں رکھا جاتا۔ مضبوط ترپال، آفیشل بلٹی اور ڈرائیور کا نمبر ساتھ ملتا ہے۔',
      iconColor: 'text-slate-700 bg-slate-100 border-slate-300',
    },
  ];

  return (
    <section className={`py-10 sm:py-14 ${bgClass} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* 1. Which Truck Fits Your Load? */}
        <div>
          <div data-reveal="" className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 block mb-1">
              {isUrdu ? 'گاڑی کا درست انتخاب' : 'Load Fit Guide'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-black text-slate-950 tracking-tight ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'آپ کے سامان کے لیے کون سی گاڑی موزوں ہے؟' : 'Which Truck Fits Your Load?'}
            </h2>
            <p className={`mt-1.5 text-xs sm:text-sm text-slate-600 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'وزن اور سامان کی نوعیت کے مطابق درست گاڑی منتخب کر کے فوری کرایہ معلوم کریں۔'
                : 'Match your house size or commercial cargo weight to the right dedicated vehicle.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {truckFitTiers.map((tier, idx) => (
              <div
                key={tier.id}
                data-reveal=""
                style={{ '--reveal-delay': `${idx * 60}ms` } as React.CSSProperties}
                className="bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-xl p-5 flex flex-col justify-between shadow-2xs card-interactive group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 card-icon-nudge">
                      <Truck className="w-4 h-4" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border font-mono ${tier.badgeClass}`}>
                      {isUrdu ? tier.specUr : tier.specEn}
                    </span>
                  </div>
                  <h3 className={`text-base font-black text-slate-950 mb-1.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? tier.nameUr : tier.nameEn}
                  </h3>
                  <p className={`text-xs text-slate-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? tier.bestForUr : tier.bestForEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  {onSelectVehicle ? (
                    <button
                      type="button"
                      onClick={() => onSelectVehicle(tier.id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-amber-600 cursor-pointer transition-colors ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                    >
                      <span>{isUrdu ? 'یہ گاڑی منتخب کریں ←' : 'Select this truck →'}</span>
                    </button>
                  ) : (
                    <Link
                      to="/booking"
                      state={{ vehicleId: tier.id }}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-amber-600 transition-colors ${isUrdu ? 'font-urdu' : 'font-sans'}`}
                    >
                      <span>{isUrdu ? 'کرایہ معلوم کریں' : 'Check rate'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Rate, Toll & Labor Transparency */}
        <div
          data-reveal=""
          className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-2xs"
        >
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200 ${isUrdu ? 'text-right' : 'text-left'}`}>
            <div>
              <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-amber-600 block">
                {isUrdu ? 'شفاف پالیسی' : 'Transparent Booking Terms'}
              </span>
              <h3 className={`text-lg sm:text-xl font-black text-slate-950 mt-0.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                {isUrdu ? 'کرایہ، ٹول ٹیکس، لیبر اور ادائیگی کی مکمل وضاحت' : 'Rate, Toll Tax, Labor & Payment Clarity'}
              </h3>
            </div>
            <Link
              to="/faq"
              className={`text-xs font-bold text-blue-700 hover:text-blue-900 whitespace-nowrap ${isUrdu ? 'font-urdu' : 'font-sans'}`}
            >
              {isUrdu ? 'مزید سوالات (FAQ) دیکھیں ←' : 'Read full FAQs →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {transparencyPoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col gap-2.5"
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${pt.iconColor}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className={`text-xs sm:text-sm font-bold text-slate-900 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? pt.titleUr : pt.titleEn}
                  </h4>
                  <p className={`text-xs text-slate-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? pt.descUr : pt.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
