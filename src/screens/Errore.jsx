import Schermata from '../components/Schermata.jsx';
import { SFONDI } from '../data/immagini.js';

export default function Errore({ onRiprova }) {
  return (
    <Schermata sfondo={SFONDI.errore} className="centrata">
      <h2 className="titolo titolo--medio">Connessione assente</h2>
      <p className="sottotitolo">Controlla la rete e riprova.</p>
      <button className="btn btn--primario" onClick={onRiprova}>
        Riprova
      </button>
    </Schermata>
  );
}
