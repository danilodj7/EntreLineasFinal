import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='bg-gray-900' >
            <ul className='grid grid-cols-6  text-gray-50 m-4' >
                <li>logo</li>
                <li>Productos</li>
                <li>Servicios</li>
                <li>Quienes Somos</li>
                <Link to='/login'>
                <li  >
                    <button className='bg-gray-800 p-2 rounded-lg hover:bg-black'>Iniciar sesion</button>
                </li>
                </Link>
                <Link to='/registro'>
                <li>
                <button className='bg-gray-800 p-2 rounded-lg hover:bg-black'>Registrarse</button>
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar
