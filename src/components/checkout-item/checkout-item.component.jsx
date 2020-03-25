import React from "react";
import {connect} from "react-redux";

import {addCartItem, decreaseCartItem, removeCartItem} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({imageUrl, name, quantity, price, id, addCartItem, decreaseCartItem, removeCartItem}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="img" src={imageUrl}></img>
    </div>
    <div className="name">{name}</div>
    <div className="quantity">
      <div className="button" onClick={() => decreaseCartItem({imageUrl, name, quantity, price, id})}>
        &#10094;
      </div>
      {quantity}
      <div className="button" onClick={() => addCartItem({imageUrl, name, quantity, price, id})}>
        &#10095;
      </div>
    </div>
    <div className="price">${price}</div>
    <div className="button remove-button" onClick={() => removeCartItem({imageUrl, name, quantity, price, id})}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
  decreaseCartItem: item => dispatch(decreaseCartItem(item)),
  removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
