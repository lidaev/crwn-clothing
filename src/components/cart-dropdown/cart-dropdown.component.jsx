import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cartItemsSelector} from "../../redux/cart/cart.selector";

import {withRouter} from "react-router-dom";

import "./cart-dropdown.styles.scss";

import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

const CartDropdown = ({cartItems, history}) => (
  <div className="cart-dropdown">
    {cartItems ? cartItems.map(item => <CartDropdownItem key={item.id} {...item}></CartDropdownItem>) : null}

    {cartItems.length > 0 ? (
      <CustomButton onClick={() => history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
    ) : (
      <div>No items in the cart yet</div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
