import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <form  className='flex flex-col items-center mt-8 max-w-md' action="index.html">
                    <input className='appearance-none px-3 border border-gray-400 rounded-md py-2 focus:outline-none' type="email"  name="email" placeholder="Email" required/>
                    <input  className='appearance-none px-3 border border-gray-400 rounded-md py-2 focus:outline-none' type="password" name="password" placeholder="Password" required/>
                    <button type="submit">Sign In</button>
            <div>
                <label  htmlFor='Recuerdame'>
                    <input type='checkbox' name='recuerdame'/>
                    Recuerdame
                </label>
            </div>
            <div>
                <Link to='#'>
                ¿Olvidaste tu contraseña?
                </Link>
            </div>
            <di>
                o
            </di>
            <div>
                <button type='submit'>Continua con Google</button>
            </div>
            
            
            </form>
        </div>
    )
}

export default Login
