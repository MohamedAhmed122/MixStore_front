import { axios } from "../../axios";
import { endpoints } from "../endpoints";

export const adminCreateProduct = async (value) => {
  const { data } = await axios.post(endpoints.products, value);
  return data;
};
