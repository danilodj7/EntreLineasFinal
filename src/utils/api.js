import axios from "axios";

export const obtenerUsuarios = async(successCallback,errorCallback)=>{
    const options ={method: 'GET', url: 'http://localhost:5000/usuarios/' };
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const crearUsuarios = async(data, successCallback,errorCallback)=>{
    const options ={
        
            method: 'POST',
            url:'http://localhost:5000/usuarios/',
            headers: { 'Content-Type': 'application/json' },
            data
        
    }
    await axios.request(options).then(successCallback).catch(errorCallback);

}


export const editarUsuarios = async (id,data,successCallback,errorCallback)=>{
    const options ={
            method: 'PATCH',
            url: `http://localhost:5000/usuarios/${id}/`,
            headers: { 'Content-Type': 'application/json' },
            data,
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}


export const eliminarUsuarios = async (id,successCallback,errorCallback)=>{

    const options ={
        method: 'DELETE',
        url:`http://localhost:5000/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json' }
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}

///////////////////////////----------------------------------------------

export const obtenerProductos = async(successCallback,errorCallback)=>{
    const options ={method: 'GET', url: 'http://localhost:5000/productos/' };
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const crearProductos = async(data, successCallback,errorCallback)=>{
    const options ={
        
            method: 'POST',
            url:'http://localhost:5000/productos/',
            headers: { 'Content-Type': 'application/json' },
            data
        
    }
    await axios.request(options).then(successCallback).catch(errorCallback);

}


export const editarProductos = async (id,data,successCallback,errorCallback)=>{
    const options ={
            method: 'PATCH',
            url: `http://localhost:5000/productos/${id}/`,
            headers: { 'Content-Type': 'application/json' },
            data,
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}


export const eliminarProductos = async (id,successCallback,errorCallback)=>{

    const options ={
        method: 'DELETE',
        url:`http://localhost:5000/productos/${id}/`,
        headers: { 'Content-Type': 'application/json' }
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}


