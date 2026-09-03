import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  ArrowUp, 
  ZoomIn, 
  ZoomOut,
  ChevronDown
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const totalPages = 36;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const [activePage, setActivePage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100); // 100%, 125%, 150%
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const padPage = (num: number) => num.toString().padStart(4, '0');

  // When modal opens, reset to page 1 and zoom 100%
  useEffect(() => {
    if (isOpen) {
      setActivePage(1);
      setZoomLevel(100);
      const timer = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'Home') scrollToPage(1);
      if (e.key === 'End') scrollToPage(totalPages);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Track active visible page with IntersectionObserver
  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNum = Number(entry.target.getAttribute('data-page-number'));
            if (pageNum) {
              setActivePage(pageNum);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '-30% 0px -45% 0px', // trigger when page crosses the upper-middle viewport
        threshold: 0,
      }
    );

    pageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isOpen]);

  const scrollToPage = (pageNum: number) => {
    const targetElement = pageRefs.current.get(pageNum);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActivePage(pageNum);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 175));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 75));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  if (!isOpen) return null;

  // Max width class based on zoom level
  const getMaxWidthClass = () => {
    switch (zoomLevel) {
      case 75: return 'max-w-2xl';
      case 100: return 'max-w-3xl';
      case 125: return 'max-w-4xl';
      case 150: return 'max-w-5xl';
      case 175: return 'max-w-6xl';
      default: return 'max-w-3xl';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 lg:p-6 bg-navy-950/90 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="bg-slate-950 w-full h-[100dvh] sm:h-[96vh] max-w-6xl sm:rounded-2xl flex flex-col shadow-2xl border border-slate-800 overflow-hidden"
      >
        {/* Top Control Bar */}
        <header className="px-3 sm:px-5 py-2.5 bg-navy-950 text-white flex items-center justify-between border-b border-slate-800 flex-shrink-0 z-20 shadow-md">
          
          {/* Left: Solo nome senza loghi vari */}
          <div className="min-w-0 pr-2 flex-shrink">
            <h3 className="font-heading font-bold text-sm sm:text-base text-white tracking-tight truncate">
              Curriculum Dr. Franco Garbin
            </h3>
          </div>

          {/* Right: Quick Page Selector, Zoom Controls, Download, Close */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Page Jumper Select */}
            <div className="flex items-center gap-1 bg-navy-900 border border-slate-700/80 rounded-lg px-2 py-1 text-xs shadow-2xs">
              <span className="text-slate-400 hidden md:inline text-[11px]">Pagina</span>
              <div className="relative inline-flex items-center">
                <select
                  value={activePage}
                  onChange={(e) => scrollToPage(Number(e.target.value))}
                  className="bg-transparent text-white font-bold text-xs outline-none pr-4 cursor-pointer appearance-none"
                  aria-label="Seleziona pagina del curriculum"
                >
                  {pages.map((p) => (
                    <option key={p} value={p} className="bg-navy-950 text-white">
                      {p} di {totalPages}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 pointer-events-none" />
              </div>
            </div>

            {/* Zoom Controls (Desktop & Tablet) */}
            <div className="hidden md:flex items-center gap-1 bg-navy-900 border border-slate-700/80 rounded-lg px-1.5 py-0.5 text-xs text-slate-300">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 75}
                className="p-1 rounded hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Riduci dimensione"
                aria-label="Riduci dimensione"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="font-mono text-[11px] px-1 py-0.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Reimposta 100%"
              >
                {zoomLevel}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 175}
                className="p-1 rounded hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Ingrandisci dimensione"
                aria-label="Ingrandisci dimensione"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download PDF button */}
            <a
              href="./CV/CurriculumDr.FrancoGrabin.pdf"
              download="Curriculum_Dr_Franco_Garbin.pdf"
              className="inline-flex items-center gap-1.5 bg-clinical-sky hover:bg-clinical-skyDark text-white text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-lg shadow-sm transition-all"
              title="Scarica PDF completo"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Chiudi visualizzatore"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </header>

        {/* Scrollable Document Area (Continuous Vertical Flow) */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-5 lg:p-7 scroll-smooth bg-slate-900"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className={`mx-auto space-y-4 sm:space-y-6 transition-all duration-200 ${getMaxWidthClass()}`}>
            
            {pages.map((pageNum) => {
              const imagePath = `./CV Foto/CurriculumDr.FrancoGrabin_page-${padPage(pageNum)}.jpg`;
              return (
                <div
                  key={pageNum}
                  id={`cv-page-${pageNum}`}
                  data-page-number={pageNum}
                  ref={(el) => {
                    if (el) pageRefs.current.set(pageNum, el);
                    else pageRefs.current.delete(pageNum);
                  }}
                  className="bg-white rounded-lg sm:rounded-xl shadow-xl border border-slate-700/40 overflow-hidden relative"
                >
                  {/* Document Page Sheet - Exact A4 Proportions (1241 x 1754) */}
                  <div className="w-full bg-white relative aspect-[1241/1754] flex items-center justify-center">
                    <img
                      src={imagePath}
                      alt={`Curriculum Dott. Franco Garbin — Pagina ${pageNum}`}
                      loading={pageNum <= 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-contain select-none"
                    />
                  </div>
                </div>
              );
            })}

            {/* End of Document Banner */}
            <div className="pt-6 pb-12 text-center text-slate-400 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Fine del Curriculum Vitae
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Hai consultato tutte le {totalPages} pagine del curriculum ufficiale del Dott. Franco Garbin.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => scrollToPage(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Torna a Pagina 1</span>
                </button>
                <a
                  href="./CV/CurriculumDr.FrancoGrabin.pdf"
                  download="Curriculum_Dr_Franco_Garbin.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-clinical-sky hover:bg-clinical-skyDark text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Scarica PDF Completo</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Floating "Torna in Cima" Action Button when scrolled down */}
        <AnimatePresence>
          {activePage > 2 && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 0, scale: 1 }}
              onClick={() => scrollToPage(1)}
              className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 px-3.5 py-2.5 rounded-full bg-navy-950/90 hover:bg-navy-900 text-white text-xs font-semibold shadow-2xl border border-slate-700 flex items-center gap-2 backdrop-blur-md transition-all active:scale-95 z-30 cursor-pointer"
              title="Torna a Pagina 1"
            >
              <ArrowUp className="w-4 h-4 text-clinical-sky" />
              <span className="hidden sm:inline">Pagina 1</span>
            </motion.button>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
};
