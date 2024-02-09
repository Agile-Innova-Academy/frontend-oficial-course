import React from 'react'
import { array } from '../helpers/data'
import useForm from '../Hooks/useForm'

function CreateName() {

const [dataForm, handleOnChange, reset] = useForm({
    nombre: "",
    apellido: "",
    email: ""
})

    const handleSubmit =(e)=>{
        e.preventDefault()
       console.log("entre a submit", dataForm)
       reset()
        // array.push({nombre: nombre})
    }

 
   console.log("Resultado", array);
  return (
    <div>
        <form onSubmit={handleSubmit}>
              <input id="nombre" name='name' placeholder='Ingrese el nombre' onChange={handleOnChange} />
              <input id="apellido" name='apellido' placeholder='Ingrese el Apellido' onChange={handleOnChange} />
              <input id="email" name='email' placeholder='Ingrese el email' onChange={handleOnChange} /> 
              <button type='submit' >Guardar</button>
        </form>
  
    </div>
  )
}

export default CreateName
