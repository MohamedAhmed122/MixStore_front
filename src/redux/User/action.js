import { type } from "./type";

const handleLoginSubmit = (values) => {
  return { type: type.LOGIN, payload: values };
};

const handleRegisterSubmit = (values) => {
  return { type: type.REGISTER, payload: values };
};

export { handleLoginSubmit, handleRegisterSubmit };
