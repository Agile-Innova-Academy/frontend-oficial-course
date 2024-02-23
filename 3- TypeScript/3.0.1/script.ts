(()=>{
    let num: number = 3
    let name: string= "yudith"
    console.log(typeof num, num)
        console.log(typeof name, name)

        //---------------objetos--------

        let persona : {nombre: string, doc: string, pasatiempos: string[], edad?: number, getNombre?: ()=> string} = {
            nombre: "yudith",
            doc: "123645",
            pasatiempos: ["leer", "yoga"],
            edad: 36,
            getNombre(){
                return this.nombre
            }
        }

        console.log(persona)
})()