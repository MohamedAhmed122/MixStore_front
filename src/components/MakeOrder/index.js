import React from "react";
import { Formik, Form } from "formik";
import { validationAddAddressUserSchema as validationSchema } from "../../utils/validationSchema";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { FormInput } from "../Form/FormInput";
import Button from "../../commons/Button";
import "./style.css";

const MakeOrder = ({ handleMakeOrderSubmit }) => {
  return (
    <div className="fullPage">
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          city: "",
          address: "",
          zipCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleMakeOrderSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className="MakeOrder">
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => <EmailIcon />}
            />
            <FormInput
              name="phoneNumber"
              placeholder="Phone Number"
              Icon={() => <PhoneIphoneIcon />}
            />
            <FormInput
              name="city"
              placeholder="City"
              Icon={() => <LocationCityIcon />}
            />
            <FormInput
              name="address"
              placeholder="Address"
              Icon={() => <HomeIcon />}
            />
            <FormInput
              name="zipCode"
              placeholder="Zip Code"
              Icon={() => <DialpadIcon />}
            />
            <Button
              text="Order"
              type="submit"
              margin={30}
              disabled={!dirty || !isValid || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MakeOrder;
