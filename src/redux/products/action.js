import { productsType } from "./type";
import { axios } from "../../api/axios";
import { errorHandlers } from "../../utils/errorHandlers";
import { endpoints } from "../../api/requests/endpoints";

const fetchProducts = () => async (dispatch) => {
  dispatch({ type: productsType.PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(endpoints.products);
    dispatch({ type: productsType.PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: productsType.PRODUCTS_ERROR, payload: error });
    errorHandlers(error);
  }
};

export { fetchProducts };
