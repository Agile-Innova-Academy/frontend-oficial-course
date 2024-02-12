import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionLogoutSyn } from "../redux/actions/actionsLogin";
import { Link } from "react-router-dom";

const Navbars = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Ejemplo Redux</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add">Add</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/list">List</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                variant="outline-success"
                onClick={() => dispatch(actionLogoutSyn())}
              >
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
