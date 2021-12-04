import React from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { registerUserAuth } from "../../../redux/auth/action";
// HOOKS
import { useNavigateAuthenticatedUser } from "../../../hooks/useNavigateAuthenticatedUser";
import RegisterForm from "../../../components/RegisterForm";
import "./style.css";

export function RegisterPage() {

  const {loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useNavigateAuthenticatedUser();

  const handleRegisterSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };
   dispatch(registerUserAuth(body))
  };

  return (
    <RegisterForm
      handleRegisterSubmit={handleRegisterSubmit}
      loading={loading}
    />
  );
}
