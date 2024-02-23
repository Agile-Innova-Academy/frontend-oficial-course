import React from "react";
import useForm from "../hooks/useForm";

const Formulario = () => {
  const { reset, handleChange, formValues } = useForm({
    user: "",
    pass: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
    reset();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Usuario</h3>
        <input
          type="string"
          name="user"
          placeholder="Ingrese un usuario"
          value={formValues.user}
          onChange={handleChange}
        />
        <h3>Contarseña</h3>
        <input
          type="string"
          name="pass"
          placeholder="Ingrese un número"
          value={formValues.pass}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Formulario;
