import React ,{ useEffect,useState,useRef}from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog,Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { obtenerProductos,crearProductos,editarProductos,eliminarProductos } from 'utils/api';
import PrivateComponent from 'components/PrivateComponent';



const Productos = () => {
    const [mostrarTabla,setMostrarTabla] = useState(true)
    const [productos,setProductos]= useState([])
    const [textoBoton , setTextoBoton]=useState('Crear Nuevo Producto')
    const [ejecutarconsulta,setEjecutarConsulta]=useState(true);
    

    useEffect(() => {
        const fetchProductos = async ()=>{
            
          await  obtenerProductos(
                (response)=>{
                    setProductos(response.data)
                    setEjecutarConsulta(false) 
                
                },
                (error)=>{
                    console.log(error)
                    
                })
        }
       
            
        if (ejecutarconsulta){   
            fetchProductos()
       }
    }, [ejecutarconsulta])
    
    useEffect(()=>{
        if (mostrarTabla) {
            setEjecutarConsulta(true)
        }
        
    },[mostrarTabla])
    
    
    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo Producto')
        }
        else{
            setTextoBoton('Mostrar todos los productos')
        }
    },[mostrarTabla])
    return (
        <div>
           <h2>Administración de Productos</h2> 
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
           (<TablaProductos 
                
                listaProductos={productos} 
                setEjecutarConsulta={setEjecutarConsulta} />
           ):( 
           <FormularioCreacionProductos 
           
            setMostrarTabla={setMostrarTabla} 
            listaProductos={productos}
            setProductos={setProductos}
            
            />
           )}         
           <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
    )
}

const TablaProductos =({ listaProductos,setEjecutarConsulta })=>{
    const [busqueda,setBusqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);
    useEffect(() => {
        setProductosFiltrados(
            listaProductos.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );

    }, [busqueda,listaProductos])
   
    return (
    <div className='flex flex-col items-center justify-center w-full '>
        <input 
        value={busqueda}
        onChange={e=>setBusqueda(e.target.value)}
        placeholder='Buscar' className='border border-gray-400 mt-3 px-2 py-1 self-start rounded-md focus:outline-none focus:border-indigo-600 ' />
        
        <h2 className='text-gray-900 text-center md:py-5 font-extrabold'>Tabla de Productos</h2>      
        <table className='tabla hidden md:block'>
            <thead>
               <tr className='text-gray-100 '>
                   <th className='md:p-2'>ID</th>
                   <th className='md:p-2'>Fabricante</th>
                   <th className='md:p-2'>Producto</th>
                   <th className='md:p-2'>Garantia</th>
                   <PrivateComponent roleList={['admin']}>
                   <th className='md:p-2'>Acciones</th>
                   </PrivateComponent>
               </tr>
            </thead>
            <tbody className='text-gray-900 font-medium'>
                {productosFiltrados.map((productos)=>{
                    return(
                       <FilaProducto key={nanoid()} 
                       productos={productos}
                       setEjecutarConsulta={setEjecutarConsulta} />
                    );   
                })}
                    
            </tbody>
        </table>        
        <div className='flex flex-col w-full m-2 md:hidden'>
                {productosFiltrados.map((el)=>{

                    return <div key={nanoid()}  className='bg-green-500 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                        <span>{el._id}</span>
                        <span>{el.company}</span>
                        <span>{el.nameProduct}</span>
                        <span>{el.warranty}</span>
                    </div>
                                
        })}
        </div>
    </div>
    )
}

const FilaProducto =({productos,setEjecutarConsulta})=>{
    const [edit, setEdit] = useState(false) 
    const [openDialog, setOpenDialog] = useState(false)
    const[infoNuevoProducto,setInfoNuevoProducto] = useState({
        _id:productos._id,
        company:productos.company,
        nameProduct:productos.nameProduct,
        warranty: productos.warranty,
    })
    
    const actualizarProductos= async ()=>{
        
        await editarProductos(
        productos._id,
        {
        company: infoNuevoProducto.company,
        nameProduct: infoNuevoProducto.nameProduct,
        warranty: infoNuevoProducto.warranty,
        },
        (response)=>{
            console.log(response.data);
            toast.success('Producto modificado con éxito')
            setEdit(false);
            setEjecutarConsulta(true);
        },
        (error)=>{
            
            toast.error('Error al modificar el producto')
            console.error(error)
        })
        }
    const eliminarProducto = async () =>{
       
       
       await eliminarProductos(
        productos._id,
        (response)=>{
            console.log(response.data);
            toast.success('Producto eliminado con éxito');
            setEjecutarConsulta(true);
        },
        (error)=>{
            console.error(error)
         toast.error('Error al eliminar producto');   

        }
        )
        setOpenDialog(false);
    }
    
    return(
        <tr >
            {
                edit?(

                <>
                    <td>{infoNuevoProducto._id}</td>
                    <td>
                        <input type="text" 
                         className='appearance-none px-0  border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                        value={infoNuevoProducto.company}
                        onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto,company:e.target.value})}
                        />
                    </td>
                    <td>
                        <input type="text" 
                        className='appearance-none px-0  border border-gray-400 rounded-md  text-gray-800 text-center  focus:outline-none' 
                        value= {infoNuevoProducto.nameProduct}
                        onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto,nameProduct:e.target.value})}
                        />
                    </td>
                    <td>
                        <input type="text" 
                        className='appearance-none px-0  border border-gray-400 rounded-md text-gray-800 text-center  focus:outline-none' 
                        value={infoNuevoProducto.warranty}
                        onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto,warranty:e.target.value})}
                        />
                     </td>
                </>
     ) :(
        <>
    <td className='md:p-1'>{productos._id.slice(19)}</td>
    <td className='md:p-1'>{productos.company}</td>
    <td className='md:p-1'>{productos.nameProduct}</td>
    <td className='md:p-1'>{productos.warranty}</td>
    </>
        )}
        <PrivateComponent roleList={['admin']}> 
        <td>      
        <div className='flex w-full justify-around '>
            {edit ?(
                <>
                <Tooltip title='Confirmar Edición' arrow>
                <i onClick={()=>actualizarProductos()} 
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
            <Tooltip title='Editar Producto' arrow>                        
                <i onClick={()=>setEdit(!edit)}
                className='fas fa-pencil-alt text-gray-700 hover:text-gray-900'/>
            </Tooltip>
            <Tooltip title='Eliminar Producto' arrow>  
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
            ¿Esta seguro que quiere eliminar el producto?
        </h1>
        <div className='flex w-full items-center justify-center my-4'>
            <button
                onClick={()=>eliminarProducto()}
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
        </PrivateComponent>
</tr>
    )
}

const FormularioCreacionProductos =({setMostrarTabla,listaProductos,setProductos})=>{
    const form =useRef(null);
         //trabajar el hook useref para user los nombres de los inputs como variables
        const submitForm = async (e)=>{
            e.preventDefault();
            const fd = new FormData(form.current)

            const nuevoProducto={};
            fd.forEach((value,key)=>{
                nuevoProducto[key]=value;
            }); //se crea el objeto fd 

 
          await  crearProductos(
              {
                company: nuevoProducto.company,
                nameProduct: nuevoProducto.nameProduct,
                warranty:nuevoProducto.warranty
               
            },
            (response)=>{
                console.log(response.data)
                toast.success('Producto agregado con exito')
            },
            (error)=>{
                console.error(error)
                toast.error('Error creando un producto')
            }
            
            )   

               setMostrarTabla(true);           
        };
    return (
        <div>
         <h2 className='py-2 text-gray-800 font-black mb-4 text-center'>Creacion de Productos</h2>
        <form ref={form} onSubmit={submitForm} className='grid grid-cols-1 justify-center'>
    
           <label  htmlFor="fabricante" className='text-gray-800 font-extrabold'>
               Fabricante
            <input 
             name='company'   
             type="text" 
             className='appearance-none px-24  border  border-gray-400 rounded-md py-2 ml-6 text-gray-800 text-center focus:outline-none' 
             placeholder='Nombre del fabricante'
             required
            
             />
            </label>
            
            <label htmlFor="nombreProducto" className='text-gray-800 font-extrabold '>
                Producto
            <input  
            name='nameProduct'
            type="text" 
            className='appearance-none px-24 mt-4 border border-gray-400 rounded-md py-2 ml-8 text-gray-800 text-center focus:outline-none' 
            placeholder='Nombre del Producto'
            required
            
            />
            
            </label>

            <label htmlFor="garantia" className='text-gray-800 font-extrabold '> 
            Garantia 
            <input 
            name='warranty'
            type="text" 
            className='appearance-none px-24 mt-4 border border-gray-400 rounded-md py-2 ml-9 text-gray-800 text-center  focus:outline-none' 
            placeholder='Garantia del producto'
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

export default Productos
