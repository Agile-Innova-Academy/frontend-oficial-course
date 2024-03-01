import { render, screen } from "@testing-library/react";
import {
  getImg,
  getPromise,
  getSaludo,
  getUser,
  isLoggedIn,
  usuario,
  usuarioRegistrados,
} from "../../components/TiposDatos";
import App from "../../App";
import { user } from "../../data/data";
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
  test("Validar el nombre de Usuario string", () => {
    const validarUser = "Yudith";
    console.log(usuario);
    expect(usuario).not.toBe(validarUser);
    //expect(usuario).toBe(validarUser);
  });

  //--------------Función--------------//

  test("Validar La función Saludo", () => {
    const nombre = "Melani";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}, Bienvenido!`);
    expect(saludo).not.toBe(`Hola ${nombre}`);
    expect(saludo).toContain(nombre);
    expect(saludo).toContain("Bienvenido!");
    expect(saludo).toContain("Me");
    expect(saludo).not.toContain("Yu");
    expect(typeof nombre).toBe("string");
  });

  //-------------Objetos-------------//
  test("Validar una función que retorna un objeto", () => {
    console.log(getUser());
    expect(getUser()).not.toEqual({
      email: "yudithLeon@gmail.com",
      pass: "123456",
    });
    expect(getUser()).toEqual({
      email: "yudith@gmail.com",
      pass: "1223456",
    });
  });

  //--------------Array de Objetos-------------//
  test("Validar el retorno de  usuario partiendo de un id", () => {
    let id = 4;
    // Información desde el Componente - Entrada
    const usuarioFilter = usuarioRegistrados(id);
    console.log(usuarioFilter);

    // Salida a Comparar
    const userComparar = user.find((u) => u.id === 2);
    console.log(userComparar);

    //   expect(usuarioFilter).toEqual(userComparar);
    expect(usuarioFilter).not.toEqual(userComparar);
    expect(usuarioFilter).toEqual(user[3]);

    // Validar si el usuario existe
    id = 8;
    const usuarioFilter2 = usuarioRegistrados(id);
    expect(usuarioFilter2).toEqual(undefined);
  });

  //-------------Promesas---------//
  test("Que se cargue el usuario correctamente partiendo de un id", (done) => {
    let id = 5;

    // Salida a Comparar
    const userComparar = user.find((u) => u.id === id);
    console.log(userComparar);

    getPromise(id).then((res) => {
      expect(res).toEqual(userComparar);
      done();
    });
  });

  //-----------Api- Async Await--------//
  test("Validar que el retorno corresponda a una imagen del tipo https", async () => {
    const url = await getImg()
    console.log(url)

    expect(typeof url).toBe("string")
    expect(url.includes("https://")).toBe(true)
    expect(url.includes("https://")).not.toBe(false);

  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
