import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  Loader2,
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck,
  Navigation,
  Scale,
  Clock,
  Truck,
  Calendar,
  Package,
  FileCheck2,
  Lock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyData';
import { TRANSLATIONS } from '../data/translations';
import { verifyBiltyRecord, normalizeBiltyNo, VerificationResult, PublicBiltyRecord } from '../lib/firebase';

interface BiltyTrackingSectionProps {
  condensed?: boolean;
}

export const BiltyTrackingSection: React.FC<BiltyTrackingSectionProps> = ({ condensed = false }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].tracking;

  const [searchParams] = useSearchParams();
  const [inputBilty, setInputBilty] = useState<string>('');
  const [activeReference, setActiveReference] = useState<string>('');

  // Verification states
  const [loading, setLoading] = useState<boolean>(false);
  const [verifiedRecord, setVerifiedRecord] = useState<PublicBiltyRecord | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const sampleCodes = ['WGT-4431', 'WGT-8924', 'CN-452', 'FD-7844'];

  // Parse QR Code URL parameters automatically on load
  // Supports: ?page=verify&bilty=WGT-1234 or ?bilty=WGT-1234
  useEffect(() => {
    const pageParam = searchParams.get('page');
    const biltyParam = searchParams.get('bilty') || searchParams.get('id') || searchParams.get('biltyNo');

    if (biltyParam || (pageParam === 'verify' && biltyParam)) {
      const targetBilty = biltyParam || '';
      setInputBilty(targetBilty);
      handlePerformVerification(targetBilty);
    }
  }, [searchParams]);

  const handlePerformVerification = async (codeToVerify: string) => {
    const cleaned = normalizeBiltyNo(codeToVerify);
    if (!cleaned) return;

    setActiveReference(cleaned);
    setLoading(true);
    setHasSearched(true);
    setVerifiedRecord(null);
    setNotFound(false);
    setErrorMessage(null);

    try {
      const result: VerificationResult = await verifyBiltyRecord(cleaned);

      if (result.status === 'VERIFIED') {
        setVerifiedRecord(result.record);
      } else if (result.status === 'NOT_FOUND') {
        setNotFound(true);
      } else {
        setErrorMessage(result.message);
      }
    } catch (err: any) {
      console.error('Bilty verification error:', err);
      setErrorMessage(
        language === 'ur'
          ? 'تصدیق ممکن نہیں ہو سکی — براہ کرم دوبارہ کوشش کریں'
          : 'Unable to Verify — Please Try Again'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputBilty.trim()) {
      handlePerformVerification(inputBilty);
    }
  };

  const handleSelectSample = (sample: string) => {
    setInputBilty(sample);
    handlePerformVerification(sample);
  };

  // WhatsApp prefilled message
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw1}?text=${encodeURIComponent(
    language === 'ur'
      ? `السلام علیکم! میں وڑائچ گڈز ٹرانسپورٹ کی بلٹی [${activeReference || inputBilty || 'CN-Ref'}] کی تصدیق اور لائیو لوکیشن معلوم کرنا چاہتا ہوں۔`
      : `Hello! I would like to verify and check live updates for Warraich Goods Bilty # [${activeReference || inputBilty || 'CN-Ref'}].`
  )}`;

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

  return (
    <section 
      id="tracking" 
      className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-bold text-blue-900 mb-3 font-urdu">
            <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>{language === 'ur' ? 'آن لائن سیکور بلٹی تصدیق و ٹریکنگ' : 'Secure Bilty Verification & Tracking'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-urdu tracking-tight">
            {language === 'ur' ? 'تصدیق بلٹی و لائیو لوکیشن سروس' : 'Verify Official Bilty Record'}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {language === 'ur'
              ? 'ڈرائیور دوست ایپ سے جاری کردہ بلٹی کا QR کوڈ اسکین کریں یا بلٹی نمبر درج کر کے آفیشل فل ٹرک لوڈ ریکارڈ کی تصدیق کریں۔'
              : 'Scan the QR code printed on your bilty or enter the bilty number manually to verify the official record in our read-only system.'}
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-5 sm:p-7 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold px-7 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-sm font-urdu whitespace-nowrap min-h-[48px] cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{language === 'ur' ? 'تصدیق جاری ہے...' : 'Verifying...'}</span>
                </>
              ) : (
                <>
                  <span>{language === 'ur' ? 'بلٹی تصدیق کریں' : 'Verify Bilty'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
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

        {/* RESULTS SECTION */}
        {hasSearched && (
          <div className="max-w-3xl mx-auto mb-12">

            {/* 1. LOADING STATE */}
            {loading && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center space-y-4">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin mx-auto" />
                <p className="text-base font-bold text-slate-800 font-urdu">
                  {language === 'ur' ? 'ڈیٹا بیس سے بلٹی ریکارڈ کی تصدیق کی جا رہی ہے...' : 'Verifying bilty record from Firebase database...'}
                </p>
                <p className="text-xs text-slate-500 font-urdu">
                  {language === 'ur' ? 'براہ کرم چند سیکنڈ انتظار کریں' : 'Please wait a moment'}
                </p>
              </div>
            )}

            {/* 2. SUCCESS: VERIFIED BILTY RECORD */}
            {!loading && verifiedRecord && (
              <div className="bg-white rounded-xl shadow-md border-2 border-emerald-500 overflow-hidden animate-fadeIn">
                {/* Header Banner */}
                <div className="bg-emerald-700 text-white p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-emerald-200" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 font-mono">
                          {language === 'ur' ? 'تصدیق شدہ بلٹی ریکارڈ' : 'VERIFIED BILTY RECORD'}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-mono tracking-wide text-white">
                          {verifiedRecord.biltyNo}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-900/60 text-emerald-100 border border-emerald-400/40 font-urdu">
                      <FileCheck2 className="w-4 h-4 text-emerald-300" />
                      <span>{language === 'ur' ? 'اصلی وڑائچ گڈز بلٹی' : 'Authentic Record Verified'}</span>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 space-y-6">

                  {/* Public Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 sm:p-5 rounded-lg border border-slate-200 font-urdu text-sm">
                    {verifiedRecord.biltyDate && (
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'تاریخِ بوکنگ:' : 'Booking Date:'}
                          </span>
                          <span className="font-bold text-slate-900 font-mono">{verifiedRecord.biltyDate}</span>
                        </div>
                      </div>
                    )}

                    {verifiedRecord.vehicleNo && (
                      <div className="flex items-start gap-2.5">
                        <Truck className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'گاڑی نمبر:' : 'Vehicle No:'}
                          </span>
                          <span className="font-bold text-slate-900 font-mono">{verifiedRecord.vehicleNo}</span>
                        </div>
                      </div>
                    )}

                    {verifiedRecord.origin && (
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'روانگی (Origin):' : 'Origin:'}
                          </span>
                          <span className="font-bold text-slate-900">{verifiedRecord.origin}</span>
                        </div>
                      </div>
                    )}

                    {verifiedRecord.destination && (
                      <div className="flex items-start gap-2.5">
                        <Navigation className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'منزل (Destination):' : 'Destination:'}
                          </span>
                          <span className="font-bold text-slate-900">{verifiedRecord.destination}</span>
                        </div>
                      </div>
                    )}

                    {verifiedRecord.goodsDescription && (
                      <div className="flex items-start gap-2.5 sm:col-span-2 pt-2 border-t border-slate-200/80">
                        <Package className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'سامان کی تفصیل:' : 'Goods Description:'}
                          </span>
                          <span className="font-bold text-slate-900">{verifiedRecord.goodsDescription}</span>
                        </div>
                      </div>
                    )}

                    {verifiedRecord.weightOrQty && (
                      <div className="flex items-start gap-2.5 sm:col-span-2">
                        <Scale className="w-4 h-4 text-slate-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'وزن / تعداد:' : 'Weight / Quantity:'}
                          </span>
                          <span className="font-bold text-slate-900">{verifiedRecord.weightOrQty}</span>
                        </div>
                      </div>
                    )}

                    {verifiedRecord.status && (
                      <div className="flex items-start gap-2.5 sm:col-span-2 pt-2 border-t border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">
                            {language === 'ur' ? 'موجودہ اسٹیٹس:' : 'Current Status:'}
                          </span>
                          <span className="font-bold text-emerald-800">{verifiedRecord.status}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Safety & Privacy Notice */}
                  <div className="flex items-center gap-2 bg-slate-100 p-3 rounded-lg text-xs text-slate-600 font-urdu">
                    <Lock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>
                      {language === 'ur'
                        ? 'پرائیویسی سیکورٹی کی بنیاد پر شناختی کارڈ، پرسنل فون نمبرز اور کرایہ کی تفصیلات ظاہر نہیں کی جاتیں۔'
                        : 'For security and privacy, CNIC numbers, contact numbers, and payment details are strictly kept confidential.'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-4 rounded-lg shadow-sm text-sm sm:text-base transition-colors font-urdu cursor-pointer"
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
                </div>
              </div>
            )}

            {/* 3. NOT FOUND STATE */}
            {!loading && notFound && (
              <div className="bg-white rounded-xl shadow-sm border-2 border-red-200 p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                  <XCircle className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-red-700 font-urdu">
                    {language === 'ur' ? 'بلٹی نہیں ملی — تصدیق ناکام' : 'Bilty Not Found — Verification Failed'}
                  </h3>
                  <p className="text-sm font-mono text-slate-600 font-bold">
                    Ref: [{activeReference}]
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-urdu max-w-lg mx-auto leading-relaxed">
                  {language === 'ur'
                    ? 'ہمارے ڈیٹا بیس میں اس نمبر کا کوئی تصدیق شدہ ریکارڈ موجود نہیں ہے۔ اگر یہ ایک نئی بلٹی ہے تو برائے مہربانی ڈرائیور یا وڑائچ گڈز ہیلپ لائن سے رابطہ فرمائیں۔'
                    : 'No matching bilty record was found in our database. If this is a recently issued bilty, please contact operations or our helpline.'}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm font-urdu transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{t.contactDispatcher}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw1}`}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm font-urdu transition-colors border border-slate-300"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{t.callHelpline}</span>
                  </a>
                </div>
              </div>
            )}

            {/* 4. ERROR / CONNECTION STATE */}
            {!loading && errorMessage && (
              <div className="bg-white rounded-xl shadow-sm border-2 border-amber-200 p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                  <AlertCircle className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-amber-800 font-urdu">
                    {language === 'ur' ? 'تصدیق ممکن نہیں ہو سکی — دوبارہ کوشش کریں' : 'Unable to Verify — Please Try Again'}
                  </h3>
                  <p className="text-xs text-amber-700 font-urdu font-medium">
                    {errorMessage}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-urdu max-w-lg mx-auto leading-relaxed">
                  {language === 'ur'
                    ? 'انٹرنیٹ یا سرور کے عارضی مسئلے کی وجہ سے ڈیٹا بیس سے رابطہ نہیں ہو سکا۔ اس کا مطلب بلٹی کا جعلی ہونا نہیں ہے۔ براہ کرم انٹرنیٹ چیک کر کے دوبارہ کوشش کریں۔'
                    : 'Could not connect to the database due to a network or connection issue. This does not imply the bilty is fake. Please check your internet connection and try again.'}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handlePerformVerification(activeReference)}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm font-urdu transition-colors shadow-sm cursor-pointer"
                  >
                    <span>{language === 'ur' ? 'دوبارہ کوشش کریں' : 'Try Again'}</span>
                  </button>
                </div>
              </div>
            )}

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

        {/* If Condensed on Home Page: Show Summary CTA linking to Booking Page with Full Corridors */}
        {condensed ? (
          <div className="max-w-3xl mx-auto mt-8 p-5 bg-white border border-slate-200 rounded-lg shadow-sm text-center">
            <p className="text-sm font-bold text-slate-900 font-urdu mb-1">
              {language === 'ur' ? 'ملک گیر ہائی وے روٹس، کراچی پورٹ اور ٹرانزٹ شیڈول' : 'Nationwide Highway Routes, Karachi Port & Transit Times'}
            </p>
            <p className="text-xs text-slate-600 font-urdu mb-4">
              {language === 'ur'
                ? 'کراچی پورٹ، لاہور، راولپنڈی، پشاور، ملتان، بہاولپور اور تمام قومی کوریڈورز کے ٹرانزٹ اوقات اور کرایہ معلوم کریں۔'
                : 'View transit times and calculate transparent freight rates for all national highway corridors.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm font-urdu transition-colors shadow-sm"
              >
                <span>{language === 'ur' ? 'مکمل کوریڈورز اور کرایہ کیلکولیٹر دیکھیں' : 'View Full Corridors & Rate Calculator'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Full National Corridors & Highway Transit Times Grid */
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
        )}

      </div>
    </section>
  );
};
