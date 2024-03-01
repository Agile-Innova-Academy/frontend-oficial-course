import React, { useState } from "react";

const Welcome = ({ name }) => {
  const [state, setState] = useState(name);
  const [color, setColor] = useState("blue");
  return (
    <div>
      <article title={`Welcome! ${state}`} style={{ backgroundColor: color }}>
        {" "}
        Welcome! {state}
      </article>

      <button
        onClick={() => {
          setState("Otro Nombre");
        }}
      >
        Cambiar Nombre
      </button>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Cambiar Color
      </button>
    </div>
  );
};

export default Welcome;
