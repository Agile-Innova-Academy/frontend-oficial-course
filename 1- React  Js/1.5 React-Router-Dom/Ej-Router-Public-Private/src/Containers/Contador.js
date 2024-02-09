import React, { useReducer, useState } from "react";
import { DivForm } from "../Styles/Styled";

// ======================Use Reducer==================================//
// =====================Inicializaciones=================================//

//  =========Initial===================
const initialArg = 2;
//  ============Init==================

const init = (initialArg) => {
  return initialArg * 10;
};

//  ==========Type====================

const TYPES = {
  SUMAR_1: "SUMAR_1",
  SUMAR_3: "SUMAR_3",
  RESET: "RESET",
  RESTA_1: "RESTAR_1",
  RESTAR_3: "RESTAR_3",
};
//  ============Action==================
const actionSumar_1 = (payload) => {
  return {
    type: TYPES.SUMAR_1,
    payload,
  };
};

const actionSumar_3 = (payload) => {
  return {
    type: TYPES.SUMAR_3,
    payload,
  };
};

const actionReset = () => {
  return {
    type: TYPES.RESET,
  };
};
const actionRestar_3 = () => {
  return {
    type: TYPES.RESTAR_3,
  };
};

const actionRestar_1 = () => {
  return {
    type: TYPES.RESTA_1,
  };
};
//  =============Reducer=================

function reducer(state, action) {
  switch (action.type) {
    case TYPES.SUMAR_1:
      return state + action.payload;
    case TYPES.SUMAR_3:
      return state + action.payload;
    case TYPES.RESTA_1:
      return state - 1;
    case TYPES.RESTAR_3:
      return state - 3;
    case TYPES.RESET:
      return initialArg;
    default:
      return state;
  }
}

const Contador = () => {
  //const [contador, setContador] = useState(2);
  const [state, dispatch] = useReducer(reducer, initialArg, init);

  //   const sumar1 = () => {
  //     //  setContador(contador + 1);
  //     console.log("sumar 1");
  //   };
  //   const sumar3 = () => {
  //     //  setContador(contador + 3);
  //     console.log("sumar 3");
  //   };
  //   const reset = () => {
  //     // setContador(0);
  //     console.log("reset");
  //   };
  //   const restar1 = () => {
  //     //  setContador(contador - 1);
  //     console.log("restar 1");
  //   };
  //   const restar3 = () => {
  //     //   setContador(contador - 3);
  //     console.log("restar 3");
  //   };

  return (
    <div>
      <h1>Use Reducer - Contador</h1>
      <DivForm>
        <h2>{state}</h2>
        {/* <button onClick={sumar3}>3</button>
        <button onClick={sumar1}>1</button>
        <button onClick={reset}>0</button>
        <button onClick={restar1}>-1</button>
        <button onClick={restar3}>-3</button> */}

        <button onClick={() => dispatch(actionSumar_3(10))}>3</button>
        <button onClick={() => dispatch(actionSumar_1(5))}>1</button>
        <button onClick={() => dispatch(actionReset())}>0</button>
        <button onClick={() => dispatch(actionRestar_1())}>-1</button>
        <button onClick={() => dispatch(actionRestar_3())}>-3</button>
      </DivForm>
    </div>
  );
};

export default Contador;
