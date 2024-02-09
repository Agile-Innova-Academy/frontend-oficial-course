import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";

const siderStyle = {
  backgroundColor: "#000",
};
const siderStyle2 = {
  marginTop: "40px",
  textAlign: "center",
  lineHeight: "100px",
  color: "#fff",
  backgroundColor: "#000",
};
const Sidebar = () => {
  return (
    <Sider width="15%" style={siderStyle}>
      <Menu mode="vertical" style={siderStyle2} defaultSelectedKeys={["1"]}>
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
      </Menu>
    </Sider>
  );
};

export default Sidebar;
