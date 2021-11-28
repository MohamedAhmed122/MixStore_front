import React, { useEffect, useState } from "react";
import { registerUser } from "../../../api/requests/users";
import RegisterForm from "../../../components/RegisterForm";

import { toast } from "react-toastify";

import "./style.css";
import { errorHandlers } from "../../../utils/errorHandlers";
import { useHistory } from "react-router";

export function RegisterPage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //-------------------------------POST--DELETE--PUT-----------------------------------
  // 1- OnClick  OR Handle
  // 2-  Loading & DISABLED button
  // 3-  error & try again

  const handleRegisterSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };

    setLoading(true);
    registerUser(body)
      .then((res) => {
        setUser(res);
        toast.success("Welcome, in Juicy Store");
      })
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user.name) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <RegisterForm
      handleRegisterSubmit={handleRegisterSubmit}
      loading={loading}
    />
  );
}
