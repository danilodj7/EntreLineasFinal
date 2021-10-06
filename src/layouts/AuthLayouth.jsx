import React from 'react'

const AuthLayouth = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4'>
            authenticacion layout
           <div className='w-full  '>{children}</div> 
        </div>
    )
}

export default AuthLayouth
