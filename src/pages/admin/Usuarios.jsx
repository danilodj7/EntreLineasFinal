import React ,{ useEffect,useState}from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
           {mostrarTabla ?<TablaUsuarios />: <FormularioCreacionUsuarios funcionParaMostrarTabla={setMostrarTabla}/>}
           <ToastContainer position="bottom-center" autoClose={5000} />
           

        </div>
    )
}

const TablaUsuarios =()=>{
    return <div>
        <table>
            <thead>
               
            </thead>
            <tbody>
                <tr>
                    <td>dato 1</td>
                    
                </tr>
                    
            </tbody>
        </table>
    </div>
}

const FormularioCreacionUsuarios =({funcionParaMostrarTabla})=>{
    
        const [codigo, setCodigo] =useState();
        const [nombre, setNombre] =useState();
        const [apellido, setApellido] =useState();
        const [email, setEmail] =useState();
        const [cedula, setCedula] =useState();
        const [telefono, setTelefono] =useState();

        const enviarAlBackend =()=>{
            console.log("codigo",codigo,"nombre",nombre,"apellido",apellido,"faltan anexar mas")
            toast.success(('🦄 Cliente Enviado con Exito!'),{
                autoClose: 5000,
            })
            funcionParaMostrarTabla(true)
        }

    return <div>
         <h2 className='py-2 text-gray-200 font-black mb-4 text-center'>Creacion de Usuarios</h2>
        <form action="" className='grid grid-cols-1 justify-center'>
    
           <label  htmlFor="codigo" className='text-gray-200 font-extrabold'>
               Codigo del Usuario
            <input 
             name='codigo'   
             type="text" 
             className='appearance-none px-16  border  border-gray-300 rounded-md py-2 ml-6 text-gray-800 text-center focus:outline-none' 
             placeholder='Codigo del Usuario'
             required
             value={codigo}
             onChange={(e)=>{
                 setCodigo(e.target.value)
             }}
             />
            </label>
            
            <label htmlFor="nombre" className='text-gray-200 font-extrabold '>
                Nombre del Usuario
            <input  
            name='nombre'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-100 rounded-md py-2 ml-4 text-gray-800 text-center focus:outline-none' 
            placeholder='Nombre del Usuario'
            required
            value={nombre}
             onChange={(e)=>{
                 setNombre(e.target.value)
             }}
            />
            
            </label>

            <label htmlFor="apellido" className='text-gray-200 font-extrabold '> 
            Apellido del Usuario
            <input 
            name='apellido'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-4 text-gray-800 text-center  focus:outline-none' 
            placeholder='Apellido del Usuario'
            required
            value={apellido}
             onChange={(e)=>{
                 setApellido(e.target.value)
             }}
            />
            
            </label>

            <label htmlFor="email" className='text-gray-200 font-extrabold '>
            Email del Usuario
            <input 
            name='email'
            type="email" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-10 text-gray-800 text-center  focus:outline-none' 
            placeholder='Correo del Usuario'
            required
            value={email}
             onChange={(e)=>{
                 setEmail(e.target.value)
             }}
            />
            
            </label>


            <label htmlFor="cedula" className='text-gray-200 font-extrabold '>
                Cedula del Usuario
            <input 
            name='cedula'
            type="number" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-7 text-gray-800 text-center  focus:outline-none' 
            placeholder='Cedula del Usuario'
            required
            value={cedula}
             onChange={(e)=>{
                 setCedula(e.target.value)
             }}
            />
            
            </label>
            
            <label htmlFor="telefono" className='text-gray-200 font-extrabold '>
            Telefono del Usuario
            <input 
            name='telefono'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-3 text-gray-800 text-center  focus:outline-none' 
            placeholder='Telefono' 
            required
            value={telefono}
             onChange={(e)=>{
                 setTelefono(e.target.value)
             }}
            />
            
            </label>

            <button 
            type='button'
            className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'
            onClick={()=>{
                enviarAlBackend()
            
            }}>
                Enviar Datos
            </button>
        </form>
    </div>
}


export default Usuarios
