import React from 'react';
import { ArrowRight } from 'lucide-react';
import { medicalServices, bookingNotice } from '../data/servicesData';

interface ServicesBentoProps {
  onNavigate: (page: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onNavigate }) => {
  const standardServices = medicalServices.filter(s => !s.isSecondOpinion);
  const secondOpinion = medicalServices.find(s => s.isSecondOpinion);

  return (
    <section id="prestazioni" className="relative py-14 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20 overflow-hidden">
      
      {/* Background Doctor Image: foto ben visibile, alta opacità e altezza generosa */}
      <div className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-[480px] xl:w-[560px] 2xl:w-[620px] h-[480px] sm:h-[540px] lg:h-[620px] pointer-events-none z-0 overflow-hidden">
        <img
          src="./media/ChatGPT edit2b2.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[center_top] opacity-90 sm:opacity-95 lg:opacity-95 filter contrast-[1.03] brightness-[1.01]"
        />
        {/* Sfumatura morbida alla base per integrarsi con i contenuti */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent lg:hidden" />
        <div className="hidden lg:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/20 to-transparent" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block:
            Su mobile pt-[280px] lascia piena visibilità all'intero ritratto del medico */}
        <div className="pt-[280px] sm:pt-[340px] lg:pt-0 mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-200/80 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight leading-tight">
            Prestazioni Mediche
          </h2>

          <p className="text-sm sm:text-base text-navy-800 font-semibold mt-1.5 sm:mt-2">
            Dott. Franco Garbin • Specialista in Ginecologia e Ostetricia
          </p>

          {/* Booking Notice Box (lowered under the title) */}
          <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-surface-50/95 backdrop-blur-xs border border-slate-200 space-y-1">
            <p className="text-xs sm:text-sm text-slate-800">
              Per prenotare una visita: Cell. <strong className="text-navy-900">{bookingNotice.phone}</strong>
            </p>
            <p className="text-[11px] sm:text-xs text-slate-600">
              {bookingNotice.hours}
            </p>
            <p className="text-[10px] sm:text-xs text-slate-500 italic mt-0.5">
              {bookingNotice.callbackNotice}
            </p>
          </div>
        </div>

        {/* Services Grid - All 8 Services in the same flow, with Second Opinion naturally integrated */}
        <div className="space-y-10">
          
          {/* 7 Standard Services in 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {standardServices.map((service) => (
              <div key={service.id} className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-sans font-bold text-navy-900 uppercase tracking-normal">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-light">
                  {service.shortDesc}
                </p>
              </div>
            ))}
          </div>

          {/* 8. SECOND OPINION - Integrated into the list, lightly highlighted as a medical service */}
          {secondOpinion && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-navy-800">
                Consulenza Specialistica
              </div>
              <h3 className="text-base sm:text-lg font-sans font-bold text-navy-900 uppercase tracking-normal">
                {secondOpinion.title}
              </h3>
              <div className="space-y-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed font-light max-w-4xl">
                {secondOpinion.paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Minimal Bottom Action */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => onNavigate('prestazioni')}
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-clinical-sky transition-colors cursor-pointer"
          >
            <span>Scheda completa prestazioni</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
