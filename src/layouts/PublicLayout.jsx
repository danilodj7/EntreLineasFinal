//* Creacion del layout landing page "pagina principal"
import Footer from 'components/Footer'
import NavBar from 'components/Navbar'
import React, { Children } from 'react'

const PublicLayout = ({Children}) => { 
    return (
        <div className="flex flex-col">
            <NavBar/>
            <main>{Children}</main>
            <Footer/>
        </div>
    )
}

export default PublicLayout
