import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component.jsx";

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter(({...itemDetails}, idx) => idx < 4)
        .map(({...itemDetails}, idx) => (
          <CollectionItem key={idx} {...itemDetails} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
