import { SFONDO_RISERVA } from '../data/immagini.js';
import RuotaTelefono from './RuotaTelefono.jsx';

// Contenitore a tutto schermo con immagine di sfondo.
// Se l'immagine non esiste, resta visibile il colore di riserva sottostante.
export default function Schermata({ sfondo, scroll = false, className = '', children }) {
  return (
    <div
      className={`schermata ${scroll ? 'schermata--scroll' : ''} ${className}`}
      style={{ backgroundImage: `url("${sfondo}"), ${SFONDO_RISERVA}` }}
    >
      <div className="schermata__contenuto">{children}</div>
      <RuotaTelefono />
    </div>
  );
}
