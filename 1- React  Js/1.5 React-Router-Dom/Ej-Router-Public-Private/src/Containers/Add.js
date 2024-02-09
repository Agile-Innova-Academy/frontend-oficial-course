import { Alert, Input, Select } from "antd";
import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import { DivForm, FormStyled } from "../Styles/Styled";
import uploadFile from "../helpers/uploadFile";
import { PostData } from "../Peticiones/actions";
import { url } from "../helpers/url";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [activeImg, setActiveImg] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);
  const navigate = useNavigate()
  const [dataForm, handleOnChange, handleOnChangeSelect, handleUpload] =
    useForm({
      title: "",
      year: "",
      description: "",
      imagen: "",
      type: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Estamos en el Submit", dataForm);
    let obj = {
      id: Math.floor(Math.random() * 200),
      Title: dataForm.title,
      Year: dataForm.year,
      Poster: dataForm.imagen,
      Type: dataForm.type      
    };
   const response = await PostData(url, obj)
   console.log(response)
   if( response.status === 200 || response.status === 201  ){
       setActiveAlert(true)
       setTimeout(() => {
        navigate("/")
       }, 2000);
   }

  };

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    uploadFile(file).then((response) => {
      handleUpload(response);
      setActiveImg(response);
    });
  };

  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name="title"
          onChange={handleOnChange}
          value={dataForm.title}
          placeholder="Title"
        />
        <Input
          name="year"
          onChange={handleOnChange}
          value={dataForm.year}
          placeholder="Year"
        />
        <Input
          name="description"
          onChange={handleOnChange}
          value={dataForm.description}
          placeholder="Description"
        />
        <Select
          name="type"
          defaultValue="Select"
          onChange={handleOnChangeSelect}
          options={[
            { value: "Movie", label: "Movie" },
            { value: "Serie", label: "Serie" },
            { value: "Documental", label: "Documentalas" },
            { value: "Infantil", label: "Infantil" },
            { value: "Adulto", label: "Adulto" },
          ]}
        />
        <input type="file" name="imagen" onChange={handleUploadFile} />
        {activeImg !== false && (
          <img
            src={activeImg}
            alt=""
            style={{
              width: 50,
            }}
          />
        )}
        <button disabled={activeImg === false} type="submit">
          Guardar
        </button>
      </FormStyled>
      {activeAlert  && (
        <Alert
          message="Se Guardo Exitosamente"
          description="La Película se ha guardo muy bien.."
          type="success"
          showIcon
        />
      )}
    </DivForm>
  );
};

export default Add;
