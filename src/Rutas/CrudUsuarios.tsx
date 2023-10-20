import "../Rutas/CrudUsuarios.css"
import Button from "@mui/material/Button/Button";
import axios from "axios";
import React,{useEffect,useState} from "react";

import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const endpoint = 'http://localhost:8000/api'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#465A52',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function ShowUsers(){
    const [Usuarios, setUsuarios] = useState<any[]>([])
    
    //Primer accion al abrir 
    useEffect (()=>{
        getAllUsuarios();
    },[])

    //Metodo Buscar Usuario
    const getAllUsuarios = async () => {
        const response = await axios.get(`${endpoint}/Inicio`)
        setUsuarios(response.data as any)
    }

    //Metodo Eliminar Usuario
    const DeleteUsuarios = async(id:any) =>{
        await axios.delete(`${endpoint}/Inicio/${id}`)
        getAllUsuarios()
    }

    return(
        <div className="Container_UsersM">
            <div className="UsersM_Header">
                <h1>CRUD Usuarios</h1>
            </div>
            <div className="UsersM_Body">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nombre</StyledTableCell>
                                <StyledTableCell align="left">Apellidos</StyledTableCell>
                                <StyledTableCell align="left">Correo</StyledTableCell>
                                <StyledTableCell align="left">Contraseña</StyledTableCell>
                                <StyledTableCell align="left">Permisos</StyledTableCell>
                                <StyledTableCell align="center">Acciones</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Usuarios.map((Usuario)=>(
                                <tr key={Usuario.id}>
                                    <td>{Usuario.User_Name}</td>
                                    <td>{Usuario.User_LastName}</td>
                                    <td>{Usuario.Email}</td>
                                    <td>{Usuario.Password}</td>
                                    <td>{Usuario.Permissions}</td>
                                    <td align="center">
                                        <IconButton><Link to={`${Usuario.id}`}><EditIcon/></Link></IconButton>
                                        <IconButton onClick={()=>DeleteUsuarios(Usuario.id)}><DeleteIcon/></IconButton>
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

export default ShowUsers;



