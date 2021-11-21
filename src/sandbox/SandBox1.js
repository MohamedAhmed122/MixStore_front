import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import Button from "../commons/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).max(20).label('Password'),
  username: Yup.string().required().min(5).label('Username'),
});

export default function SandBox1() {

    const handlValue = (values, {resetForm})=>{
    console.log(values)
    resetForm()
    }

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={handlValue}
        validationSchema={validationSchema}
       
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form  className='Form'> 
            <FormInput name="email" placeholder="Email"  />
            <FormInput name="password" placeholder="Password" />
            <FormInput name="username" placeholder="Username" />
            <Button text='Submit' type="submit" disabled={!dirty || !isValid || isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
