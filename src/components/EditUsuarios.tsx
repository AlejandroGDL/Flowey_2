import * as React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import "../components/EditUsuarios.css"
import {useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/Inicio/'
const endpoint2 = 'http://localhost:8000/api/Usuarios/'


function EditUsuario (){
  // Variables Registro Planta
  const [Nombre, setNombre] = useState('');
  const [Apellidos, setApellidos] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setContraseña] = useState('');
  var Permiso='User';

  const {id} = useParams();
  var navegar = useNavigate();

  
  const UpdateUser = async(e:any) =>{
    e.preventDefault();
    await axios.put(`${endpoint2}${id}`,{
        User_Name: Nombre,
        User_LastName: Apellidos,
        Email: Correo,
        Password: Contraseña,
        Permissions: Permiso
    })
    navegar('/Menu/Usuarios');
  }

  React.useEffect( ()=>{
    const getProductByID = async () => {
       const respuesta = await axios.get(`${endpoint}${id}`)
       setNombre(respuesta.data.User_Name)
       setApellidos(respuesta.data.User_LastName)
       setCorreo(respuesta.data.Email)
       setContraseña(respuesta.data.Password)
    }
    getProductByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


    return(
        <div className='Container_EditU'>
            <div className='EditU_Header'>
                <h1>Edición de Usuario</h1>
            </div>
            <div className='EditU_Body'>
                <form onSubmit={UpdateUser} className='EditU_Form'>
                    <div className='EditU_Form_Header'>
                        <p>{Nombre}</p>
                    </div>
                    <div className='EditU_Form_Body'>
                        <TextField value={Nombre} onChange={(e)=>setNombre(e.target.value)} className='EditU_Txt' id="filled-basic" label="Nombre" variant="filled" margin="dense"/>
                        <TextField value={Apellidos} onChange={(e)=>setApellidos(e.target.value)} className='EditU_Txt' id="filled-basic" label="Apellidos" variant="filled" margin="dense"/>
                        <TextField value={Correo} onChange={(e)=>setCorreo(e.target.value)} className='EditU_Txt' id="filled-basic" label="Correo" variant="filled" margin="dense"/>
                        <TextField value={Contraseña} onChange={(e)=>setContraseña(e.target.value)} className='EditU_Txt' id="filled-basic" label="Contaseña" variant="filled" margin="dense"/>
                    </div>
                    <div className='EditU_Form_Footer'>
                        <Link to={'/Menu/Usuarios'}><Button variant='text'>Descartar</Button></Link>
                        <Button variant='contained' type='submit'>Guardar Usuario</Button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default EditUsuario


