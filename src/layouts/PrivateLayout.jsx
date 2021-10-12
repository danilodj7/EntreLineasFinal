import Sidebar from 'components/Sidebar'
import SideBarResponsive from 'components/SideBarResponsive'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className='flex flex-col md:flex-row flex-nowrap h-full w-full'>
            <Sidebar/>
            <SideBarResponsive/>
            <main  className='flex w-full bg-gray-400 overflow-y-scroll items-center justify-center'> 
            {children}
            </main>
            </div>
        </div>
    )
}

export default PrivateLayout
