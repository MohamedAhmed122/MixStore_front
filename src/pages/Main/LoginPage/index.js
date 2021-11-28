import React, { useEffect, useState } from "react";
import { loginUser } from "../../../api/requests/users";
import { toast } from "react-toastify";
import { errorHandlers } from "../../../utils/errorHandlers";
import { useHistory } from "react-router";
import LoginForm from "../../../components/LoginForm";
import "./style.css";

export function LoginPage() {
  const [user, setUser] = useState({ user: "email" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    const body = {
      email,
      password,
    };

    setLoading(true);
    loginUser(body)
      .then((res) => {
        setUser(res);
        toast.success("Welcome To Mix Store ");
      })
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));

    // try {
    //   setUser(body);
    //   toast.success("Welcome, in Juicy Store");
    // } catch (error) {
    //   errorHandlers(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    if (user._id) {
      history.push("/");
    }
  }, [user, history]);

  return <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />;
}
