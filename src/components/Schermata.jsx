import { SFONDO_RISERVA } from '../data/immagini.js';
import RuotaTelefono from './RuotaTelefono.jsx';

// Chi ha chiesto al telefono meno animazioni o il risparmio dati non scarica
// il video: vede solo lo sfondo fermo.
const videoConsentito =
  !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches && !navigator.connection?.saveData;

// Contenitore a tutto schermo con immagine di sfondo.
// Se l'immagine non esiste, resta visibile il colore di riserva sottostante.
// `video`: elenco di sorgenti ({ src, type }) da far scorrere sotto il contenuto.
export default function Schermata({ sfondo, video = [], scroll = false, className = '', children }) {
  const conVideo = videoConsentito && video.length > 0;
  return (
    <div
      className={`schermata ${scroll ? 'schermata--scroll' : ''} ${conVideo ? 'schermata--video' : ''} ${className}`}
      style={{ backgroundImage: `url("${sfondo}"), ${SFONDO_RISERVA}` }}
    >
      {conVideo && (
        <video className="schermata__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          {video.map((v) => (
            <source key={v.src} src={v.src} type={v.type} />
          ))}
        </video>
      )}
      <div className="schermata__contenuto">{children}</div>
      <RuotaTelefono />
    </div>
  );
}
