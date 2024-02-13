import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { actionLoginSyn } from "../redux/actions/actionsLogin";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionLoginSyn(email, pass));
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

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
