import React from "react";
import RegisterForm from "../../../components/RegisterForm";
import "./style.css";

export function RegisterPage() {
  const handleRegisterSubmit = (values) => {
    console.log(values);
  };
  return <RegisterForm handleRegisterSubmit={handleRegisterSubmit} />;
}
