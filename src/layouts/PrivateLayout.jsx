import PrivateRouter from 'components/PrivateRouter'
import Sidebar from 'components/Sidebar'
import SideBarResponsive from 'components/SideBarResponsive'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <PrivateRouter>
        <div className='flex w-screen h-screen '>
            <div className='flex flex-col md:flex-row flex-nowrap  h-full w-full'>
            <Sidebar/>
            <SideBarResponsive/>
            <main  className='flex w-full h-full bg-gray-200 overflow-y-scroll items-center justify-center'> 
            {children}
            </main>
            </div>
        </div>
        </PrivateRouter>
    )
}

export default PrivateLayout
