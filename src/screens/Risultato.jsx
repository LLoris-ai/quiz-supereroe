import { useState } from 'react';
import Schermata from '../components/Schermata.jsx';
import CardProfilo from '../components/CardProfilo.jsx';
import Logo from '../components/Logo.jsx';
import { SFONDI } from '../data/immagini.js';

export default function Risultato({ profilo, onSalva, onRifai, onErrore }) {
  const [fallback, setFallback] = useState(false);
  const link = `${window.location.origin}${window.location.pathname}?r=${profilo.id}`;
  const testo = `Io sono ${profilo.nome}! Scopri anche tu che supereroe sei:`;

  const condividi = async () => {
    if (!navigator.onLine) return onErrore();
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Quale supereroe sei?', text: testo, url: link });
      } catch {
        /* condivisione annullata dall'utente */
      }
    } else {
      setFallback(true);
    }
  };

  const copiaLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      onErrore();
    }
  };

  return (
    <Schermata sfondo={SFONDI.risultato} className="risultato">
      {/* la carta sta dietro, stesa a tutto schermo */}
      <CardProfilo profilo={profilo} variante="schermo" />

      {/* tutto il resto va sopra, nello spazio libero in fondo alla carta */}
      <div className="risultato__azioni">
        <div className="azioni">
          <button className="btn btn--primario" onClick={condividi}>
            Condividi
          </button>
          <button className="btn btn--secondario" onClick={onSalva}>
            Salva immagine
          </button>
        </div>

        {fallback && (
          <div className="azioni azioni--fallback">
            <a className="btn btn--secondario" href={`https://wa.me/?text=${encodeURIComponent(`${testo} ${link}`)}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn--secondario" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <button className="btn btn--secondario" onClick={copiaLink}>
              Copia link
            </button>
          </div>
        )}

        <button className="link" onClick={onRifai}>
          Rifai il quiz
        </button>
        <Logo className="logo--piccolo" />
      </div>
    </Schermata>
  );
}
