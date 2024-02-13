import React from "react";
import Counter from "../componets/Counter";
import { useSelector } from "react-redux";

const Home = () => {
  const { count } = useSelector((store) => store.counterReducers);
  return (
    <div>
      Hola! Contador desde el Home: {count}
      <Counter />
    </div>
  );
};

export default Home;
