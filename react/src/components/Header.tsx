import './Header.css'
import {Link} from 'react-router-dom'
import {useRef} from 'react'

import LogoFlowey from '../assets/LogoFlowey.png'

function Header(){

    return(
    <header>
        <nav>
            <div>
                <img src={LogoFlowey} alt="Logotipo" />
            </div>
            <div className='Op1'>
                {/* <Link to={"/"}>Inicio</Link> */}
                {/* <Link onClick={handleClick} to={"/"}>Productos</Link>
                <Link to={"/"}>Nosotros</Link> */}
                {/* <Link to={"Menu/Inicio"}>MENU</Link> */}
            </div>
            <div className='Op2'>
                <Link to={"/Register"}>Registrarse</Link>
                <Link to={"/Login"}>Iniciar sesión</Link>
            </div>
        </nav>
    </header>
    )
}

export default Header;