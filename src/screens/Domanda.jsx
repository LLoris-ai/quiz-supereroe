import Schermata from '../components/Schermata.jsx';
import { SFONDI } from '../data/immagini.js';
import FilaEroi from '../components/FilaEroi.jsx';
import Logo from '../components/Logo.jsx';

const LETTERE = ['A', 'B', 'C', 'D', 'E'];

export default function Domanda({ domanda, numero, totale, selezionata, onRisposta, onIndietro }) {
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

      <h2 className="domanda__testo">{domanda.testo}</h2>

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
