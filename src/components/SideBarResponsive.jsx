import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'


const SideBarResponsive = () => {
    const [mostrarNavegacion,setMostrarNavegacion] =useState(false)
    return (
        <div className='md:hidden bg-gray-800' 
        onClick={()=>{
            setMostrarNavegacion(!mostrarNavegacion)
            }}>
                <i className={`mx-4 fas fa-${mostrarNavegacion ? 'times': 'bars'} hover:text-white`} />
                {mostrarNavegacion && (<ul className='bg-gray-800'>

                        <ResponsiveRoute nombre='perfil' ruta='/admin/perfil'/>
                        <ResponsiveRoute nombre='productos' ruta='/admin/productos' />
                        <ResponsiveRoute nombre='ventas' ruta='/admin/ventas'/>
                        <ResponsiveRoute nombre='usuarios' ruta='/admin/usuarios'/>
                        <ResponsiveRoute nombre='clientes' ruta='/admin/clientes'/>
                </ul>
                    )}
       </div>
    )
}

const ResponsiveRoute=({ruta,nombre})=>{
    return(
        <Link to={ruta}>
            <li className='text-gray-300 border border-white p-1'>{nombre}</li>
        </Link>
    )

}

export default SideBarResponsive
