import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../../components/Form/FormInput";
import { validationCreateProductsSchema as validationSchema } from "../../utils/validationSchema";
import Button from "../../commons/Button";
import "./style.css";

const CreateAdminProducts = ({ handleCreateProductsSubmit }) => {
  return (
    <div className="full_page">
      <Formik
        initialValues={{
          name: "",
          desc: "",
          price: "",
          image: "",
          cal: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleCreateProductsSubmit}
      >
        {({ dirty, isValid }) => (
          <Form className="form_product_admin_page">
            <FormInput name="name" placeholder="Name" />
            <FormInput name="desc" placeholder="Description" />
            <FormInput name="price" placeholder="Price" />
            <FormInput name="image" placeholder="Image" />
            <FormInput name="cal" placeholder="Calories" />
            <Button
              text="Create"
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

export default CreateAdminProducts;
