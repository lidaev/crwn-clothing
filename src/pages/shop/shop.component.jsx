import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {shopCollectionSelector} from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({collections}) => (
  <div className="shop-page">
    {collections.map(({id, ...collectionProps}) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionSelector
});

export default connect(mapStateToProps, null)(ShopPage);
