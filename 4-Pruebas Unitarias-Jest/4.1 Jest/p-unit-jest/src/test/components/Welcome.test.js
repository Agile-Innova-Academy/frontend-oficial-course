import { fireEvent, render, screen } from "@testing-library/react";
import Welcome from "../../components/Welcome";

describe("Componente Welcome", () => {
  test("Validar que se enceuntre el Bienvenido", () => {
    render(<Welcome />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });

  test("Validar que se encuentre el Bienvenido Nombre", () => {
    const nombre = "yudith";
    render(<Welcome name={nombre} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(screen.getByText(`Welcome! ${nombre}`)).toBeInTheDocument();
  });

  //-----------button------------------------
  test("Cambiar el Nombre con un Click", () => {
    const nombre = "Santiago";
    render(<Welcome name={nombre} />);
    const button = screen.getByRole("button", { name: "Cambiar Nombre" });
    fireEvent.click(button);
    const otro = "Otro Nombre";
    expect(screen.getByText(`Welcome! ${otro}`)).toBeInTheDocument();
  });

  test("Cambiar el Color con un Click", () => {
    const nombre = "Santiago";
    render(<Welcome name={nombre} />);
    const button = screen.getByRole("button", { name: "Cambiar Color" });
    fireEvent.click(button);
    const text = screen.getByRole('article', {name: `Welcome! ${nombre}`})
    expect(text).toHaveStyle({ backgroundColor: "red" });
  });
});
