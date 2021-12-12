import { types } from "./type";
import { axios } from "../../api/axios";
import { endpoints } from "../../api/requests/endpoints";

const fetchProducts = () => async (dispatch) => {
  dispatch({ type: types.PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(endpoints.products);
    dispatch({ type: types.PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.PRODUCTS_ERROR, payload: error });
  }
};

export { fetchProducts };
