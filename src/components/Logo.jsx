import { useState } from 'react';
import { LOGO } from '../data/immagini.js';

// Logo da public/images/logo/logo.png; se manca non occupa spazio.
export default function Logo({ className = '' }) {
  const [mancante, setMancante] = useState(false);
  if (mancante) return null;
  return <img className={`logo ${className}`} src={LOGO} alt="Logo" onError={() => setMancante(true)} />;
}
