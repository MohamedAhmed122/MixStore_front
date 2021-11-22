import React from "react";
import { Formik, Form } from "formik";
import { validationRegisterSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../Form/FormInput";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "../../commons/Button";

const RegisterForm = ({ handleRegisterSubmit }) => {
  return (
    <div className="full_page">
      <Formik
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
              Icon={() => <DriveFileRenameOutlineIcon />}
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              Icon={() => <DriveFileRenameOutlineIcon />}
            />
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => <EmailIcon />}
            />
            <FormInput
              name="password"
              placeholder="Password"
              type="password"
              Icon={() => <VisibilityIcon />}
            />
            <FormInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              Icon={() => <VisibilityIcon />}
            />
            <Button
              text="Register"
              type="submit"
              disabled={!dirty || !isValid}
              margin={30}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
