import React from "react";
import { Formik, Form } from "formik";
import { validationRegisterSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../Form/FormInput";
import { Icon } from "../../assets/FolderIcon";
import Button from "../../commons/Button";
import image from "../../assets/png_4.png";
import "./style.css";

const RegisterForm = ({ handleRegisterSubmit, loading }) => {
  return (
    <div className="full_page_register">
      <Formik
        className="formik_register"
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegisterSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="Form">
            <FormInput
              name="firstName"
              placeholder="First Name"
              Icon={() => Icon.DriveFileRenameOutlineIcon}
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              Icon={() => Icon.DriveFileRenameOutlineIcon}
            />
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => Icon.EmailIcon}
            />
            <FormInput
              name="password"
              placeholder="Password"
              type="password"
              Icon={() => Icon.VisibilityIcon}
            />
            <FormInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              Icon={() => Icon.VisibilityIcon}
            />
            <Button
              text="Register"
              type="submit"
              disabled={!dirty || !isValid}
              margin={30}
              loading={loading}
            />
          </Form>
        )}
      </Formik>
      <div>
        <img className="register_img" src={image} alt="orangeJuice" />
      </div>
    </div>
  );
};

export default RegisterForm;
