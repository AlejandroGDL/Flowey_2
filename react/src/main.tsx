import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import { createTheme, ThemeProvider } from '@mui/material'

/*=====Material UI=====*/
//Modificar la paleta de colores Material MUI
const TemaPersonalizado = createTheme({
  palette:{
    primary: {
      main: '#465A52',
    },
    secondary: {
      main: '#000000',
    },
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={TemaPersonalizado}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
