"use strict";
(() => {
    let Empleado = {
        nombre: "yudith",
        doc: "123645",
        pasatiempos: ["leer", "yoga"],
        cargo: "Desarrollador",
        estudiante: false,
        edad: 36
    };
    let Estudiante = {
        nombre: "Santiago",
        doc: "123645",
        pasatiempos: ["leer", "yoga"],
        cargo: "Desarrollador",
        estudiante: true,
        edad: 20,
        getNombre() {
            return this.nombre;
        },
    };
    console.log(Empleado, Estudiante);
    Estudiante = {
        nombre: "David",
        doc: "123645",
        pasatiempos: ["leer", "yoga"],
        cargo: "Desarrollador",
        estudiante: true,
        edad: 20,
        getNombre() {
            return this.nombre;
        },
    };
    console.log("Nuevo", Estudiante);
    let deportivo;
    deportivo = 120;
    deportivo = {
        marca: "toyota",
        modelo: "asdasf",
        placa: "HGF123",
        año: 2023
    };
    //------------------Funciones---------------------
    function returnMarca() {
        return "Marca";
    }
    function returnMarca2() {
        console.log("Marca");
    }
    const returnActivo = () => {
        return "Activo";
    };
    returnActivo();
    console.log(typeof returnActivo);
})();
(() => {
    let num = 3;
    let name = "yudith";
    console.log(typeof num, num);
    console.log(typeof name, name);
    //---------------objetos--------
    let persona = {
        nombre: "yudith",
        doc: "123645",
        pasatiempos: ["leer", "yoga"],
        edad: 36,
        getNombre() {
            return this.nombre;
        }
    };
    console.log(persona);
})();
//# sourceMappingURL=main.js.map