import React from "react";
import {connect} from "react-redux";

import {addCartItem, decreaseCartItem, removeCartItem} from "../../redux/cart/cart.actions";

import {
  CheckoutItemWrapper,
  ImageContainerWrapper,
  NameWrapper,
  QuantityWrapper,
  PriceWrapper,
  ButtonWrapper,
  RemoveButtonWrapper,
} from "./checkout-item.styles";
const CheckoutItem = ({imageUrl, name, quantity, price, id, addCartItem, decreaseCartItem, removeCartItem}) => (
  <CheckoutItemWrapper>
    <ImageContainerWrapper>
      <img alt="img" src={imageUrl}></img>
    </ImageContainerWrapper>
    <NameWrapper>{name}</NameWrapper>
    <QuantityWrapper className="quantity">
      <ButtonWrapper onClick={() => decreaseCartItem({imageUrl, name, quantity, price, id})}>&#10094;</ButtonWrapper>
      {quantity}
      <ButtonWrapper onClick={() => addCartItem({imageUrl, name, quantity, price, id})}>&#10095;</ButtonWrapper>
    </QuantityWrapper>
    <PriceWrapper>${price}</PriceWrapper>
    <RemoveButtonWrapper onClick={() => removeCartItem({imageUrl, name, quantity, price, id})}>
      &#10005;
    </RemoveButtonWrapper>
  </CheckoutItemWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
  decreaseCartItem: (item) => dispatch(decreaseCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
