import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import Small from "../Components/Small";
import { useCounter } from "../hooks/useCounter";
import { procesoPesado } from "../helpers/procesoPesado";

const MemorizaUseMemo = () => {
  const { counter, handleIncrement, handleReset, handleDecrement } =
    useCounter();
  const [state, setState] = useState(false);

 // const resultProcesoPesado = procesoPesado(550);
const resultProcesoPesado = useMemo(
  () => procesoPesado(500),[]);
  
  return (
    <div>
      <h1>Proceso Pesado:{resultProcesoPesado}</h1>
      <h1>
        Número: <Small valor={counter} />
      </h1>
      <Button variant="primary" onClick={() => handleDecrement()}>
        -1
      </Button>{" "}
      <Button variant="secondary" onClick={() => handleReset()}>
        Reset
      </Button>{" "}
      <Button variant="success" onClick={() => handleIncrement()}>
        +1
      </Button>{" "}
      <Button
        variant="danger"
        onClick={() => {
          setState(!state);
        }}
      >
        Verdadero/Falso {JSON.stringify(state)}
      </Button>
    </div>
  );
};

export default MemorizaUseMemo;
