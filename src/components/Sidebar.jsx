import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './ImagenLogo'






const Sidebar = () => {
    return (
        <div className=' flex flex-col w-72 bg-gray-800 p-4 text-center text-gray-100 '>
            <Link to='/admin'>
            <ImagenLogo/>
            </Link>

          <Ruta ruta='/admin/perfil' nombre='Perfil'/>
          <Ruta ruta='/admin/productos' nombre='Productos'/>
          <Ruta ruta='/admin/ventas' nombre='Ventas' />
          <Ruta ruta='/admin/usuarios' nombre='Productos'/>
          <div className='mt-60'>
          <Ruta ruta='/admin/cerrar sesion' nombre='Cerrar Sesion' />
          </div>
           
        </div>
    )


}

const Ruta =({icono,ruta,nombre})=>{

    return(  <Link to={ruta}>
    <button className='mt-2'>
        {nombre}
    </button>
    </Link>
    )
}

export default Sidebar
