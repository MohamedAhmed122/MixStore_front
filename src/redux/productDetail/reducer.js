import { productsDetailType } from "./type";

const initialState = {
  isLoading: false,
  products: null,
  error: null,
};

const productsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsDetailType.PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productsDetailType.PRODUCT_DETAIL_SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case productsDetailType.PRODUCT_DETAIL_ERROR:
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
