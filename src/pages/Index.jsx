import imagenLogo from 'media/logo.svg'

import { UseDarkMode } from 'context/darkMode'
import React from 'react'

const Index = () => {

    const {darkMode} = UseDarkMode()
    return (

        <div className={`flex h-full bg-gray-${darkMode ?'800':'50'}`}>
            <imagenLogo/>
           Contenido del index
        </div>
    )
}

export default Index
