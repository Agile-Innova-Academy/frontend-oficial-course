import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthsContext";
import { actionLogout } from "../useReducer/action/actionsUser";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#000",
};

const headerStyle2 = {
  display: "flex",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#000",
};

const NavBar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    console.log("Adios");
    dispatch(actionLogout());
    navigate("/login");
  };

  return (
    <Header style={headerStyle2}>
      <Menu mode="horizontal" style={headerStyle} defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/" style={{ margin: "5px" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/add" style={{ margin: "5px" }}>
            Add
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/edit" style={{ margin: "5px" }}>
            Edit
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/counter" style={{ margin: "5px" }}>
            Counter
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <button onClick={handleLogout}>Logout</button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
