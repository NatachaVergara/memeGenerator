import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BtnDescargar from './components/BtnDescargar';
import Img from './components/Img';
import MemeInputs from './components/MemeInputs';
import MemeTxt from "./components/MemeTxt";
import Select from './components/Select';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <Select />
      <MemeInputs /> 
      <MemeTxt />
      <BtnDescargar />

      <Img />


    </div>
  );
}

export default App;
