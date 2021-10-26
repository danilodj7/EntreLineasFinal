import { useUser } from 'context/userContext'
import React from 'react'
import NoAutorizado from './NoAutorizado';


const PrivateRouter = ({roleList,children}) => {
     const {usuarios} = useUser();
  
    if (roleList.includes(usuarios.rol)) {
        return children
    }
    return  <NoAutorizado/>

}



export default PrivateRouter
