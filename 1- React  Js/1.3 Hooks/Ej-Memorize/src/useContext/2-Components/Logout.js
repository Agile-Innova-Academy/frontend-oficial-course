import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from '../1-context/UserContext';

const Logout = () => {
    // Quiero traerme mi estado global de Usuario
    const {user, setUser} = useContext(UserContext)

  return (
    <div>
      <Button onClick={
        ()=> 
       setUser({ 
           name: "Adios",
           email: "vuelvePronto@gmail.com",
           password: "xxxxxxxxxx"
          })
      }>Logout
      </Button>
      {JSON.stringify(user)}
    </div>
  );
}

export default Logout
