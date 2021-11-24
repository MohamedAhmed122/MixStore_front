import React from "react";
import { Formik, Form } from "formik";
import { validationLoginSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../Form/FormInput";
import Button from "../../commons/Button";
import { Icon } from "../../FolderIcon";
import "./style.css";

const LoginForm = ({ handleLoginSubmit }) => {
  return (
    <div className="full_page">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLoginSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="Form">
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => Icon.EmailIcon}
            />
            <FormInput
              name="password"
              placeholder="Password"
              Icon={() => Icon.VisibilityIcon}
            />
            <Button
              text="Login"
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
              margin={30}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
