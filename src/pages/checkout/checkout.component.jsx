import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cartItemsSelector } from "../../redux/cart/cart.selector";
import { totalPriceSelector } from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Desciption</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div className="cart-items">
      {cartItems.map(item => (
        <CheckoutItem key={item.id} {...item} />
      ))}
    </div>
    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: cartItemsSelector,
    total: totalPriceSelector
  });

export default connect(mapStateToProps)(CheckoutPage);
