import { nanoid } from 'nanoid'
import React from 'react'
import { useState,useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { crearVenta } from 'utils/api'
import { obtenerProductos } from 'utils/api'
import { obtenerUsuarios } from 'utils/api'



const Ventas = () => {
     const  form = useRef(null);
     const [vendedores, setVendedores] = useState([])
     const [productos,setProductos] =useState([])
     const [productosTabla, setProductosTabla]  =useState([])

     useEffect(() => {
       //pide los productos a la base de datos
          const fetchVendores = async () => {
            await obtenerUsuarios(
              (response) => {
                setVendedores(response.data);
              },
              (error) => {
                console.error(error);
              }
            );
          };
          const fetchProductos = async () => {
            await obtenerProductos(
              (response) => {
                setProductos(response.data);
              },
              (error) => {
                console.error(error);
              }
            );
          };
      
          fetchVendores();
          fetchProductos();
        }, []);
     //en el submitform queda guardado ta bla de productos la informacion
        const submitForm = async (e) => {
               e.preventDefault();
               const fd = new FormData(form.current);
      
          const formData = {};
               fd.forEach((value, key) => {
                formData[key] = value;
          });
      
               console.log('form data', formData);
      
          const listaProductos = Object.keys(formData)
               .map((k) => {
                if (k.includes('producto')) {
                return productosTabla.filter((v) => v._id === formData[k])[0];
                   }
                return null;
             })
                .filter((v) => v);
      
          const datosVenta = {
            vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
            cantidad: formData.valor,
            productos: listaProductos,
          };
      
          await crearVenta(
            datosVenta,
            (response) => {
              console.log(response);
              toast.success('Venta creada con exito')
            },
            (error) => {
              console.error(error);
              toast.error('Error crear venta')
            });
        };
     

     
  return (
     <div className='flex h-full w-full items-center justify-center'>
       
       <form ref={form} onSubmit={submitForm} className='flex flex-col h-full'>
        <h1 className="text-3xl font-extrabold text-gray-800 m-2">Crear una nueva venta</h1>
             <label className='flex flex-col' htmlFor='vendedor'>
                  <span className='text-2xl font-gray-900'>Vendedor</span>
             <select name="vendedor" className='p-2 mt-4' defaultValue='' required>
                  <option disabled value='' >
                       Seleccione un vendedor
                  </option>
                  {vendedores.map((el)=>{
                     return <option key={nanoid()} value={el._id} >{`${el.name} ${el.lastName}`}</option>;
                      })}
             </select>
             </label>
      
      <TablaProductos
          productos={productos}
          setProductos={setProductos}
          setProductosTabla={setProductosTabla}
        />
        <label className='flex flex-col'>
          <span className='text-2xl font-gray-900'>Valor Total Venta</span>
          <input
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            name='valor'
            required
          />
        </label>
        <button
          type='submit'
          className='col-span-2 bg-green-500 p-2 rounded-md shadow-md hover:bg-green-600 text-white'
         >
          Crear Venta
        </button>
        </form>
        <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
        
   )
}
   
const TablaProductos =({productos, setProductos, setProductosTabla})=>{
     
     const [productoAAgregar, setProductoAAgregar] = useState({});
     const [filasTabla, setFilasTabla] = useState([]);
    
       useEffect(() => {
          setProductosTabla(filasTabla);
      }, [filasTabla, setProductosTabla]);
      
     const agregarNuevoProducto = () => {
          setFilasTabla([...filasTabla, productoAAgregar]);
          setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
          setProductoAAgregar({});
        };
      
      const eliminarProducto = (productoAEliminar) => {
           setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
           setProductos([...productos, productoAEliminar]);
        };
      
     const modificarProducto = (producto, cantidad) => {
          setFilasTabla(
            filasTabla.map((ft) => {
              if (ft._id === producto.id) {
                ft.cantidad = cantidad;
                ft.total = producto.valor * cantidad;
              }
              return ft;
            }));
          };
      
        return (
          <div>
          <div className='flex '>
           <label className='flex flex-col' htmlFor='producto'>
               <select
               className='p-2 mt-4'
               value={productoAAgregar._id ?? ''}
                   onChange={(e) =>
                    setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])
                  }
                >
                  <option disabled value='' >
                    Seleccione un Producto
                  </option>
                  {productos.map((el) => {
                    return (
                      <option
                        key={nanoid()}
                        value={el._id}
                      >{`${el.company} ${el.nameProduct} ${el.warranty}`}</option>
                    );
                  })}
                </select>
              </label>
              <button
                type='button'
                onClick={() => agregarNuevoProducto()}
                className='col-span-2 bg-green-500 p-2 rounded-md shadow-md ml-16 mt-4 hover:bg-green-600 text-white'
              >
                Agregar Producto
              </button>
            </div>
            <table className='tabla mt-4 text-gray-100 text-base '>
              <thead  >
               <tr classsName='text-gray-100'>
               <th>Id</th>
               <th>Fabricante</th>
               <th>Nombre</th>
               <th>Garantia</th>
              
              
               <th>Eliminar</th>
                   <th className='hidden'>Input</th>
                </tr>
              </thead>
              <tbody>
                {filasTabla.map((el, index) => {
                  return (
                    <FilaProducto
                      key={el._id}
                      veh={el}
                      index={index}
                      eliminarProducto={eliminarProducto}
                      modificarProducto={modificarProducto}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        );
}

const FilaProducto = ({ veh, index, eliminarProducto, modificarProducto }) => {
     const [producto, setProducto] = useState(veh);
     useEffect(() => {
       console.log('veh', producto);
     }, [producto]);
     return (
       <tr  className='bg-gray-700'>
         <td>{producto._id}</td>
         <td>{producto.company}</td>
         <td>{producto.nameProduct}</td>
         <td>{producto.warranty}</td>
         
         
         <td>
           <i
             onClick={() => eliminarProducto(producto)}
             className='fas fa-minus text-red-600 cursor-pointer'
           />
         </td>
         <td className='hidden'>
           <input hidden defaultValue={producto._id} name={`producto_${index}`} />
         </td>
       </tr>
     );
   };

export default Ventas  
