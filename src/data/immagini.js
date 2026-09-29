// ─────────────────────────────────────────────────────────────
//  IMMAGINI — unico punto da modificare.
//  Copia i file in  public/images/...  (anche trascinandoli in VS Code)
//  e, se usi nomi o estensioni diverse, aggiorna i percorsi qui sotto.
//  Se un'immagine manca, l'app mostra automaticamente il colore di riserva.
// ─────────────────────────────────────────────────────────────

// Quando sostituisci un'immagine tenendo lo stesso nome, alza questo numero:
// cambia l'indirizzo e i browser che avevano in memoria la vecchia la riscaricano.
const V = '?v=3';

// Sfondi a tutto schermo, uno per schermata
export const SFONDI = {
  welcome: 'images/home/carta-superhero-homepage.png' + V,
  domanda: 'images/sfondi/domanda.jpg', // comune a tutte le domande (vedi `sfondo` in domande.js per cambiarlo su una sola)
  calcolo: 'images/sfondi/calcolo.jpg',
  risultato: 'images/sfondi/risultato.jpg',
  overlay: 'images/sfondi/overlay.jpg',
  condivisa: 'images/sfondi/condivisa.jpg',
  errore: 'images/sfondi/errore.jpg',
};

// Video del lampo dietro le domande (verticale, senza audio, in loop).
// Preparato dal video originale in "Immagini nuove": ruotato, 720×1280, ~150 KB.
// Il browser usa il primo formato che conosce. Lascia l'elenco vuoto per toglierlo.
export const VIDEO_DOMANDA = [
  { src: 'video/lampo.webm' + V, type: 'video/webm' },
  { src: 'video/lampo.mp4' + V, type: 'video/mp4' },
];

// Immagine al centro della home, sotto il titolo (facoltativa)
export const IMMAGINE_HOME = 'images/home/home.png' + V; // lascia vuota la cartella se usi solo lo sfondo

// Logo (welcome + chiusura risultato)
export const LOGO = 'images/logo/logo.png';

// Card risultato completa, una per profilo (formato consigliato 1080×1350).
// Se manca, viene disegnata una card testuale con nome, descrizione e competenze.
export const CARD = {
  superman: 'images/card/superman.png' + V,
  wonderwoman: 'images/card/wonderwoman.png' + V,
  ironman: 'images/card/ironman.png' + V,
  batman: 'images/card/batman.png' + V,
  spiderman: 'images/card/spiderman.png' + V,
};

// Quadrati dei supereroi, fila decorativa in fondo alle domande (256×256).
// Per sostituirli basta salvare un file con lo stesso nome in public/images/eroi/.
// Togline uno dalla lista e sparisce dalla fila, senza toccare altro.
export const EROI = [
  { id: 'wonderwoman', img: 'images/eroi/wonderwoman.png' + V },
  { id: 'spiderman', img: 'images/eroi/spiderman.png' + V },
  { id: 'ironman', img: 'images/eroi/ironman.png' + V },
  { id: 'superman', img: 'images/eroi/superman.png' + V },
  { id: 'batman', img: 'images/eroi/batman.png' + V },
];

// Colore mostrato sotto ogni sfondo (visibile se l'immagine manca)
export const SFONDO_RISERVA = 'linear-gradient(160deg, #1b1440 0%, #2a2470 45%, #4a5ec4 100%)';
