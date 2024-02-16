import { typesLogin } from "../types/types";

const loginReducer = (state = {}, action) => {
  switch (action.type) {

    case typesLogin.login:
      console.log(action.payload.email);
      return {
        email: action.payload.email,
        pass: action.payload.pass,
      };

 // Opcional no es necesario ya que se registra una solo vez y se guarda en Firebase
    case typesLogin.register:
      console.log(action.payload.email);
      return {
        email: action.payload.email,
        pass: action.payload.pass,
        name: action.payload.name,
      };

    case typesLogin.logout:
      return {
        email: null,
        pass: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
