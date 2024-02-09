import React, { useCallback, useState } from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const [valor, setValor] = useState(0);

  const num = [2, 4, 6, 8, 10];

//   const incrementar = (n) => {
//     console.log("estoy incrementando");
//     setValor(valor + n);
//   };


    const incrementar = useCallback((n) => {
      console.log("estoy incrementando");
      setValor(v=> v + n);
    }, [setValor]);

  return (
    <div>
      Soy el Componente Padre : {valor}
      {num?.map((value) => (
        <Hijo key={value} n={value} incrementar={incrementar} />
      ))}
    </div>
  );
};

export default Padre;
