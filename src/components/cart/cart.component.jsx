import React from "react";
import {connect} from "react-redux";

import {toggleCartVisibility} from "../../redux/cart/cart.actions";

import "./cart.styles.scss";

import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";

const Cart = ({cartItems, toggleCartVisibility}) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapStateToProps = ({user: {cartItems}}) => ({
  cartItems: cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
