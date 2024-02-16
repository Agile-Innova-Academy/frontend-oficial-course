import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { actionGoogle, actionLoginAsyn } from "../redux/actions/actionsLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionLoginAsyn(email, pass));
    reset();
  };
  return (
    <div className="divLogin">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="user_email@email.com"
              name="email"
              value={formValue.email}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              name="pass"
              value={formValue.pass}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Button type="submit" style={{ margin: "10px" }}>
          Login
        </Button>
        <Button
          onClick={() => dispatch(actionGoogle())}
          style={{ margin: "10px" }}
        >
          Google
        </Button>
      </Form>
      <Button size="lg" variant="outline-warning" style={{ margin: "10px" }}>
        <Link to="/register">Usuario Nuevo / Registrar</Link>
      </Button>
    </div>
  );
};

export default Login;
