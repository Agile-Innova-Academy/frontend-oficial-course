import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../componets/Login";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import DashboarRouter from "./DashboarRouter";
import { useSelector } from "react-redux";

const App = () => {
  const loginStore = useSelector((store) => store.loginStore);
  const [user, setuser] = useState(false);

  useEffect(() => {
    if (
      loginStore.email === "luzda@yopmail.com" &&
      loginStore.pass === "123456"
    ) {
      setuser(true);
    } else {
      setuser(false);
    }
  }, [loginStore]);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAutentication={user}>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter isAutentication={user}>
              <DashboarRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
