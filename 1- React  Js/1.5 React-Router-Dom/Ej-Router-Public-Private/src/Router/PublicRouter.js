import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthsContext";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
  const { state } = useContext(AuthContext);

  //  return state.logged ? <Navigate to="/*"/>: children
  return !state.logged ? children : <Navigate to="/*" />;
};

export default PublicRouter;
