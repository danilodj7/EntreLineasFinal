

import { UseDarkMode } from 'context/darkMode'
import React from 'react'

const Index = () => {

    const {darkMode} = UseDarkMode()
    return (

        <div className={`flex h-full bg-gray-${darkMode ?'800':'50'}`}>
            
           Contenido del index hola
        </div>
    )
}

export default Index
