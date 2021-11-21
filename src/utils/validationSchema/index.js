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
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
