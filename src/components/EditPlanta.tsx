import * as React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import "../components/EditPlanta.css"
import {useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios';

const endpoint = 'http://localhost:8000/api/Plantas/'


const Hola = () => {
  // Variables Registro Planta
  const [PlantName, setPlantName] = useState('');
  const [PlantDesc, setPlantDesc] = useState('');
  const [PlantType, setPlantType] = useState('');
  var EarthHum=0;
  var AmbHum=0;
  var RoomTemp=0;
  const {id} = useParams();
  var navegar = useNavigate();

  const update = async (e:any) =>{
    e.preventDefault();
    await clienteAxios.put(`/api/Plantas/${id}`,{
      Plant_Name: PlantName,
      Plant_Desc: PlantDesc,
      Plant_Type: PlantType,
      Earth_Humidity: EarthHum,
      Ambient_Humidity: AmbHum,
      Room_Temperature: RoomTemp
    })
    navegar('/Menu/Plantas');
  }

  React.useEffect( ()=>{
    const getProductByID = async () => {
       const respuesta = await clienteAxios.get(`/api/Plantas/${id}`)
       setPlantName(respuesta.data.Plant_Name)
       setPlantDesc(respuesta.data.Plant_Desc)
       setPlantType(respuesta.data.Plant_Type)
    }
    getProductByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


    return(
        <div className='Container_EditP'>
            <div className='EditP_Header'>
                <h1>Edita tu Planta</h1>
            </div>
            <div className='EditP_Body'>
                <form onSubmit={update} className='EditP_Form'>
                    <div className='EditP_Form_Header'>
                        <p>{PlantName}</p>
                    </div>
                    <div className='EditP_Form_Body'>
                        <TextField value={PlantName} onChange={(e)=>setPlantName(e.target.value)} className='HelpTxt' id="filled-basic" label="Nombre Planta" variant="filled" margin="dense"/>
                        <TextField value={PlantDesc} onChange={(e)=>setPlantDesc(e.target.value)} className='HelpTxt' id="filled-basic" label="Descripción Planta" variant="filled" margin="dense"/>
                        <TextField value={PlantType} onChange={(e)=>setPlantType(e.target.value)} className='HelpTxt' id="filled-basic" label="Tipo de Planta" variant="filled" margin="dense"/>
                    </div>
                    <div className='EditP_Form_Footer'>
                        <Link to={'/Menu/Plantas'}><Button variant='text'>Descartar</Button></Link>
                        <Button variant='contained' type='submit'>Guardar Planta</Button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Hola


