import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import {useState} from 'react';
import axios from 'axios';

import "../components/AddPlantaModal.css"
import { useNavigate } from 'react-router-dom';


const endpoint = 'http://localhost:8000/api/Planta'


// axios.defaults.baseURL = 'http://localhost:8000/api/Planta';
// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#fff',
  border: '1px solid #00000033',
  boxShadow: 24,
  p: 4,
};

export default function AddPlanta() {
  // Abrir Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Variables Registro Planta
  const [PlantName, setPlantName] = useState('');
  const [PlantDesc, setPlantDesc] = useState('');
  const [PlantType, setPlantType] = useState('');
  var EarthHum=0;
  var WaterTime=0;
  var AmbHum=0;
  var RoomTemp=0;

  const navigate = useNavigate();

  const store = async (e:any) => {
    e.preventDefault();
    await axios.post(endpoint, {Plant_Name: PlantName,Plant_Desc: PlantDesc,Plant_Type: PlantType,Earth_Humidity: EarthHum,Water_Time: WaterTime,Ambient_Humidity: AmbHum,Room_Temperature: RoomTemp});
    navigate('/Menu/Plantas');
  }

  return (
    <div>
      <Button onClick={handleOpen}>Agregar Planta</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='Container_Modal'>
          <Typography id="modal-modal-title" variant="h6" component="h2" fontSize={36}>Registra tu Planta</Typography>
          <form onSubmit={store}>
            <TextField value={PlantName} onChange={(e)=>setPlantName(e.target.value)} id="filled-basic" label="Nombre Planta" variant="filled" margin="dense"/>
            <TextField value={PlantDesc} onChange={(e)=>setPlantDesc(e.target.value)} id="filled-basic" label="Descripción Planta" variant="filled" margin="dense"/>
            <TextField value={PlantType} onChange={(e)=>setPlantType(e.target.value)} id="filled-basic" label="Tipo de Planta" variant="filled" margin="dense"/>
            <div>
                <Button variant='text' onClick={handleClose}>Descartar</Button>
                <Button variant='contained' type='submit'>Guardar Planta</Button>
            </div>
          </form>
            
        </Box>
      </Modal>
    </div>
  );
}