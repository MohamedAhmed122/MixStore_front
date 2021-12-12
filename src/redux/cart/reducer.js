import { types } from "./types";

const initialState = {
  cartItems: [],
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART_ITEM:
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    case types.REMOVE_CART_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    case types.REMOVE_ALL_CART_ITEMS:
        return{
            cartItems: []
        }
    default:
      return state;
  }
};


export default cartReducer