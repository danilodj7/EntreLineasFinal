import { nanoid } from 'nanoid';
import React ,{ useEffect,useState,useRef}from 'react';
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
    const [ejecutarconsulta,setEjecutarConsulta]=useState(true);

    useEffect(() => {
       if (ejecutarconsulta){

       }
    }, [ejecutarconsulta])
    
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
        <div className='flex flex-col w-full'>
           <button   
                    onClick={()=>{
                        setMostrarTabla(!mostrarTabla)
                    }} 
           
           className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>
               {textoBoton}
            </button>
            </div>
           {mostrarTabla ?
           (<TablaUsuarios listaUsuarios={usuarios} />
           ):( 
           <FormularioCreacionUsuarios 
           
            setMostrarTabla={setMostrarTabla} 
            listaUsuarios={usuarios}
            setUsuarios={setUsuarios}
            
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
   
    return (
    <div className='flex flex-col items-center justify-center w-full '>
        <h2 className='text-gray-900 text-center md:py-5 font-extrabold'>Tabla de Usuarios</h2>
        
        <table className='tabla'>
            <thead>
               <tr className='text-gray-100 '>
                   <th className='md:p-2'>Codigo</th>
                   <th className='md:p-2'>Nombre</th>
                   <th className='md:p-2'>Apellido</th>
                   <th className='md:p-2'>Email</th>
                   <th className='md:p-2'>Cedula</th>
                   <th className='md:p-2'>Telefono</th>
                   <th className='md:p-2'>Acciones</th>
               </tr>
            </thead>
            <tbody className='text-gray-900 font-medium'>
                {listaUsuarios.map((usuarios)=>{
                    return(
                       <FilaUsuario usuarios={usuarios} key={nanoid()}/>
                    );   
                })}
                    
            </tbody>
        </table>
       
        
    </div>
    )
}

    const FilaUsuario =({usuarios})=>{
        const [edit, setEdit] =useState(false) 
        const[infoNuevoUsuario,setInfoNuevoUsuario] =useState({
            codigo:usuarios.codigo,
            nombre: usuarios.nombre,
            apellido: usuarios.apellido,
            email:usuarios.email,
            cedula:usuarios.cedula,
            telefono:usuarios.telefono,
        })
        const actualizarUsuarios=()=>{
            console.log(infoNuevoUsuario)
        };
        
        return(
            <tr >
                {
                    edit?(

                    <>
                        <td>
                            <input type="text" 
                             className='appearance-none px-0  border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.codigo}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,codigo:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.nombre}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,nombre:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.apellido}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,apellido:e.target.value})}
                            />
                         </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0 border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.email}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,email:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text"
                            className='appearance-none px-0  border border-gray-400 rounded-md text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.cedula}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,cedula:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.telefono}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,telefono:e.target.value})}
                            />
                        </td>
                    </>
         ) :(
            <>
        <td className='md:p-1'>{usuarios.codigo}</td>
        <td className='md:p-1'>{usuarios.nombre}</td>
        <td className='md:p-1'>{usuarios.apellido}</td>
        <td className='md:p-1'>{usuarios.email}</td>
        <td className='md:p-1'>{usuarios.cedula}</td>
        <td className='md:p-1'>{usuarios.telefono}</td>
        </>
            ) }
        <td>
            <div className='flex w-full justify-around '>
                {edit ?(
                    
                     <i onClick={()=>actualizarUsuarios()} 
                     className='fas fa-check text-green-800 hover:text-white'/>
                     
                ):(
                <i onClick={()=>setEdit(!edit)}
                 className='fas fa-pencil-alt text-gray-700 hover:text-gray-900'/>
                )}
                <i  className='fas fa-trash text-gray-700 hover:text-red-500'/>
            </div>
        </td>
    </tr>
        )
    }


const FormularioCreacionUsuarios =({setMostrarTabla,listaUsuarios,setUsuarios})=>{
    const form =useRef(null);
         //trabajar el hook useref para user los nombres de los inputs como variables
        const submitForm =(e)=>{
            e.preventDefault();
            const fd = new FormData(form.current)

            const nuevoUsuario={};
            fd.forEach((value,key)=>{
                nuevoUsuario[key]=value;
            }); //se crea el objeto fd 

            setMostrarTabla(true);
            setUsuarios([...listaUsuarios,nuevoUsuario]);
            toast.success('Vehiculo agregado con éxito');
            
        };
    return (
        <div>
         <h2 className='py-2 text-gray-200 font-black mb-4 text-center'>Creacion de Usuarios</h2>
        <form ref={form} onSubmit={submitForm} className='grid grid-cols-1 justify-center'>
    
           <label  htmlFor="codigo" className='text-gray-200 font-extrabold'>
               Codigo del Usuario
            <input 
             name='codigo'   
             type="text" 
             className='appearance-none px-16  border  border-gray-300 rounded-md py-2 ml-6 text-gray-800 text-center focus:outline-none' 
             placeholder='Codigo del Usuario'
             required
            
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
            />
            
            </label>

            <button 
            type='submit'
            className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'
            >
                Enviar Datos
            </button>
        </form>
    </div>
    )
}


export default Usuarios
