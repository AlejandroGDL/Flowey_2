import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Index from './Rutas/Index'
import Login from './Rutas/Login'
import Register from './Rutas/Register'
import ShowU from './Rutas/CrudUsuarios'
import Menu from './Rutas/Menu'
import Inicio_M from './Rutas/Inicio_M'

import EditPlanta from './components/EditPlanta'

function App() {
  return (
    <Router>
      {/* Rutas navegacion React Router DOM */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="Register" element={<Register />}/>
        <Route path=':id' element={<EditPlanta />}/>
        <Route path="Menu/*" element={<Menu />}>
          <Route path="Inicio" element={<Inicio_M />}/>
          <Route path="Plantas/*" element={<Register />}>
            <Route path='Plantas/:id' element={<EditPlanta />}/>
          </Route>
          <Route path="Usuarios" element={<ShowU />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
