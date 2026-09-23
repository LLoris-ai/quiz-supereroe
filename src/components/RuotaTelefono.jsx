// Avviso mostrato quando il telefono è in orizzontale.
// È sempre nel DOM ma invisibile: a deciderlo è il CSS (.ruota in styles.css),
// che lo accende solo su schermi bassi e larghi, cioè telefoni coricati.
// Un browser non può impedire la rotazione; quando l'app è installata sulla
// schermata Home ci pensa "orientation": "portrait" nel manifest.webmanifest.
export default function RuotaTelefono() {
  return (
    <div className="ruota" aria-hidden="true">
      <svg className="ruota__icona" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="22" y="6" width="20" height="36" rx="4" strokeLinejoin="round" />
        <line x1="28" y1="37" x2="36" y2="37" strokeLinecap="round" />
        <path d="M14 50a22 22 0 0 0 36 0" strokeLinecap="round" />
        <polyline points="8,44 14,50 20,45" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="ruota__testo">Gira il telefono in verticale</p>
    </div>
  );
}
