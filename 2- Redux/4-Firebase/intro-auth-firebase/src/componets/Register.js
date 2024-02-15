import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { actionRegisterAsync } from "../redux/actions/actionsRegisteruser";

const Register = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    pass: "",
  });

  const { email, pass, name } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dentro del submit", email, pass, name);
    dispatch(actionRegisterAsync(email, pass, name));
    reset();
  };
  return (
    <div className="divLogin">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextname">
          <Form.Label>Nombre y Apellido</Form.Label>

          <Form.Control
            placeholder="Ana Perez"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
          />
        </Form.Group>
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
          Registrar
        </Button>
        <Button variant="outline-success" style={{ margin: "10px" }}>
          <Link to="/login">Login</Link>
        </Button>
      </Form>
    </div>
  );
};

export default Register;
