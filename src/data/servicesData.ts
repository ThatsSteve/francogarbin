export interface MedicalService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  highlights: string[];
  preparationTips?: string;
  isFeatured?: boolean;
  featuredNotice?: {
    subtitle: string;
    whyNeeded: string;
    experienceValue: string;
  };
  bentoSpan?: 'large' | 'tall' | 'wide' | 'normal';
  accentColor?: 'teal' | 'sky' | 'navy' | 'emerald' | 'amber';
}

export const medicalServices: MedicalService[] = [
  {
    id: "visita-ginecologica",
    title: "Visita Ginecologica",
    shortDesc: "Prevenzione, diagnosi e gestione delle principali problematiche ginecologiche.",
    fullDesc: "Prevenzione, diagnosi e gestione delle principali problematiche ginecologiche nelle diverse fasi della vita della donna. Una visita accurata che dedica tutto il tempo necessario all'ascolto della paziente, all'esame clinico e alla definizione di percorsi terapeutici o di prevenzione personalizzati.",
    iconName: "Stethoscope",
    badge: "Prevenzione & Diagnosi",
    highlights: [
      "Prevenzione e screening ginecologico periodico",
      "Diagnosi accurata e valutazione personalizzata",
      "Gestione clinica delle problematiche ginecologiche",
      "Counselling e ascolto dedicato alla paziente"
    ],
    preparationTips: "Si consiglia di effettuare la visita lontano dal ciclo mestruale ed evitare l'uso di ovuli o lavande vaginali nelle 48 ore precedenti.",
    bentoSpan: "large",
    accentColor: "sky"
  },
  {
    id: "ostetricia",
    title: "Ostetricia",
    shortDesc: "Assistenza e valutazione della gravidanza e della salute materno-fetale.",
    fullDesc: "Assistenza e valutazione della gravidanza e della salute materno-fetale. Dalla consulenza preconcezionale al monitoraggio clinico durante tutta la gestazione, con l'esperienza ospedaliera necessaria per accompagnare la madre in totale serenità e sicurezza.",
    iconName: "Baby",
    badge: "Gravidanza & Benessere",
    highlights: [
      "Assistenza e monitoraggio clinico della gravidanza",
      "Valutazione specialistica della salute materno-fetale",
      "Consulenza preconcezionale e stili di vita",
      "Controllo e continuità di cura ostetrica"
    ],
    preparationTips: "Portare con sé il diario della gravidanza, tutti gli esami ematochimici e le ecografie eseguite in ordine cronologico.",
    bentoSpan: "normal",
    accentColor: "sky"
  },
  {
    id: "ecografia-ginecologica-ostetrica",
    title: "Ecografia Ginecologica e Ostetrica",
    shortDesc: "Valutazione ecografica nell'ambito della visita e dell'inquadramento diagnostico.",
    fullDesc: "Valutazione ecografica nell'ambito della visita e dell'inquadramento diagnostico. Studio ultrasonografico per la visualizzazione morfologica e funzionale dell'apparato genitale femminile (utero, endometrio, ovaie) e per il monitoraggio della gravidanza.",
    iconName: "Activity",
    badge: "Diagnostica Ecografica",
    highlights: [
      "Ecografia ginecologica transvaginale e pelvica",
      "Inquadramento diagnostico ultrasonografico",
      "Studio morfologico di utero, endometrio e ovaie",
      "Ecografia ostetrica nell'ambito della visita"
    ],
    preparationTips: "Per l'ecografia transvaginale è opportuno avere la vescica vuota; per l'ecografia pelvica sovrapubica è consigliabile bere acqua 1 ora prima.",
    bentoSpan: "normal",
    accentColor: "teal"
  },
  {
    id: "menopausa",
    title: "Menopausa",
    shortDesc: "Valutazione dei disturbi della menopausa e delle possibilità terapeutiche.",
    fullDesc: "Valutazione dei disturbi della menopausa e delle possibilità terapeutiche. Inquadramento clinico attento dei sintomi della perimenopausa e post-menopausa, con individuazione di percorsi terapeutici su misura (ormonali o non ormonali) per salvaguardare il benessere psicofisico e prevenire l'osteoporosi.",
    iconName: "Sparkles",
    badge: "Salute & Longevità",
    highlights: [
      "Valutazione clinica e sintomatologica della menopausa",
      "Studio personalizzato delle possibilità terapeutiche",
      "Prevenzione dei disturbi correlati e osteoporosi",
      "Miglioramento della qualità di vita e benessere femminile"
    ],
    preparationTips: "Portare con sé eventuali referti di densitometria ossea (MOC), mammografia ed esami ematochimici recenti.",
    bentoSpan: "normal",
    accentColor: "emerald"
  },
  {
    id: "endometriosi",
    title: "Endometriosi",
    shortDesc: "Inquadramento diagnostico e valutazione dei possibili percorsi terapeutici.",
    fullDesc: "Inquadramento diagnostico e valutazione dei possibili percorsi terapeutici. Approccio specialistico al dolore pelvico cronico e all'endometriosi, per arrivare a una diagnosi chiara e proporre percorsi terapeutici medici o chirurgici mirati e personalizzati.",
    iconName: "HeartPulse",
    badge: "Diagnosi & Terapia",
    highlights: [
      "Inquadramento diagnostico clinico ed ecografico",
      "Valutazione e gestione del dolore pelvico cronico",
      "Definizione di percorsi terapeutici personalizzati",
      "Consulenza continuativa e monitoraggio nel tempo"
    ],
    preparationTips: "Portare la cronistoria dei sintomi, pregresse ecografie, risonanze magnetiche o relazioni di interventi precedenti.",
    bentoSpan: "normal",
    accentColor: "teal"
  },
  {
    id: "pcos",
    title: "PCOS - Sindrome dell'Ovaio Policistico",
    shortDesc: "Valutazione della sindrome dell'ovaio policistico e delle problematiche correlate.",
    fullDesc: "Valutazione della sindrome dell'ovaio policistico e delle problematiche correlate. Analisi dei disordini mestruali, dell'assetto ormonale ed ecografico per impostare percorsi clinici e terapeutici individualizzati mirati alla salute riproduttiva e metabolica.",
    iconName: "CheckCircle",
    badge: "Inquadramento Ormonale",
    highlights: [
      "Valutazione clinica ed ecografica dell'ovaio policistico",
      "Analisi delle irregolarità del ciclo mestruale",
      "Gestione delle problematiche ormonali e metaboliche correlate",
      "Consulenza personalizzata e supporto alla fertilità"
    ],
    preparationTips: "Portare dosaggi ormonali recenti (es. FSH, LH, estradiolo, progesterone, prolattina, tiroide) se disponibili.",
    bentoSpan: "normal",
    accentColor: "sky"
  },
  {
    id: "chirurgia-ginecologica",
    title: "Chirurgia Ginecologica",
    shortDesc: "Consulenza e valutazione delle indicazioni chirurgiche e delle possibili alternative terapeutiche.",
    fullDesc: "Consulenza e valutazione delle indicazioni chirurgiche e delle possibili alternative terapeutiche. Grazie alla pluridecennale esperienza chirurgica e di direzione ospedaliera, il Dott. Garbin offre un'attenta valutazione delle indicazioni operatorie per patologie uterine e ovariche, valutando opzioni mini-invasive e trattamenti conservativi.",
    iconName: "ShieldCheck",
    badge: "Esperienza Chirurgica",
    highlights: [
      "Consulenza e inquadramento pre-chirurgico specialistico",
      "Valutazione rigorosa delle indicazioni all'intervento",
      "Esplorazione approfondita delle alternative terapeutiche",
      "Esperienza maturata in migliaia di interventi eseguiti"
    ],
    preparationTips: "Portare tutti gli esami diagnostici eseguiti (ecografie, TAC, risonanze) e precedenti cartelle cliniche.",
    bentoSpan: "wide",
    accentColor: "navy"
  },
  {
    id: "second-opinion",
    title: "Second Opinion Specialistica",
    shortDesc: "Un secondo parere medico chiaro e rassicurante per comprendere la tua situazione clinica e valutare le migliori opzioni terapeutiche o chirurgiche.",
    fullDesc: "Quando si riceve una diagnosi complessa o la proposta di un intervento chirurgico, è naturale avere dubbi e incertezze. La Second Opinion è una consulenza medica approfondita che ti permette di capire con chiarezza cosa sta accadendo e quali sono le migliori strade terapeutiche possibili (conservative o chirurgiche). Grazie a oltre 40 anni di esperienza ospedaliera e chirurgica, il Dott. Garbin esamina con cura tutti i tuoi esami precedenti, ti spiega la situazione in modo chiaro e comprensibile e, qualora il tuo caso richieda percorsi o approfondimenti specifici, ti mette in contatto diretto con i migliori specialisti e centri di riferimento del settore.",
    iconName: "Award",
    badge: "In Evidenza • Decisioni Consapevoli",
    isFeatured: true,
    featuredNotice: {
      subtitle: "Un parere autorevole per fare chiarezza sulla tua salute e scegliere con serenità.",
      whyNeeded: "Una diagnosi o l'indicazione a un intervento generano spesso dubbi. La Second Opinion serve a confrontare le opzioni e scegliere la cura migliore con piena consapevolezza.",
      experienceValue: "Il Dott. Garbin mette a tua disposizione oltre 40 anni di esperienza clinica e chirurgica: ti aiuta a capire la tua situazione e, se necessario, ti indirizza e mette in contatto con gli specialisti giusti del settore."
    },
    highlights: [
      "Comprensione chiara e serena del quadro clinico",
      "Valutazione accurata di alternative chirurgiche e mediche",
      "Indirizzamento e contatto con specialisti di riferimento del settore",
      "Decisioni affrontate con sicurezza e consapevolezza"
    ],
    preparationTips: "Porta con te tutta la documentazione precedente: referti di visite, ecografie, esami istologici, radiografie/risonanze e la proposta terapeutica o chirurgica ricevuta.",
    bentoSpan: "large",
    accentColor: "navy"
  }
];
