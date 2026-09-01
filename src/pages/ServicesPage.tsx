import React from 'react';
import { 
  Calendar, 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Baby, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Info, 
  HelpCircle,
  Phone,
  UserCheck
} from 'lucide-react';
import { medicalServices } from '../data/servicesData';
import { clinicInfo } from '../data/clinicData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
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
    <div className="pt-24 pb-20 bg-surface-50 min-h-screen">
      
      {/* Page Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-16 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-clinical-sky/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clinical-sky/20 border border-clinical-sky/40 text-clinical-skyLight text-xs font-semibold uppercase tracking-wider mb-4">
            <Stethoscope className="w-4 h-4 text-clinical-sky" />
            Ambulatorio di Ginecologia e Ostetricia • Mirano (VE)
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Prestazioni Mediche Specialistiche
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dott. Franco Garbin • Oltre 40 anni di esperienza clinica e chirurgica al servizio della salute della donna. Già Direttore dell’Unità Operativa Complessa di Ostetricia e Ginecologia degli Ospedali di Mirano e Dolo (VE).
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('prenota')}
              className="h-12 px-7 rounded-xl bg-clinical-sky hover:bg-clinical-skyDark text-white text-sm font-semibold shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota una Visita</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
        
        {/* Price & Tariffs Information Notice */}
        <div className="bg-sky-50/80 border border-sky-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-clinical-sky/15 text-clinical-skyDark rounded-xl flex-shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-clinical-sky" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-navy-900">
                Informazioni su Costi e Tariffe delle Prestazioni
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Per informazioni relative ai costi e alle modalità delle singole prestazioni è <strong>preferibile contattare telefonicamente lo studio</strong> durante gli orari di segreteria: <strong>Lunedì, Mercoledì e Venerdì dalle 15:30 alle 18:30</strong>.
              </p>
            </div>
          </div>
          <a
            href={clinicInfo.phoneTel}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold transition-colors flex-shrink-0 self-stretch sm:self-auto justify-center shadow-sm"
          >
            <Phone className="w-4 h-4 text-clinical-sky" />
            <span>Chiama lo Studio</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8">
          {medicalServices.map((service) => {
            const isSecondOpinion = service.id === 'second-opinion';

            return (
              <div 
                key={service.id}
                id={service.id}
                className={`rounded-3xl p-6 sm:p-9 transition-all ${
                  isSecondOpinion
                    ? 'bg-gradient-to-br from-slate-900 via-navy-950 to-navy-900 text-white border-2 border-clinical-sky/50 shadow-xl'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Header of each service card */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner ${
                      isSecondOpinion ? 'bg-white/10 text-clinical-sky' : 'bg-slate-100'
                    }`}>
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                        isSecondOpinion
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {service.badge}
                      </div>
                      <h2 className={`font-heading font-bold text-2xl sm:text-3xl ${
                        isSecondOpinion ? 'text-white' : 'text-navy-900'
                      }`}>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('prenota')}
                    className={`inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-colors self-start whitespace-nowrap ${
                      isSecondOpinion
                        ? 'bg-clinical-sky hover:bg-clinical-skyDark text-white shadow-md'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Prenota {service.title}</span>
                  </button>
                </div>

                {/* Main Description */}
                <p className={`text-sm sm:text-base leading-relaxed ${
                  isSecondOpinion ? 'text-slate-200 mb-6' : 'text-slate-600 mb-5'
                }`}>
                  {service.fullDesc}
                </p>

                {/* Second Opinion - Accessible, High-Value Explanation Cards */}
                {isSecondOpinion && (
                  <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-clinical-skyLight font-semibold text-sm">
                        <HelpCircle className="w-4 h-4 text-clinical-sky" />
                        <span>Comprensione &amp; Chiarezza</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        L'esperienza clinica del Dott. Garbin ti aiuta a comprendere a fondo la tua reale situazione e a valutare serenamente tutte le possibili alternative terapeutiche.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                        <UserCheck className="w-4 h-4 text-amber-400" />
                        <span>Messa in contatto con specialisti</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Se il tuo caso richiede approfondimenti o trattamenti superspecialistici, verrai indirizzata e messa in contatto diretto con i migliori professionisti e centri del settore.
                      </p>
                    </div>
                  </div>
                )}

                {/* Preparation Advice / Cosa portare */}
                {service.preparationTips && (
                  <div className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                    isSecondOpinion 
                      ? 'bg-white/5 border border-white/10 text-slate-300' 
                      : 'bg-slate-50 border border-slate-100 text-slate-600'
                  }`}>
                    <Info className="w-4 h-4 text-clinical-sky flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className={isSecondOpinion ? 'text-white font-semibold' : 'text-slate-800 font-semibold'}>
                        Cosa portare / Consigli: 
                      </strong>{' '}
                      {service.preparationTips}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-10 text-center relative overflow-hidden shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
            Hai dubbi su quale prestazione sia più indicata per il tuo caso?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Per prenotare una visita o concordare una Second Opinion, contatta lo studio telefonando nei giorni di <strong>Lunedì, Mercoledì e Venerdì dalle ore 15.30 alle 18.30</strong>.
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={() => onNavigate('prenota')}
              className="w-full sm:w-auto h-14 px-8 rounded-xl bg-clinical-sky hover:bg-clinical-skyDark text-white font-bold text-base shadow-lg transition-colors flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Prenota una Visita</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
