import React, {useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'

const PrivateRouter = ({children}) => {
    const { isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0();
 
   
   useEffect(() => {
        const fetchAuth0Token= async ()=>{

       
       const accessToken= await getAccessTokenSilently({
            audience:`api-autenticacion-productos-carros`,
        })
        localStorage.setItem('token',accessToken)
        
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
