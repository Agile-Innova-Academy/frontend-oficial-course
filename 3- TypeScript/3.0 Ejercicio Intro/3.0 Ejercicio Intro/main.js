"use strict";
(() => {
    let flash;
    flash = {
        name: "Clactk Kent",
        powers: ["Super Fuerza"],
        age: 60,
        getNombre() { return this.name; }
    };
    console.log("El objeto es flash", flash);
})();
(() => {
    let num = 3;
    let num2 = 4;
    const suma = num + num2;
    console.log(suma);
})();
(() => {
    var batman = "Batman";
    var linternaVerde = "Linterna Verde";
    console.log("Datos String: ", batman, linternaVerde);
    var avengers = 10;
    var villians = 15;
    if (avengers > villians) {
        console.log("Estamos en problemas, son más villanos");
    }
    else {
        console.log("Nos salvamos. Ganaremos!");
    }
    let open = true;
    let tienda = open ? true : false;
    console.log("La tienda esta: ", tienda);
})();
(() => {
    let flash = {
        name: "Clactk Kent",
        powers: ["Super Fuerza"],
        age: 60,
    };
    console.log("El objeto Personalizado es flash de Hero", flash);
    let superman = {
        name: "Clactk Kent",
        powers: ["Super Fuerza"],
        age: 50,
        getNombre() { return this.name; }
    };
    console.log("El objeto Personalizado es Superman de Hero", superman);
})();
//# sourceMappingURL=main.js.map