export interface FaqItem {
  question: string;
  answer: string;
  category: 'booking' | 'prep' | 'clinical' | 'docs';
}

export const faqList: FaqItem[] = [
  {
    question: "Come posso prenotare una visita specialistica?",
    answer: "La prenotazione si effettua telefonando al Cell. 339 413 2022. Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo. In caso di mancata risposta, è sufficiente lasciare un messaggio in segreteria e verrete richiamate al più presto.",
    category: "booking"
  },
  {
    question: "In cosa consiste la Second Opinion e quando è opportuno richiederla?",
    answer: "La Second Opinion è un ulteriore parere specialistico utile quando è necessario prendere una decisione diagnostica o terapeutica importante. Una diagnosi complessa o la proposta di un intervento chirurgico possono generare dubbi e timori: una seconda valutazione aiuta a comprendere meglio il quadro clinico, confrontare le possibilità terapeutiche ed esplorare le alternative chirurgiche o conservative con maggiore consapevolezza.",
    category: "clinical"
  },
  {
    question: "Quali sono i punti di forza dell'approccio del Dott. Garbin?",
    answer: "Oltre 40 anni di esperienza clinica e chirurgica ospedaliera, già Direttore dell’Unità Operativa Complessa di Ostetricia e Ginecologia degli Ospedali di Mirano e Dolo (VE). Oggi nell'attività libero professionale dedica alla visita e all'ascolto della paziente tutto il tempo necessario per arrivare a una valutazione accurata e personalizzata.",
    category: "clinical"
  },
  {
    question: "Come devo prepararmi prima di una visita ginecologica o ecografia?",
    answer: "È preferibile fissare l'appuntamento lontano dal ciclo mestruale. Nelle 48 ore precedenti è consigliabile evitare lavande interne o ovuli vaginali per non alterare eventuali prelievi citologici.",
    category: "prep"
  },
  {
    question: "Quale documentazione clinica è utile portare alla visita?",
    answer: "Si raccomanda di portare con sé: documento di identità, tessera sanitaria, referti di visite ginecologiche precedenti, ecografie pelviche, Pap-test o HPV test recenti, esami ematochimici e, per consulti di chirurgia o Second Opinion, tutta la documentazione medica o la proposta terapeutica ricevuta.",
    category: "docs"
  },
  {
    question: "Vengono trattate condizioni come Endometriosi e PCOS?",
    answer: "Sì, il Dott. Garbin esegue l'inquadramento diagnostico e la valutazione dei possibili percorsi terapeutici sia per l'Endometriosi (e il dolore pelvico correlato) sia per la Sindrome dell'Ovaio Policistico (PCOS) e i disordini ormonali.",
    category: "clinical"
  }
];
