import {SET_CURRENT_USER, ADD_CART_ITEM} from "./user.constants.js";

const INITIAL_STATE = {
  currentUser: null,
  cartItems: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, ...[action.payload]]
      };
    default:
      return state;
  }
};

export default userReducer;
