// Le 12 domande definitive, con i punti di ogni risposta (dal documento Word del 29/09/2026).
// Ogni risposta vale `punti` (da 10 a 50): a fine quiz si sommano e il totale
// sceglie il supereroe secondo le fasce in src/data/profili.js (FASCE).
// Opzionale: aggiungi `sfondo: 'images/sfondi/domanda-3.jpg'` a una domanda
// per darle uno sfondo diverso da quello comune.
export const DOMANDE = [
  {
    testo: 'Qual è la tua più grande debolezza?',
    opzioni: [
      { t: 'Il mio ego', punti: 30 },
      { t: 'La mia statura', punti: 50 },
      { t: 'Il mio lato oscuro', punti: 40 },
      { t: 'Il mio temperamento', punti: 20 },
      { t: 'Le persone che amo', punti: 10 },
    ],
  },
  {
    testo: 'Come passi il tuo tempo libero?',
    opzioni: [
      { t: 'Videogiochi', punti: 40 },
      { t: 'Studio', punti: 50 },
      { t: 'Esco con gli amici', punti: 20 },
      { t: 'Volontariato', punti: 10 },
      { t: 'Coltivo i miei hobby', punti: 30 },
    ],
  },
  {
    testo: 'Ti propongono un nuovo progetto. Cosa fai?',
    opzioni: [
      { t: 'Accetto subito!', punti: 50 },
      { t: 'Accetto, ma senza troppo impegno', punti: 10 },
      { t: 'Prima approfondisco di cosa si tratta', punti: 20 },
      { t: 'Valuto cosa posso ottenere', punti: 30 },
      { t: 'Preferisco lavorare da solo', punti: 40 },
    ],
  },
  {
    testo: 'Come ti descriverebbero gli altri con una parola?',
    opzioni: [
      { t: 'Indipendente', punti: 40 },
      { t: 'Leale', punti: 50 },
      { t: 'Compassionevole', punti: 20 },
      { t: 'Affidabile', punti: 10 },
      { t: 'Sicuro/a di sé', punti: 30 },
    ],
  },
  {
    testo: 'Senza superpoteri, come ti sposteresti?',
    opzioni: [
      { t: 'Correndo', punti: 10 },
      { t: 'Auto sportiva', punti: 30 },
      { t: 'Metropolitana', punti: 50 },
      { t: 'Aereo', punti: 20 },
      { t: 'Motocicletta', punti: 40 },
    ],
  },
  {
    testo: 'Scegli il tuo sport olimpico preferito',
    opzioni: [
      { t: 'Atletica leggera', punti: 10 },
      { t: 'Ginnastica', punti: 50 },
      { t: 'Karate', punti: 40 },
      { t: "Tiro con l'arco", punti: 30 },
      { t: 'Lotta', punti: 20 },
    ],
  },
  {
    testo: 'Un problema mette in difficoltà tutta la squadra. Cosa fai?',
    opzioni: [
      { t: "Intervengo subito e risolvo l'emergenza", punti: 50 },
      { t: 'Avviso la squadra, decidiamo insieme', punti: 20 },
      { t: 'Coinvolgo chi ha le competenze giuste', punti: 30 },
      { t: 'Me ne occupo personalmente', punti: 10 },
      { t: 'Cerco la causa per evitare che succeda di nuovo', punti: 40 },
    ],
  },
  {
    testo: 'Come preferisci combattere il crimine?',
    opzioni: [
      { t: 'Guidando una squadra', punti: 30 },
      { t: 'Insieme ai miei amici', punti: 50 },
      { t: 'Da solo/a', punti: 40 },
      { t: 'Da solo/a, ma accetto aiuto', punti: 20 },
      { t: 'In coppia', punti: 10 },
    ],
  },
  {
    testo: 'Ti affidi di più al cervello o alla forza?',
    opzioni: [
      { t: 'Prima il cervello, poi la forza', punti: 40 },
      { t: 'Il cervello è la mia forza', punti: 30 },
      { t: 'Entrambi', punti: 50 },
      { t: 'Uso la forza con intelligenza', punti: 20 },
      { t: 'Principalmente la forza', punti: 10 },
    ],
  },
  {
    testo: 'Puoi scegliere un solo superpotere. Quale?',
    opzioni: [
      { t: 'Trovare sempre una soluzione', punti: 30 },
      { t: 'Unire le persone', punti: 20 },
      { t: 'Essere sempre affidabile', punti: 10 },
      { t: 'Trasformare idee in invenzioni', punti: 50 },
      { t: 'Capire subito le situazioni complesse', punti: 40 },
    ],
  },
  {
    testo: 'Qual è la cosa peggiore su cui hai mentito?',
    opzioni: [
      { t: 'I soldi', punti: 30 },
      { t: 'I miei sentimenti', punti: 20 },
      { t: 'Le mie paure', punti: 10 },
      { t: 'I compiti', punti: 50 },
      { t: 'I miei crimini', punti: 40 },
    ],
  },
  {
    testo: 'La missione è in crisi. Hai pochi secondi: cosa fai?',
    opzioni: [
      { t: 'Analizzo la situazione e scelgo dove intervenire', punti: 40 },
      { t: 'Uso tecnologia e strumenti disponibili', punti: 30 },
      { t: 'Provo subito una strada', punti: 50 },
      { t: 'Coordino la squadra', punti: 20 },
      { t: 'Intervengo io per proteggere gli altri', punti: 10 },
    ],
  },
];
