import React, { useState } from "react";

// Crear el Prototipado desde una interfce
interface Usuario {
  uid: string;
  displayName: string;
  email: string;
}
//Inicializarlo
const userLogeed: Usuario = {
  uid: "14555",
  displayName: "Yudith Leon",
  email: "yudith@gmail.com",
};

const Login = () => {
  const [user, setUser] = useState(userLogeed);

  const handlelogin = (): void => {
    setUser({
      uid: "123456",
      displayName: "Prueba de Cotrafa",
      email: "prueba1@gmail.com",
    });
  };

  return (
    <div>
      Debe Inicializar la Sesión
      <button onClick={() => handlelogin()}>Login</button>
      {!user ? (
        <pre> No está Autorizado {JSON.stringify(setUser(userLogeed))}</pre>
      ) : (
        <pre> Bienvenido {JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default Login;
