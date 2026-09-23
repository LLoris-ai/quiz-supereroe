import { useLayoutEffect, useRef } from 'react';
import Schermata from '../components/Schermata.jsx';
import { SFONDI } from '../data/immagini.js';
import FilaEroi from '../components/FilaEroi.jsx';
import Logo from '../components/Logo.jsx';

const LETTERE = ['A', 'B', 'C', 'D', 'E'];

// Misure provate in ordine per il testo della domanda, dalla più grande.
const MISURE = [23, 21, 19, 17];
const RIGHE_MAX = 2;

export default function Domanda({ domanda, numero, totale, selezionata, onRisposta, onIndietro }) {
  const box = useRef(null);
  const testo = useRef(null);

  // Rimpicciolisce il testo finché la domanda non sta in due righe.
  // Va misurato a pagina disegnata e non stimato dal numero di caratteri:
  // la stessa domanda occupa una riga in più su uno schermo stretto.
  // Gira prima che il browser disegni, quindi non si vede nessuno scatto.
  useLayoutEffect(() => {
    if (!box.current || !testo.current) return;
    for (const misura of MISURE) {
      box.current.style.fontSize = `${misura}px`;
      const altezzaRiga = parseFloat(getComputedStyle(box.current).lineHeight);
      if (testo.current.getBoundingClientRect().height <= altezzaRiga * RIGHE_MAX + 1) break;
    }
  }, [domanda.testo]);

  return (
    <Schermata sfondo={domanda.sfondo || SFONDI.domanda}>
      {/* riga in cima: indietro a sinistra, logo piccolo a destra */}
      <div className="domanda__intestazione">
        <button className="link-indietro" onClick={onIndietro}>
          ‹ Indietro
        </button>
        <Logo className="logo--piccolo" />
      </div>

      <div className="progresso">
        <div className="progresso__barra">
          <div className="progresso__riempimento" style={{ width: `${(numero / totale) * 100}%` }} />
        </div>
        <div className="progresso__contatore">
          {numero} di {totale}
        </div>
      </div>

      <h2 className="domanda__testo" ref={box}>
        <span ref={testo}>{domanda.testo}</span>
      </h2>

      <div className="opzioni">
        {domanda.opzioni.map((opzione, i) => (
          <button
            key={opzione.t}
            className={`opzione ${selezionata === i ? 'opzione--selezionata' : ''}`}
            onClick={() => onRisposta(i)}
          >
            <span className="opzione__lettera">{LETTERE[i]}</span>
            <span>{opzione.t}</span>
          </button>
        ))}
      </div>

      <FilaEroi />
    </Schermata>
  );
}
