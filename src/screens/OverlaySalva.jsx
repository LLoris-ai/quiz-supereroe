import Schermata from '../components/Schermata.jsx';
import CardProfilo from '../components/CardProfilo.jsx';
import { SFONDI } from '../data/immagini.js';

export default function OverlaySalva({ profilo, onChiudi }) {
  return (
    <Schermata sfondo={SFONDI.overlay} className="centrata overlay">
      <button className="overlay__chiudi" onClick={onChiudi} aria-label="Chiudi">
        ✕
      </button>
      <CardProfilo profilo={profilo} />
      <p className="sottotitolo">Tieni premuto sull'immagine per salvarla</p>
    </Schermata>
  );
}
