import { useUser } from 'context/userContext'
import React from 'react'

const PrivateComponent = ({roleList,children}) => {
     const {usuarios} = useUser();
  
    if (roleList.includes(usuarios.rol)) {
        return children
    }
    return <></>
}

export default PrivateComponent
