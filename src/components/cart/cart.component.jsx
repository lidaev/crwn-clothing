import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {toggleCartVisibility} from "../../redux/cart/cart.actions";

import {cartQuantitySelector} from "../../redux/cart/cart.selector";

import {CartIconDivWrapper, CartIconWrapper, ItemCountWrapper} from "./cart.styles";

const Cart = ({toggleCartVisibility, cartQuantity}) => (
  <CartIconDivWrapper onClick={toggleCartVisibility}>
    <CartIconWrapper />
    <ItemCountWrapper>{cartQuantity}</ItemCountWrapper>
  </CartIconDivWrapper>
);

const mapStateToProps = createStructuredSelector({
  cartQuantity: cartQuantitySelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
