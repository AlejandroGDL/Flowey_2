import * as React from 'react'
import "../components/Sidebar.css"

import { Link } from "react-router-dom"
import { Button } from "@mui/material"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import GrassIcon from '@mui/icons-material/Grass';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

function Sidebar(){

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className="Container_S">
            <div>
                <div className='Container_M_I'><img src="/src/assets/LogoFlowey.png" alt="Logo Sidebar" /></div>
                <div>
                    <ul className='Op_M'>
                        <li>
                            <Link to={"Inicio"}><Button size='large' variant='text' startIcon={<HomeIcon />}>Inicio</Button></Link>
                        </li>
                        <li>
                            <Link to={"Plantas"}><Button size='large' variant='text' startIcon={<GrassIcon />}>Tus plantas</Button></Link>
                        </li>
                        <li>
                            <Link to={"Usuarios"}><Button size='large' variant='text' startIcon={<PersonIcon />}>Usuarios</Button></Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='Contenedor_Avatar'>
                
                <Button onClick={handleClick} 
                        aria-controls={open ? 'basic-menu' : undefined} 
                        aria-haspopup="true" 
                        aria-expanded={open ? 'true' : undefined} 
                        startIcon={<AccountCircleIcon 
                        sx={{ fontSize: 40 }} />} >Alfonsooo</Button>
                {/* Menú Exandible */}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',}} >
                    <Link to={"/"}><MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem></Link>
                </Menu>
                
            </div>
        </div>
    )
}

export default Sidebar