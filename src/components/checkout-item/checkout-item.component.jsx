import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ imageUrl, name, quantity, price }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="img" src={imageUrl}></img>
    </div>
    <div className="name">{name}</div>
    <div className="quantity">&#10094;{quantity}&#10095;</div>
    <div className="price">{price}</div>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
