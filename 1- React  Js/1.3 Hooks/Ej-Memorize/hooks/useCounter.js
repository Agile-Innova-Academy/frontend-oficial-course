import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(5);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return { counter, handleIncrement, handleReset, handleDecrement };
};
