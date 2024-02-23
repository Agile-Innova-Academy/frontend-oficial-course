import React from "react";
import Counter from "./components/Counter";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <h1>¡Typescripts Bienvenidos!</h1>
      <h2>Componente Contador</h2>
      <Counter />
      <h2>Componente Formulario</h2>
      <Formulario />
    </div>
  );
}

export default App;
