import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import "./collection-overview.styles.scss";

import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => (
  <div className="collection-overview">
    {collections.map(({id, ...collectionProps}) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
