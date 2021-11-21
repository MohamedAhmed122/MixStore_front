import React from "react";
import Button from "../../../commons/Button";
import Input from "../../../commons/Input";
import "./style.css";

export function RegisterPage() {
  return (
    <div className="register_page">
      <div className="flex_regis_page">
        <div className="regis_forms_Page">
          <h1 className="text_regis_page"> Register You Account Her </h1>
          <form>
            <div className="name_input_regis_page">
              <Input
                border="1px solid #000"
                className="Input_Register_page"
                backgroundColor="#ffff"
                width="200px"
                height="17px"
                placeholder="first Name"
                type="text"
              />
              <Input
                border="1px solid #000"
                className="Input_Register_page  margin_second_regis_page"
                backgroundColor="#ffff"
                width="200px"
                height="17px"
                placeholder="Second Name"
                type="text"
                margin="5px"
              />
            </div>
            <div className="input_padding">
              <Input
                border="1px solid #000"
                className="Input_Register_page "
                backgroundColor="#ffff"
                width="430px"
                height="17px"
                placeholder="your email"
                type="email"
                margin="15px"
              />
              <Input
                border="1px solid #000"
                className="Input_Register_page input_padding "
                backgroundColor="#ffff"
                width="430px"
                height="17px"
                placeholder="Password"
                type="password"
                margin="15px"
              />
              <Input
                border="1px solid #000"
                className="Input_Register_page "
                backgroundColor="#ffff"
                width="430px"
                height="17px"
                placeholder="Return Your Password"
                type="password"
                margin="15px"
              />
              <Input
                border="1px solid #000"
                className="Input_Register_page "
                backgroundColor="#ffff"
                width="430px"
                height="17px"
                placeholder="Phone Number"
                type="phoneNumber "
                margin="15px"
              />
            </div>
          </form>
          <Button
            type="submit"
            text="Submit"
            color="#ffff"
            marginTop={"40px"}
          />
        </div>
        <img
          className="img_regis_page_flex"
          src="https://www.loveandoliveoil.com/wp-content/uploads/2019/03/fruit-shrub-mocktail-6.jpg"
          alt="img"
        />
      </div>
    </div>
  );
}
