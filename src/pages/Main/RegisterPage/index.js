import React, { useState } from "react";
// REDUX
import { useDispatch } from "react-redux";
import { registerUserAuth } from "../../../redux/auth/action";
//  REQ
import { registerUser } from "../../../api/requests/users";
// HOOKS
import { useNavigateAuthenticatedUser } from "../../../hooks/useNavigateAuthenticatedUser";
// UTILS
import { errorHandlers } from "../../../utils/errorHandlers";
// RENDER && STYLES
import RegisterForm from "../../../components/RegisterForm";
import "./style.css";

export function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useNavigateAuthenticatedUser();

  const handleRegisterSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };
    setLoading(true);
    registerUser(body)
      .then((res) => dispatch(registerUserAuth(res)))
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));
  };

  return (
    <RegisterForm
      handleRegisterSubmit={handleRegisterSubmit}
      loading={loading}
    />
  );
}
