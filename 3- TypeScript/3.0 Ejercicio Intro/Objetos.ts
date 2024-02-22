(()=>{
    let flash : {
        name: string,        
        powers: string[],
        age?: number,
        getNombre?: ()=> string
    }
    flash={
          name: "Clactk Kent",        
        powers: ["Super Fuerza"],
        age: 60,
        getNombre(){return this.name}
    }
    console.log("El objeto es flash", flash)

    // -----------------Tipos Personalizados--------------------------------
    
})()