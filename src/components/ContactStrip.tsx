import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const ContactStrip: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const whatsappGreeting = isUrdu
    ? 'السلام علیکم وڑائچ گڈز! مجھے گاڑی بکنگ اور کرایہ کے بارے میں معلومات درکار ہیں۔'
    : 'Hello Warraich Goods, I need details about truck booking and freight rates.';

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappGreeting)}`;

  const cards = [
    {
      id: 'contact-strip-call',
      href: `tel:${COMPANY_INFO.phoneRaw1}`,
      external: false,
      icon: Phone,
      iconWrapClass: 'bg-amber-500/15 border-amber-500/30 text-amber-600',
      label: isUrdu ? 'فون کال کریں' : 'Call Us',
      value: COMPANY_INFO.phone1,
      sub: isUrdu ? '24/7 براہِ راست رابطہ' : '24/7 Direct Line',
      valueClass: 'font-mono text-slate-950',
    },
    {
      id: 'contact-strip-whatsapp',
      href: whatsappUrl,
      external: true,
      icon: MessageCircle,
      iconWrapClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600',
      label: isUrdu ? 'واٹس ایپ میسج' : 'WhatsApp',
      value: COMPANY_INFO.phone1,
      sub: isUrdu ? 'فوری ریٹ اور بکنگ' : 'Fast Quote & Booking',
      valueClass: 'font-mono text-slate-950',
    },
    {
      id: 'contact-strip-email',
      href: `mailto:${COMPANY_INFO.email}`,
      external: false,
      icon: Mail,
      iconWrapClass: 'bg-blue-500/15 border-blue-500/30 text-blue-600',
      label: isUrdu ? 'ای میل رابطہ' : 'Email',
      value: COMPANY_INFO.email,
      sub: isUrdu ? 'کاروباری و کرایہ انکوائری' : 'Business & Quotes',
      valueClass: 'font-mono text-slate-950 text-xs sm:text-sm break-all',
    },
  ];

  return (
    <div id="contact-strip" className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <a
              key={card.id}
              id={card.id}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              className="card-interactive bg-white hover:bg-slate-50 rounded-2xl shadow-xl border border-slate-200/90 hover:border-amber-400 p-4 sm:p-5 flex items-center gap-3.5 group"
            >
              <div className={`card-icon-nudge w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${card.iconWrapClass}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 text-start">
                <span className={`block text-xs font-bold text-slate-500 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {card.label}
                </span>
                <span className={`block text-sm sm:text-base font-black leading-snug mt-0.5 ${card.valueClass}`}>
                  {card.value}
                </span>
                <span className={`block text-[11px] text-slate-500 mt-0.5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {card.sub}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
