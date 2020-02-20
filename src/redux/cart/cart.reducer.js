import {TOGGLE_CART_VISIBILITY, ADD_CART_ITEM} from "./cart.constants";
import {addItemToCart} from "./cart.utils";

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
    default:
      return state;
  }
};

export default cartReducer;
