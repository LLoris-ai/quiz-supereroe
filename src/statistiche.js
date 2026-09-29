// Statistiche con Umami (cloud.umami.is): lo script è in index.html.
// Qui si registrano gli eventi del quiz; nel pannello di Umami compaiono
// sotto "Events" con questi nomi. Se lo script non c'è (adblocker, prova in
// locale) non succede niente e il quiz funziona uguale.
export function registra(evento, dati) {
  const invia = () => window.umami?.track(evento, dati);
  if (window.umami) return invia();
  // lo script potrebbe arrivare un attimo dopo il quiz: si riprova per qualche secondo
  let tentativi = 10;
  const attesa = setInterval(() => {
    if (window.umami || --tentativi === 0) {
      clearInterval(attesa);
      invia();
    }
  }, 500);
}
