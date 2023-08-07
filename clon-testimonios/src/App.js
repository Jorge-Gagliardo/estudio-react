import './App.css';
import Testimonio from './componentes/testimonio.js'
import datos from './datos'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio
          nombre={datos.usuario1.nombre}
          pais={datos.usuario1.pais}
          imagen={datos.usuario1.imagen}
          cargo={datos.usuario1.cargo}
          empresa={datos.usuario1.empresa}
          testimonio={datos.usuario1.testimonio}
        />
        <Testimonio
          nombre={datos.usuario2.nombre}
          pais={datos.usuario2.pais}
          imagen={datos.usuario2.imagen}
          cargo={datos.usuario2.cargo}
          empresa={datos.usuario2.empresa}
          testimonio={datos.usuario2.testimonio}
        />
      </div>
    </div>
  );
}

export default App;
