import useActiveRoute from 'hooks/useActiveRoute'
import React from 'react'
import { Link } from 'react-router-dom'
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
          <div className='mt-52'>
          <Ruta ruta='/admin/cerrar sesion' nombre='Cerrar Sesion' />
          </div>
           
        </div>
    )


}

const Ruta =({icono,ruta,nombre})=>{
     const isActive = useActiveRoute(ruta)
    
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
