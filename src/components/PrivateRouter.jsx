import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRouter = ({children}) => {
    const { isAuthenticated, isLoading } = useAuth0();
 
    if(isLoading) return <div>Loading</div> 

    return isAuthenticated ? <>{children}</>: <div className='text-center font-extrabold bg-red-800'>No estas autorizado </div>

}

export default PrivateRouter
