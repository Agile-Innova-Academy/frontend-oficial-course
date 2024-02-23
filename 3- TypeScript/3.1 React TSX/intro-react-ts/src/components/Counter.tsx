import React, { useState } from "react";

interface CounterState {
  count: number;
}
const Counter = () => {
  const [state, setState] = useState<CounterState>({ count: 0 });
  const [num, setNum] = useState<number>(0);

  const incremet = () => {
    setState({ count: state.count + 1 });
  };
  const decremet = () => {
    setState({ count: state.count - 1 });
  };

  const handleNum = (e: any): void => {
    e.preventDefault();
    let numer: number = parseInt(e.target.value);
    console.log(typeof numer, numer);
    setNum(numer);
  };

  const IncreNum = (numero: number = num) => {
    setState({ count: state.count + num });
  };
  const DecreNum = (numero: number = num) => {
    setState({ count: state.count - num });
  };

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <input
        type="number"
        name="numero"
        placeholder="Ingrese un número"
        onChange={handleNum}
      />
      <button onClick={() => IncreNum()}>Incrementar {num}</button>
      <button onClick={incremet}>Incrementar</button>
      <button onClick={decremet}>Decrementar</button>
      <button onClick={() => DecreNum()}>Decrementar {num}</button>
    </div>
  );
};

export default Counter;
