import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  FileText,
  RotateCcw
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const totalPages = 36;
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentPage < totalPages) setCurrentPage(p => p + 1);
      if (e.key === 'ArrowLeft' && currentPage > 1) setCurrentPage(p => p - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, onClose]);

  const padPage = (num: number) => num.toString().padStart(4, '0');

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  if (!isOpen) return null;

  const currentImagePath = `./CV Foto/CurriculumDr.FrancoGrabin_page-${padPage(currentPage)}.jpg`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-navy-950/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl border border-slate-700/40 overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 bg-navy-950 text-white flex items-center justify-between border-b border-navy-900 flex-shrink-0">
          
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-slate-400" />
            <div>
              <h3 className="font-heading font-bold text-sm leading-tight text-white">
                Curriculum Vitae — Dr. Franco Garbin
              </h3>
              <p className="text-[11px] text-slate-400">
                Pagina {currentPage} di {totalPages} • Documentazione Ufficiale
              </p>
            </div>
          </div>

          {/* Controls: Zoom, Download, Close */}
          <div className="flex items-center gap-2">
            
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-navy-900 rounded p-1 border border-navy-800">
              <button
                onClick={handleZoomOut}
                className="p-1 rounded hover:bg-navy-800 text-slate-400 hover:text-white"
                title="Riduci Zoom"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-1.5 text-slate-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1 rounded hover:bg-navy-800 text-slate-400 hover:text-white"
                title="Aumenta Zoom"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1 rounded hover:bg-navy-800 text-slate-500 hover:text-white"
                title="Reimposta Zoom"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Download PDF button */}
            <a
              href="./CV/CurriculumDr.FrancoGrabin.pdf"
              download="Curriculum_Dr_Franco_Garbin.pdf"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-navy-950 text-xs font-semibold px-3 py-1.5 rounded transition-all"
              title="Scarica PDF completo"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Scarica PDF</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-navy-900 text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Main Document Viewer */}
        <div className="flex-1 bg-slate-900 overflow-auto flex items-center justify-center p-4 relative select-none">
          
          {/* Previous Page Button */}
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/90 hover:bg-navy-900 text-white disabled:opacity-20 disabled:cursor-not-allowed shadow-lg border border-slate-700 z-10 transition-all"
            aria-label="Pagina precedente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Current Page Image */}
          <div className="transition-transform duration-200 shadow-xl rounded overflow-hidden bg-white max-h-full">
            <img
              src={currentImagePath}
              alt={`Curriculum Dr. Garbin Pagina ${currentPage}`}
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              className="max-h-[74vh] w-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Next Page Button */}
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/90 hover:bg-navy-900 text-white disabled:opacity-20 disabled:cursor-not-allowed shadow-lg border border-slate-700 z-10 transition-all"
            aria-label="Pagina successiva"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Bottom Page Navigation Strip */}
        <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between gap-4 flex-shrink-0 text-xs">
          
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-2 py-1 rounded border border-slate-200 disabled:opacity-30 hover:bg-slate-50 text-slate-700 font-medium"
            >
              Prima
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 rounded border border-slate-200 disabled:opacity-30 hover:bg-slate-50 text-slate-700 font-medium"
            >
              Ultima
            </button>
          </div>

          {/* Slider */}
          <div className="flex-1 max-w-xs flex items-center gap-2">
            <span className="font-mono text-[11px] text-slate-400">1</span>
            <input
              type="range"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="w-full h-1 bg-slate-200 rounded appearance-none cursor-pointer accent-navy-900"
            />
            <span className="font-mono text-[11px] text-slate-400">{totalPages}</span>
          </div>

          {/* Page indicator */}
          <div className="font-semibold text-slate-700">
            Pagina {currentPage} / {totalPages}
          </div>

        </div>

      </motion.div>
    </div>
  );
};
