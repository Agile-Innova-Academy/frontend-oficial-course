import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../useContext/1-context/UserContext";

const NavBarsC = () => {
  //===============Usar Contex Global===============================//
  // Quiero traerme mi estado global de Usuario
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap: {user.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home- memo</Link>
              <Link to="/hooks">useMemo</Link>
              <Link to="/calls">useCallback</Link>
              <Link to="/ejemplo">Ejercicio Ind</Link>
              <Link to="/login">Login</Link>
              <Link to="/logout">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarsC;
