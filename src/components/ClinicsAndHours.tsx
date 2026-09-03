import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Calendar, 
  ExternalLink, 
  CheckCircle2,
  Mail,
  MessageSquare
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface ClinicsAndHoursProps {
  onNavigate: (page: string) => void;
}

export const ClinicsAndHours: React.FC<ClinicsAndHoursProps> = ({ onNavigate }) => {
  return (
    <section id="sede-orari" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clinical-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sede, Orari & Prenotazione */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-clinical-skyLight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-clinical-sky inline-block" />
              <MapPin className="w-4 h-4 text-clinical-sky" />
              <span>Sede Ambulatorio & Prenotazione Visite</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white leading-tight">
              Ambulatorio a Mirano (VE)
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Le visite specialistiche si tengono presso lo studio di <strong className="text-white">Mirano (VE)</strong> in <strong className="text-white">{clinicInfo.address.street}</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-clinical-sky text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Orari Ambulatorio</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Lunedì, Martedì, Mercoledì
                </div>
                <div className="text-xs text-clinical-skyLight font-medium mt-0.5">
                  Dalle ore 15:00 alle 19:00
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5 border-t border-white/10 pt-1.5">
                  In altri giorni o orari: <span className="text-slate-300 font-medium">previo accordo</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>Segreteria & Reperibilità</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Messaggio in segreteria
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {clinicInfo.callbackNote}
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5 border-t border-white/10 pt-1.5">
                  Risposta rapida per concordare la visita
                </div>
              </div>
            </div>

            {/* Callback notice block */}
            <div className="p-3.5 rounded-xl bg-clinical-sky/10 border border-clinical-sky/20 flex items-start gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-clinical-sky flex-shrink-0 mt-0.5" />
              <span>
                <strong>Per prenotare una visita:</strong> Telefonare al Cell. <strong>{clinicInfo.phoneFormatted}</strong>. Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo. In caso di mancata risposta, lasciare un messaggio e verrete richiamate.
              </span>
            </div>

            {/* Actions: Call and Navigate to Prenota */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={clinicInfo.phoneTel}
                className="h-13 px-6 rounded-xl bg-clinical-sky hover:bg-clinical-skyDark text-white font-bold text-sm shadow-lg shadow-clinical-sky/20 transition-colors flex items-center justify-center gap-2.5 active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Chiama {clinicInfo.phoneFormatted}</span>
              </a>

              <button
                onClick={() => onNavigate('prenota')}
                className="h-13 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>Dettagli Prenotazione</span>
              </button>

              <a
                href={`mailto:${clinicInfo.email}`}
                className="h-13 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{clinicInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Snapshot & Direct Link */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-800/80 shadow-2xl p-4 sm:p-5">
              
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-clinical-sky" />
                  <span>{clinicInfo.address.street} — Mirano (VE)</span>
                </span>
                <a
                  href={clinicInfo.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clinical-sky hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 h-64 sm:h-72 w-full">
                <iframe
                  src={clinicInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Studio Dott. Franco Garbin Mirano"
                />
              </div>

              <div className="mt-3 text-center">
                <a
                  href={clinicInfo.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Indicazioni stradali per via Cristoforo Colombo 4, Mirano</span>
                  <ExternalLink className="w-3 h-3 text-clinical-sky" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
