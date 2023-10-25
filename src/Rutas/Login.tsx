import "../Rutas/Login.css"
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useState, createRef} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/Login'


function Login(){
    const [Correo, setCorreo] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const Navegacion = useNavigate();

    const Credenciales = async(e:any)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post(endpoint,{Correo,Contraseña})
            localStorage.setItem('AUTH TOKEN', data.token)
            Navegacion('/Menu/Inicio');
        }catch(e){
            console.log(e);
        }
    }

    const emailRef:any = createRef();
    const passwordRef:any = createRef();

    const handleSubmit = async(e:any) => {
        e.preventDefault();

        const datos = {
            Email: emailRef.current.value,
            Password: passwordRef.current.value,
        }

        try {
            const {data} = await axios.post(endpoint, datos)
            localStorage.setItem('AUTH TOKEN', data.token)
        } catch (error) {
            console.log((error as any).response.data.errors)
        }
    }

    return(
        <div className="Contenedor_L">
            <div className="Header_L">
                <Link to={"/"}><Button variant="contained" startIcon={<ChevronLeftIcon />}>Regresar</Button></Link>
            </div>
            <div className="Body_Contenedor">
                <img src="/src/assets/LoginVector.png" alt="Login Vector" />    
                <a className="Divider"></a>
                <div className="FormLogin">
                    <form className="Form_Login" onSubmit={handleSubmit}>
                        <h2>¡Bienvenido!</h2>
                        <div className="Inputs">
                            <p>Correo Electronico:</p>
                            <input value={Correo} onChange={(e)=>setCorreo(e.target.value)} type="email" name="" id="Text" ref={emailRef}/>
                            <p>Contraseña:</p>
                            <input value={Contraseña} onChange={(e)=>setContraseña(e.target.value)} type="password" name="" id="Text" ref={passwordRef}/>
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