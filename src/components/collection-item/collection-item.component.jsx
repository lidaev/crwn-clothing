import React from "react";
import {connect} from "react-redux";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component.jsx";

import {addCartItem} from "../../redux/user/user.actions.js";

const CollectionItem = ({name, price, imageUrl, addCartItem}) => (
  <div className="collection-item">
    <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <CustomButton onClick={addCartItem.bind(name, price, imageUrl)}>ADD TO CART</CustomButton>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addCartItem: (name, price, imageUrl) => dispatch(addCartItem({name, price, imageUrl}))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
