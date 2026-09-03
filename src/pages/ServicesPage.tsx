import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { medicalServices, bookingNotice } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const standardServices = medicalServices.filter(s => !s.isSecondOpinion);
  const secondOpinion = medicalServices.find(s => s.isSecondOpinion);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Header Section with Background Doctor Image */}
      <section className="relative border-b border-slate-200 py-10 sm:py-16 bg-surface-50 overflow-hidden">
        
        {/* Background Image: foto ben visibile, alta opacità e altezza generosa */}
        <div className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-[480px] xl:w-[560px] 2xl:w-[620px] h-[480px] sm:h-[540px] lg:h-full max-h-[620px] pointer-events-none z-0 overflow-hidden">
          <img
            src="./media/ChatGPT edit2b2.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_top] opacity-90 sm:opacity-95 lg:opacity-95 filter contrast-[1.03] brightness-[1.01]"
          />
          {/* Sfumatura morbida alla base per integrarsi con i contenuti */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-surface-50 via-surface-50/80 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-surface-50 via-surface-50/20 to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface-50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors mb-5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla Homepage</span>
          </button>

          {/* Title and Booking box: positioned cleanly on surface-50 */}
          <div className="pt-[280px] sm:pt-[340px] lg:pt-0 max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight leading-tight">
              Prestazioni Mediche
            </h1>
            <p className="text-sm sm:text-base text-navy-800 font-semibold">
              Dott. Franco Garbin — Specialista in Ginecologia e Ostetricia
            </p>

            <div className="pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs space-y-1">
                <p className="text-xs sm:text-sm text-slate-800">
                  Per informazioni e prenotazioni: Cell. <strong className="text-navy-900">{bookingNotice.phone}</strong>
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600">
                  {bookingNotice.hours}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 italic mt-0.5">
                  {bookingNotice.callbackNotice}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services List - Standard Services and Second Opinion Integrated in the Same Flow */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Standard Services */}
        <div className="space-y-8 divide-y divide-slate-100">
          {standardServices.map((service, index) => (
            <div key={service.id} className={index > 0 ? "pt-8" : ""}>
              <h2 className="text-base sm:text-lg font-sans font-bold text-navy-900 uppercase tracking-normal mb-2">
                {service.title}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-light max-w-4xl">
                {service.shortDesc}
              </p>
            </div>
          ))}
        </div>

        {/* 8. SECOND OPINION - Integrated into the list, lightly highlighted as a medical service */}
        {secondOpinion && (
          <div className="p-7 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-navy-800">
              Consulenza Specialistica
            </div>
            <h2 className="text-base sm:text-lg font-sans font-bold text-navy-900 uppercase tracking-normal">
              {secondOpinion.title}
            </h2>
            <div className="space-y-3 text-base text-slate-700 leading-relaxed font-light max-w-4xl">
              {secondOpinion.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* Clean Back Navigation at the bottom (NO duplicated footer info) */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-clinical-sky transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla Homepage</span>
          </button>
        </div>

      </div>

    </div>
  );
};
