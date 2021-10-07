import React , {useEffect, useState}  from 'react'

const Productos = () => {
    
    const [codigoProducto,setCodigoProducto] =useState('');
    
    
    useEffect(()=>{
        console.log('Hola soy unuseEffect que se inicia una vez solamnete porque el array esta vacio')
    },[]);

    const cambioDeNombre =(e)=>{
        console.log(e.target.value);
    };

    const enviarDatosAlBackend =(e)=>{
        console.log('El valor del codigo del producto es',codigoProducto)
    };  

    useEffect(()=>{
        console.log("huy se cambio la variable socio")
    },[codigoProducto])

    return (
        <form className='flex flex-col'>
            <h2>Formulario de Creación de Productos</h2>

             <input onChange={(e)=>{
                setCodigoProducto(e.target.value);
             }} 
             type="text" placeholder='Codigo del producto'/>


            <input onChange={cambioDeNombre} type="text" placeholder='Nombre del producto'/>
            <input type="text" placeholder='Marca del Producto'/>
            <input type="number" placeholder='Valor'/>
            <button type='button' onClick={enviarDatosAlBackend} className='mt-4 bg-green-500 px-36  rounded-md py-2 hover:bg-green-600'>Enviar Datos</button>
            
        </form>
    )
}

export default Productos
