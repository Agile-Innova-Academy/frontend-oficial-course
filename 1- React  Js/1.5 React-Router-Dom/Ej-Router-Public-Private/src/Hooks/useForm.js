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
  const handleUpload = (url) => {
    setDataForm({
      ...dataForm,
      imagen: url,
    });
    
  };
  return [dataForm, handleOnChange, handleOnChangeSelect, handleUpload];
};

export default useForm;
