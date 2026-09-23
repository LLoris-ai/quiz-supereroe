import { useState } from 'react';
import { EROI } from '../data/immagini.js';

// Piede della schermata domanda: la barra con la luce scorrevole e, sotto,
// la fila dei cinque quadrati. Entrambi decorativi: non indicano il profilo
// in testa e non anticipano il risultato.
// L'elenco e i percorsi dei quadrati stanno in src/data/immagini.js (EROI).
export default function FilaEroi() {
  const [mancanti, setMancanti] = useState([]);
  const visibili = EROI.filter((e) => !mancanti.includes(e.id));

  return (
    <div className="piede" aria-hidden="true">
      <div className="scanner">
        <span className="scanner__luce" />
      </div>

      {visibili.length > 0 && (
        <div className="eroi">
          {visibili.map((eroe) => (
            <img
              key={eroe.id}
              className="eroi__quadrato"
              src={eroe.img}
              alt=""
              onError={() => setMancanti((p) => [...p, eroe.id])}
            />
          ))}
        </div>
      )}
    </div>
  );
}
