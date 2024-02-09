import { useState } from "react";

const useForm = ({ initialState = {} }) => {
  const [dataForm, setDataForm] = useState({ initialState });

  const handleOnChange = ({ target }) => {
       setDataForm({ ...dataForm, [target.name]: target.value});
  };

  const handleOnChangeSelect =(e)=>{
    setDataForm({
        ...dataForm,
        type: e
    })

  }
  const reset = () => {
    setDataForm(initialState);
  };
  const handleChangeImagen = (url) =>
    setDataForm({
      ...dataForm,
      imagen: url,
    }); 
  return [
    dataForm,
    handleOnChange,
    handleOnChangeSelect,
    handleChangeImagen,
    reset,
  ];
};

export default useForm;
