export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  category: 'education' | 'leadership' | 'specialization' | 'scientific';
  description: string;
  keyPoints: string[];
}

export const academicTimeline: TimelineItem[] = [
  {
    id: "laurea",
    year: "Laurea Magistrale",
    title: "Laurea in Medicina e Chirurgia",
    institution: "Università degli Studi di Padova",
    category: "education",
    description: "Conseguimento della Laurea in Medicina e Chirurgia presso il prestigioso ateneo patavino con votazione di eccellenza, avviando il percorso clinico e chirurgico dedicato alla salute della donna.",
    keyPoints: [
      "Iscrizione all'Albo dei Medici Chirurghi",
      "Solida formazione medica multidisciplinare e internistica"
    ]
  },
  {
    id: "specializzazione",
    year: "Specializzazione",
    title: "Specialista in Ostetricia e Ginecologia",
    institution: "Università degli Studi di Firenze",
    category: "specialization",
    description: "Diploma di Specializzazione in Ostetricia e Ginecologia con il massimo dei voti e la lode. Approfondimento specialistico in chirurgia ginecologica, perinatologia, diagnostica per immagini e patologia della riproduzione umana.",
    keyPoints: [
      "Specializzazione universitaria conseguita con il massimo dei voti e lode",
      "Formazione chirurgica ed ecografica avanzata"
    ]
  },
  {
    id: "primario-direttore",
    year: "Direzione Ospedaliera",
    title: "Già Direttore dell’Unità Operativa Complessa (U.O.C.)",
    institution: "Ospedali di Mirano e Dolo (VE) — Servizio Sanitario Nazionale",
    category: "leadership",
    description: "Lungo incarico direzionale come Direttore di Struttura Complessa di Ostetricia e Ginecologia presso gli Ospedali di Mirano e Dolo. Guida di équipe multidisciplinari, coordinamento di sale parto, blocchi operatori di chirurgia ginecologica e reparti di degenza.",
    keyPoints: [
      "Oltre 40 anni di esperienza clinica e chirurgica ospedaliera",
      "Migliaia di interventi chirurgici ginecologici eseguiti",
      "Organizzazione e standardizzazione dei protocolli clinici Evidence-Based"
    ]
  },
  {
    id: "docenza-ricerca",
    year: "Attività Scientifica",
    title: "Docenza, Ricerca & Pubblicazioni Scientifiche",
    institution: "Atenei & Riviste Scientifiche Nazionali ed Internazionali",
    category: "scientific",
    description: "Autore di oltre 50 pubblicazioni scientifiche su riviste indicizzate. Relatore e moderatore in congressi scientifici; costante impegno nell'aggiornamento e nella formazione medica.",
    keyPoints: [
      "Pubblicazioni su riviste peer-reviewed di ginecologia e ostetricia",
      "Relatore in congressi e comitati scientifici di settore",
      "Ricerche cliniche e chirurgiche per la salute della donna"
    ]
  },
  {
    id: "attivita-privata",
    year: "Oggi",
    title: "Attività Libero Professionale & Second Opinion",
    institution: "Studio Medico Dott. Franco Garbin — Mirano (VE)",
    category: "specialization",
    description: "Dedizione all'attività professionale specialistica, dedicando alla visita e all’ascolto della paziente tutto il tempo necessario per arrivare a una valutazione accurata, personalizzata e consulenze di Second Opinion.",
    keyPoints: [
      "Visite e controlli personalizzati con ascolto attento e dedicato",
      "Consulenza esperta di Second Opinion per decisioni diagnostiche e chirurgiche"
    ]
  }
];
