import {TOGGLE_CART_VISIBILITY, ADD_CART_ITEM, DECREASE_CART_ITEM, REMOVE_CART_ITEM} from "./cart.constants";
import {addItemToCart, decreaseCartItem} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_CART_ITEM:
      return {...state, cartItems: addItemToCart(state.cartItems, action.payload)};
    case DECREASE_CART_ITEM:
      return {...state, cartItems: decreaseCartItem(state.cartItems, action.payload)};
    case REMOVE_CART_ITEM:
      return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)};
    default:
      return state;
  }
};

export default cartReducer;
