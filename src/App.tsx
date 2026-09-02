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
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  // Show sticky mobile CTA only when user starts scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* 4. Sticky Mobile Action Bar - Visible only after scrolling, taller, matching site style */}
      {showMobileCta && (
        <aside 
          aria-label="Contatto rapido" 
          className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-8px_30px_rgba(10,25,47,0.15)] transition-all duration-300"
        >
          {currentPage !== 'prenota' ? (
            <button
              onClick={() => handleNavigate('prenota')}
              className="w-full h-[60px] rounded-2xl bg-navy-900 active:bg-navy-800 text-white font-bold text-base shadow-lg shadow-navy-900/30 flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-clinical-skyLight" />
              <span>Prenota Ora</span>
            </button>
          ) : (
            <a
              href={clinicInfo.phoneTel}
              className="w-full h-[60px] rounded-2xl bg-navy-900 active:bg-navy-800 text-white font-bold text-base shadow-lg shadow-navy-900/30 flex items-center justify-center gap-3 transition-all"
            >
              <Phone className="w-5 h-5 text-clinical-skyLight" />
              <span>Chiama per Prenotare</span>
            </a>
          )}
        </aside>
      )}

      {/* 5. Curriculum Vitae Reader Modal (36 Pages) */}
      <CvModal
        isOpen={isCvOpen}
        onClose={handleCloseCv}
      />

    </div>
  );
};

export default App;
