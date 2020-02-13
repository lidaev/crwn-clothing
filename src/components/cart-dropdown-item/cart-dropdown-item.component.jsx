import React from "react";

import "./cart-dropdown-item.styles.scss";

const CartDropdownItem = ({id, name, price, imageUrl}) => (
  <div className="cart-dropdown-item">
    <div className="photo" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="item-info">
      <div>{name}</div>
      <div>{price}</div>
    </div>
  </div>
);

export default CartDropdownItem;
