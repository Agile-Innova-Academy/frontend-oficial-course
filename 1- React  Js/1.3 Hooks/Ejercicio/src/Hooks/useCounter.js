import { useState } from "react";

function useCounter(value) {

  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    console.log("En cero");
    setCount(0);
  };
  
  const handleSubtract = () => {
    setCount(count - 1);
  };

  return {
    count, handleAdd, handleReset, handleSubtract
  };
}

export default useCounter;
