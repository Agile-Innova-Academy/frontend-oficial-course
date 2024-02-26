import React, { useEffect, useState } from "react";

interface TimesA {
  milisegundos: number;
}
const Times = (milisegundos: TimesA) => {
  const [seg, setSeg] = useState<number | string>("");

  useEffect(() => {
    console.log("Dentro de Times UseEffect", milisegundos?.milisegundos);
    setSeg(milisegundos.milisegundos);
  }, [milisegundos]);

  return (
    <div>
      <h1>El Times es: {seg}</h1>
    </div>
  );
};

export default Times;
