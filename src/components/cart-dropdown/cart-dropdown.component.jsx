import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cartItemsSelector} from "../../redux/cart/cart.selector";

import {toggleCartVisibility} from "../../redux/cart/cart.actions";

import {withRouter} from "react-router-dom";

import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import {CartDropdownWrapper} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownWrapper>
    {cartItems ? cartItems.map((item) => <CartDropdownItem key={item.id} {...item}></CartDropdownItem>) : null}

    {cartItems.length > 0 ? (
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    ) : (
      <div>No items in the cart yet</div>
    )}
  </CartDropdownWrapper>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
