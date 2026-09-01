import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Baby, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Award,
  Calendar
} from 'lucide-react';
import { medicalServices } from '../data/servicesData';

interface ServicesBentoProps {
  onNavigate: (page: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onNavigate }) => {
  const standardServices = medicalServices.filter(s => !s.isFeatured);
  const secondOpinionService = medicalServices.find(s => s.id === 'second-opinion');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-clinical-sky" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Baby': return <Baby className="w-6 h-6 text-sky-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-navy-800" />;
      case 'CheckCircle': return <CheckCircle2 className="w-6 h-6 text-teal-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-500" />;
      default: return <Stethoscope className="w-6 h-6 text-clinical-sky" />;
    }
  };

  return (
    <section id="prestazioni" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-clinical-sky mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-clinical-sky inline-block" />
              <span>Attività Clinica &amp; Diagnostica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
              Prestazioni Specialistiche
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl">
              Visite ginecologiche, ostetricia, ecografia e consulenze dedicate alla salute e al benessere della donna.
            </p>
          </div>

          <button
            onClick={() => onNavigate('prestazioni')}
            className="self-start md:self-end inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold text-sm sm:text-base transition-colors border border-slate-200 flex-shrink-0"
          >
            <span>Tutte le 8 Prestazioni</span>
            <ArrowRight className="w-4 h-4 text-clinical-sky" />
          </button>
        </div>

        {/* Highlight: Second Opinion Card */}
        {secondOpinionService && (
          <div className="mb-10 p-7 sm:p-10 rounded-3xl bg-slate-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clinical-sky/20 border border-clinical-sky/40 text-clinical-skyLight text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-clinical-sky" />
                  <span>In Evidenza • Second Opinion Specialistica</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
                  Un secondo parere medico chiaro per comprendere la diagnosi e valutare le cure
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  {secondOpinionService.shortDesc} Oltre 40 anni di esperienza clinica e chirurgica per aiutarti a capire a fondo la tua situazione e metterti in contatto con i migliori specialisti del settore.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => onNavigate('prenota')}
                  className="w-full h-12 sm:h-13 px-5 rounded-xl bg-clinical-sky hover:bg-clinical-skyDark text-white font-bold text-sm sm:text-base shadow-lg shadow-clinical-sky/30 transition-all flex items-center justify-center gap-2.5 active:scale-98"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Prenota Second Opinion</span>
                </button>
                <button
                  onClick={() => onNavigate('prestazioni')}
                  className="w-full h-12 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Dettagli e Cosa Portare</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 7 Standard Services Grid with Larger Fonts & Higher Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardServices.map((service) => (
            <div
              key={service.id}
              className="bg-surface-50 rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-clinical-sky/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-100 group-hover:scale-105 transition-transform flex-shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200/70">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title - Larger Font */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy-900 mb-2.5 group-hover:text-clinical-sky transition-colors">
                  {service.title}
                </h3>

                {/* Service Description - Larger Font & Clear Leading */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('prestazioni')}
                  className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-navy-900 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Dettagli</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('prenota')}
                  className="text-xs sm:text-sm font-bold text-clinical-sky hover:text-clinical-skyDark inline-flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prenota</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
