import clienteAxios from '../config/axios'
import { useNavigate } from 'react-router-dom'
import useSWR, { mutate } from 'swr'
import { useEffect } from "react";

export const useAuth = ({middleware, url}: {middleware: any, url: any}) => {

    var Navegacion = useNavigate();
    const token = localStorage.getItem('AUTH TOKEN')

    const {data: user, error,mutate} = useSWR('/api/user', () => 
         clienteAxios('/api/user',{
             headers: {
                 Authorization: `Bearer ${token}`
             }
         })
         .then(res => res.data)
         .catch(error => {
             throw Error(error?.response?.data?.errors)
         })
     )

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
            await mutate()
            Navegacion('/Menu/Inicio')
        } catch (error) {
            console.log((error as any).response.data.errors)
        }
    }

    const logout = async() => {
        try {
            await clienteAxios.post('/api/logout', null,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH TOKEN')
            await mutate(undefined)
        } catch (error) {
            console.log((error as any).response.data.errors)
        }
    }

    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            Navegacion(url)
        }
        if(middleware === 'auth' && error) {
            Navegacion('/')
        }
    },[user,error])

    return {
        login,
        logout,
        register,
        user,
        error
    }
}

export default useAuth;