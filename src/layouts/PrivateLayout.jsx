import PrivateRouter from 'components/PrivateRouter'
import Sidebar from 'components/Sidebar'
import SideBarResponsive from 'components/SideBarResponsive'
import React,{useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
import {obtenerDatosUsuario,obtenerDatosProducto} from 'utils/api'
import { useUser } from 'context/userContext';
import { useState } from 'react/cjs/react.development';

const PrivateLayout = ({children}) => {
    const { isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently,logout } = useAuth0();
    const [loadingUserInformation,setLoadingUserInformation] = useState(false)
    const {setUsuarios} = useUser();
    useEffect(() => {
        const fetchAuth0Token= async ()=>{
            setLoadingUserInformation(true)
       //paso 1 pedir el token a auth0
       const accessToken= await getAccessTokenSilently({
            audience:`api-autenticacion-productos-carros`,
        })
        //paso 2 recibir el token de auth0
        localStorage.setItem('token',accessToken)
        //paso 3 enviarle el token al backend
        await obtenerDatosProducto(
        (response)=>{
            console.log('Response',response)
            setUsuarios(response.data)
            setLoadingUserInformation(false)

        },
        (err)=>{

            console.log('err',err)
            setLoadingUserInformation(false)
            logout({returnTo: 'http://localhost:3000/admin'})

        })
        
    }
    if (isAuthenticated) {
        fetchAuth0Token();
    }
        
   }, [isAuthenticated,getAccessTokenSilently])
  
    useEffect(() => {
        const fetchAuth0Token= async ()=>{
            setLoadingUserInformation(true)
       //paso 1 pedir el token a auth0
       const accessToken= await getAccessTokenSilently({
            audience:`api-autenticacion-productos-carros`,
        })
        //paso 2 recibir el token de auth0
        localStorage.setItem('token',accessToken)
        //paso 3 enviarle el token al backend
        await obtenerDatosUsuario(
        (response)=>{
            console.log('Response',response)
            setUsuarios(response.data)
            setLoadingUserInformation(false)

        },
        (err)=>{

            console.log('err',err)
            setLoadingUserInformation(false)
            logout({returnTo: 'http://localhost:3000/admin'})

        })
        
    }
    if (isAuthenticated) {
        fetchAuth0Token();
    }
        
   }, [isAuthenticated,getAccessTokenSilently])
    
   if(isLoading || loadingUserInformation) return <ReactLoading type='bars' color='#asd234' height={667} width={375} />

    if (!isAuthenticated) {
        return loginWithRedirect()
    }
   
    return (
        <div className='flex w-screen h-screen '>
            <div className='flex flex-col md:flex-row flex-nowrap  h-full w-full'>
            <Sidebar/>
            <SideBarResponsive/>
            <main  className='flex w-full h-full bg-gray-200 overflow-y-scroll items-center justify-center'> 
            {children}
            </main>
            </div>
        </div>
      
    )
}

export default PrivateLayout
