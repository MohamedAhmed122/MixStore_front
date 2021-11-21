import React from "react";
import LoginForm from "../../../components/LoginForm";
import "./style.css";

export function LoginPage() {

  const handleLoginSubmit = (values) =>{
    console.log(values)
  }
  

  return <LoginForm handleLoginSubmit={handleLoginSubmit} />;
}
