import { render, screen } from "@testing-library/react";
import { getSaludo, getUser, isLoggedIn, usuario } from "../../components/TiposDatos";
import App from "../../App";

describe("Realizar Pruebas a Tipos de Datos", () => {
  //------- Boolean
  test("Comprobar que isLoggedIn es una variable Autorizada", () => {
    // datos
    const autenticar = isLoggedIn;

    // -- comparación
    if (autenticar) {
      console.log("Usuario AUtorizado");
    } else {
      throw new Error("Usuario No autorizado");
    }
  });

  //------- String
  test ("Validar el nombre de Usuario string", ()=>{    
    const validarUser = "Yudith"
    console.log(usuario)
    expect(usuario).not.toBe(validarUser)
    //expect(usuario).toBe(validarUser);
  })


  //--------------Función

  test("Validar La función Saludo", ()=>{
    const nombre = "Melani"
    const saludo = getSaludo(nombre)

    expect(saludo).toBe(`Hola ${nombre}, Bienvenido!`);
    expect(saludo).not.toBe(`Hola ${nombre}`);
    expect(saludo).toContain(nombre)
    expect(saludo).toContain("Bienvenido!");
    expect(saludo).toContain("Me");
    expect(saludo).not.toContain("Yu");
    expect(typeof nombre).toBe("string")
  })

  test("Validar una función que retorna un objeto", ()=>{
    console.log(getUser())
    expect(getUser()).not.toEqual({
      email: "yudithLeon@gmail.com",
      pass: "123456",
    });
        expect(getUser()).toEqual({
          email: "yudith@gmail.com",
          pass: "1223456",
        });

  })
});


test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});