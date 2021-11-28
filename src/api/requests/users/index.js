import { axios } from "../../axios";
import { endpoints } from "../endpoints";

export const registerUser = async (values) => {
  const { data } = await axios.post(endpoints.users, values);
  return data;
};

export const loginUser = async (values) => {
  const { data } = await axios.post(`${endpoints.users} ${endpoints.login}`);
  return data;
};
