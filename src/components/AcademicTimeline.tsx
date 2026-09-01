import React from 'react';
import { 
  Building2, 
  BookOpen, 
  Check
} from 'lucide-react';
import { academicTimeline } from '../data/timelineData';

interface AcademicTimelineProps {
  onOpenCv: () => void;
}

export const AcademicTimeline: React.FC<AcademicTimelineProps> = ({ onOpenCv }) => {
  return (
    <section id="percorso" className="py-20 lg:py-24 bg-surface-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Percorso Accademico & Ospedaliero
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
            Curriculum, Direzione di Struttura Complessa e Ricerca
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Formazione d’eccellenza presso gli Atenei di Padova e Firenze, seguita da oltre 40 anni di attività clinica, chirurgica e direzionale negli Ospedali di Mirano e Dolo (VE) e nel Servizio Sanitario Nazionale.
          </p>
        </div>

        {/* Structured Editorial Timeline */}
        <div className="space-y-6">
          {academicTimeline.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-subtle grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start"
            >
              {/* Left meta: Stage / Year */}
              <div className="md:col-span-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fase 0{index + 1}
                </span>
                <div className="font-heading font-bold text-base sm:text-lg text-navy-900 mt-0.5">
                  {item.year}
                </div>
              </div>

              {/* Center / Right content: Title, institution, description */}
              <div className="md:col-span-9 space-y-2.5">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-900 leading-snug">
                  {item.title}
                </h3>
                
                <div className="text-xs sm:text-sm font-semibold text-slate-600 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {item.description}
                </p>

                <div className="pt-2 space-y-1">
                  {item.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-navy-900 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Full CV Action Banner */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-navy-900 text-base">
              Curriculum Vitae Ufficiale Completo
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Consulta il documento integrale di 36 pagine con l'elenco dettagliato di casistica chirurgica e pubblicazioni.
            </p>
          </div>
          <button
            onClick={onOpenCv}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4 text-cyan-300" />
            <span>Sfoglia Curriculum</span>
          </button>
        </div>

      </div>
    </section>
  );
};
