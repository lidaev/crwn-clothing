import {SET_CURRENT_USER, ADD_CART_ITEM} from "./user.constants.js";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const addCartItem = cartItem => ({
  type: ADD_CART_ITEM,
  payload: cartItem
});
