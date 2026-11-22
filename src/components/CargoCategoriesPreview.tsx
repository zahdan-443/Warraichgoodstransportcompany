import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetPath';
import { TiltCard } from './MotionPrimitives';

export const CargoCategoriesPreview: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const categories = [
    {
      id: 'agri',
      titleEn: 'Agricultural Produce & Grains',
      titleUr: 'زرعی اجناس، گندم و غلہ',
      descEn: 'Bulk loads of wheat, corn, cotton bales, seeds, and fertilizer kept dry in transit.',
      descUr: 'گندم، مکئی، کپاس اور کھاد کی بلک ترسیل پنجاب اور ملک بھر کی تمام غلہ منڈیوں سے۔',
      to: '/fleet#cargo',
      image: './images/cargo-agricultural-produce-grains.webp',
    },
    {
      id: 'textile',
      titleEn: 'Textile & Industrial Supplies',
      titleUr: 'ٹیکسٹائل، دھاگہ و فیکٹری میٹریل',
      descEn: 'Yarn cones, cloth, chemicals, and mill goods delivered across Faisalabad, Lahore, and Karachi Port.',
      descUr: 'دھاگہ، کپڑا، گرے کلوتھ اور صنعتی کیمیکلز کی براہِ راست ملز اور پورٹ پر ترسیل۔',
      to: '/fleet#cargo',
      image: './images/cargo-textile-industrial-supplies.webp',
    },
    {
      id: 'machinery',
      titleEn: 'Heavy Machinery & Steel',
      titleUr: 'ہیوی مشینری و اسٹیل گارڈرز',
      descEn: 'Factory machinery, steel bars, pipes, and marble slabs hauled safely on heavy Bedford trucks.',
      descUr: 'صنعتی پلانٹ مشینری، لوہا، سریا اور ماربل سلیبز کی ہیوی ڈیوٹی ٹرکوں پر لوڈنگ۔',
      to: '/fleet#cargo',
      image: './images/cargo-heavy-machinery-steel.webp',
    },
    {
      id: 'fmcg',
      titleEn: 'Food Processing & Packaging',
      titleUr: 'شوگر، فلور ملز و فوڈ پیکجنگ',
      descEn: 'Sugar sacks, flour bags, cartons, and poultry feed tied securely and covered for the road.',
      descUr: 'چینی کی بوریاں، آٹا، کارٹن اور پولٹری فیڈ کی صاف ستھری اور محفوظ واٹر پروف ترسیل۔',
      to: '/fleet#cargo',
      image: './images/cargo-food-processing-packaging.webp',
    },
  ];

  return (
    <section id="cargo-categories" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700 block mb-1">
            {isUrdu ? 'کارگو کی اقسام' : 'Cargo Specializations'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'ہر شعبے کے مال کی محفوظ لوڈنگ' : 'Commercial Cargo We Haul Daily'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {isUrdu
              ? 'پنجاب، سندھ، خیبر پختونخوا اور بلوچستان کے تمام صنعتی کوریڈورز کے لیے مخصوص فل ٹرک لوڈ کارگو۔'
              : 'Dedicated full-truck transport for farms, textile mills, factories, and building suppliers.'}
          </p>
        </div>

        {/* 4 Cards: Single Column on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => {
            const title = isUrdu ? cat.titleUr : cat.titleEn;
            const desc = isUrdu ? cat.descUr : cat.descEn;

            return (
              <TiltCard
                key={cat.id}
                data-reveal=""
                data-reveal-variant="zoom-in"
                style={{ '--reveal-delay': `${idx * 75}ms` } as React.CSSProperties}
                className="relative overflow-hidden bg-slate-900 border border-slate-800 hover:border-emerald-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl flex flex-col justify-end min-h-[280px] group card-interactive"
              >
                {/* Category Background Image */}
                <img
                  src={getAssetUrl(cat.image)}
                  alt={title}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center card-hover-zoom"
                />
                {/* Balanced Contrast Gradient Scrim (keeps upper cargo photo bright) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/5 group-hover:via-slate-950/45 transition-colors"
                />

                {/* Bottom Title, Description & Link */}
                <div className="relative z-10 pt-24 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-emerald-300 transition-colors font-urdu drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-100 font-urdu leading-normal line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {desc}
                  </p>

                  <div className="pt-3 border-t border-white/20">
                    <Link
                      to={cat.to}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 font-urdu group-hover:translate-x-1 transition-transform"
                    >
                      <span>{isUrdu ? 'گاڑیاں اور کیپیسٹی دیکھیں ←' : 'Learn more →'}</span>
                    </Link>
                  </div>
                </div>

              </TiltCard>
            );
          })}
        </div>

        {/* View All Link */}
        <div data-reveal="" className="mt-8 text-center">
          <Link
            to="/fleet#cargo"
            className="btn-animated inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-xs font-urdu"
          >
            <span>{isUrdu ? 'تمام کارگو کی اقسام اور تفصیلات دیکھیں' : 'View all cargo categories'}</span>
            <ArrowRight className={`btn-arrow-icon w-4 h-4 flex-shrink-0 ${isUrdu ? 'rotate-180' : ''}`} />
          </Link>
        </div>

      </div>
    </section>
  );
};
