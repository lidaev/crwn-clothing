import React from "react";
import {connect} from "react-redux";

import "./cart.styles.scss";

import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";

const Cart = ({cartItems}) => (
  <div className="cart">
    <CartIcon className="cart-icon" />
    <span className="items-number">{cartItems.length}</span>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.user.cartItems
});

export default connect(mapStateToProps)(Cart);
