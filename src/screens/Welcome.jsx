import { useState } from 'react';
import Schermata from '../components/Schermata.jsx';
import Logo from '../components/Logo.jsx';
import { SFONDI, IMMAGINE_HOME } from '../data/immagini.js';

export default function Welcome({ onInizia }) {
  const [immagineMancante, setImmagineMancante] = useState(false);

  return (
    <Schermata sfondo={SFONDI.welcome} className="home">
      <Logo />
      <div className="welcome__testi">
        <h1 className="titolo">Quale supereroe sei?</h1>
        <p className="sottotitolo">12 domande, 2 minuti, scopri il tuo profilo</p>
        {!immagineMancante && (
          <img
            className="welcome__immagine"
            src={IMMAGINE_HOME}
            alt=""
            onError={() => setImmagineMancante(true)}
          />
        )}
      </div>
      <button className="btn btn--primario" onClick={onInizia}>
        Inizia
      </button>
    </Schermata>
  );
}
