import { useRef, useState } from 'react';
import Welcome from './screens/Welcome.jsx';
import Domanda from './screens/Domanda.jsx';
import Calcolo from './screens/Calcolo.jsx';
import Risultato from './screens/Risultato.jsx';
import OverlaySalva from './screens/OverlaySalva.jsx';
import PaginaCondivisa from './screens/PaginaCondivisa.jsx';
import Errore from './screens/Errore.jsx';
import { DOMANDE } from './data/domande.js';
import { calcolaProfilo, trovaProfilo } from './data/profili.js';

const RITARDO_RISPOSTA = 400; // ms prima di passare alla domanda successiva
const DURATA_CALCOLO = 1600; // ms della schermata "Stiamo analizzando…"

// Se l'URL contiene ?r=<id> si apre la pagina condivisa di quel profilo
function profiloDaUrl() {
  const id = new URLSearchParams(window.location.search).get('r');
  return id ? trovaProfilo(id) : null;
}

// Scorciatoia per controllare le carte senza rifare il quiz ogni volta:
// ?p=<id> apre direttamente la schermata risultato di quel profilo.
// Es. ?p=wonderwoman  ?p=batman  ?p=ironman  ?p=superman  ?p=spiderman
function anteprimaDaUrl() {
  const id = new URLSearchParams(window.location.search).get('p');
  return id ? trovaProfilo(id) : null;
}

export default function App() {
  const [condiviso] = useState(profiloDaUrl);
  const [anteprima] = useState(anteprimaDaUrl);
  const [schermata, setSchermata] = useState(
    condiviso ? 'condivisa' : anteprima ? 'risultato' : 'welcome'
  );
  const [indice, setIndice] = useState(0);
  const [risposte, setRisposte] = useState([]);
  const [profilo, setProfilo] = useState(anteprima);
  const [precedente, setPrecedente] = useState('welcome');
  const inAttesa = useRef(false);

  const inizia = () => {
    window.history.replaceState(null, '', window.location.pathname);
    setRisposte([]);
    setIndice(0);
    setSchermata('domanda');
  };

  const rispondi = (scelta) => {
    if (inAttesa.current) return; // ignora doppi tocchi durante la transizione
    inAttesa.current = true;
    setTimeout(() => (inAttesa.current = false), RITARDO_RISPOSTA);

    const nuove = [...risposte];
    nuove[indice] = scelta;
    setRisposte(nuove);

    setTimeout(() => {
      if (indice < DOMANDE.length - 1) {
        setIndice(indice + 1);
      } else {
        setSchermata('calcolo');
        setTimeout(() => {
          setProfilo(calcolaProfilo(DOMANDE, nuove));
          setSchermata('risultato');
        }, DURATA_CALCOLO);
      }
    }, RITARDO_RISPOSTA);
  };

  const indietro = () => {
    if (indice === 0) setSchermata('welcome');
    else setIndice(indice - 1);
  };

  const mostraErrore = () => {
    setPrecedente(schermata);
    setSchermata('errore');
  };

  switch (schermata) {
    case 'domanda':
      return (
        <Domanda
          key={indice}
          domanda={DOMANDE[indice]}
          numero={indice + 1}
          totale={DOMANDE.length}
          selezionata={risposte[indice]}
          onRisposta={rispondi}
          onIndietro={indietro}
        />
      );
    case 'calcolo':
      return <Calcolo />;
    case 'risultato':
      return (
        <Risultato
          profilo={profilo}
          onSalva={() => setSchermata('overlay')}
          onRifai={inizia}
          onErrore={mostraErrore}
        />
      );
    case 'overlay':
      return <OverlaySalva profilo={profilo} onChiudi={() => setSchermata('risultato')} />;
    case 'condivisa':
      return <PaginaCondivisa profilo={condiviso} onFaiIlQuiz={() => { window.history.replaceState(null, '', window.location.pathname); setSchermata('welcome'); }} />;
    case 'errore':
      return <Errore onRiprova={() => setSchermata(precedente)} />;
    default:
      return <Welcome onInizia={inizia} />;
  }
}
