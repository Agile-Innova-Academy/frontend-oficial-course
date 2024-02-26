import React from "react";
import Counter from "./components/Counter";
import Formulario from "./components/Formulario";
import TimesPadre from "./components/TimesPadre";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>¡Typescripts Bienvenidos!</h1>
      <h2>Componente Login</h2>
      <Login />
      <h2>Componente Contador</h2>
      <Counter />
      <h2>Componente Formulario</h2>
      <Formulario />
      <h2>Componente Times- UseEffect</h2>
      <TimesPadre />
    </div>
  );
}

export default App;
