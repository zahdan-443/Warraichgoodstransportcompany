import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const TopBar: React.FC = () => {
  return (
    <div id="top-utility-bar" className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
          
          {/* NTN and Registration Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="inline-flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-400 font-medium font-urdu-clean">گورنمنٹ رجسٹرڈ NTN:</span>
              <span className="text-amber-400 font-bold tracking-wider font-mono">{COMPANY_INFO.ntn}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 font-urdu-clean">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>مین برانچز: <strong className="text-white">سمندری</strong> و <strong className="text-white">کمالیہ</strong></span>
            </div>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Quick Call Phone Numbers */}
          <div className="flex items-center flex-wrap justify-center gap-3">
            <span className="text-slate-400 font-medium hidden xs:inline font-urdu-clean">بکنگ ہیلپ لائن:</span>
            
            <a
              id="call-btn-top-1"
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-md transition-all shadow-sm active:scale-95"
              title="پہلا نمبر ملائیں"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span className="font-mono tracking-tight text-xs font-black">{COMPANY_INFO.phone1}</span>
            </a>

            <a
              id="call-btn-top-2"
              href={`tel:${COMPANY_INFO.phoneRaw2}`}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium px-3 py-1 rounded-md transition-all border border-slate-700 hover:border-amber-400/50 active:scale-95"
              title="دوسرا نمبر ملائیں"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-mono tracking-tight text-xs">{COMPANY_INFO.phone2}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

