import { axios } from "../../axios";
import { endpoints } from "../endpoints";

export const fetchProducts = async () => {
  const { data } = await axios.get(endpoints.products);
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${endpoints.products}/${id}`);
  return data;
};
