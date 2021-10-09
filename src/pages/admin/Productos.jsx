import React , {useEffect, useState}  from 'react'

const Productos = () => {
    
    const [valorDeProducto,setValorDeProducto] =useState(0);
    const [sinDescuento,setSinDescuento]= useState(false);
    
    useEffect(()=>{
        if(valorDeProducto >70000){
            setSinDescuento(false)
            
        }else{
            setSinDescuento(true)
        }
    },[valorDeProducto])
    

    const enviarDatosAlBackend =(e)=>{
        console.log('El valor del producto es',valorDeProducto)
    };  

   
    return (
        <form className='flex flex-col justify-center'>
            <h2 className='py-2 text-gray-100 font-extrabold mb-4 text-center'>Formulario Creación de Productos</h2>
             <input  type="text" className='appearance-none px-20  border  border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Codigo del producto'/>
            <input  type="text" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Nombre del producto'/>
            <input type="text" className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none' placeholder='Marca del Producto'/>

            <input value={valorDeProducto} 
            onChange={(e)=>{setValorDeProducto(e.target.value)}} 
            type="number" placeholder='Valor del producto' className='appearance-none px-20 mt-4 border border-gray-400 rounded-md py-2 focus:outline-none'/>

            <button type='button' onClick={enviarDatosAlBackend} className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>Enviar Datos</button>
            
          
            {sinDescuento ? (
                    <span className='text-red-600 text-3xl mt-4'>Usted no recibio descuento</span>
           
                ):(
                <span className='text-green-600 text-3xl mt-4'>Usted recibio descuento</span>
                )}
               
            
        </form>
    )
}

export default Productos
