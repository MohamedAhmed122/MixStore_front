import { types } from "./type";

const initialState = {
  isLoading: false,
  products: null,
  error: null,
};

const productsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        products: action.payload.products,
        error: null,
      };
    case types.PRODUCTS_ERROR:
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
