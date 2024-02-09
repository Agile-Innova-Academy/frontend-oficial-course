import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthsContext'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {state} = useContext(AuthContext)
    // Si la persona esta logeada correctamente
    // dar permisos para que peuda ver todo Dashboard
  return (
    state.logged ? children : <Navigate to="/login"/>
  )
}

export default PrivateRouter
