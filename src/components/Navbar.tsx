import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Menu, 
  X, 
  ChevronRight, 
  FileText, 
  Clock, 
  MapPin,
  Home as HomeIcon,
  User,
  Stethoscope
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenCv }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleNavClick = (page: string, hash?: string) => {
    setDropdownOpen(false);
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: "Home", page: "home", icon: <HomeIcon className="w-4 h-4" /> },
    { label: "Chi Sono", page: "home", hash: "#chi-sono", icon: <User className="w-4 h-4" /> },
    { label: "Prestazioni Cliniche", page: "prestazioni", icon: <Stethoscope className="w-4 h-4" /> },
    { label: "Prenota Ora", page: "prenota", isHighlighted: true, icon: <Calendar className="w-4 h-4" /> },
  ];

  return (
    <header 
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 border-b border-slate-200 ${
        isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Doctor Name - Clean Typography */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex-shrink-0 group py-1 text-left"
          >
            <span className="font-heading font-bold text-xl sm:text-2xl text-navy-900 tracking-tight whitespace-nowrap group-hover:text-clinical-sky transition-colors">
              Dr. Franco Garbin
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-wide block sm:hidden">
              Ginecologo • Mirano (VE)
            </span>
          </button>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Header button: visible ONLY on tablet & desktop (hidden on mobile) */}
            {!dropdownOpen && currentPage !== 'prenota' && (
              <button
                onClick={() => handleNavClick('prenota')}
                className="hidden sm:inline-flex h-10 px-4 sm:px-5 items-center justify-center gap-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors active:scale-98 whitespace-nowrap"
                aria-label="Prenota una visita"
              >
                <Calendar className="w-4 h-4 text-clinical-skyLight" />
                <span>Prenota una Visita</span>
              </button>
            )}

            {/* Menu Dropdown Toggle */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`h-10 w-10 inline-flex items-center justify-center rounded-lg border transition-all ${
                dropdownOpen 
                  ? 'bg-slate-100 border-slate-300 text-navy-900' 
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              aria-label="Menu navigazione"
              title="Menu"
            >
              {dropdownOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Sleek Dropdown Menu Overlay without redundant duplicate buttons */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Navigation Links Column */}
                <div className="md:col-span-7">
                  <div className="text-xs font-bold uppercase tracking-widest text-clinical-sky mb-3">
                    Indice Sezioni
                  </div>
                  <nav className="flex flex-col space-y-1.5">
                    {navLinks.map((link) => (
                      <button
                        key={link.label}
                        onClick={() => handleNavClick(link.page, link.hash)}
                        className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm sm:text-base transition-all text-left ${
                          link.isHighlighted
                            ? 'bg-gradient-to-r from-sky-50 to-clinical-skyLight/60 border-2 border-clinical-sky/40 text-navy-900 font-bold shadow-sm hover:border-clinical-sky hover:bg-sky-100/80 my-1'
                            : currentPage === link.page && !link.hash
                              ? 'bg-slate-100 text-navy-900 font-semibold'
                              : 'text-slate-700 hover:text-navy-900 hover:bg-slate-50 font-medium'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`p-1.5 rounded-lg flex items-center justify-center ${
                            link.isHighlighted ? 'bg-clinical-sky text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, {
                              className: `w-4 h-4 ${link.isHighlighted ? 'text-white' : 'text-slate-500'}`
                            })}
                          </span>
                          <span className={link.isHighlighted ? 'text-clinical-skyDark font-bold text-base' : ''}>
                            {link.label}
                          </span>
                        </span>
                        
                        {link.isHighlighted ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-white bg-clinical-sky hover:bg-clinical-skyDark px-3 py-1 rounded-lg shadow-sm">
                            <span>Prenota</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    ))}

                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onOpenCv();
                      }}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm sm:text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50 transition-colors text-left w-full"
                    >
                      <span className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-clinical-sky" />
                        <span>Curriculum Vitae Ufficiale (36 Pagine)</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </nav>
                </div>

                {/* Studio Information Column */}
                <div className="md:col-span-5 md:border-l md:border-slate-100 md:pl-6 flex flex-col justify-center pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-widest text-clinical-sky mb-3">
                    Studio Medico Mirano
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">{clinicInfo.address.street}</strong> — {clinicInfo.address.city} ({clinicInfo.address.province})
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Orari per prenotare:</strong> Lunedì, Mercoledì, Venerdì (15:30 - 18:30)
                        <div className="text-[11px] text-slate-500 mt-0.5">In caso di mancata risposta, lasciare un messaggio e verrete richiamate.</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
