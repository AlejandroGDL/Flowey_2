import '../Rutas/Menu.css'
import { Route, Routes} from 'react-router-dom';
import Inicio_M from '../Rutas/Inicio_M'
import Plant_M from '../Rutas/Crud_Planta';
import ShowU from './CrudUsuarios';
import EditPlanta from '../components/EditPlanta'
import EditUsuario from '../components/EditUsuarios'
import Sidebar from '../components/Sidebar';



function Menu(){
    return(
        <div className="Contenedor_M">
            <Sidebar />
            <article className="Cuerpo_M">
                    <Routes>
                        <Route path='Inicio' element={ < Inicio_M />}/>
                        <Route path='Plantas' element={< Plant_M />}/>
                        <Route path='Plantas/:id' element={< EditPlanta />}/>
                        <Route path='Usuarios' element={< ShowU />}/>
                        <Route path='Usuarios/:id' element={< EditUsuario />}/>
                    </Routes> 
            </article>
        </div>
    );
}

export default Menu