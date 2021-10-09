import React ,{ useEffect,useState}from 'react'

const Usuarios = () => {
    const [mostrarTabla,setMostrarTabla] = useState(true)
    const [textoBoton , setTextoBoton]=useState('Crear Nuevo Usuario')
    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo Usuario')
        }
        else{
            setTextoBoton('Mostrar todos los usuarios')
        }
    },[mostrarTabla])
    return (
        <div>
           <h2>Administracion de Usuarios</h2> 

           <button
                    onClick={()=>{
                        setMostrarTabla(!mostrarTabla)
                    }} 
           
           className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>
               {textoBoton}
            </button>
           {mostrarTabla ?<TablaUsuarios />: <FormularioCreacionUsuarios/>}
           
        </div>
    )
}

const TablaUsuarios =()=>{
    return <div>mostrar la tabla de usuarios</div>
}

const FormularioCreacionUsuarios =()=>{
    return <div>
        <form action="" className='flex flex-col justify-center'>
            <h2 className='py-2 text-gray-300 font-extrabold mb-4 text-center'>Creacion de Usuarios</h2>
            <input  type="text" className='appearance-none px-20  border  border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Codigo del Usuario'required/>
            <input  type="text" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Nombre del Usuario'required/>
            <input type="text" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Apellido del Usuario'required/>
            <input type="email" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Correo del Usuario'required/>
            <input type="number" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Cedula del Usuario'required/>
            <input type="number" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Telefono' required/>
            <button type='submit' className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>Enviar Datos</button>
        </form>
    </div>
}


export default Usuarios
