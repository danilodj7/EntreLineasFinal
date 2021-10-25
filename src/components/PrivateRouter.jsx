import React, {useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
import {obtenerDatosUsuario} from 'utils/api'
import { useUser } from 'context/userContext';
const PrivateRouter = ({children}) => {
    const { isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0();
    const {setUsuarios} = useUser();
   
   useEffect(() => {
        const fetchAuth0Token= async ()=>{

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

        },
        (err)=>{

            console.log('err',err)
        })
        
    }
    if (isAuthenticated) {
        fetchAuth0Token();
    }
        
   }, [isAuthenticated,getAccessTokenSilently])
   
    if(isLoading) return <ReactLoading type='bars' color='#asd234' height={667} width={375} />

    if (!isAuthenticated) {
        return loginWithRedirect()
    }

    return <>{children}</>
   
    // return isAuthenticated ? <>{children}</>: <div className='text-center font-extrabold bg-red-800'>No estas autorizado </div>

}

export default PrivateRouter
