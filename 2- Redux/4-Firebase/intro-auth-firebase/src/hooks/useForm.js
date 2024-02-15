import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValue({ ...formValue, [target.name]: target.value });
  };
  const reset =()=>{
    setFormValue(initialState)
  }
  return [formValue, handleInputChange, reset]
};

export default useForm;
