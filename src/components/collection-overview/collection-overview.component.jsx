import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import {CollectionOverviewWrapper} from "./collection-overview.styles";

const CollectionOverview = ({collections}) => (
  <CollectionOverviewWrapper>
    {collections.map(({id, ...collectionProps}) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </CollectionOverviewWrapper>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
