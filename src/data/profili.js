// Profili risultato. L'ordine conta: in caso di parità vince il primo.
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

// Somma i punti delle risposte e restituisce il profilo vincente
export function calcolaProfilo(domande, risposte) {
  const punti = Object.fromEntries(PROFILI.map((p) => [p.id, 0]));
  risposte.forEach((indice, i) => {
    const opzione = domande[i]?.opzioni[indice];
    if (opzione) punti[opzione.p] += 1;
  });
  return PROFILI.reduce((migliore, p) => (punti[p.id] > punti[migliore.id] ? p : migliore), PROFILI[0]);
}
