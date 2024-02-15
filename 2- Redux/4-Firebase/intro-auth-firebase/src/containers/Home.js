import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.loginStore);
  console.log(user);
  return <div className="divLogin">Estoy en Home</div>;
};

export default Home;
