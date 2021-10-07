import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayouth = ({children}) => {
    return (
        <div  className='flex flex-col  bg-gray-50 py-2 px-4'>
        <Link to='/'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
         <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        </Link>
           <div className='w-full  '>{children}</div> 
        </div>
    )
}

export default AuthLayouth
