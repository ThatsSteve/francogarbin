import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-end pt-28 pb-8 sm:pb-12 lg:pb-14 overflow-hidden border-b border-slate-200 bg-slate-950">
      
      {/* Background: Doctor's Portrait - High Visibility with Minimal Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./media/Garbin0.png"
          alt="Dott. Franco Garbin - Ginecologo"
          className="w-full h-full object-cover object-[center_15%] sm:object-[right_25%] opacity-90 sm:opacity-95 filter contrast-[1.02] brightness-95"
        />
        {/* Soft targeted gradient at the bottom/left for clean text readability without hiding the doctor */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 via-50% to-transparent sm:block hidden" />
      </div>

      {/* Hero Content - Placed cleanly at the bottom */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-left text-white">
          
          {/* Category Tag */}
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-clinical-skyLight mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-clinical-sky inline-block" />
            <span>Specialista in Ginecologia e Ostetricia</span>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 font-medium mb-3 drop-shadow">
            Già Direttore U.O.C. Ospedali di Mirano e Dolo (VE)
          </div>

          {/* Short, Impactful Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-white leading-tight tracking-tight mb-3 drop-shadow-md">
            Oltre 40 anni di esperienza per la salute della donna
          </h1>

          {/* Concise Doctor Description */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-light max-w-lg drop-shadow">
            Ascolto, diagnosi accurata e percorsi personalizzati. Visite ginecologiche, ostetricia, ecografia e consulenze di <strong className="text-white font-medium">Second Opinion</strong> a Mirano (VE).
          </p>

          {/* Unified Single CTA - Enlarged & High Impact */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onNavigate('prenota')}
              className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-clinical-sky hover:bg-clinical-skyDark text-white text-lg sm:text-xl font-bold shadow-xl shadow-clinical-sky/40 hover:shadow-2xl hover:shadow-clinical-sky/60 transition-all duration-200 active:scale-98 flex items-center justify-center gap-3 group border border-sky-400/30"
            >
              <Calendar className="w-6 h-6 transition-transform group-hover:scale-110 text-white flex-shrink-0" />
              <span>Prenota una Visita</span>
              <ChevronRight className="w-5 h-5 opacity-80 group-hover:translate-x-1.5 transition-transform flex-shrink-0" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
