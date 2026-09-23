# Quiz "Quale supereroe sei?"

App React + Vite, mobile first.

## Avvio

```bash
npm install
npm run dev      # apre su http://localhost:5173 (anche da telefono sulla stessa rete)
npm run build    # versione di produzione in dist/
```

## Immagini

Trascina i file in `public/images/` (vedi `public/images/LEGGIMI.txt` per i nomi).
Percorsi e nomi si cambiano in un solo file: `src/data/immagini.js`.
Se un'immagine manca l'app funziona comunque con il colore di riserva.

## Struttura

```
src/
  App.jsx                 flusso tra le schermate
  styles.css              stili e colori (variabili in :root)
  data/
    immagini.js           percorsi di sfondi, card e logo
    domande.js            le 12 domande e a quale profilo punta ogni risposta
    profili.js            i 5 profili + calcolo del risultato
  components/
    Schermata.jsx         contenitore con immagine di sfondo
    CardProfilo.jsx       card risultato (immagine o versione testuale)
    Logo.jsx
  screens/
    Welcome · Domanda · Calcolo · Risultato · OverlaySalva · PaginaCondivisa · Errore
```

La pagina condivisa si apre aggiungendo `?r=<profilo>` all'indirizzo (es. `?r=ironman`).
