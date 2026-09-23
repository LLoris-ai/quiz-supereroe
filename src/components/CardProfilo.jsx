import { useState } from 'react';
import { CARD } from '../data/immagini.js';

// Mostra l'immagine della card del profilo (public/images/card/<id>.png).
// Se l'immagine manca, disegna una card testuale di riserva.
//
// `variante="schermo"` la stende a tutto schermo, dietro ai pulsanti: serve
// per le carte disegnate in formato telefono (2340×5064), che in un riquadro
// verrebbero alte il doppio della pagina. La card testuale di riserva resta
// un riquadro normale in entrambi i casi.
export default function CardProfilo({ profilo, etichetta = 'Il tuo profilo è', variante }) {
  const [mancante, setMancante] = useState(null); // id del profilo senza immagine

  if (mancante !== profilo.id) {
    return (
      <img
        key={profilo.id}
        className={variante === 'schermo' ? 'card--schermo' : 'card card--immagine'}
        src={CARD[profilo.id]}
        alt={`Card profilo ${profilo.nome}`}
        onError={() => setMancante(profilo.id)}
      />
    );
  }

  return (
    <div className="card">
      <div className="card__fascia" style={{ background: profilo.colore }}>
        <div className="card__etichetta">{etichetta}</div>
        <div className="card__nome">{profilo.nome}</div>
      </div>
      <div className="card__corpo">
        <p className="card__descrizione">{profilo.descrizione}</p>
        <div className="card__competenze">
          {profilo.competenze.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
