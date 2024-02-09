import React, { useState } from 'react'
import { UserContext } from '../1-context/UserContext'
import App from '../../Router/App'

const MainContext = () => {
// -1 Indicar cuales serán los estados globales, y lo debo inicializar
const [user, setUser]= useState({
    name: "Yudith",
    email: "yudith@gmail.com",
    password: "12345678"
})

console.log("estoy en el Main", user)

//2- Indicar a quien quiero Proveer y que valor le quiero enviar
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
    {/* App es mi router principal  */}
        <App/>
      </UserContext.Provider>
    </div>
  )
}

export default MainContext
