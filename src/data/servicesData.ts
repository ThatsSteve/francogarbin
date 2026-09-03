export interface MedicalService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  paragraphs?: string[];
  isSecondOpinion?: boolean;
}

export const medicalServices: MedicalService[] = [
  {
    id: "visita-ginecologica",
    title: "VISITA GINECOLOGICA",
    shortDesc: "Prevenzione, diagnosi e gestione delle principali problematiche ginecologiche."
  },
  {
    id: "ostetricia",
    title: "OSTETRICIA",
    shortDesc: "Assistenza e valutazione della gravidanza e della salute materno-fetale."
  },
  {
    id: "ecografia-ginecologica-ostetrica",
    title: "ECOGRAFIA GINECOLOGICA E OSTETRICA",
    shortDesc: "Valutazione ecografica nell'ambito della visita e dell'inquadramento diagnostico."
  },
  {
    id: "menopausa",
    title: "MENOPAUSA",
    shortDesc: "Valutazione dei disturbi della menopausa e delle possibilità terapeutiche."
  },
  {
    id: "endometriosi",
    title: "ENDOMETRIOSI",
    shortDesc: "Inquadramento diagnostico e valutazione dei possibili percorsi terapeutici."
  },
  {
    id: "pcos",
    title: "PCOS - SINDROME DELL'OVAIO POLICISTICO",
    shortDesc: "Valutazione della sindrome dell'ovaio policistico e delle problematiche correlate."
  },
  {
    id: "chirurgia-ginecologica",
    title: "CHIRURGIA GINECOLOGICA",
    shortDesc: "Consulenza e valutazione delle indicazioni chirurgiche e delle possibili alternative terapeutiche."
  },
  {
    id: "second-opinion",
    title: "SECOND OPINION",
    shortDesc: "Un ulteriore parere specialistico quando è necessario prendere una decisione diagnostica o terapeutica.",
    isSecondOpinion: true,
    paragraphs: [
      "Un ulteriore parere specialistico quando è necessario prendere una decisione diagnostica o terapeutica.",
      "Una diagnosi o la proposta di un intervento chirurgico possono generare dubbi e interrogativi. Una seconda valutazione specialistica può aiutare a comprendere meglio la situazione, confrontare le possibilità terapeutiche e affrontare una decisione con maggiore consapevolezza.",
      "La lunga esperienza maturata nella chirurgia ginecologica permette di valutare una problematica non soltanto dal punto di vista diagnostico, ma anche considerando le eventuali possibilità chirurgiche e le alternative terapeutiche."
    ]
  }
];

export const bookingNotice = {
  title: "Per prenotare una visita",
  phone: "339 413 2022",
  phoneTel: "tel:+393394132022",
  hours: "Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo.",
  callbackNotice: "In caso di mancata risposta, lasciare un messaggio e verrete richiamate.",
  address: "Via Cristoforo Colombo 4, Mirano (VE)",
  email: "francogarbin@gmail.com"
};
