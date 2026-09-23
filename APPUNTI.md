# Quiz "Quale supereroe sei?" — appunti di lavoro

Stato al 23 settembre 2026. Questo file è la memoria del progetto: cosa c'è,
perché è fatto così, e cosa resta da fare. `README.md` invece spiega solo come
far partire l'app.

---

## In due righe

Quiz di 12 domande che assegna uno di 5 profili professionali, in identità
visiva Eurointerim. Nato mobile first, pensato per essere condiviso via
WhatsApp e installato sulla schermata Home del telefono.

**Online su:** https://lloris-ai.github.io/quiz-supereroe/
**Codice su:** https://github.com/LLoris-ai/quiz-supereroe

---

## Come si lavora

```bash
npm run dev      # sviluppo su http://localhost:5173 (anche da telefono, stessa rete)
npm run build    # non serve quasi mai: ci pensa GitHub
```

**Per pubblicare una modifica** bastano tre comandi. GitHub ricostruisce e
mette online da solo, in circa un minuto:

```bash
git add -A
git commit -m "cosa ho cambiato"
git push
```

L'avanzamento si vede su **github.com/LLoris-ai/quiz-supereroe/actions**:
pallino giallo mentre lavora, spunta verde quando è online.

> **Live Server non si usa.** Il tasto "Go Live" in basso a destra in VS Code
> va ignorato: serve i file così come sono e il JSX non viene compilato,
> quindi la pagina resta bianca. L'anteprima è sempre `npm run dev`.

### Scorciatoie per provare senza rifare il quiz

| Indirizzo | Cosa apre |
|---|---|
| `?p=wonderwoman` | la schermata **risultato**, quella di chi finisce il quiz |
| `?r=wonderwoman` | la **pagina condivisa**, quella di chi riceve il link |

`?p=` è una comodità di lavorazione: chiunque la conosca salta al risultato
che vuole. **Da togliere prima della diffusione vera** (è una funzione sola
in `src/App.jsx`, `anteprimaDaUrl`).

---

## Dove si cambiano le cose

| Cosa | Dove |
|---|---|
| Le 12 domande e i punteggi | `src/data/domande.js` |
| I 5 profili: nomi, descrizioni, competenze | `src/data/profili.js` |
| Percorsi di tutte le immagini | `src/data/immagini.js` |
| Colori, misure, animazioni | `src/styles.css` (token in cima) |
| Nome sotto l'icona, anteprima del link | `index.html` + `public/manifest.webmanifest` |

Le immagini si trascinano in `public/images/`, coi nomi indicati nei file
`LEGGIMI.txt` dentro ogni cartella. Se una manca, l'app funziona lo stesso
con un colore di riserva o una scheda testuale.

---

## Scelte fatte, e perché

Le più importanti da non disfare per sbaglio.

**Nomi dei profili senza genere** — Super, Wonder, Iron, Bat, Spider. Il quiz
lo compilano uomini e donne e il profilo non deve suggerire l'uno o l'altro.
Vale anche per le descrizioni: niente accordi al maschile o al femminile
riferiti alla persona. Gli *identificativi* interni restano `superman`,
`wonderwoman` ecc. — non si vedono da nessuna parte, cambiarli romperebbe i
nomi dei file immagine e i link già condivisi.

**Cornice telefono sul computer** — sopra i 760px di larghezza l'app si centra
nel monitor dentro una cornice con la proporzione dell'immagine della home
(2340×5064), bordata dell'azzurro dei loghi. Sotto i 760px resta a tutto
schermo come sul telefono.

**Le carte risultato sono in formato telefono**, non 4:5. Vengono mostrate a
tutto schermo e i pulsanti occupano il terzo vuoto in fondo al disegno.
**Quello spazio vuoto non è decorativo: è la zona dei pulsanti.** Le prossime
carte vanno fatte con la stessa proporzione e lo stesso vuoto in fondo.

**Rotazione** — il telefono in orizzontale mostra "Gira il telefono in
verticale". Un sito in una scheda non può impedire la rotazione; quando l'app
è installata sulla schermata Home ci pensa `orientation: portrait` nel
manifest.

**Il testo della domanda si adatta** — parte da 26px e scende (24, 22, 20)
finché non sta in tre righe. Misurato a pagina disegnata, non stimato dai
caratteri, perché la stessa domanda occupa una riga in più su uno schermo
stretto. Le due manopole sono `MISURE` e `RIGHE_MAX` in `src/screens/Domanda.jsx`.

---

## Trappole già pagate

Errori che sono costati tempo. Se ricompaiono, si sa dove guardare.

**`env()` dentro le proprietà abbreviate** — Safari non lo accetta e scarta
**l'intera riga**, non solo il pezzo che non capisce. Scritto
`inset: max(10px, env(safe-area-inset-top)) 0 0 0`, l'immagine è rimasta senza
ancoraggio, si è stesa a 2340px e ha fatto esplodere la pagina. Regola: prima
un valore normale nell'abbreviazione, poi il ritocco col notch in una
proprietà singola.

**Altezze fisse che tagliano il contenuto** — `#root` aveva `height: 100%`.
Quando il contenuto supera lo schermo, un'altezza fissa fa comprimere la
schermata mentre il contenuto le esce fuori: lo sfondo finisce a metà pagina
e sotto resta una fascia scura. Vale `min-height`, e `flex: 1 0 auto` sulla
schermata. Regola generale: **niente deve poter essere compresso**. Se il
contenuto non ci sta, la pagina scorre — non si taglia mai niente.

**Immagini schiacciate dentro le colonne flessibili** — se un'immagine alta
non ci sta, il browser la **comprime** invece di ridurla, deformando il
disegno. Serve `flex: none`. Si è visto prima nel browser interno di WhatsApp,
che lascia meno spazio di Safari.

**`dvh` fa sfarfallare** — insegue le barre del browser mentre si animano dopo
la rotazione, e il contenuto in fondo balla. Si usa `svh`, che è un valore
fisso.

**Le cache non si aggiornano da sole:**
- *Safari* tiene `index.html` e serve il foglio di stile vecchio → per
  verificare una modifica, scheda **privata**.
- *WhatsApp* tiene le anteprime dei link per giorni → per verificarle, aggiungi
  un `&v=2` in fondo al link, così per lui è un indirizzo nuovo.
- *iOS* fotografa icona e nome quando aggiungi l'app alla schermata Home e non
  li aggiorna mai → va rimossa e riaggiunta.

---

## Punti aperti

### Da fare prima di diffonderlo davvero

- [ ] **Refusi nella carta Wonder**: "**Giudare**" → Guidare, "**efar**" → e far.
      Sono dentro l'immagine, si correggono solo rigenerandola.
- [ ] **Quattro carte mancanti**: `superman.png`, `ironman.png`, `batman.png`,
      `spiderman.png` in `public/images/card/`. Finché mancano, quei profili
      mostrano la scheda testuale di riserva.
- [ ] **Togliere la scorciatoia `?p=`** da `src/App.jsx`.

### Da valutare

- [ ] Sulle carte c'è scritto "WONDER **MAN&WOMAN**": valutare se toglierlo,
      per coerenza con i nomi senza genere.
- [ ] **Sfondi mancanti** in `public/images/sfondi/` (domanda, calcolo,
      risultato, overlay, condivisa, errore). Ora tutte queste schermate usano
      il gradiente di riserva, che sta bene — vanno aggiunti solo se si vuole
      qualcosa di diverso.
- [ ] Se il quiz passerà su un **dominio Eurointerim**, in `index.html` vanno
      aggiornati a mano `og:url` e `og:image`: le anteprime dei link vogliono
      indirizzi assoluti.

### Sistemate, ma da ricontrollare su telefono

- [ ] Centratura verticale del testo nel riquadro viola della domanda. Dove
      Safari supporta `text-box` è esatta; sui browser più vecchi resta una
      compensazione a occhio (10px sopra, 26 sotto) che potrebbe servire
      ritoccare.
