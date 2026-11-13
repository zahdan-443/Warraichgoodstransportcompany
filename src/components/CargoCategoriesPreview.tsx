import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Factory, 
  Hammer, 
  PackageCheck, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CargoCategoriesPreview: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const categories = [
    {
      id: 'agri',
      titleEn: 'Agricultural Produce & Grains',
      titleUr: 'زرعی اجناس، گندم و غلہ',
      descEn: 'Wheat, corn, cotton bales, seeds, and fertilizer bulk haulage with zero moisture exposure.',
      descUr: 'گندم، مکئی، کپاس اور کھاد کی بلک ترسیل پنجاب اور ملک بھر کی تمام غلہ منڈیوں سے۔',
      icon: Sprout,
      to: '/fleet',
      accent: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'textile',
      titleEn: 'Textile & Industrial Supplies',
      titleUr: 'ٹیکسٹائل، دھاگہ و فیکٹری میٹریل',
      descEn: 'Yarn cones, fabric, chemicals, and manufactured supplies for Faisalabad, Lahore, and Karachi Port.',
      descUr: 'دھاگہ، کپڑا، گرے کلوتھ اور صنعتی کیمیکلز کی براہِ راست ملز اور پورٹ پر ترسیل۔',
      icon: Factory,
      to: '/fleet',
      accent: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'machinery',
      titleEn: 'Heavy Machinery & Steel',
      titleUr: 'ہیوی مشینری و اسٹیل گارڈرز',
      descEn: 'Industrial plant equipment, rebar, pipes, and marble slabs using heavy-duty Bedford haulers.',
      descUr: 'صنعتی پلانٹ مشینری، لوہا، سریا اور ماربل سلیبز کی ہیوی ڈیوٹی ٹرکوں پر لوڈنگ۔',
      icon: Hammer,
      to: '/fleet',
      accent: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
    },
    {
      id: 'fmcg',
      titleEn: 'Food Processing & Packaging',
      titleUr: 'شوگر، فلور ملز و فوڈ پیکجنگ',
      descEn: 'Refined sugar sacks, flour bags, corrugated packaging, and feed supplies safely lashed.',
      descUr: 'چینی کی بوریاں، آٹا، کارٹن اور پولٹری فیڈ کی صاف ستھری اور محفوظ واٹر پروف ترسیل۔',
      icon: PackageCheck,
      to: '/fleet',
      accent: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20',
    },
  ];

  return (
    <section id="cargo-categories" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 block mb-1">
            {isUrdu ? 'کارگو کی اقسام' : 'Cargo Specializations'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-urdu tracking-tight">
            {isUrdu ? 'ہر شعبے کے مال کی محفوظ لوڈنگ' : 'Commercial Cargo We Haul Daily'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-urdu max-w-2xl mx-auto">
            {isUrdu
              ? 'پنجاب، سندھ، خیبر پختونخوا اور بلوچستان کے تمام صنعتی کوریڈورز کے لیے مخصوص فل ٹرک لوڈ کارگو۔'
              : 'Dedicated FTL transport customized for manufacturing, agriculture, and construction industries.'}
          </p>
        </div>

        {/* 4 Cards: Single Column on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const title = isUrdu ? cat.titleUr : cat.titleEn;
            const desc = isUrdu ? cat.descUr : cat.descEn;

            return (
              <div 
                key={cat.id}
                className="relative overflow-hidden bg-slate-50/60 hover:bg-white border border-slate-200/90 hover:border-emerald-400 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                {/* Subtle Faint Large Watermark Icon in Corner */}
                <IconComp 
                  className="absolute -bottom-3 -right-3 w-24 h-24 text-slate-900/5 group-hover:text-emerald-500/10 transition-colors pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-3">
                  
                  {/* Rounded Icon Box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${cat.accent} group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Short Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors font-urdu">
                    {title}
                  </h3>

                  {/* ONE Line of Text (Strictly no bullet list) */}
                  <p className="text-xs sm:text-sm text-slate-600 font-urdu leading-normal line-clamp-2">
                    {desc}
                  </p>

                </div>

                {/* Learn More Link */}
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-200/60">
                  <Link
                    to={cat.to}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-600 font-urdu group-hover:translate-x-1 transition-all"
                  >
                    <span>{isUrdu ? 'گاڑیاں اور کیپیسٹی دیکھیں ←' : 'Learn more →'}</span>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <Link
            to="/fleet#cargo"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-xs font-urdu"
          >
            <span>{isUrdu ? 'تمام کارگو کی اقسام اور تفصیلات دیکھیں' : 'View all cargo categories'}</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
};
