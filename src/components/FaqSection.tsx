import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import { faqList } from '../data/faqData';
import { clinicInfo } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-surface-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Informazioni & Chiarimenti
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
            Domande Frequenti delle Pazienti
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Indicazioni pratiche per la preparazione alle visite specialistiche, la documentazione clinica da portare e la gestione delle urgenze.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-subtle transition-colors"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-navy-900 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`${isOpen ? 'text-clinical-sky' : 'text-navy-900'} transition-colors`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded flex items-center justify-center bg-slate-100 text-slate-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-slate-200 text-navy-900' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-5 rounded-lg bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 shadow-subtle">
          <div>
            <strong className="text-slate-800">Necessiti di un chiarimento immediato?</strong> Contatta direttamente l'ambulatorio.
          </div>
          <a
            href={clinicInfo.phoneTel}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 text-white font-medium text-xs hover:bg-navy-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contatta Telefonicamente</span>
          </a>
        </div>

      </div>
    </section>
  );
};
