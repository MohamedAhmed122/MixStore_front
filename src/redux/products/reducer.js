import { productsType } from "./type";

const initialState = {
  isLoading: false,
  products: null,
  error: null,
};

const productsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsType.PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productsType.PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        products: action.payload.products,
        error: null,
      };
    case productsType.PRODUCTS_ERROR:
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
