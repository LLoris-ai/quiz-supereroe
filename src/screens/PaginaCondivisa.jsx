import Schermata from '../components/Schermata.jsx';
import CardProfilo from '../components/CardProfilo.jsx';
import { SFONDI } from '../data/immagini.js';

// Pagina aperta da un link condiviso: ?r=<id-profilo>
export default function PaginaCondivisa({ profilo, onFaiIlQuiz }) {
  return (
    <Schermata sfondo={SFONDI.condivisa} scroll>
      <CardProfilo profilo={profilo} etichetta="Il profilo è" />
      <p className="sottotitolo">
        Un tuo contatto è <strong>{profilo.nome}</strong>. E tu?
      </p>
      <button className="btn btn--primario" onClick={onFaiIlQuiz}>
        Fai il quiz
      </button>
    </Schermata>
  );
}
