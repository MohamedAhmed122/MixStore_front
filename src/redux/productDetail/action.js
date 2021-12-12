import { types } from "./type";
import { axios } from "../../api/axios";
import { endpoints } from "../../api/requests/endpoints";


const fetchProductsDetail = (id) => async (dispatch) => {
  dispatch({ type: types.PRODUCT_DETAIL_REQUEST });
  try {
    const { data } = await axios.get(`${endpoints.products}/${id}`);
    dispatch({
      type: types.PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.PRODUCT_DETAIL_ERROR, payload: error });
    
  }
};

export { fetchProductsDetail };   


                    
