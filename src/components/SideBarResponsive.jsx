import React from 'react'
import { useState } from 'react/cjs/react.development'



const SideBarResponsive = () => {
    const [mostrarNavegacion,setMostrarNavegacion] =useState(false)
    return (
        <div className='md:hidden' 
        onClick={()=>{
            setMostrarNavegacion(!mostrarNavegacion)
            }}>
                <i className={`fas fa-${mostrarNavegacion ? 'times': 'bars'} hover:text-yellow-600`} />

       </div>
    )
}



export default SideBarResponsive
