import './App.css'
import Alert from "./components/Alert";
import CardEsercizio from './components/CardEsercizio';
import Contatore from './components/Contatore';
import BottoneColore from './components/BottoneColore';
import CheckboxValidazione from './components/CheckboxValidazione';
import SelezioneTaglia from './components/SelezioneTaglia';


function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Esercizi React</h1>

      <div className="mb-5"></div>
      <Alert type="primary" text="Sono una schiappa">
        &#9752;      </Alert>
      <Alert type="secondary" text="Forse arrivo alla fine della lezione">
      </Alert>
      <Alert type="success" text="Forse arrivo alla fine della lezione"> </Alert>
      <Alert type="danger" text="Forse arrivo alla fine della lezione"> </Alert>

      <hr className="my-5" />
      <div className="row g-4">

        <CardEsercizio titolo="Esercizio 1: Contatore">
          <Contatore />
        </CardEsercizio>

        <CardEsercizio titolo="Esercizio 2: Toggle Classe CSS">
          <BottoneColore />
        </CardEsercizio>

        <CardEsercizio titolo="Esercizio 3: Checkbox">
          <CheckboxValidazione />
        </CardEsercizio>

        <CardEsercizio titolo="Esercizio 8: Taglia Prodotto">
          <SelezioneTaglia />
        </CardEsercizio>

      </div>
    </div >
  );
}
export default App;