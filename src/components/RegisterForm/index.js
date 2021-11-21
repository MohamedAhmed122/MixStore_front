import React from "react";
import { Formik, Form } from "formik";
import { validationRegisterSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../Form/FormInput";
import Button from "../../commons/Button";

const RegisterForm = ({ handleRegisterSubmit }) => {
  return (
    <div className="full_screen">
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
            <FormInput name="firstName" placeholder="First Name" />
            <FormInput name="lastName" placeholder="Last Name" />
            <FormInput name="email" placeholder="Email" />
            <FormInput name="password" placeholder="Password" type="password" />
            <FormInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
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
