import './App.css';
import { Route, Routes } from 'react-router-dom'
import CrearPokemon from './components/CrearPokemon';
import DetallePokemon from './components/DetallePokemon';
import Inicio from './components/Inicio';
import Ingreso from './components/Ingreso';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/inicio' element={<Inicio />}></Route>
        <Route path='/ingreso' element={<Ingreso />}></Route>
        <Route path='/detallePokemon' element={<DetallePokemon />}></Route>
        <Route path='/crearPokemon' element={<CrearPokemon />}></Route>
        <Route path='/*' element/>
      </Routes>

    </div>
  );
}

export default App;
