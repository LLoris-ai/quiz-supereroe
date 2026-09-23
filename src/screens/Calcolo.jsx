import Schermata from '../components/Schermata.jsx';
import { SFONDI } from '../data/immagini.js';

export default function Calcolo() {
  return (
    <Schermata sfondo={SFONDI.calcolo} className="centrata">
      <div className="loader">
        <span />
        <span />
        <span />
      </div>
      <p className="sottotitolo">Stiamo analizzando il tuo profilo…</p>
    </Schermata>
  );
}
