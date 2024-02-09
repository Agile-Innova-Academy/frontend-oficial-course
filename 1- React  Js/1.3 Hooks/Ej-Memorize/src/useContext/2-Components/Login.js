import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../1-context/UserContext";

const Login = () => {
  // Quiero traerme mi estado global de Usuario
  const { user, setUser} = useContext(UserContext);
console.log("llego al Login", user)
  return (
    <div>
      <Button
        onClick={() =>
          setUser({
            name: "Sebastian",
            email: "santiago@gmail.com",
            password: "12345678",
          })
        }
      >
        Login
      </Button>
      {JSON.stringify(user)}
    </div>
  );
};

export default Login;
