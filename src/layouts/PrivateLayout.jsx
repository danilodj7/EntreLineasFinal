import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar/>
            <main id='bg-imagen' className='flex w-full bg-gray-400 overflow-y-scroll items-center justify-center'> 
            {children}
            </main>
        </div>
    )
}

export default PrivateLayout
