import useActiveRoute from 'hooks/useActiveRoute'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRouter from './PrivateRouter';




const Sidebar = () => {
    const { user, logout } = useAuth0();
  
    const cerrarSesion =()=>{
        logout({ returnTo: "http://localhost:3000/admin" })
        localStorage.setItem('token',null)
    }
    return (
        <div className=' hidden md:flex md:w-72 flex-col  bg-gray-800 p-3  text-gray-100 text-center'>
           
        
          <Ruta ruta='/admin/perfil' nombre='Perfil' usuario={user} />
          
          <Ruta ruta='/admin/productos' nombre='Productos'/>
         
          <Ruta ruta='/admin/ventas' nombre='Ventas' />
          
          <Ruta ruta='/admin/usuarios' nombre='Usuarios'/>
          
          <Ruta ruta='/admin/clientes' nombre='Clientes'/>
       
          <div className='mt-52'>
          <button onClick={() =>cerrarSesion()}>Cerrar Sesión</button>
          </div>
           
        </div>
    )


}

const Ruta =({icono,ruta,nombre, usuario=null})=>{
     const isActive = useActiveRoute(ruta)
    
    return(  <Link to={ruta}>
    <button 
        className={`p-1 mt-2 bg-gray-700 bg-${
            isActive ?'indigo':'gray'}-800 hover:bg-indigo-700 flex w-full text-white rounded-md`}
            >
              {usuario ? (
              <>
              <img src= {usuario.picture} className='h-5 w-5 mr-1 rounded-full' alt=''/>
              {usuario.name}
              </>
              ) :(
                <>
                {nombre}
                </>
              )
              }   
    </button>
    </Link>
    )
}

export default Sidebar
