import React from 'react'
import { useState } from 'react/cjs/react.development'

const SideBarResponsive = () => {
    const [mostrarNavegacion,setMostrarNavegacion] =useState(false)
    return (
        <div className='md:hidden' onClick={()=>{setMostrarNavegacion(!mostrarNavegacion)}}>
            <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
       </div>
    )
}

export default SideBarResponsive
