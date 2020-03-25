export const addItemToCart = (cartItems, item) => {
  return changeItemQuantity(cartItems, item, 1);
};

export const decreaseCartItem = (cartItems, item) => {
  return changeItemQuantity(cartItems, item, -1);
};

const changeItemQuantity = (cartItems, item, changeValue) => {
  let itemExists = cartItems.find(itemValue => itemValue.id === item.id);

  if (itemExists) {
    return cartItems.map(cartItem => {
      return cartItem.id === item.id && cartItem.quantity + changeValue > 0
        ? {...cartItem, quantity: cartItem.quantity + changeValue}
        : cartItem;
    });
  }

  return [...cartItems, {...item, quantity: 1}];
};
