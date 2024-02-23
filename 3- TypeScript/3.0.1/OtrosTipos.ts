(() => {
  //--------------------Personalizando los tipos de Datos------------------------
  type persona = {
    nombre: string,
    doc: string,
    pasatiempos: string[],
    cargo: String,
    estudiante: Boolean,
    edad?: number,
    getNombre?: () => string,
  };

  let Empleado: persona = {
    nombre: "yudith",
    doc: "123645",
    pasatiempos: ["leer", "yoga"],
    cargo: "Desarrollador",
    estudiante: false,
    edad: 36  
  };
  
    let Estudiante: persona = {
    nombre: "Santiago",
    doc: "123645",
    pasatiempos: ["leer", "yoga"],
    cargo: "Desarrollador",
    estudiante: true,
    edad: 20,
    getNombre() {
      return this.nombre
    },  
  };

  console.log(Empleado, Estudiante)

   Estudiante = {
    nombre: "David",
    doc: "123645",
    pasatiempos: ["leer", "yoga"],
    cargo: "Desarrollador",
    estudiante: true,
    edad: 20,
    getNombre() {
      return this.nombre
    },  
  };
    console.log("Nuevo",  Estudiante)
  //-------------------datos Multiples------------------------

  type auto = {
    marca: string,
    modelo: string,
    placa: string,  
    año?: number,
  };

  let deportivo : string | number | auto
  deportivo= 120
  
  deportivo = {
    marca: "toyota",
    modelo: "asdasf",
    placa: "HGF123",
    año: 2023
  }

    //------------------Funciones---------------------
    function returnMarca(): string {
      return "Marca"
      
    }

       function returnMarca2(): void {
      console.log( "Marca")
      
    }

    const returnActivo =()=>{
      return "Activo"
    }

   returnActivo()
console.log(typeof returnActivo)


    //-----------------Interface-------------------
      interface Hero {
    name: string,
    powers: string[],
    age?: number,
  };

  let flash: Hero ={
      name: "Flash",
    powers: ["Super Velocidad", "Viajar en el tiempo"],
    age: 24,
  }

  let superman : Hero ={
        name: "SuperMan",
    powers: ["Super Fuerza"]
  
  }
})();
