(()=>{
      // -----------------Tipos Personalizados--------------------------------
    type Hero = {
        name: string,        
        powers: string[],
        age?: number,
        getNombre?: ()=> string
    }
   let  flash: Hero ={
          name: "Clactk Kent",        
        powers: ["Super Fuerza"],
        age: 60,      
    }
    console.log("El objeto Personalizado es flash de Hero", flash)

   let  superman: Hero ={
          name: "Clactk Kent",        
        powers: ["Super Fuerza"],
        age: 50,  
       getNombre(){return this.name}    
    }
    console.log("El objeto Personalizado es Superman de Hero", superman)
  
    
})()