import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cartItemsSelector } from "../../redux/cart/cart.selector";

import "./cart-dropdown.styles.scss";

import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {cartItems
      ? cartItems.map(item => (
          <CartDropdownItem key={item.id} {...item}></CartDropdownItem>
        ))
      : null}

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

export default connect(mapStateToProps)(CartDropdown);
