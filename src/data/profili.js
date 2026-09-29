// Profili risultato.
// I nomi sono volutamente senza genere (Wonder, Super, Bat, Spider, Iron):
// il quiz lo compilano uomini e donne e il profilo non deve suggerire l'uno
// o l'altro. Stessa regola per le descrizioni: niente accordi al maschile
// o al femminile riferiti alla persona.
export const PROFILI = [
  {
    id: 'superman',
    nome: 'Super',
    colore: '#1c3f94',
    descrizione:
      'Profilo poliedrico e affidabile, orientato ai risultati e guidato da solidi valori etici. Mantiene alta la qualità del lavoro anche sotto pressione, si confronta con il team nei momenti critici e, pur difendendo con convinzione le proprie posizioni, sa trovare soluzioni condivise.',
    competenze: ['Integrità professionale', 'Resilienza allo stress', 'Orientamento al servizio e al risultato'],
  },
  {
    id: 'wonderwoman',
    nome: 'Wonder',
    colore: '#8a1620',
    descrizione:
      'Leader di riferimento per il team, unisce intelligenza analitica a una spiccata sensibilità verso le persone. Gestisce responsabilità importanti con metodo, non si lascia deviare dai dettagli e valorizza il potenziale dei collaboratori anche nelle situazioni di disaccordo.',
    competenze: ['People management', 'Pensiero strategico', 'Gestione della complessità'],
  },
  {
    id: 'ironman',
    nome: 'Iron',
    colore: '#b3341c',
    descrizione:
      'Profilo brillante e comunicativo, si muove con sicurezza in contesti dinamici e innovativi. Generoso nel condividere competenze e risorse, non si arrende davanti agli ostacoli; la personalità decisa richiede un ambiente capace di apprezzarne il valore, ma chi ci collabora costruisce rapporti duraturi.',
    competenze: ['Innovazione e problem solving', 'Autorevolezza e capacità di influenza', 'Determinazione'],
  },
  {
    id: 'batman',
    nome: 'Bat',
    colore: '#33343a',
    descrizione:
      'Professionista che ha costruito competenze e network con impegno costante e metodo. Lavora con autonomia e riservatezza, è selettivo nelle collaborazioni e predilige ambienti che ne rispettino lo stile; quando integrato in un team di fiducia esprime pienamente il proprio potenziale.',
    competenze: ['Autonomia e disciplina', 'Capacità analitica', 'Gestione strategica delle relazioni'],
  },
  {
    id: 'spiderman',
    nome: 'Spider',
    colore: '#c81f2e',
    descrizione:
      'Profilo brillante e versatile, apprezzato per intelligenza, ironia e capacità di creare un buon clima. Costruisce ampie reti di relazioni mantenendo una cerchia stretta di collaboratori fidati, privilegia la mediazione ai conflitti e si espone in prima persona a tutela dei colleghi e degli obiettivi comuni.',
    competenze: [
      'Comunicazione e relazioni interpersonali',
      'Mediazione e gestione dei conflitti',
      'Spirito di squadra e senso di responsabilità',
    ],
  },
];

export const trovaProfilo = (id) => PROFILI.find((p) => p.id === id);

// Fasce del punteggio totale (12 risposte da 10 a 50 punti: da 120 a 600).
// `fino` è il punteggio massimo compreso nella fascia; l'ultima non ha tetto.
// I totali si addensano attorno a 360, quindi le fasce centrali sono strette e
// quelle agli estremi larghe: così ogni profilo esce circa una volta su cinque
// (calcolato su risposte casuali). Se uno esce troppo spesso, stringi la sua fascia.
export const FASCE = [
  { fino: 310, id: 'superman' }, // 120–310 (~18%)
  { fino: 340, id: 'wonderwoman' }, // 320–340 (~20%)
  { fino: 370, id: 'ironman' }, // 350–370 (~24%)
  { fino: 400, id: 'batman' }, // 380–400 (~20%)
  { fino: Infinity, id: 'spiderman' }, // 410–600 (~18%)
];

// Somma i punti delle risposte
export function calcolaPunteggio(domande, risposte) {
  return risposte.reduce((somma, indice, i) => somma + (domande[i]?.opzioni[indice]?.punti ?? 0), 0);
}

// Restituisce il profilo della fascia in cui cade il totale
export function calcolaProfilo(domande, risposte) {
  const totale = calcolaPunteggio(domande, risposte);
  return trovaProfilo(FASCE.find((f) => totale <= f.fino).id);
}
