import { types } from "./type";

const loginUserAuth = (values) => {
  return { type: types.USER_LOGIN, payload: values };
};

const registerUserAuth = (values) => {
  return { type: types.USER_REGISTER, payload: values };
};

const logoutUser = () => {
  return { type: types.USER_LOGOUT };
};

export { loginUserAuth, registerUserAuth, logoutUser };
 