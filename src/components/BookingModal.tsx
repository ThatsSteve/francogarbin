import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  Check, 
  PhoneCall
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { medicalServices } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || medicalServices[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Lunedì (15:30 - 18:30)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/65 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Chiudi modale"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="border-b border-slate-100 pb-4 mb-5 pr-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Modulo di Richiesta
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy-900 mt-1">
                Richiedi un Appuntamento Medico
              </h3>
            </div>

            {/* Quick Call Box */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 mb-5 flex items-center justify-between gap-3 text-xs">
              <div className="text-slate-700 font-medium">
                Preferisci chiamare subito lo studio?
              </div>
              <a
                href={clinicInfo.phoneTel}
                className="font-semibold text-white bg-navy-900 hover:bg-navy-800 px-3 py-1.5 rounded flex-shrink-0 transition-colors inline-flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Chiama {clinicInfo.phoneFormatted}</span>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Prestazione Selezionata */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Prestazione Specialistica *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-1 focus:ring-navy-900 focus:border-navy-900 outline-none transition-all"
                  required
                >
                  {medicalServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="altro">Altra prestazione / Consulenza speciale</option>
                </select>
              </div>

              {/* Fascia Oraria Desiderata */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Fascia Oraria / Giorno Preferito
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:ring-1 focus:ring-navy-900 focus:border-navy-900 outline-none transition-all"
                >
                  <option value="Lunedì (15:30 - 18:30)">Lunedì pomeriggio (15:30 - 18:30)</option>
                  <option value="Mercoledì (15:30 - 18:30)">Mercoledì pomeriggio (15:30 - 18:30)</option>
                  <option value="Venerdì (15:30 - 18:30)">Venerdì pomeriggio (15:30 - 18:30)</option>
                  <option value="Altro orario flessibile / Urgenza">Altra fascia oraria personalizzata / Urgenza</option>
                </select>
              </div>

              {/* Nome e Cognome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome e Cognome *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="es. Maria Rossi"
                      required
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:ring-1 focus:ring-navy-900 focus:border-navy-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Recapito Telefonico */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefono *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="es. 339 413 2022"
                      required
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:ring-1 focus:ring-navy-900 focus:border-navy-900 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email Facoltativa */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email (Facoltativa)
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@email.it"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:ring-1 focus:ring-navy-900 focus:border-navy-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Note aggiuntive / Quesito clinico o Second Opinion
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specificare eventuali sintomi, precedenti controlli o quesiti per Second Opinion..."
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:ring-1 focus:ring-navy-900 focus:border-navy-900 outline-none transition-all resize-none"
                />
              </div>

              {/* Privacy consent */}
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <input type="checkbox" id="privacy-consent" defaultChecked required className="mt-0.5 rounded text-navy-900 focus:ring-navy-900" />
                <label htmlFor="privacy-consent">
                  Acconsento al trattamento dei dati personali unicamente per la gestione della richiesta di appuntamento medico.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Invia Richiesta di Appuntamento</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-4 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-navy-900 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-heading font-bold text-navy-900">
              Richiesta Trasmessa
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Gentile <strong>{fullName}</strong>, la richiesta per <strong>{preferredSlot}</strong> è stata registrata.
            </p>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Paziente:</span>
                <span className="font-semibold text-slate-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Telefono:</span>
                <span className="font-semibold text-slate-900">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ambulatorio:</span>
                <span className="font-semibold text-slate-900">Via Cristoforo Colombo 4, Mirano (VE)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-left">
              Lo studio ricontatterà il numero indicato per concordare la visita.
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={clinicInfo.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-medium text-xs hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chiama Studio</span>
              </a>

              <button
                onClick={handleReset}
                className="flex-1 inline-flex items-center justify-center py-2.5 px-3 rounded-lg bg-navy-900 text-white font-medium text-xs hover:bg-navy-800 transition-colors"
              >
                Chiudi
              </button>
            </div>

          </div>
        )}

      </motion.div>
    </div>
  );
};
