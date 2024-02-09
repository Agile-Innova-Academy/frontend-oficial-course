import { typesUser } from "../types/types";

export const actionLogin = (payload) => {
  console.log("Dentro del Payload", payload);
  return {
    type: typesUser.login,
    payload,
  };
};

export const actionLogout = () => {
  return {
    type: typesUser.logout,
  };
};
