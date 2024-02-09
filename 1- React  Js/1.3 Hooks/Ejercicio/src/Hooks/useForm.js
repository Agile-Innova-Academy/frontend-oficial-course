import { useState } from "react";

export default function useForm({ initialState = {} }) {
  const [dataForm, setDataForm] = useState({ initialState });

  const handleOnChange = ({ target }) => {
    console.log("entre a handle", target.value);
    setDataForm(target.value);
  };
  const reset = () => {
    setDataForm({ initialState });
  };
  return [dataForm, handleOnChange, reset];
}
