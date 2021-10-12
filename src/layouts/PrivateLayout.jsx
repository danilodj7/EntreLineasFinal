import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar/>
            
            <div className='md:hidden'>
            <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
            </div>

            <main id='bg-imagen' className='flex w-full bg-gray-400 overflow-y-scroll items-center justify-center'> 
            {children}
            </main>
        </div>
    )
}

export default PrivateLayout
