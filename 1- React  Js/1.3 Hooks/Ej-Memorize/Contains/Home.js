import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useCounter } from "../hooks/useCounter";
import Small from "../Components/Small";

const Home = () => {
  //Llamando y desestructurando al custom Hook useCounter

  const { counter, handleIncrement, handleReset, handleDecrement } =
    useCounter();
 const [state, setState] = useState(false);
  const num = [1, 2, 3, 4];
  const [data, setdata] = useState();
 

  useEffect(() => {
    setdata(num);
  }, []);

  // console.log(num);

  //LLamada a las funciones con solo JS
  //   const handleIncrement = (n1) => {
  //     const suma = n1 + 1;
  //     console.log("Incrementa: ", suma);
  //     //  return suma;
  //   };
  //   const handleDecrement = (n1) => {
  //     const restar = n1;
  //     console.log("Decrementa: ", restar);
  //     //  return restar;
  //   };
  //   const handleReset = () => {
  //     const num = 0;
  //     console.log("Reiniciar: ", num);
  //     // return num;
  //  };

  return (
    <div>
      {data?.map((n) => (
        <h1 key={n}>{n}</h1>
      ))}

      <div>
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
    </div>
  );
};

export default Home;
