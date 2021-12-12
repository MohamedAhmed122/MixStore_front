import { types } from "./types";

export const addCartItem = (item) => {
  return {
    type: types.ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload: item,
  };
};

export const removeAllCartItems = () => {
  return {
    type: types.REMOVE_ALL_CART_ITEMS,
  };
};
