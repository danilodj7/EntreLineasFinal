import { nanoid } from 'nanoid'
import React from 'react'
import { useState,useEffect, useRef } from 'react'
import { crearVenta } from 'utils/api'
import { obtenerProductos } from 'utils/api'
import { obtenerUsuarios } from 'utils/api'



const Ventas = () => {
     const  form = useRef(null);
     const [vendedores, setVendedores] = useState([])
     const [productos,setProductos] =useState([])
     const [productosSeleccionados,setProductosSeleccionados]=useState([])

     useEffect(() => {
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
     
     
     

     
  return (
       <div className="flex h-full w-full  items-center justify-center ">
       
        <form ref={form} onSubmit={submitForm} className='flex flex-col '>
        <h1 className="text-3xl font-extrabold text-gray-800 m-2">Crear una nueva venta</h1>
             <label className='flex flex-col' htmlFor='vendedor'>
                  <span className='text-2xl font-gray-900'>Vendedor</span>
             <select name="vendedor" className='p-2' defaultValue={-1}>
                  <option disabled value={-1} >
                       Seleccione un vendedor
                  </option>
                  {vendedores.map((el)=>{
                     return <option key={nanoid()} value={el._id} >
                          {`${el.code}${el.name} ${el.lastName} ${el.email} ${el.idCard} ${el.phone}`}
                          </option>;
                      })}
             </select>
             </label>

                      <div className="flex flex-col">
                           <span>seleccion de productos</span>
                           <button 
                           onClick={()=>agregarNuevoProducto()}
                           className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600' 
                           >
                              Agregar nuevo producto
                           </button>
                      </div>

                         {
                              productosSeleccionados.map((DropdownProducto,index)=>{
                                   
                                   return(
                                        <div>
                                   <DropdownProducto key ={nanoid()} productos ={productos} nombre ={`producto_${index}`}/>
                                   <button className="flex">Eliminar</button>
                                   </div>
                                   )
                              })
                         }
             
             <label htmlFor="valor total" className='flex flex-col'>
                      <span className='text-2xl font-gray-900'>Valor total</span>
                      <input 
                      type="number"  
                      name="valor" 
                      className='bg-gray-100 border border-gray-600 p-2 rounded-lg m-2'
                     
                       />
             </label>
             <button type="submit" className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>Crear Venta</button>
        </form>
        </div>
   )
}
     const DropdownProductos=({productos,nombre})=>{
          return(
           <label className='flex flex-col' htmlFor='Producto'>
           <span className='text-2xl font-gray-900'>Producto</span>
           <select name={nombre} className='p-2' defaultValue={-1}>
           <option disabled value={-1} >
               Seleccione un producto
           </option>
           {productos.map((el)=>{
             return <option key={nanoid()} value={el._id} >{`${el.company} ${el.nameProduct} ${el.warranty}`}</option>;
              })}
           </select>
           </label>)
          }



export default Ventas  
