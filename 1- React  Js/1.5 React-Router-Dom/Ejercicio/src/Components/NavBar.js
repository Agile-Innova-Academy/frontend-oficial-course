import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Header>
      <Link style={{ margin: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "10px" }} to="/add">
        Add
      </Link>
      <Link style={{ margin: "10px" }} to="/edit">
        Edit
      </Link>
    </Header>
  );
}

export default NavBar