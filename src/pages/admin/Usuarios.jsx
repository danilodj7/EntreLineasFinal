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
         <h2 className='py-2 text-gray-200 font-black mb-4 text-center'>Creacion de Usuarios</h2>
        <form action="" className='grid grid-cols-1 justify-center'>
           
           
           <label  htmlFor="codigo" className='text-gray-200 font-extrabold'>
               Codigo del Usuario
            <input 
             name='codigo'   
             type="text" 
             className='appearance-none px-16  border  border-gray-300 rounded-md py-2 ml-6 text-center focus:outline-none' 
             placeholder='Codigo del Usuario'
             required
             />
            </label>
            
            <label htmlFor="nombre" className='text-gray-200 font-extrabold '>
                Nombre del Usuario
            <input  
            name='nombre'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-100 rounded-md py-2 ml-4 text-center focus:outline-none' 
            placeholder='Nombre del Usuario'
            required/>
            </label>

            <label htmlFor="apellido" className='text-gray-200 font-extrabold '> 
            Apellido del Usuario
            <input 
            name='apellido'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-4 text-center  focus:outline-none' 
            placeholder='Apellido del Usuario'
            required/>
            </label>

            <label htmlFor="email" className='text-gray-200 font-extrabold '>
            Email del Usuario
            <input 
            name='email'
            type="email" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-10 text-center  focus:outline-none' 
            placeholder='Correo del Usuario'
            required/>
            </label>


            <label htmlFor="cedula" className='text-gray-200 font-extrabold '>
                Cedula del Usuario
            <input 
            name='cedula'
            type="number" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-7 text-center  focus:outline-none' 
            placeholder='Cedula del Usuario'
            required/>
            </label>
            
            <label htmlFor="telefono" className='text-gray-200 font-extrabold '>
            Telefono del Usuario
            <input 
            name='telefono'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-3 text-center  focus:outline-none' 
            placeholder='Telefono' 
            required/>
            </label>

            <button type='submit' className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>Enviar Datos</button>
        </form>
    </div>
}


export default Usuarios
