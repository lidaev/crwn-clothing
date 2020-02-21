import {createSelector} from "reselect";

export const cartItemsSelector = state => state.cart.cartItems;

export const cartQuantitySelector = createSelector(
  cartItemsSelector,
  items => items.reduce((acc, item) => acc + item.quantity, 0)
);
