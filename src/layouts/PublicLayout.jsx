//* Creacion del layout landing page "pagina principal"
import Footer from 'components/Footer'
import NavBar from 'components/Navbar'
import React from 'react'

const PublicLayout = ({children}) => { 
    return (
        //* display flex, displey de columna uno debajo de otro, justify between que quede el nav arriba y el footer abajo 
        //* h-screen quede 100%, h-full tamaño completo 100%, overflow-y-scroll para que quede un scroll en el main dentro

        <div className="flex flex-col justify-between h-screen"> 
            <NavBar />
            <main className='h-full overflow-y-scroll bg-blue-400 '>{children}</main>
            <Footer  />
        </div>
    )
}

export default PublicLayout;
