import React, { ChangeEvent, useState } from 'react'
//------interface del formulario
interface FormState {
    [key: string]: string
}

//------interface del custom hook
interface FormUse {
    formValues: FormState;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    reset: ()=>void
}

// Creación del hook
const useForm = (initialState: FormState): FormUse => {
  // inicialaizacion del estado del formulario 
    const [formValues, setFormValues]= useState<FormState>(initialState)
    
   // función que me maneja los cambios en los cmapos del formualrio 
const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
  const {name, value}= e.target
  setFormValues({...formValues, [name]: value})
}
// restablecemos los campos en vacios
    const reset =()=>{
      setFormValues(initialState)
    }
// devolvemos
  return {
    reset,
    handleChange,
    formValues
  }
}

export default useForm