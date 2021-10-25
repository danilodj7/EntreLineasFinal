import React ,{ useEffect,useState,useRef}from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog,Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios,crearUsuarios,editarUsuarios,eliminarUsuarios } from 'utils/api';

const Usuarios = () => {
    const [mostrarTabla,setMostrarTabla] = useState(true)
    const [usuarios,setUsuarios]= useState([])
    const [textoBoton , setTextoBoton]=useState('Crear Nuevo Usuario')
    const [ejecutarconsulta,setEjecutarConsulta]=useState(true);

    useEffect(() => {
        const fetchUsuarios= async ()=>{
        await obtenerUsuarios(
                (response)=>{
                    setUsuarios(response.data)
                    setEjecutarConsulta(false) 
                },
                (error)=>{
                    console.log(error)
                }
             )
            }
            if (ejecutarconsulta) {
                fetchUsuarios()
            }
    }, [ejecutarconsulta])
    
    useEffect(()=>{
        if (mostrarTabla) {
            setEjecutarConsulta(true)
        }
        
    },[mostrarTabla])
    
    
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
           (<TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
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

const TablaUsuarios =({listaUsuarios,setEjecutarConsulta })=>{
    const [busqueda,setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);
    useEffect(() => {
        setUsuariosFiltrados(
            listaUsuarios.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );

    }, [busqueda,listaUsuarios])
   
    return (
    <div className='flex flex-col items-center justify-center w-full '>
        <input 
        value={busqueda}
        onChange={e=>setBusqueda(e.target.value)}
        placeholder='Buscar' className='border border-gray-400 mt-3 px-2 py-1 self-start rounded-md focus:outline-none focus:border-indigo-600 ' />
        
        <h2 className='text-gray-900 text-center md:py-5 font-extrabold'>Tabla de Usuarios</h2>

        
        <table className='tabla hidden md:block'>
            <thead>
               <tr className='text-gray-100 '>
                   <th className='md:p-2'>ID</th>              
                   <th className='md:p-2'>Nombre</th>            
                   <th className='md:p-2'>Email</th>
                   <th className='md:p-2'>Roles</th>
                   <th className='md:p-2'>Acciones</th>
               </tr>
            </thead>
            <tbody className='text-gray-900 font-medium'>
                {usuariosFiltrados.map((usuarios)=>{
                    return(
                       <FilaUsuario key={nanoid()} 
                       usuarios={usuarios}
                       setEjecutarConsulta={setEjecutarConsulta} />
                    );   
                })}
                    
            </tbody>
        </table>
        <div className='flex flex-col w-full m-2 md:hidden'>
                {usuariosFiltrados.map((el)=>{
                    return <div  key={nanoid()}  className='bg-green-500 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                        <span>{el._id}</span>
                        <span>{el.name}</span>
                        <span>{el.email}</span>
                    </div>
                                
        })}
        </div>
    </div>
    )
}




    const FilaUsuario =({usuarios,setEjecutarConsulta})=>{
        const [edit, setEdit] = useState(false) 
        const [openDialog, setOpenDialog] = useState(false)
        const[infoNuevoUsuario,setInfoNuevoUsuario] = useState({
            _id:usuarios._id,
            name: usuarios.name,
            email:usuarios.email,
        })
        
        const actualizarUsuarios= async ()=>{
            
            await editarUsuarios(
            usuarios._id,
            {
           
            name: infoNuevoUsuario.name,
     
            email: infoNuevoUsuario.email,
   
            },
            (response)=>{
                console.log(response.data);
                toast.success('Usuario modificado con éxito')
                setEdit(false);
                setEjecutarConsulta(true);
            },
            (error)=>{
                
                toast.error('Error al modificar el usuario')
                console.error(error)
            })
            }
        const eliminarUsuario = async () =>{
           
           
           await eliminarUsuarios(
            usuarios._id,
            (response)=>{
                console.log(response.data);
                toast.success('Usuario eliminado con éxito');
                setEjecutarConsulta(true);
            },
            (error)=>{
                console.error(error)
             toast.error('Error al eliminar el usuario');   

            }
            )
            setOpenDialog(false);
        }
        
        return(
            <tr >
                {
                    edit?(

                    <>
                        <td>{infoNuevoUsuario._id}</td>
                       
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                            value= {infoNuevoUsuario.name}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,name:e.target.value})}
                            />
                        </td>
                       
                        <td>
                            <input type="text" 
                            className='appearance-none px-0 border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.email}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,email:e.target.value})}
                            />
                        </td>
                    </>
         ) :(
            <>
        <td className='md:p-1'>{usuarios._id.slice(19)}</td>
       
        <td className='md:p-1'>{usuarios.name}</td>
      
        <td className='md:p-1'>{usuarios.email}</td>
        <td>
           <RolesUsuario usuarios ={usuarios}/>
        </td>
        </>
            ) }
        <td>
            <div className='flex w-full justify-around '>
                {edit ?(
                    <>
                    <Tooltip title='Confirmar Edición' arrow>
                    <i onClick={()=>actualizarUsuarios()} 
                     className='fas fa-check text-green-800 hover:text-white'/>
                    </Tooltip>
                     <Tooltip title='Cancelar Edición' arrow>
                        <i 
                            onClick={()=>setEdit(!edit)}
                            className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                        />
                     </Tooltip>
                     </>
                ):(
                <>
                <Tooltip title='Editar Usuario' arrow>                        
                    <i onClick={()=>setEdit(!edit)}
                    className='fas fa-pencil-alt text-gray-700 hover:text-gray-900'/>
                </Tooltip>
                <Tooltip title='Eliminar Usuario' arrow>  
                    <i
                        onClick={()=>setOpenDialog(true)}
                        className='fas fa-trash text-red-700 hover:text-red-500'
                    />
                </Tooltip>
                </>
                )}      
            </div>
            <Dialog open={openDialog}>
            <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
                ¿Esta seguro que quiere eliminar el usuario?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
                <button
                    onClick={()=>eliminarUsuario()}
                    className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
                >
                    Sí
                </button>
                <button
                    onClick={()=>setOpenDialog(false)}
                    className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
                >
                    No
                </button>
              </div>
            </div>
            </Dialog>
        </td>
    </tr>
        )
    }

    const RolesUsuario =({usuarios})=>{
        const [rol, setRol] = useState(usuarios.rol);
        useEffect(() => {
           const editUsuariosRol =async()=>{
                await editarUsuarios (usuarios._id,{rol},
                    (res)=>{console.log(res)},
                    (err)=>{console.error(err)}
                    )
           }
           if (usuarios.rol !== rol) {
            editUsuariosRol();
           }

        }, [rol,usuarios])

        return(
            <select value={rol} onChange={(e)=> setRol(e.target.value)} >
                <option value="admin">Admin</option>
                <option value="vendedor">Vendedor</option>
                <option value="inactivo">Inactivo</option>
            </select>
            
        )
    }
const FormularioCreacionUsuarios =({setMostrarTabla,listaUsuarios,setUsuarios})=>{
    const form =useRef(null);
         //trabajar el hook useref para user los nombres de los inputs como variables
        const submitForm = async (e)=>{
            e.preventDefault();
            const fd = new FormData(form.current)

            const nuevoUsuario={};
            fd.forEach((value,key)=>{
                nuevoUsuario[key]=value;
            }); //se crea el objeto fd 
          await  crearUsuarios(
              {
               
                name: nuevoUsuario.name,   
                email:nuevoUsuario.email,
            },
            (response)=>{
                console.log(response.data)
                toast.success('Usuario agregado con exito')
            },
            (error)=>{
                console.error(error)
                toast.error('Error creando un Usuario')
            }
            
            )   
               setMostrarTabla(true);           
        };
    return (
        <div>
         <h2 className='py-2 text-gray-800 font-black mb-4 text-center'>Creacion de Usuarios</h2>
        <form ref={form} onSubmit={submitForm} className='grid grid-cols-1 justify-center'>
            <label htmlFor="nombre" className='text-gray-800 font-extrabold '>
                Nombre del Usuario
            <input  
            name='name'
            type="text" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-4 text-gray-800 text-center focus:outline-none' 
            placeholder='Nombre del Usuario'
            required
            
            />
            
            </label>
            <label htmlFor="email" className='text-gray-800 font-extrabold '>
            Email del Usuario
            <input 
            name='email'
            type="email" 
            className='appearance-none px-16 mt-4 border border-gray-400 rounded-md py-2 ml-10 text-gray-800 text-center  focus:outline-none' 
            placeholder='Correo del Usuario'
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
