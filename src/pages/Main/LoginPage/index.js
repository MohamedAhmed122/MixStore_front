import React, { useState } from "react";
// REDUX
import { useDispatch } from "react-redux";
import { loginUserAuth } from "../../../redux/auth/action";
// HOOKS
import { useNavigateAuthenticatedUser } from "../../../hooks/useNavigateAuthenticatedUser";
// REQ
import { logInUser } from "../../../api/requests/users";
// UTILS
import { errorHandlers } from "../../../utils/errorHandlers";
// RENDER && Style
import LoginForm from "../../../components/LoginForm";
import "./style.css";

export function LoginPage () {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  useNavigateAuthenticatedUser();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    const body = { email, password };

    authUser(body);
  };

  const authUser = async (body) => {
    setLoading(true);
    try {
      const userValues = await logInUser(body);
      await dispatch(loginUserAuth(userValues));
    } catch (error) {
      errorHandlers(error);
    } finally {
      setLoading(false);
    }
  };

  return <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />;
}
