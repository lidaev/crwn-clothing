import React from "react";

import CollectionItem from "../collection-item/collection-item.component.jsx";

import {CollectionPreviewWrapper, TitleWrapper, PreviewWrapper} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => (
  <CollectionPreviewWrapper>
    <TitleWrapper>{title}</TitleWrapper>
    <PreviewWrapper>
      {items
        .filter(({...itemDetails}, idx) => idx < 4)
        .map(({...itemDetails}, idx) => (
          <CollectionItem key={idx} {...itemDetails} />
        ))}
    </PreviewWrapper>
  </CollectionPreviewWrapper>
);

export default CollectionPreview;
