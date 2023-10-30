import clienteAxios from '../config/axios'
import { useNavigate } from 'react-router-dom'

export const useAuth = ({middleware, url}: {middleware: any, url: string}) => {

    var Navegacion = useNavigate();

    const register = async(Nombre:any,Apellidos:any,Correo:any,Contraseña:any) => {
        const N1 = 'User';
        try {
            await clienteAxios.post('/api/InicioS',{
                User_Name: Nombre,
                User_LastName: Apellidos,
                Email: Correo,
                Password: Contraseña,
                Permissions: N1 })
            Navegacion('/Login')
        } catch (error) {
            console.log((error as any).response.data.message)
        }
    }

    //Login 
    const login = async(datos:any) => {
        try {
            const {data} = await clienteAxios.post('/api/Login', datos)
            localStorage.setItem('AUTH TOKEN', data.token)
            Navegacion('/Menu/Inicio')
        } catch (error) {
            console.log((error as any).response.data.errors)
        }
    }

    const logout = () => {
        
    }


    return {
        login,
        logout,
        register
    }
}

export default useAuth;