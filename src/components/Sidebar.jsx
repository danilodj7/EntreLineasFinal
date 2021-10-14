import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react/cjs/react.development'
import ImagenLogo from './ImagenLogo'










const Sidebar = () => {
    return (
        <div className=' hidden md:flex md:w-72 flex-col w-72 bg-gray-800 p-4 text-center text-gray-100 '>
            <Link to='/admin'>
            <ImagenLogo/>
            </Link>
         
          <Ruta ruta='/admin/perfil' nombre='Perfil' />
          <Ruta ruta='/admin/productos' nombre='Productos'/>
          <Ruta ruta='/admin/ventas' nombre='Ventas' />
          <Ruta ruta='/admin/usuarios' nombre='Usuarios'/>
          <Ruta ruta='/admin/clientes' nombre='Clientes'/>
          <div className='mt-60'>
          <Ruta ruta='/admin/cerrar sesion' nombre='Cerrar Sesion' />
          </div>
           
        </div>
    )


}

const Ruta =({icono,ruta,nombre})=>{
    const location = useLocation()
    const [isActive,setisActive]= useState(false)
    
    useEffect(() => {
               
        console.log(location,ruta)    
       if (location.pathname.includes(ruta)) {
           setisActive(true)
       }else{
           setisActive(false)
       }
    }, [location,ruta])
    
    return(  <Link to={ruta}>
    <button 
        className={`p-1 mt-2 bg-gray-700 bg-${
            isActive ?'indigo':'gray'}-800 hover:bg-indigo-700 flex w-full text-white rounded-md`}>   
        {nombre}
    </button>
    </Link>
    )
}

export default Sidebar
