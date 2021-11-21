import React from "react";
import Input from "../../../commons/Input";
import Button from "../../../commons/Button";
import "./style.css";

export function LoginPage() {
  return (
    <div className="display_login_page">
      <div className="logIn_form_page">
        <form>
          <h1> logIn </h1>
          <Input
            border="1px solid #000"
            className="Input_Register_page"
            backgroundColor="#fff"
            width="400px"
            height="17px"
            placeholder="first Name"
            type="text"
            margin="10px"
          />
          <Input
            border="1px solid #000"
            className="Input_Register_page"
            backgroundColor="#fff"
            width="400px"
            height="17px"
            placeholder="first Name"
            type="text"
            margin="10px"
          />
          <Button
            type="submit"
            text="LogIn"
            color="#fff"
            marginTop={"40px"}
            margin="10px"
          />
        </form>
      </div>
      <img
        className="img_item_login_page"
        src="https://bakerbynature.com/wp-content/uploads/2015/03/IMG_8342-2.jpg"
        alt="imageItem"
      />
    </div>
  );
}
