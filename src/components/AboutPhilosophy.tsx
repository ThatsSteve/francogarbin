import React from 'react';
import { 
  Download, 
  BookOpen, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

interface AboutPhilosophyProps {
  onOpenCv: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPhilosophy: React.FC<AboutPhilosophyProps> = ({ onOpenCv, onNavigate }) => {
  return (
    <section id="chi-sono" className="py-14 sm:py-20 bg-surface-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Elegant Section Header */}
        <div className="mb-8 text-left">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-clinical-sky mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-clinical-sky inline-block" />
            <span>Profilo Professionale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
            Chi Sono
          </h2>
        </div>

        {/* Clean, Unified Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Doctor Portrait & Identity */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 mb-4 bg-slate-100">
                <img
                  src="./media/Garbin1.png"
                  alt="Dott. Franco Garbin"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-900">
                Dr. Franco Garbin
              </h3>
              <p className="text-sm text-clinical-sky font-medium mt-0.5">
                Specialista in Ginecologia e Ostetricia
              </p>
              <span className="text-xs text-slate-500 mt-1">
                Mirano (VE) • Iscritto all'Ordine dei Medici
              </span>
            </div>

            {/* Doctor Description & Essential Credentials */}
            <div className="md:col-span-8 space-y-6 md:border-l md:border-slate-100 md:pl-8">
              
              {/* Doctor's Words (from photo) */}
              <div className="space-y-3.5 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                <p>
                  &ldquo;Da oltre 40 anni mi occupo di <strong>Ginecologia e Ostetricia</strong>, con una particolare esperienza nella diagnosi, nella chirurgia ginecologica e nella gestione delle problematiche della donna nelle diverse fasi della vita.&rdquo;
                </p>
                <p>
                  &ldquo;Oggi continuo la mia attività professionale come libero professionista, dedicando alla visita e <strong>all&rsquo;ascolto della paziente</strong> il tempo necessario per arrivare a una valutazione accurata e personalizzata.&rdquo;
                </p>
              </div>

              {/* Essential CV Credentials in Clean List */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-clinical-sky flex-shrink-0 mt-0.5" />
                  <span><strong>Laurea a Padova</strong> e <strong>Specializzazione con Lode a Firenze</strong> in Ostetricia e Ginecologia.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-clinical-sky flex-shrink-0 mt-0.5" />
                  <span><strong>Già Direttore U.O.C. (Primario)</strong> degli Ospedali di Mirano e Dolo (VE).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-clinical-sky flex-shrink-0 mt-0.5" />
                  <span>Vasta esperienza in <strong>chirurgia ginecologica</strong>, laparoscopia e <strong>diagnostica ecografica</strong>.</span>
                </div>
              </div>

            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenCv}
                className="h-12 px-5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 group active:scale-98"
              >
                <BookOpen className="w-4 h-4 text-clinical-skyLight group-hover:scale-110 transition-transform" />
                <span>Sfoglia Curriculum (36 Pagg.)</span>
              </button>

              <a
                href="./CV/CurriculumDr.FrancoGrabin.pdf"
                download="Curriculum_Dr_Franco_Garbin.pdf"
                className="h-12 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Scarica PDF</span>
              </a>
            </div>

            <button
              onClick={() => onNavigate('prenota')}
              className="h-12 px-6 rounded-xl bg-clinical-sky hover:bg-clinical-skyDark text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota una Visita</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
