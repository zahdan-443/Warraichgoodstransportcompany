import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyData';
import { CORRIDOR_SEO_PAGES } from '../data/corridorsData';

export const HomeSeoAuthoritySection: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <section
      id="nationwide-freight-guide"
      dir={isUrdu ? 'rtl' : 'ltr'}
      className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className={`max-w-3xl space-y-2.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
          <p className="text-xs font-semibold tracking-wide text-amber-700">
            {isUrdu
              ? 'سمندری و فیصل آباد ڈسپیچ · NTN 7779394-1 · 2008 سے خدمت میں'
              : 'Samundri & Faisalabad Dispatch · NTN 7779394-1 · Serving Since 2008'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight text-balance">
            {isUrdu
              ? 'سمندری، فیصل آباد اور پورے پاکستان میں مکمل گاڑی (FTL) مال برداری کا نظام'
              : 'Dedicated Full Truckload Freight & Home Shifting Across Pakistan'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isUrdu
              ? 'اوکاڑہ بائی پاس، نزد 466 چوک، سمندری میں واقع ہمارے مرکزی دفتر سے ضلع فیصل آباد اور پاکستان کے 42 سے زائد شہروں کے لیے براہِ راست کمرشل گاڑیاں اور گھریلو شفٹنگ کی سہولت فراہم کی جاتی ہے۔'
              : 'Operating directly from Okara Bypass, Near 466 Chowk, Samundri, Warraich Goods Transport Company dispatches dedicated single-party trucks across District Faisalabad and 42+ cities nationwide.'}
          </p>
        </div>

        {/* Two-Column Editorial Logistics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <article
            className={`bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-3 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">
              {isUrdu
                ? '01. سمندری و فیصل آباد سے براہِ راست ٹرک بکنگ'
                : '01. Direct Head-Office Dispatch from Samundri & Faisalabad'}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {isUrdu
                ? 'فیکٹریوں، ٹیکسٹائل ملز، غلہ منڈی کے آڑھتیوں اور گھریلو صارفین کے لیے ہم صرف مکمل گاڑی (Full Truckload) فراہم کرتے ہیں۔ کسی بھی روٹ پر روانگی سے پہلے پروپرائٹر زاہدان نصر وڑائچ کی نگرانی میں گاڑی، ٹائرز اور ڈبل واٹر پروف ترپال کا معائنہ کیا جاتا ہے تاکہ آپ کا مال بارش، دھوپ اور گرد و غبار سے محفوظ رہے۔'
                : 'Whether you are moving factory raw materials from Faisalabad textile corridors, agricultural produce from Samundri and Tandlianwala grain mandis, or household furniture to another province, every Shahzore pickup, Mazda 6-wheeler, Sample truck, and Bedford hauler is reserved exclusively for one customer with zero parcel mixing.'}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {isUrdu
                ? 'شہزور پک اپ (1 تا 3.5 ٹن)، مزدا 6 وہیلر (4 تا 10 ٹن)، سیمپل ایکسٹینڈڈ (8 تا 16 ٹن) اور بیڈفورڈ ہیوی ٹرک (15 تا 28+ ٹن) ہر وقت دستیاب ہیں۔ ڈرائیور کا براہِ راست موبائل نمبر اور تحریری بلٹی ہر ٹرپ میں شامل ہوتی ہے۔'
                : 'Under proprietor Zahdan Nasar Warraich, every dispatch includes pre-trip inspection, direct driver mobile contact, written official bilty documentation, computerized weighbridge scale slips, and transparent PKR freight pricing with no hidden charges.'}
            </p>
          </article>

          <article
            className={`bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-3 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">
              {isUrdu
                ? '02. کارپوریٹ انوائسنگ، بیک ہال روٹس اور قانونی شفافیت'
                : '02. Active FBR Compliance, Return Loads & All-Pakistan Coverage'}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {isUrdu
                ? `بطور فعال FBR ٹیکس دہندہ (NTN ${COMPANY_INFO.ntn}) ہم کارپوریٹ کمپنیوں، فلور و شوگر ملز اور صنعتی اداروں کو باقاعدہ ٹیکس انوائس، کمپیوٹرائزڈ کانٹا پرچی اور وصول کنندہ کی دستخط شدہ POD فراہم کرتے ہیں۔`
                : `As an active FBR-registered carrier (NTN ${COMPANY_INFO.ntn}), we provide formal tax invoicing, bank transfer billing, computerized weighbridge slips, and signed Proof of Delivery (POD) for textile mills, flour and sugar plants, steel suppliers, and corporate procurement teams.`}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {isUrdu
                ? 'ہم نہ صرف سمندری اور فیصل آباد سے لاہور، کراچی، اسلام آباد، راولپنڈی، ملتان، پشاور اور کوئٹہ کے لیے گاڑیاں بھجواتے ہیں بلکہ ان بڑے شہروں سے سمندری واپسی لوڈ (بیک ہال) کے لیے بھی مناسب کرایہ پر ٹرک مہیا کرتے ہیں۔'
                : 'Alongside outbound shipments from Samundri and Faisalabad, we arrange cost-effective return backhaul trucks from Karachi Port, Lahore, Islamabad, Rawalpindi, Multan, and Peshawar straight back to Samundri, Gojra, Jaranwala, and Toba Tek Singh.'}
            </p>
          </article>
        </div>

        {/* Regional Corridor Directory Links */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200">
            <div className={isUrdu ? 'font-urdu' : 'font-sans'}>
              <h3 className="text-lg font-bold text-slate-950">
                {isUrdu
                  ? 'اہم تجارتی روٹس اور واپسی لوڈ گائیڈز'
                  : 'Primary Freight Corridors & Backhaul Route Guides'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isUrdu
                  ? 'ہر روٹ کے ہائی وے سفر، متوقع وقت اور کرایہ کی تفصیلات دیکھیں'
                  : 'Explore dedicated highway routes, transit estimates, and truck options for key cities.'}
              </p>
            </div>
            <Link
              to="/service-areas"
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-600 whitespace-nowrap shrink-0 ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              <span>{isUrdu ? 'تمام 42+ شہر دیکھیں' : 'View all 42+ cities'}</span>
              <ArrowRight className={`w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CORRIDOR_SEO_PAGES.map((corridor) => (
              <Link
                key={corridor.slug}
                to={corridor.path}
                className="group border border-slate-200 hover:border-amber-500 rounded-lg p-3.5 transition-colors flex flex-col justify-between gap-2 bg-slate-50/70 hover:bg-amber-50/50"
              >
                <div className={isUrdu ? 'font-urdu' : 'font-sans'}>
                  <span className="text-[11px] font-mono text-slate-500 block">
                    {isUrdu ? corridor.transitUr : corridor.transitEn}
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-amber-700 mt-0.5 block">
                    {isUrdu ? corridor.titleUr : corridor.titleEn}
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold text-blue-700 ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <span>{isUrdu ? 'تفصیلات دیکھیں' : 'Route guide'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isUrdu ? 'rotate-180' : ''}`} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
