//===================Boolean===============

import { user } from "../data/data"

export const isLoggedIn = true

//================String===============

export const usuario = "Cotrafa-S"

//============Objeto==============

export const getUser = () =>{
    return {
        email: "yudith@gmail.com",
        pass: "1223456"
    }
}

//=========Función==========
export const getSaludo = (nombre)=>{
    return `Hola ${nombre}, Bienvenido!`
}

//============Array Objeto==============ç
export const usuarioRegistrados = (id)=>{
    return user.find(u => u.id=== id)
}

//==========Promesa==============
export const getPromise = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const usuario = usuarioRegistrados(id)
            if(usuario){
                resolve(usuario)
            }else{
                reject(`No se encontro el usuario con el id: ${id}`)
            }
        }, 2000);
    })
}


//======== Api - Async  await===========

export const getImg = async ()=>{
try{
     const apiKey = "RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu";
     const resp = await fetch(
       `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
     );
     const {data} = await resp.json()

     console.log(data, data.images.original.mp4);
     return data.images.original.mp4;

}
catch(error){
    console.log(error);
    return error
}
}