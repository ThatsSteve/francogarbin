import React from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  ExternalLink, 
  Calendar,
  FileCheck,
  Mail,
  MessageSquare
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export const BookingPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-surface-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-12 sm:py-14 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-clinical-sky/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-clinical-skyLight mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-clinical-sky inline-block" />
            <Calendar className="w-4 h-4 text-clinical-sky" />
            <span>Prenotazione Visite & Second Opinion</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-3">
            Prenota la tua Visita
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Per garantire il tempo necessario all'ascolto, <strong className="text-white font-medium">le prenotazioni avvengono tramite contatto telefonico diretto</strong>.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-12 sm:space-y-16">
        
        {/* 1. Main Action Box: Premium, High-Converting Call CTA */}
        <div className="bg-white rounded-3xl p-7 sm:p-12 lg:p-14 shadow-xl border border-slate-200/80 text-center relative overflow-hidden">
          
          {/* Decorative subtle backdrop light */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-clinical-sky/10 rounded-full blur-2xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy-900 mb-3">
            Contatto Diretto per la Prenotazione
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
            Per richiedere una visita ginecologica, un controllo ostetrico o una Second Opinion specialistica:
          </p>

          {/* Clean, Animated Single Button without gradients or inner wrappers */}
          <div className="flex flex-col items-center justify-center my-4">
            <a
              href={clinicInfo.phoneTel}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] h-16 sm:h-20 px-8 sm:px-12 rounded-2xl bg-clinical-sky hover:bg-clinical-skyDark text-white font-bold text-xl sm:text-2xl shadow-xl shadow-clinical-sky/40 hover:shadow-2xl hover:shadow-clinical-sky/60 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3.5 animate-pulse hover:animate-none cursor-pointer"
            >
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              <span>Prenota Ora</span>
            </a>
          </div>

          {/* Single, Clean Callback Notice */}
          <div className="mt-8 max-w-xl mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-center justify-center gap-3">
            <MessageSquare className="w-4 h-4 text-clinical-sky flex-shrink-0" />
            <span>
              In caso di mancata risposta, <strong>lasciare un messaggio in segreteria</strong> e verrete richiamate.
            </span>
          </div>

          {/* How It Works - 3 Clean Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 mt-8 border-t border-slate-100 text-left">
            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center mb-2.5">
                  1
                </div>
                <div className="font-heading font-bold text-navy-900 text-base mb-1">
                  Chiama lo Studio
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nei giorni di Lunedì, Mercoledì e Venerdì dalle ore 15.30 alle 18.30.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center mb-2.5">
                  2
                </div>
                <div className="font-heading font-bold text-navy-900 text-base mb-1">
                  Concorda la Visita
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fisseremo la data e l'orario per la visita specialistica o la Second Opinion.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center mb-2.5">
                  3
                </div>
                <div className="font-heading font-bold text-navy-900 text-base mb-1">
                  Visita in Studio
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ti accoglieremo a Mirano (VE) in Via Cristoforo Colombo 4 in un contesto riservato.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Orari & Reperibilità Telefonica */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-navy-900 flex-shrink-0">
              <Clock className="w-6 h-6 text-clinical-sky" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-900">
                Orari di Ricevimento e Prenotazione
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                Ricevimento e prenotazioni telefoniche (Lun, Mer, Ven 15:30 - 18:30)
              </p>
            </div>
          </div>

          {/* Timetable */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-5">Giorno</th>
                  <th className="py-4 px-5">Orario Prenotazioni & Ambulatorio</th>
                  <th className="py-4 px-5 text-right">Stato</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {clinicInfo.schedules.map((schedule) => (
                  <tr key={schedule.day} className="hover:bg-slate-50/50">
                    <td className="py-4 px-5 font-semibold text-slate-900">
                      {schedule.day}
                    </td>
                    <td className="py-4 px-5">
                      {schedule.hours}
                    </td>
                    <td className="py-4 px-5 text-right">
                      {schedule.isOpen ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                          Attivo
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                          Su contatto
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Posizione e Sede a Mirano con Mappa */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-navy-900 flex-shrink-0">
                <MapPin className="w-6 h-6 text-clinical-sky" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-900">
                  Ambulatorio Medico a Mirano
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {clinicInfo.address.street}, {clinicInfo.address.cap} {clinicInfo.address.city} ({clinicInfo.address.province})
                </p>
              </div>
            </div>

            <a
              href={clinicInfo.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold border border-slate-200 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-clinical-sky" />
              <span>Apri su Google Maps</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-sm">
            <div>
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                Indirizzo Ambulatorio
              </div>
              <div className="font-semibold text-slate-900 text-base">
                Dott. Franco Garbin
              </div>
              <div className="text-slate-600 mt-0.5">
                {clinicInfo.address.street}
              </div>
              <div className="text-slate-600">
                {clinicInfo.address.cap} {clinicInfo.address.city} ({clinicInfo.address.province}), Italia
              </div>
              <div className="mt-2 text-xs text-clinical-sky font-semibold flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>Email: {clinicInfo.email}</span>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                Accessibilità e Parcheggio
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lo studio è facilmente raggiungibile in auto e con i trasporti pubblici a Mirano, con ampie possibilità di sosta e parcheggio nelle vicinanze.
              </p>
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              src={clinicInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione Studio Medico Dott. Franco Garbin a Mirano"
            />
          </div>
        </div>

        {/* 4. Cosa portare alla visita */}
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="flex items-center gap-3 mb-5">
            <FileCheck className="w-6 h-6 text-clinical-sky" />
            <h4 className="font-heading font-bold text-xl text-navy-900">
              Cosa portare alla visita o consulto di Second Opinion
            </h4>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-clinical-sky" />
              <span>Tessera sanitaria e documento d'identità</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-clinical-sky" />
              <span>Referti ecografici o visite ginecologiche precedenti</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-clinical-sky" />
              <span>Documentazione chirurgica o proposta terapeutica (per Second Opinion)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-clinical-sky" />
              <span>Esami ematochimici e diario del ciclo o della gravidanza</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
