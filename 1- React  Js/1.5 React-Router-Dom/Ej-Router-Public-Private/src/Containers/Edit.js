import { Alert, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import useForm from "../Hooks/useForm";
import { DivForm, FormStyled } from "../Styles/Styled";
import uploadFile from "../helpers/uploadFile";
import { GetData, PatchData, PostData } from "../Peticiones/actions";
import { url } from "../helpers/url";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [activeImg, setActiveImg] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);
  const [state, setState] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function movie() {
      const resp = await GetData(`${url}/${id}`);
      console.log(resp);
      setState(resp);
    }
    movie();
  }, [id]);

  const [dataForm, handleOnChange, handleOnChangeSelect, handleUpload] =
    useForm({
      Title: state?.Title,
      year: "",
      description: "",
      imagen: "",
      type: state?.Type,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Estamos en el Submit", dataForm);

    let obj = {
      Title: dataForm.Title !== undefined ? dataForm.Title : state?.Title,
      Year: dataForm.year !== undefined ? dataForm.year : state?.Year,
      Poster: dataForm.imagen !== undefined ? dataForm.imagen : state?.Poster,
      Type: dataForm.type !== undefined ? dataForm.type : state?.Type,
    };

    const response = await PatchData(`${url}/${state?.id}`, obj);
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      setActiveAlert(true);
      setTimeout(() => {
        navigate("/");
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
          name="Title"
          defaultValue={state?.Title}
          onChange={handleOnChange}
          value={dataForm.Title}
        />
        <Input
          name="year"
          defaultValue={state?.Year}
          onChange={handleOnChange}
          value={dataForm.year}
        />
        <Input
          name="description"
          defaultValue={state?.Description}
          onChange={handleOnChange}
          value={dataForm.description}
        />
        <Select
          name="type"
          defaultValue={state?.Type}
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
        <button type="submit">Guardar</button>
      </FormStyled>
      {activeAlert && (
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

export default Edit;
