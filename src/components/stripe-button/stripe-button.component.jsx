import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priveForStripe = price * 100;
  const publicKey = "pk_test_kiZktVgLvWgWIgc6ionctwIy00uaLQEbSF";

  const onToken = token => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn clothing"
      billing
      address
      shippingAddress
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
