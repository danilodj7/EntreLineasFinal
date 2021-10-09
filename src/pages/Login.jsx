import React from 'react'
import { Link } from 'react-router-dom'

import 'styles/styles.css'
const Login = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            
            <form  className='flex flex-col items-center mt-28 max-w-md' action="index.html">
            <h3 className=' py-2 text-gray-700 font-bold mb-4'>
                Iniciar Sesión 
            </h3>
                    <input className='appearance-none px-20  border border-gray-400 rounded-md py-2 focus:outline-none' type="email"  name="email" placeholder="Email" required/>
                    <input  className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' type="password" name="password" placeholder="Password" required/>
                    <button type="submit" className='mt-4 bg-green-500 px-36 border rounded-md py-2 hover:bg-green-600'>Sign In</button>
            <div className='mt-4 '>
                <label  htmlFor='Recuerdame' className='text-gray-700 ' >
                    <input  type='checkbox' name='recuerdame '/>
                    Recuerdame
                </label>
            </div>
            <div className=' mt-4'>
                <Link to='#' className='px-10 items-center text-gray-700'>
                ¿Olvidaste tu contraseña?
                </Link>
                <Link to='#' className='px-12  text-gray-700'>
                 registrate
                </Link>
            </div>
            <div className='py-2 text-gray-700'>
               ____________________ o ____________________
            </div>
            <div>
                <button type='submit' className='text-gray-700 bg-gray-300 border-gray-400 rounded-md px-24 py-2'>Continua con Google</button>
                
            </div>
            
            
            </form>
        </div>
    )
}
export default Login
