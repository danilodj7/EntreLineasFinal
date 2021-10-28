
import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='bg-gray-900' >
            <ul className='grid grid-cols-6  text-gray-50 m-4' >
                <li>logo</li>
                <li>Productos</li>
                <li>Quienes Somos</li>
              
               
                <li  >
                    <button 
                     onClick={() => loginWithRedirect()}
                    className='bg-gray-800 p-2 rounded-lg  hover:bg-blue-400 hover:text-gray-900'>Iniciar sesion</button>
                </li>
              
                <Link to='/registro'>
                <li>
                <button className='bg-gray-800 p-2 rounded-lg  hover:bg-blue-400 hover:text-gray-900'>Registrarse</button>
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar
