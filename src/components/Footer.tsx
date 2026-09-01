import React from 'react';
import { Phone, ArrowUp, MapPin, Mail, ExternalLink } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCv }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string, hash?: string) => {
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-10 sm:py-12 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid: Info & Quick Links (Left) + Clean Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-800">
          
          {/* Left: Doctor info, contacts, quick links */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="font-heading font-bold text-xl text-white">
                Dott. Franco Garbin
              </div>
              <div className="text-slate-300 text-xs mt-0.5 font-medium">
                Specialista in Ginecologia e Ostetricia
              </div>
              <div className="text-slate-500 text-[11px] mt-0.5">
                Già Direttore U.O.C. Ospedali di Mirano e Dolo (VE)
              </div>
            </div>

            {/* Essential Contacts */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-clinical-sky flex-shrink-0" />
                <span>{clinicInfo.address.street} — {clinicInfo.address.city} ({clinicInfo.address.province})</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-clinical-sky flex-shrink-0" />
                <a href={clinicInfo.phoneTel} className="text-white hover:text-clinical-sky font-semibold transition-colors">
                  Cell. {clinicInfo.phoneFormatted}
                </a>
                <span className="text-slate-500 text-[11px]">(Lun, Mer, Ven 15:30 - 18:30)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-clinical-sky flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {clinicInfo.email}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Link Rapidi
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
                <button onClick={() => handleNav('home', '#chi-sono')} className="hover:text-white transition-colors">
                  Chi Sono
                </button>
                <button onClick={() => handleNav('prestazioni')} className="hover:text-white transition-colors">
                  Prestazioni
                </button>
                <button onClick={() => handleNav('prenota')} className="text-clinical-sky hover:underline font-medium">
                  Prenota Visita
                </button>
                <button onClick={onOpenCv} className="hover:text-white transition-colors">
                  Curriculum Ufficiale
                </button>
              </div>
            </div>
          </div>

          {/* Right: Embedded Clean Map */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 p-2.5 shadow-lg">
              <div className="flex items-center justify-between px-2 py-1 mb-1.5 text-[11px]">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-clinical-sky" />
                  <span>Ambulatorio a Mirano</span>
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
              
              <div className="rounded-lg overflow-hidden h-44 w-full border border-slate-800">
                <iframe
                  src={clinicInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Posizione Ambulatorio Dott. Franco Garbin"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} Dott. Franco Garbin. Informativa sanitaria conforme alle Linee Guida FNOMCeO.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Torna su</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
