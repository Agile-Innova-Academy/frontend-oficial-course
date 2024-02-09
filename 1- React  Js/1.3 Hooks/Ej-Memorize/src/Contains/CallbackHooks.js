import React, { useCallback, useContext, useState } from 'react'
import CallbackIncrement from '../Components/CallbackIncrement';
import { UserContext } from '../useContext/1-context/UserContext';

const CallbackHooks = () => {
  const [counter, setCounter] = useState(7);

  //===============Usar Contex Global===============================//
  // Quiero traerme mi estado global de Usuario
  const { user, setUser } = useContext(UserContext);


  //Funcion que quiero pasar por el callaback
  // const incrementar =(num)=>{
  //     setCounter(counter + num)
  // }

  const incrementar = useCallback((num) => {
    setCounter((c) => c + num);
    //===============Usar Contex Global===============================//
   setUser({
     name: "En Callback",
     email: "aprendiendoMemorize@gmail.com",
     password: "12345678",
   });
  }, []);

  return (
    <div>
      <h1>UseCallback: {counter} </h1>
      <h1>User: {JSON.stringify(user)} </h1>
      <CallbackIncrement increment={incrementar} />
    </div>
  );
}

export default CallbackHooks
