import "../Rutas/Crud_Plantas.css"

import Form_Modal from "../components/AddPlantaModal"
import {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import clienteAxios from "../config/axios";

function Plant_M(){
    const [Plantas, setPlantas] = useState<any[]>([])
    
    //Primer accion al abrir 
    useEffect (()=>{
        getAllPlantas();
    },[])

    //Metodo Buscar Usuario
    const getAllPlantas = async () => {
        const response = await clienteAxios.get('/api/Plantas')
        setPlantas(response.data as any)
    }
    //Metodo Eliminar Usuario
    const DeletePlantas = async(id:any) =>{
        await clienteAxios.delete('/api/Plantas/${id}')
        getAllPlantas()
    }

    return(
        <div className="Crud_P">
            <div className="Crud_Header">
                <h1>Administra tus plantas</h1>
            </div>
            <div className="Crud_B">
                <Button variant="contained" id="AddPlantButton"><Form_Modal /></Button>
            </div>
            <div className="Crud_Ta">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre Planta</TableCell>
                                <TableCell align="left">Descripción</TableCell>
                                <TableCell align="left">Tipo de planta</TableCell>
                                <TableCell align="center">Humedad en Tierra</TableCell>
                                <TableCell align="center">Humedad Ambiente</TableCell>
                                <TableCell align="center">Temperatura Ambiente</TableCell>
                                <TableCell align="left">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Plantas.map((Planta)=>(
                                <tr key={Planta.id}>
                                    <td align="left">{Planta.Plant_Name}</td>
                                    <td align="left">{Planta.Plant_Desc}</td>
                                    <td align="left">{Planta.Plant_Type}</td>
                                    <td align="center">{Planta.Earth_Humidity}</td>
                                    <td align="center">{Planta.Ambient_Humidity}</td>
                                    <td align="center">{Planta.Room_Temperature}</td>
                                    <td>
                                        <IconButton size="medium"><Link to={`${Planta.id}`}><EditIcon/></Link></IconButton> 
                                        <IconButton size="large" onClick={()=>DeletePlantas(Planta.id)}><DeleteIcon /></IconButton>
                                    </td>
                                </tr>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Plant_M