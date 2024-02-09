import { Input, Select } from "antd";
import React from "react";
import useForm from "../Hooks/useForm";
import { uploadFile } from "../helpers/uploadFile";
import axios from "axios";
import { url } from "../helpers/url";
import { ContDiv, FormStyle } from "../Styles/styles";

function Registrar() {
  const [ dataForm,
    handleOnChange,
    handleChangeSelect,
    handleChangeImagen,
    handleChangeCode,
    reset] = useForm({
    nombre: "",
    tipoDoc: "",
    numDocumento: "",
    celular: "",
    imagen: "",
    code: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    let obj = {
      id: Math.floor(Math.random() * 100),
      nombre: dataForm.nombre,
      tipoDoc: dataForm.tipoDoc,
      numDocumento:  dataForm.numDocumento,
      celular: `${dataForm.code}-${dataForm.celular}`,
      imagen: dataForm.imagen
    }
    const resp = await axios.post(url, obj)
    console.log(resp)

    reset();
  };

const handleUpload = (e) => {
  const file = e.target.files[0]
  uploadFile(file)
 .then(resp => handleChangeImagen(resp))

}
  return (
    <ContDiv>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          name="nombre"
          onChange={handleOnChange}
          value={dataForm.nombre}
          placeholder="Ingrese Nombre Y Apellido"
        />
       
          <Select
            name="tipoDoc"
            defaultValue="Elegir"
            style={{ width: 120 }}
            onChange={handleChangeSelect}
            options={[
              { value: "C.C", label: "C.C" },
              { value: "C.E", label: "C.E" },
              { value: "T.I", label: "T.I" },
            ]}
          />
          <Input
            name="numDocumento"
            onChange={handleOnChange}
            value={dataForm.numDocumento}
            placeholder="Ingrese número de documento"
          />    
       
          <Select
            name="cel"
            defaultValue="Elegir"
            style={{ width: 120 }}
            onChange={handleChangeCode}
            options={[
              { value: "+57", label: "+57" },
              { value: "+58", label: "+58" },
              { value: "+54", label: "+54" },
            ]}
          />
          <Input
            name="celular"
            onChange={handleOnChange}
            value={dataForm.celular}
            placeholder="Ingrese número de celular"
            type="number"
          />
    
        <input type="file" name="imagen"  onChange={handleUpload}/>
        <button type="submit" >
          Guardar
        </button>
      </FormStyle>
    </ContDiv>
  );
}

export default Registrar;
