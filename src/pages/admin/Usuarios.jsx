import React ,{ useEffect,useState,useRef}from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import axios from 'axios'
import { Dialog,Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios } from 'utils/api';


const Usuarios = () => {
    const [mostrarTabla,setMostrarTabla] = useState(true)
    const [usuarios,setUsuarios]= useState([])
    const [textoBoton , setTextoBoton]=useState('Crear Nuevo Usuario')
    const [ejecutarconsulta,setEjecutarConsulta]=useState(true);

    useEffect(() => {
       if (ejecutarconsulta){
            obtenerUsuarios(setUsuarios,setEjecutarConsulta)
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

                    return <div className='bg-green-500 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                        <span>{el._id}</span>
                        <span>{el.code}</span>
                        <span>{el.name}</span>
                        <span>{el.lastName}</span>
                        <span>{el.email}</span>
                        <span>{el.idCard}</span>
                        <span>{el.phone}</span>
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
            code:usuarios.code,
            name: usuarios.name,
            lastName: usuarios.lastName,
            email:usuarios.email,
            idCard:usuarios.idCard,
            phone:usuarios.phone,
        })
        
        const actualizarUsuarios= async ()=>{
            const options ={
                method: 'PATCH',
                url: `http://localhost:5000/usuarios/${usuarios._id}`,
                headers: { 'Content-Type': 'application/json' },
                data:{ ...infoNuevoUsuario},
            }

            await axios
            .request(options)
            .then(function(response){
                console.log(response.data);
                toast.success('Usuario modificado con éxito')
                setEdit(false);
                setEjecutarConsulta(true);
            })
            .catch(function(error){
                toast.error('Error al modificar el usuario')
                console.error(error)
            })
        };

        const eliminarUsuario = async () =>{
            const options ={
                method: 'DELETE',
                url:'http://localhost:5000/usuarios/eliminar',
                headers: { 'Content-Type': 'application/json' },
                data:{id:usuarios._id},
            }

            await axios
                .request(options)
                .then(function(response){
                    console.log(response.data);
                    toast.success('Usuario eliminado con éxito');
                    setEjecutarConsulta(true);
                })
                .catch(function(error){
                    console.error(error)
                    toast.error('Error al eliminar el usuario');                    
                })
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
                            value={infoNuevoUsuario.code}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,code:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                            value= {infoNuevoUsuario.name}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,name:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.lastName}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,lastName:e.target.value})}
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
                            value={infoNuevoUsuario.idCard}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,idCard:e.target.value})}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            className='appearance-none px-0  border border-gray-400 rounded-md text-gray-800 text-center  focus:outline-none' 
                            value={infoNuevoUsuario.phone}
                            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario,phone:e.target.value})}
                            />
                        </td>
                    </>
         ) :(
            <>
        <td className='md:p-1'>{usuarios._id.slice(20)}</td>
        <td className='md:p-1'>{usuarios.code}</td>
        <td className='md:p-1'>{usuarios.name}</td>
        <td className='md:p-1'>{usuarios.lastName}</td>
        <td className='md:p-1'>{usuarios.email}</td>
        <td className='md:p-1'>{usuarios.idCard}</td>
        <td className='md:p-1'>{usuarios.phone}</td>
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

            const options={
                method: 'POST',
                url:'http://localhost:5000/usuarios/nuevo',
                headers: { 'Content-Type': 'application/json' },
                data:{
                    code: nuevoUsuario.code,
                    name: nuevoUsuario.name,
                    lastName:nuevoUsuario.lastName,
                    email:nuevoUsuario.email,
                    idCard:nuevoUsuario.idCard,
                    phone:nuevoUsuario.phone
                },
            }

            await axios
                .request(options)
                .then(function(response){
                    console.log(response.data)
                    toast.success('Ususario Registrado con exito')

                })
                .catch(function(error){
                    console.error(error);
                    toast.error('Error al crear un usuario')
                })
                
                setMostrarTabla(true);           
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
