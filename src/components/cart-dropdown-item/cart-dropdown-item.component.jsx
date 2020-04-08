import React from "react";

import {CartDropdownItemWrapper, PhotoWrapper, ItemInfoWrapper, TitleWrapper} from "./cart-dropdown-item.styles";

const CartDropdownItem = ({id, name, price, imageUrl, quantity}) => (
  <CartDropdownItemWrapper>
    <PhotoWrapper imageUrl={imageUrl}></PhotoWrapper>
    <ItemInfoWrapper>
      <TitleWrapper>{name}</TitleWrapper>
      <div>
        {quantity} x ${price}
      </div>
    </ItemInfoWrapper>
  </CartDropdownItemWrapper>
);

export default CartDropdownItem;
