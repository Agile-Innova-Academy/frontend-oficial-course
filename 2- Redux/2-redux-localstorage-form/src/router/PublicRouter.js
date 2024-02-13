import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ isAutentication, children }) => {
  return !isAutentication ? children : <Navigate to="/*" />;
};

export default PublicRouter;
