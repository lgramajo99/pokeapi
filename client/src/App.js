import './App.css';

import { Route, Routes } from 'react-router-dom'
import CrearPokemon from './components/CrearPokemon.jsx';
import DetallePokemon from './components/DetallePokemon.jsx';
import Inicio from './components/Inicio.jsx';
import Bienvenida from './components/bienvenida/Bienvenida.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/bienvenida' element={<Bienvenida />}></Route>
        <Route path='/inicio' element={<Inicio />}></Route>
        <Route path='/detallePokemon' element={<DetallePokemon />}></Route>
        <Route path='/crearPokemon' element={<CrearPokemon />}></Route>
        <Route path='/*' element />
      </Routes>

    </div>
  );
}

export default App;
