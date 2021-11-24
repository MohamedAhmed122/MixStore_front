import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

export const validationRegisterSchema = Yup.object().shape({
  firstName: Yup.string().required().min(4).label("First Name"),
  lastName: Yup.string().required().min(4).label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(20).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const validationCreateProductsSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  desc: Yup.string().required().label("Description"),
  price: Yup.string().required().label("Price"),
  image: Yup.string().required().label("Image"),
  cal: Yup.string().required().label("Calories"),
});

export const validationAddAddressUserSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().max(11).label("Phone Number"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  zipCode: Yup.string().required().max(6).label("Zip Code"),
});
