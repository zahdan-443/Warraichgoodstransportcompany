import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  FileText, 
  ShieldCheck,
  Navigation,
  Scale,
  Clock,
  Truck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyData';
import { TRANSLATIONS } from '../data/translations';

export const BiltyTrackingSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].tracking;

  const [inputBilty, setInputBilty] = useState<string>('');
  const [activeReference, setActiveReference] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const sampleCodes = ['CN-452', 'FD-7844', 'LE-3190', 'CN-1048'];

  const corridorsList = [
    {
      corridorUr: 'سمندری / کمالیہ ⇋ کراچی پورٹ (KPT / QICT)',
      corridorEn: 'Samundri / Kamalia ⇋ Karachi Port Hubs',
      highwayUr: 'براستہ M-4، M-5 سکھر ملتان موٹروے و نیشنل ہائی وے',
      highwayEn: 'Via M-4, M-5 Motorway & N-5 National Highway',
      transitUr: '24 تا 30 گھنٹے (نان اسٹاپ ایکسپریس FTL)',
      transitEn: '24 - 30 Hours (Dedicated FTL)',
      tagUr: 'بندرگاہ روٹ',
      tagEn: 'Port Hub',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
    },
    {
      corridorUr: 'سمندری / کمالیہ ⇋ لاہور، شیخوپورہ و گوجرانوالہ',
      corridorEn: 'Samundri / Kamalia ⇋ Lahore & Gujranwala Belts',
      highwayUr: 'براستہ M-3 موٹروے (رجانہ / شرقپور انٹرچینج)',
      highwayEn: 'Via M-3 Motorway (Rajana / Sharqpur Link)',
      transitUr: '3 تا 4 گھنٹے (سیم ڈے ڈلیوری)',
      transitEn: '3 - 4 Hours (Same-Day Transit)',
      tagUr: 'انڈسٹریل روٹ',
      tagEn: 'Industrial',
      tagColor: 'bg-slate-100 text-slate-800 border-slate-200',
    },
    {
      corridorUr: 'سمندری / کمالیہ ⇋ راولپنڈی، اسلام آباد و خیبر پختونخوا',
      corridorEn: 'Samundri / Kamalia ⇋ Rawalpindi, Islamabad & KPK',
      highwayUr: 'براستہ M-4 تا M-2 موٹروے و ایم-1 برہان / پشاور کوریڈور',
      highwayEn: 'Via M-4, M-2 & M-1 Motorway Corridors',
      transitUr: '6 تا 8 گھنٹے (اسلام آباد) | 10 تا 12 گھنٹے (پشاور)',
      transitEn: '6 - 8 Hrs (Islamabad) | 10 - 12 Hrs (Peshawar)',
      tagUr: 'ناردرن ہب',
      tagEn: 'Northern Hub',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
    },
    {
      corridorUr: 'سمندری / کمالیہ ⇋ ملتان، بہاولپور، صادق آباد و سندھ',
      corridorEn: 'Samundri / Kamalia ⇋ Multan, Sadiqabad & Upper Sindh',
      highwayUr: 'براستہ M-4 و M-5 موٹروے ڈائریکٹ لنک',
      highwayEn: 'Via M-4 & M-5 Motorway Direct Link',
      transitUr: '3 تا 5 گھنٹے (ملتان/بہاولپور) | 8 تا 10 گھنٹے (سکھر)',
      transitEn: '3 - 5 Hrs (Multan) | 8 - 10 Hrs (Sukkur)',
      tagUr: 'جنوبی کوریڈور',
      tagEn: 'South Lane',
      tagColor: 'bg-slate-100 text-slate-800 border-slate-200',
    },
  ];

  const handleTrack = (code?: string) => {
    const query = (code || inputBilty).trim().toUpperCase();
    if (!query) return;

    setActiveReference(query);
    setHasSearched(true);
  };

  const handleSelectSample = (sample: string) => {
    setInputBilty(sample);
    handleTrack(sample);
  };

  // WhatsApp prefilled message
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw1}?text=${encodeURIComponent(
    language === 'ur'
      ? `السلام علیکم زاہدان بھائی! میں وڑائچ گڈز ٹرانسپورٹ کی بلٹی / گاڑی نمبر [${activeReference || inputBilty || 'CN-Ref'}] کی لائیو لوکیشن اور ڈرائیور اپڈیٹ معلوم کرنا چاہتا ہوں۔`
      : `Hello Zahdan brother! I would like to get the live location and driver update for Warraich Goods Bilty / Vehicle # [${activeReference || inputBilty || 'CN-Ref'}].`
  )}`;

  return (
    <section 
      id="tracking" 
      className="py-14 sm:py-20 bg-slate-100/90 border-y border-slate-200 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs sm:text-sm font-bold mb-3 font-urdu shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu leading-relaxed">
            {t.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-urdu leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Tracking Input Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200 p-5 sm:p-7 mb-10">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleTrack();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={inputBilty}
                onChange={(e) => setInputBilty(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm sm:text-base font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors uppercase placeholder:normal-case placeholder:font-sans"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-sm font-urdu whitespace-nowrap min-h-[48px] cursor-pointer"
            >
              <span>{t.btnTrack}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Test Chips */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-urdu font-medium mr-1">
              {t.sampleNotice}
            </span>
            {sampleCodes.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleSelectSample(code)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 border border-slate-200 hover:border-blue-300 font-mono transition-colors text-[11px] cursor-pointer"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Result Card when user has searched */}
        {hasSearched && activeReference && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-12 animate-fadeIn">
            {/* Header */}
            <div className="bg-slate-900 text-white p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded font-mono">
                      {language === 'ur' ? 'کنسائنمنٹ ریفرنس' : 'CONSIGNMENT REF'}
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-black font-mono tracking-wide text-white">
                    {activeReference}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 font-urdu">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{language === 'ur' ? 'مستند FTL کنسائنمنٹ ٹرانزٹ' : 'Verified Dedicated FTL Transit'}</span>
                </div>
              </div>
            </div>

            {/* Explanation & Action Box */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-4 sm:p-5 text-slate-800 space-y-2 font-urdu">
                <p className="font-bold text-base text-blue-950 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-blue-700 flex-shrink-0" />
                  <span>
                    {language === 'ur' 
                      ? `بلٹی / گاڑی نمبر [${activeReference}] کی براہِ راست ٹریکنگ`
                      : `Direct Transit Tracking for [${activeReference}]`}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {language === 'ur'
                    ? 'وڑائچ گڈز پر ہر گاڑی آپ کے گودام یا فیکٹری سے لوڈ ہو کر کسی درمیانی مقام پر رکے بغیر سیدھی منزل کے لیے روانہ ہوتی ہے۔ ڈرائیور سے براہِ راست رابطہ اور واٹس ایپ پر تازہ لوکیشن معلوم کرنے کے لیے نیچے بٹن دبائیں:'
                    : 'Warraich Goods operates dedicated Full Truckload (FTL) express service without intermediary transshipments. Use the direct buttons below to receive the truck driver’s live GPS coordinates and direct cellular status.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-lg shadow-sm text-sm sm:text-base transition-colors font-urdu cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.contactDispatcher}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw1}`}
                  className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold p-4 rounded-lg shadow-sm text-sm sm:text-base transition-colors font-urdu cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.callHelpline}</span>
                </a>
              </div>

              {/* Guarantee highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-xs font-urdu text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{language === 'ur' ? '100% سنگل پارٹی لوڈ' : '100% Single-Party Load'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{language === 'ur' ? 'ڈبل واٹر پروف ترپال' : 'Double Waterproof Tarpaulin'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{language === 'ur' ? 'نادرا تصدیق شدہ ڈرائیور' : 'NADRA Verified Driver'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Pillars of Authentic FTL Tracking */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="text-center mb-6">
            <p className="text-lg sm:text-xl font-bold text-slate-900 font-urdu">
              {language === 'ur' ? 'وڑائچ گڈز میں بلٹی اور گاڑی ٹریکنگ کا اصل طریقہ کار' : 'How Genuine FTL Freight Tracking Works at Warraich Goods'}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-urdu">
              {language === 'ur' 
                ? 'ہم کسی فرضی GPS اینیمیشن کے بجائے حقیقی اور براہِ راست رابطے کے اصول پر عمل کرتے ہیں:'
                : 'Instead of simulated animations, we provide direct cellular and real-time location sharing:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Pillar 1 */}
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <p className="font-bold text-slate-900 text-base font-urdu mb-1.5">
                {language === 'ur' ? '1. ڈرائیور کا ذاتی موبائل رابطہ' : '1. Direct Driver Cellular Contact'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {language === 'ur'
                  ? 'گاڑی لوڈ ہو کر روانہ ہوتے ہی گاہک کو ڈرائیور کا نادرا تصدیق شدہ موبائل نمبر فراہم کیا جاتا ہے تاکہ سفر کے دوران کسی بھی لمحے براہِ راست بات کی جا سکے۔'
                  : 'Upon dispatch, the customer receives the assigned driver’s direct mobile contact for instant communication anytime during the highway journey.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="font-bold text-slate-900 text-base font-urdu mb-1.5">
                {language === 'ur' ? '2. واٹس ایپ لائیو پن لوکیشن' : '2. WhatsApp Live GPS Pin Sharing'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {language === 'ur'
                  ? 'موٹروے یا جی ٹی روڈ پر سفر کے دوران ڈرائیور واٹس ایپ پر لائیو لوکیشن پن شیئر کرتا ہے جس سے گاہک اپنی گاڑی کی اصل رفتار اور مقام خود دیکھ سکتا ہے۔'
                  : 'Drivers share live WhatsApp GPS location pins along motorways so clients can track the exact vehicle movement in real time.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <p className="font-bold text-slate-900 text-base font-urdu mb-1.5">
                {language === 'ur' ? '3. کمپیوٹرائزڈ کانٹا و رسید دستخط' : '3. Scale Slip & Signed Delivery'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                {language === 'ur'
                  ? 'مال لوڈنگ پر کمپیوٹرائزڈ وزن پرچی اور منزل پر سامان پہنچنے پر گاہک کے دستخط شدہ بلٹی ثبوت کے طور پر فراہم کی جاتی ہے۔'
                  : 'Official computerized weighbridge scale slips at loading and signed bilty receipts at consignee delivery ensure 100% legal clarity.'}
              </p>
            </div>
          </div>
        </div>

        {/* National Corridors & Highway Transit Times Grid */}
        <div className="max-w-5xl mx-auto mt-10 sm:mt-14 pt-8 border-t border-slate-200/80">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold font-urdu mb-2">
              <Truck className="w-3.5 h-3.5 text-slate-700" />
              <span>{t.corridorsBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-urdu">
              {t.corridorsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto font-urdu">
              {t.corridorsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {corridorsList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-4 sm:p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border font-urdu ${item.tagColor}`}>
                      {language === 'ur' ? item.tagUr : item.tagEn}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{language === 'ur' ? item.transitUr : item.transitEn}</span>
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-urdu mb-1">
                    {language === 'ur' ? item.corridorUr : item.corridorEn}
                  </h4>
                  <p className="text-xs text-slate-600 font-urdu leading-relaxed">
                    {language === 'ur' ? item.highwayUr : item.highwayEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
