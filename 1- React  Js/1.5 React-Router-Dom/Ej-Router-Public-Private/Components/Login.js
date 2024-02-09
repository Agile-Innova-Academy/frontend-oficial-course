import React, { useContext } from "react";
import { DivForm, FormStyled } from "../Styles/Styled";
import { Input } from "antd";
import useForm from "../Hooks/useForm";
import { actionLogin } from "../useReducer/action/actionsUser";
import { AuthContext } from "../Context/AuthsContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const [dataForm, handleOnChange] = useForm({
    title: "",
    year: "",
    description: "",
    imagen: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 200),
      email: dataForm.email,
      pass: dataForm.pass,
    };
    console.log("listo: ", obj);
    if (
      dataForm.email === "yudithkleon@yopmail.com" &&
      dataForm.pass === "123456"
    ) {
      localStorage.setItem("user", JSON.stringify(obj));
      dispatch(actionLogin(obj));
     
    } else {
       console.log("no se puede logear no eres usuario administrador... Adios")
    }
    


  };
  return (
    <div>
      <DivForm>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            name="email"
            onChange={handleOnChange}
            value={dataForm.email}
            placeholder="Email"
          />
          <Input
            name="pass"
            onChange={handleOnChange}
            value={dataForm.pass}
            placeholder="Password"
          />

          <button type="submit">Login</button>
        </FormStyled>
      </DivForm>
    </div>
  );
};

export default Login;
