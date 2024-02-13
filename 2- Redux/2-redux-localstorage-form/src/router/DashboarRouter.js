import React from "react";
import Navbars from "../componets/Navbars";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Add from "../componets/Add";
import List from "../componets/List";

const DashboarRouter = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
};

export default DashboarRouter;
