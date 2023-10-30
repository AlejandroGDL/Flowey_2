import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '../Rutas/Register.css'
import TextField from '@mui/material/TextField';
import CookieIcon from '@mui/icons-material/Cookie';
import {useState} from 'react';
import useAuth from '../Hook/UseAuth';

function Register(){
    const [Nombre, setNombre] = useState('');
    const [Apellidos, setApellidos] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Contraseña, setContraseña] = useState('');

    // Funcion Registro de Usuario
    const {register} = useAuth({
        middleware: 'guest',
        url: '/Login',
    });

    //Utiliza la funcion register de useAuth
    const store = async (e:any) => {
        e.preventDefault();
        register(Nombre, Apellidos, Correo, Contraseña)
    }

    return(
        <div className='Contenedor_R'>
            <div className='Header_R'>
                <Link 
                to={"/"}><Button variant="contained" startIcon={<ChevronLeftIcon />}>Regresar</Button></Link>
            </div>

            <div className='Cuerpo_R'>
                <div className='Titulo_R'>
                    <h1>Registro</h1>
                </div>
            
                <form onSubmit={store} className='Form_Register'>
                    <div className='Container_Form'>
                        <div className='Inputs_R'>
                            <div>
                                <TextField value={Nombre} onChange={(e)=>setNombre(e.target.value)} type='Text' id='Text_R' label="Nombre" variant="filled" margin="none"/>
                            </div>
                        
                            <div>
                                <TextField value={Apellidos} onChange={(e)=>setApellidos(e.target.value)} type='Text' id='Text_R' label="Apellidos" variant="filled" margin="none"/>
                            </div>
                        
                            <div>
                                <TextField value={Correo} onChange={(e)=>setCorreo(e.target.value)} type='Email' id='Text_R' label="Correo Electronico" variant="filled" margin="none"/>
                            </div>
                        
                            <div>
                                <TextField value={Contraseña} onChange={(e)=>setContraseña(e.target.value)} type='password' id='Text_R' label="Contraseña" variant="filled" margin="none"/>
                            </div>
                            
                        </div>
                        <div className='Datos_R'>
                            <img src="src/assets/LogoFlowey.png" alt="Logotipo Flowey" />
                            <p>Tus datos no serán compartidos con ningún tercero</p>
                        </div>
                    </div>
                    <div className='Container_Divider_R'>
                        <a className='Divider_R'></a>
                    </div>
                    {/* <Alert severity="success">Usuario Registrado Correctamente</Alert> */}
                    <div className='Footer_R'>
                        <p>Al Registrate aceptas nuestros <Link to={"/"}><span>Terminos y Condiciones</span></Link> <CookieIcon /></p>
                        <Button variant='contained' type='submit'>Registrate</Button>
                        
                    </div>
                </form>
                
            </div>
        </div>

    )
}

export default Register;