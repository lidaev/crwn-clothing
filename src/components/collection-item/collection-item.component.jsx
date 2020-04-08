import React from "react";
import {connect} from "react-redux";

import {addCartItem} from "../../redux/cart/cart.actions";

import {
  CollectionItemWrapper,
  ImageWrapper,
  CollectionFooterWrapper,
  CustomButtonDivWrapper,
  NameWrapper,
  PriceWrapper,
} from "./collection-item.styles";

const CollectionItem = ({id, name, price, imageUrl, addCartItem}) => (
  <CollectionItemWrapper>
    <ImageWrapper className="image" imageUrl={imageUrl}></ImageWrapper>
    <CustomButtonDivWrapper inverted onClick={() => addCartItem({id, name, price, imageUrl})}>
      ADD TO CART
    </CustomButtonDivWrapper>
    <CollectionFooterWrapper>
      <NameWrapper>{name}</NameWrapper>
      <PriceWrapper>${price}</PriceWrapper>
    </CollectionFooterWrapper>
  </CollectionItemWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
