import React from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loginUserAuth } from "../../../redux/auth/action";
// HOOKS
import { useNavigateAuthenticatedUser } from "../../../hooks/useNavigateAuthenticatedUser";
// RENDER && Style
import LoginForm from "../../../components/LoginForm";
import "./style.css";

export function LoginPage () {
  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.auth)
  
  useNavigateAuthenticatedUser();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    const body = { email, password};
    dispatch(loginUserAuth(body))
  };

  

  return <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />;
}
