import React from "react";
import {connect} from "react-redux";

import {toggleCartVisibility} from "../../redux/cart/cart.actions";

import "./cart.styles.scss";

import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";

const Cart = ({cartItems, toggleCartVisibility}) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">{calcAmount(cartItems)}</span>
  </div>
);

const calcAmount = cartItems => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems: cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
