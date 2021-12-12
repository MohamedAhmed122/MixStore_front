import { types } from "./type";

const initialState = {
  isLoading: false,
  product: null,
  error: null,
};

const productsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.PRODUCT_DETAIL_SUCCESS:
      return {
        isLoading: false,
        product: action.payload,
        error: null,
      };
    case types.PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsDetailReducer;
