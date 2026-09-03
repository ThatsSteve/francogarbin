export interface ClinicSchedule {
  day: string;
  hours: string;
  isOpen: boolean;
}

export const clinicInfo = {
  doctorName: "Dott. Franco Garbin",
  title: "Specialista in Ginecologia e Ostetricia",
  roleSubtitle: "Già Direttore dell’Unità Operativa Complessa di Ostetricia e Ginecologia degli Ospedali di Mirano e Dolo (VE)",
  experienceHeadline: "Oltre 40 anni di esperienza clinica e chirurgica al servizio della salute della donna.",
  doctorBio: "Da oltre 40 anni mi occupo di Ginecologia e Ostetricia, con una particolare esperienza nella diagnosi, nella chirurgia ginecologica e nella gestione delle problematiche della donna nelle diverse fasi della vita. Oggi continuo la mia attività professionale come libero professionista, dedicando alla visita e all’ascolto della paziente il tempo necessario per arrivare a una valutazione accurata e personalizzata.",
  orderRegistration: "Iscritto all'Ordine dei Medici Chirurghi e degli Odontoiatri",
  phone: "+39 339 4132022",
  phoneFormatted: "+39 339 413 2022",
  phoneTel: "tel:+393394132022",
  email: "francogarbin@gmail.com",
  studioName: "Studio Medico Dott. Franco Garbin",
  address: {
    street: "Via Cristoforo Colombo, 4",
    city: "Mirano",
    province: "VE",
    cap: "30035",
    region: "Veneto, Italia",
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.3512839951717!2d12.10972277682281!3d45.495223771074585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ecb9bc2d5874f%3A0x2adfd265f6f05a4f!2sSTUDIO%20GINECOLOGICO%20-%20Dott.%20Franco%20Garbin!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit",
  googleMapsDirections: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x477ecb9bc2d5874f:0x2adfd265f6f05a4f?sa=X&ved=1t:8290&ictx=111",
  schedules: [
    { day: "Lunedì", hours: "15:00 - 19:00", isOpen: true },
    { day: "Martedì", hours: "15:00 - 19:00", isOpen: true },
    { day: "Mercoledì", hours: "15:00 - 19:00", isOpen: true },
    { day: "Giovedì", hours: "Su appuntamento", isOpen: false },
    { day: "Venerdì", hours: "Su appuntamento", isOpen: false },
    { day: "Sabato", hours: "Su appuntamento", isOpen: false },
    { day: "Domenica", hours: "Chiuso", isOpen: false },
  ] as ClinicSchedule[],
  bookingTimeNote: "Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo.",
  callbackNote: "In caso di mancata risposta, lasciare un messaggio e verrete richiamate.",
  bookingInstructions: "Per prenotare una visita telefonare al Cell. 339 413 2022. Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo. In caso di mancata risposta, lasciare un messaggio e verrete richiamate.",
  flexibilityNote: "Ambulatorio il Lunedì, Martedì e Mercoledì dalle 15:00 alle 19:00. In altri giorni o orari è possibile previo accordo. In caso di mancata risposta, lasciare un messaggio per essere ricontattate.",
  stats: [
    { value: "40+", label: "Anni di Esperienza", description: "Attività clinica e chirurgica ospedaliera" },
    { value: "U.O.C.", label: "Già Direttore", description: "Ospedali di Mirano e Dolo (VE)" },
    { value: "100%", label: "Ascolto & Tempo", description: "Valutazione accurata e personalizzata" },
    { value: "2° Livello", label: "Second Opinion", description: "Consulenza e alternative chirurgiche" }
  ]
};
