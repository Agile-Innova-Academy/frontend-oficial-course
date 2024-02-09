import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  height: "100%",
  color: "#fff",
  backgroundColor: "black",
};
const Sidebar = () => {
  return (
    <Sider width="15%" style={siderStyle}>
      <Menu mode="vertical" defaultSelectedKeys={["1"]} style={siderStyle}>
        <Menu.Item key="1">
          {" "}
          <Link style={{ margin: "10px" }} to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link style={{ margin: "10px" }} to="/add">
            Add
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          {" "}
          <Link style={{ margin: "10px" }} to="/edit">
            Edit
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
