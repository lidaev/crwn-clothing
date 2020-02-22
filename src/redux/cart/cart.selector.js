import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = state => state.cart.cartItems;

export const cartVisibilitySelector = createSelector(
  [cartSelector],
  cart => cart.hidden
);

export const cartQuantitySelector = createSelector([cartItemsSelector], items =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
