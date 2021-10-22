import React from 'react'
import { useState,useEffect } from 'react'
import { obtenerUsuarios } from 'utils/api'


const Ventas = () => {
     const [vendedor, setVendedores] = useState([])
     const [producto,setproducto] =useState([])
     
     
     useEffect(() => {
          const fetchVendedores = async()=>{
               await obtenerUsuarios(
                    (response)=>{
                         setVendedores(response.data)
                    },
                    (error)=>{console.error(error)}
                    )
          }

          const fetchProductos = async () =>{
               
          }
         
          fetchVendedores()
          fetchProductos()
          
     }, [])


  return (
       <div>
        <form className='flex flex-col'>
             <label className='flex flex-col' htmlFor='vendedor'>
                  <span className='text-2xl font-gray-900'>Vendedor</span>
             <select name="vendedor" className='p-2' defaultValue={-1}>
                  <option disabled value={-1} >
                       Seleccione un vendedor
                  </option>
                  {vendedor.map((el)=>{
                     return <option value={el._id} >{`${el.name} ${el.lastName}`}</option>;
                      })}
             </select>
             </label>
        </form>
        </div>
   )
}

export default Ventas  
