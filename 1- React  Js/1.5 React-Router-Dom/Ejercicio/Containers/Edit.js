import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { uploadFile } from "../helpers/uploadFile";
import { ContDiv, FormStyle } from "../Styles/styles";
import { Alert, Button, Input, Select, Space } from "antd";

const Edit = () => {
  const [
    dataForm,
    handleOnChange,
    handleOnChangeSelect,
    handleChangeImagen,
    reset,
  ] = useForm({
    title: "",
    year: "",
    description: "",
    imagen: "",
    type: "",
    value: "",
  });
  const [activate, setActivate] = useState(false);
  const [actUploadImg, setActUploadImg] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  

  console.log(params);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      Title: dataForm.title,
      Year: dataForm.year,
      Value: dataForm.value,
      Description: dataForm.description,
      Type: dataForm.type,
      Poster: dataForm.imagen,
    };
    // const resp = await EditData(url, obj);
    // console.log(resp);
    // if (resp === 201 || resp === 200) {
    //   setTimeout(() => {
    //     reset();
    //     setActivate(true);
    //   }, 2000);
    //   navigate("/");
    // }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    uploadFile(file).then((resp) => {
      handleChangeImagen(resp);
      console.log(resp);
      setActUploadImg(resp);
    });
  };
  return (
    <ContDiv>
      <h1 style={{ color: "black" }}>Editar Película</h1>

      <FormStyle onSubmit={handleSubmit}>
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
        <input type="file" name="imagen" onChange={handleUpload} />
        {actUploadImg !== false && (
          <img
            src={actUploadImg}
            alt=""
            style={{
              width: 50,
            }}
          />
        )}
        <button type="submit">Guardar</button>
      </FormStyle>
      {activate && (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Alert
            message="Movie Guardado existosamente"
            description="LaPelícula se guardo y se agregoa  la api de forma correcta"
            type="success"
            showIcon
            action={
              <Button size="small" type="text">
                X
              </Button>
            }
            closable
          />
        </Space>
      )}
    </ContDiv>
  );
};

export default Edit;
