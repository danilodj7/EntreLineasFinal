import React ,{ useEffect,useState}from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const usuariosBackend =[
    {
        codigo:"27098",
        nombre:"pepe",
        apellido:"almeja",
        email:"pepe@gmail.com",
        cedula:278176546,
        telefono:"27089767"

    },

    {
        codigo:"27099",
        nombre:"carlos",
        apellido:"almejados",
        email:"carlos@gmail.com",
        cedula:278176547,
        telefono:"3306564535"

    },
]

const Usuarios = () => {
    const [mostrarTabla,setMostrarTabla] = useState(true)
    const [usuarios,setUsuarios]= useState([])
    const [textoBoton , setTextoBoton]=useState('Crear Nuevo Usuario')
    
    useEffect(()=>{
        //obtener lista de usuarios desde el fronted
        setUsuarios(usuariosBackend)
    },[])
    
    
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
           {mostrarTabla ?
           (<TablaUsuarios listaUsuarios={usuarios} />
           ):( 
           <FormularioCreacionUsuarios 
           
            funcionParaMostrarTabla={setMostrarTabla} 
            listaUsuarios={usuarios}
            funcionParaAgregarUsuario={setUsuarios}
            
            />
           )}
           
           <ToastContainer position="bottom-center" autoClose={5000} />
           

        </div>
    )
}

const TablaUsuarios =({listaUsuarios })=>{
    useEffect(()=>{
        console.log('listado de usurarios', listaUsuarios)
    },[listaUsuarios])
    return <div>
        <h2 className='text-gray-100 text-center md:py-5 font-extrabold'>Tabla de Usuarios</h2>
        <table>
            <thead>
               <tr className='text-gray-100 '>
                   <th className='md:p-2'>Codigo</th>
                   <th className='md:p-2'>Nombre</th>
                   <th className='md:p-2'>Apellido</th>
                   <th className='md:p-2'>Email</th>
                   <th className='md:p-2'>Cedula</th>
                   <th className='md:p-2'>Telefono</th>
               </tr>
            </thead>
            <tbody className='text-gray-100'>
                {listaUsuarios.map((usuarios)=>{
                    return(
                        <tr>
                        <td className='md:p-2'>{usuarios.codigo}</td>
                        <td className='md:p-2'>{usuarios.nombre}</td>
                        <td className='md:p-2'>{usuarios.apellido}</td>
                        <td className='md:p-2'>{usuarios.email}</td>
                        <td className='md:p-2'>{usuarios.cedula}</td>
                        <td className='md:p-2'>{usuarios.telefono}</td>
                    </tr>
                    );
                
                })}
               
                    
            </tbody>
        </table>
    </div>
}

const FormularioCreacionUsuarios =({
    funcionParaMostrarTabla,
    listaUsuarios,
    funcionParaAgregarUsuario
})=>{
    
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
            //...listaUsuarios = todo lo que ya habia + n cosas nuevas
            funcionParaAgregarUsuario([
            ...listaUsuarios,
            {codigo:codigo,nombre:nombre,apellido:apellido,email:email,cedula:cedula,telefono:telefono}
            ])
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
