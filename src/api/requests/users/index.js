import { axios } from "../../axios";
import { endpoints } from "../endpoints";


export const registerUser = async (values) => {
  const { data } = await axios.post(endpoints.users, values);
  return data;
};