import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom'
import CrearPokemon from './components/CrearPokemon.jsx';
import DetallePokemon from './components/DetallePokemon.jsx';
import Inicio from './components/inicio/Inicio.jsx';
import Bienvenida from './components/bienvenida/Bienvenida.jsx';
import Nav from './components/nav/Nav'

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {(location.pathname === '/') ? null : <Nav />}

      <Routes>
        <Route path='/' element={<Bienvenida />}></Route>
        <Route path='/inicio' element={<Inicio />}></Route>
        <Route path='/detallePokemon' element={<DetallePokemon />}></Route>
        <Route path='/crearPokemon' element={<CrearPokemon />}></Route>
        <Route path='/*' element />
      </Routes>

    </div>
  );
}

export default App;
