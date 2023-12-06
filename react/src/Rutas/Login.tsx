import "../Rutas/Login.css"
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useState, createRef} from 'react';

import LoginVector from '../assets/LoginVector.png';

import useAuth from '../Hook/UseAuth';

function Login(){
    const [Correo, setCorreo] = useState('');
    const [Contraseña, setContraseña] = useState('');

    const emailRef:any = createRef();
    const passwordRef:any = createRef();
    
    const {login} = useAuth({
        middleware: 'guest',
        url: '/Menu/Inicio',
    });

    const handleSubmit = async(e:any) => {
        e.preventDefault();

        const datos = {
            Email: emailRef.current.value,
            Password: passwordRef.current.value
        }
        login(datos)
    }

    return(
        <div className="Contenedor_L">
            <div className="Header_L">
                <Link to={"/"}><Button variant="contained" startIcon={<ChevronLeftIcon />}>Regresar</Button></Link>
            </div>
            <div className="Body_Contenedor">
                <img src={LoginVector} alt="Login Vector" />    
                <a className="Divider"></a>
                <div className="FormLogin">
                    <form className="Form_Login" onSubmit={handleSubmit}>
                        <h2>¡Bienvenido!</h2>
                        <div className="Inputs">
                            <p>Correo Electronico:</p>
                            <input value={Correo} onChange={(e)=>setCorreo(e.target.value)} type="email" name="Email" className="Text" ref={emailRef} required autoComplete="username" />
                            <p>Contraseña:</p>
                            <input value={Contraseña} onChange={(e)=>setContraseña(e.target.value)} type="password" name="Password" className="Text" ref={passwordRef} required autoComplete="current-password"/>
                        </div>
                        <input type="submit" value="Iniciar sesión" id="Button" />
                        <p>¿No tienes cuenta? <Link to={"/Register"}><span>Registrate</span></Link></p>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Login