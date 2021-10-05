//* Creacion del layout landing page "pagina principal"
import Footer from 'components/Footer'
import NavBar from 'components/Navbar'
import React, { children } from 'react'

const PublicLayout = ({children}) => { 
    return (
        <div className="flex flex-col">
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default PublicLayout;
