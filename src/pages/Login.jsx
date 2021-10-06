import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <form  action="index.html">
                    <input  type="email"  name="email" placeholder="Email" required/>
                    <input  type="password" name="password" placeholder="Password" required/>
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
            
            
            </form>
        </div>
    )
}

export default Login
