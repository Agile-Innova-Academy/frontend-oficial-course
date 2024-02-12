import { typesLogin } from "../types/types";

export const actionLoginSyn = (email, pass) => {
  return {
    type: typesLogin.login,
    payload: { email, pass },
  };
};

export const actionLogoutSyn = () => {
  return {
    type: typesLogin.logout,
  };
};
