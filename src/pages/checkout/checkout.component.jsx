import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {cartItemsSelector} from "../../redux/cart/cart.selector";
import {totalPriceSelector} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  CartItemsContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Desciption</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    <CartItemsContainer>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
    </CartItemsContainer>
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Please use the following creadit card information for test payments
      <br />
      4242 4242 4242 4242 - Exp: 11/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: cartItemsSelector,
    total: totalPriceSelector,
  });

export default connect(mapStateToProps)(CheckoutPage);
