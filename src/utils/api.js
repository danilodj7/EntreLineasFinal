import axios from "axios";

const getToken =()=>{
    return `Bearer ${localStorage.getItem('token')}`

}

export const obtenerUsuarios = async(successCallback,errorCallback)=>{
    const options ={
        method: 'GET', 
        url: 'http://localhost:5000/usuarios/',
        headers:{
            Authorization:getToken(),
        }
    };
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const crearUsuarios = async(data, successCallback,errorCallback)=>{
    const options ={
        
            method: 'POST',
            url:'http://localhost:5000/usuarios/',
            headers: { 'Content-Type': 'application/json',Authorization:getToken() },
            data
        
    }
    await axios.request(options).then(successCallback).catch(errorCallback);

}


export const editarUsuarios = async (id,data,successCallback,errorCallback)=>{
    const options ={
            method: 'PATCH',
            url: `http://localhost:5000/usuarios/${id}/`,
            headers: { 'Content-Type': 'application/json',Authorization:getToken() },
            data,
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}


export const eliminarUsuarios = async (id,successCallback,errorCallback)=>{

    const options ={
        method: 'DELETE',
        url:`http://localhost:5000/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization:getToken() }
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}

///////////////////////////----------------------------------------------

export const obtenerProductos = async(successCallback,errorCallback)=>{
    const options ={
    method: 'GET',
     url: 'http://localhost:5000/productos/',
     headers: {Authorization:getToken()}
    };
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const crearProductos = async(data, successCallback,errorCallback)=>{
    const options ={
        
            method: 'POST',
            url:'http://localhost:5000/productos/',
            headers: { 'Content-Type': 'application/json',Authorization:getToken() },
            data
        
    }
    await axios.request(options).then(successCallback).catch(errorCallback);

}


export const editarProductos = async (id,data,successCallback,errorCallback)=>{
    const options ={
            method: 'PATCH',
            url: `http://localhost:5000/productos/${id}/`,
            headers: { 'Content-Type': 'application/json',Authorization:getToken() },
            data,
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}


export const eliminarProductos = async (id,successCallback,errorCallback)=>{

    const options ={
        method: 'DELETE',
        url:`http://localhost:5000/productos/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization:getToken() }
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}


//////////////////////////////////////////////////////-----------------

export const crearVenta = async(data, successCallback,errorCallback)=>{
    const options ={
        
        method: 'POST',
        url:'http://localhost:5000/ventas/',
        headers: { 'Content-Type': 'application/json',Authorization:getToken() }, //Estoy enviando informacion en formato Json
        data
    
}
await axios.request(options).then(successCallback).catch(errorCallback);
}
