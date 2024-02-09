import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";

import Login from "../Components/Login";
import { useReducer } from "react";
import AuthReducer from "../useReducer/reducers/AuthReducer";
import { AuthContext } from "../Context/AuthsContext";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import DashboardRouter from "./DashboardRouter";

const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  height: "100%",
  color: "#000",
  backgroundColor: "#E5E8E8 ",
};

const init = () => {
  return JSON.parse(localStorage.getItem("user") || { logged: false });
};
function App() {
  const [state, dispatch] = useReducer(AuthReducer, {}, init);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Flex gap="middle" wrap="wrap">
          <Content style={contentStyle}>
            <Routes>
              <Route
                path="/login"
                element={
                  <PublicRouter>
                    <Login />
                  </PublicRouter>
                }
              />             

              <Route
                path="/*"
                element={
                  <PrivateRouter>
                    <DashboardRouter />
                  </PrivateRouter>
                }
              />
            </Routes>
          </Content>
        </Flex>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
