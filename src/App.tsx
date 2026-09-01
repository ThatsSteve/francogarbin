import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPhilosophy } from './components/AboutPhilosophy';
import { ServicesBento } from './components/ServicesBento';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { BookingPage } from './pages/BookingPage';
import { ServicesPage } from './pages/ServicesPage';
import { Phone, Calendar } from 'lucide-react';
import { clinicInfo } from './data/clinicData';

export const App: React.FC = () => {
  // Page routing: 'home' | 'prenota' | 'prestazioni'
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Sync route with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/prenota') || hash.startsWith('#prenota')) {
        setCurrentPage('prenota');
      } else if (hash.startsWith('#/prestazioni') || hash.startsWith('#prestazioni')) {
        setCurrentPage('prestazioni');
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '#/';
    } else if (page === 'prenota') {
      window.location.hash = '#/prenota';
    } else if (page === 'prestazioni') {
      window.location.hash = '#/prestazioni';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCv = () => {
    setIsCvOpen(true);
  };

  const handleCloseCv = () => {
    setIsCvOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 text-slate-800 antialiased selection:bg-navy-900 selection:text-white pb-16 sm:pb-0">
      
      {/* 1. Fixed Header with Opaque White Background on Scroll */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCv={handleOpenCv}
      />

      {/* 2. Main Routed Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* Hero Section: Foto del medico visibile, scritte in basso e testi concisi */}
            <Hero onNavigate={handleNavigate} />

            {/* Chi Sono & Curriculum Section */}
            <AboutPhilosophy onOpenCv={handleOpenCv} onNavigate={handleNavigate} />

            {/* Prestazioni Cliniche Principali con Second Opinion in evidenza */}
            <ServicesBento onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'prenota' && (
          <BookingPage />
        )}

        {currentPage === 'prestazioni' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCv={handleOpenCv}
      />

      {/* 4. Sticky Mobile Action Bar - High Impact & Attention Grabbing */}
      <aside aria-label="Contatto rapido" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        {currentPage !== 'prenota' ? (
          <button
            onClick={() => handleNavigate('prenota')}
            className="w-full h-13 rounded-xl bg-gradient-to-r from-clinical-sky via-clinical-skyDark to-navy-900 active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-clinical-sky/35 flex items-center justify-center gap-2.5 transition-all relative overflow-hidden"
          >
            {/* Subtle animated live indicator dot */}
            <span className="relative flex h-2.5 w-2.5 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <Calendar className="w-5 h-5 text-white" />
            <span>Prenota Ora</span>
          </button>
        ) : (
          <a
            href={clinicInfo.phoneTel}
            className="w-full h-13 rounded-xl bg-gradient-to-r from-clinical-sky to-navy-900 active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-clinical-sky/35 flex items-center justify-center gap-2.5 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Chiama per Prenotare</span>
          </a>
        )}
      </aside>

      {/* 5. Curriculum Vitae Reader Modal (36 Pages) */}
      <CvModal
        isOpen={isCvOpen}
        onClose={handleCloseCv}
      />

    </div>
  );
};

export default App;
