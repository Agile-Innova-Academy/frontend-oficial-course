import React, { useState } from "react";
import Times from "./Times";

const TimesPadre = () => {
  const [miliSeg, setMiliSeg] = useState<number>(500);
  return (
    <div>
      {" "}
      <h1>Estoy en Times Padre</h1>
      <h3> Milisegundos: {miliSeg} </h3>
      <button onClick={() => setMiliSeg(1000)}>1 seg</button>
      <button onClick={() => setMiliSeg(2000)}>2 seg</button>
      <Times milisegundos={miliSeg} />
    </div>
  );
};

export default TimesPadre;
