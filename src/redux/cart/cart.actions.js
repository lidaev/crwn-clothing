import {TOGGLE_CART_VISIBILITY, ADD_CART_ITEM} from "./cart.constants";

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});

export const addCartItem = cartItem => ({
  type: ADD_CART_ITEM,
  payload: cartItem
});
