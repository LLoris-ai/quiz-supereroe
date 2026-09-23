// ─────────────────────────────────────────────────────────────
//  IMMAGINI — unico punto da modificare.
//  Copia i file in  public/images/...  (anche trascinandoli in VS Code)
//  e, se usi nomi o estensioni diverse, aggiorna i percorsi qui sotto.
//  Se un'immagine manca, l'app mostra automaticamente il colore di riserva.
// ─────────────────────────────────────────────────────────────

// Sfondi a tutto schermo, uno per schermata
export const SFONDI = {
  welcome: 'images/home/carta-superhero-homepage.png',
  domanda: 'images/sfondi/domanda.jpg', // comune a tutte le domande (vedi `sfondo` in domande.js per cambiarlo su una sola)
  calcolo: 'images/sfondi/calcolo.jpg',
  risultato: 'images/sfondi/risultato.jpg',
  overlay: 'images/sfondi/overlay.jpg',
  condivisa: 'images/sfondi/condivisa.jpg',
  errore: 'images/sfondi/errore.jpg',
};

// Immagine al centro della home, sotto il titolo (facoltativa)
export const IMMAGINE_HOME = 'images/home/home.png'; // lascia vuota la cartella se usi solo lo sfondo

// Logo (welcome + chiusura risultato)
export const LOGO = 'images/logo/logo.png';

// Card risultato completa, una per profilo (formato consigliato 1080×1350).
// Se manca, viene disegnata una card testuale con nome, descrizione e competenze.
export const CARD = {
  superman: 'images/card/superman.png',
  wonderwoman: 'images/card/wonderwoman.png',
  ironman: 'images/card/ironman.png',
  batman: 'images/card/batman.png',
  spiderman: 'images/card/spiderman.png',
};

// Quadrati dei supereroi, fila decorativa in fondo alle domande (256×256).
// Per sostituirli basta salvare un file con lo stesso nome in public/images/eroi/.
// Togline uno dalla lista e sparisce dalla fila, senza toccare altro.
export const EROI = [
  { id: 'wonderwoman', img: 'images/eroi/wonderwoman.png' },
  { id: 'spiderman', img: 'images/eroi/spiderman.png' },
  { id: 'ironman', img: 'images/eroi/ironman.png' },
  { id: 'superman', img: 'images/eroi/superman.png' },
  { id: 'batman', img: 'images/eroi/batman.png' },
];

// Colore mostrato sotto ogni sfondo (visibile se l'immagine manca)
export const SFONDO_RISERVA = 'linear-gradient(160deg, #1b1440 0%, #2a2470 45%, #4a5ec4 100%)';
