import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';

interface AboutPhilosophyProps {
  onOpenCv: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPhilosophy: React.FC<AboutPhilosophyProps> = ({ onOpenCv }) => {
  return (
    <section id="chi-sono" className="py-12 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Entrance for Chi Sono */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full space-y-6 sm:space-y-8"
        >
          
          {/* Header - Stretched across full container width */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-navy-900 inline-block" />
              <span>Profilo Professionale • Dott. Franco Garbin</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
              Esperienza clinica, ascolto e valutazione personalizzata
            </h2>
            <p className="text-sm sm:text-base text-navy-800 font-semibold mt-2">
              Specialista in Ginecologia e Ostetricia
            </p>
          </div>

          {/* Narrative Paragraphs - Distributed across the width */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            <p>
              &ldquo;Da oltre 40 anni mi occupo di <strong>Ginecologia e Ostetricia</strong>, con una particolare esperienza nella diagnosi, nella chirurgia ginecologica e nella gestione delle problematiche della donna nelle diverse fasi della vita.&rdquo;
            </p>
            <p>
              &ldquo;Oggi continuo la mia attività professionale come libero professionista, dedicando alla visita e <strong>all&rsquo;ascolto della paziente</strong> il tempo necessario per arrivare a una valutazione accurata e personalizzata.&rdquo;
            </p>
          </div>

          {/* Mobile 1-Line Compact Summary */}
          <div className="sm:hidden flex items-center justify-between text-xs font-medium text-slate-700 bg-surface-50 py-2.5 px-3.5 rounded-xl border border-slate-200/80">
            <span>40+ Anni Esperienza</span>
            <span className="text-slate-300">•</span>
            <span>Ex Primario Ospedaliero</span>
            <span className="text-slate-300">•</span>
            <span>Massimi Voti</span>
          </div>

          {/* Desktop 3 Pillars - Distributed across full container */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-5 pt-1">
            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200/70">
              <Clock className="w-6 h-6 text-navy-900 mb-2.5" />
              <div className="text-xl font-heading font-bold text-navy-900">40+ Anni</div>
              <div className="text-xs text-slate-600 mt-1">Esperienza clinica e chirurgica</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200/70">
              <ShieldCheck className="w-6 h-6 text-navy-900 mb-2.5" />
              <div className="text-xl font-heading font-bold text-navy-900">Direttore U.O.C.</div>
              <div className="text-xs text-slate-600 mt-1">Ospedali di Mirano e Dolo (VE)</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200/70">
              <GraduationCap className="w-6 h-6 text-navy-900 mb-2.5" />
              <div className="text-xl font-heading font-bold text-navy-900">Massimi Voti</div>
              <div className="text-xs text-slate-600 mt-1">Laurea Padova e Specializzazione Firenze</div>
            </div>
          </div>

          {/* CV Action Buttons */}
          <div className="pt-4 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenCv}
              className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 group active:scale-98 cursor-pointer flex-grow sm:flex-grow-0"
            >
              <BookOpen className="w-5 h-5 text-clinical-skyLight group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>Sfoglia Curriculum Completo (36 Pagg.)</span>
            </button>

            <a
              href="./CV/CurriculumDr.FrancoGrabin.pdf"
              download="Curriculum_Dr_Franco_Garbin.pdf"
              className="h-14 sm:h-16 px-6 sm:px-7 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2 border border-slate-300 active:scale-98"
              title="Scarica il Curriculum in formato PDF"
            >
              <Download className="w-4 h-4 text-slate-600 flex-shrink-0" />
              <span>Scarica PDF</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
