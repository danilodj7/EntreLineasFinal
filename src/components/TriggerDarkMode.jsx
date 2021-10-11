import { UseDarkMode } from 'context/darkMode'
import React from 'react'

const TriggerDarkMode = () => {
    const{darkMode,setDarkMode}=UseDarkMode();
    return (
        <li><button onClick={()=>{
            setDarkMode(!darkMode)
        }}>
            {darkMode? 'Desactivar':'Activar'}Modo Dark</button></li>
    )
}
export default TriggerDarkMode
