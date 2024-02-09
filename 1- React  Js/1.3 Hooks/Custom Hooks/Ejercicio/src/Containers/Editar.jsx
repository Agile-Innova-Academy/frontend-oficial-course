import React from 'react'
import { ContDiv, FormStyle } from '../Styles/styles'
import { Input, Select } from 'antd'
import useForm from '../Hooks/useForm'
import { uploadFile } from '../helpers/uploadFile'
import { url } from '../helpers/url'
import axios from 'axios'

const Editar = ({data, handleCancel}) => {

    const [ dataForm,
    handleOnChange,
    handleChangeSelect,
    handleChangeImagen,
    handleChangeCode,
    reset] = useForm({
    nombre: data?.nombre,
    tipoDoc: data?.tipoDoc,
    numDocumento: data?.numDocumento,
    celular: data?.celular,
    imagen: data?.imagen    
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    let obj = {
    //   id: data.id,
      nombre: dataForm.nombre !== undefined ? dataForm.nombre :data?.nombre,
      tipoDoc: dataForm.tipoDoc !== undefined ? dataForm.tipoDoc : data?.tipoDoc,
      numDocumento:  dataForm.numDocumento !== undefined ? dataForm.numDocumento  : data?.numDocumento,
      celular: dataForm.celular !== undefined ? `${dataForm.code}-${dataForm.celular}` : data?.celular,
      imagen: dataForm.imagen !== undefined ? dataForm.imagen: data?.imagen 
    }
    
   
     const resp = await axios.patch(`${url}/${data?.id}`, obj)
     console.log("ONSUBMIT", resp)
     // eslint-disable-next-line no-unused-expressions
     handleCancel
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
           defaultValue= {data?.nombre}
          onChange={handleOnChange}
          value={dataForm.nombre}
         
        />
       
          <Select
            name="tipoDoc"
            defaultValue= {data?.tipoDoc}
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
            defaultValue= {data?.numDocumento}
          />    
       
          <Select
            name="cel"
            defaultValue= {data?.celular.substr(0, 3)}
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
            defaultValue= {data?.celular.substr(4, data?.celular.length)}          
            onChange={handleOnChange}
            value={dataForm.celular}           
           
          />
   
        <img src={data?.imagen} alt="" style={{ width: "80px" }} />
         <input type="file" name="imagen"  onChange={handleUpload}/>
        <button type="submit" >
          Guardar
        </button>
      </FormStyle>
    </ContDiv>
  )
}

export default Editar