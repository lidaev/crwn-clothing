import React from "react";
import {connect} from "react-redux";

import {toggleCartVisibility} from "../../redux/cart/cart.actions";

import "./cart.styles.scss";

import {cartQuantitySelector} from "../../redux/cart/cart.selector";

import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";

const Cart = ({toggleCartVisibility, cartQuantity}) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">{cartQuantity}</span>
  </div>
);

const mapStateToProps = state => ({
  cartQuantity: cartQuantitySelector(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
