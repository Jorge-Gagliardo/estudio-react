import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
