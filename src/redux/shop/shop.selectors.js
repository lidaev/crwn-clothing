import {createSelector} from "reselect";

const shopSelector = state => state.shop;

export const shopCollectionSelector = createSelector([shopSelector], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([shopCollectionSelector], collections =>
  Object.keys(collections).map(key => collections[key])
);

export const collectionSelector = collectionUrlParam =>
  createSelector([shopCollectionSelector], collections => collections[collectionUrlParam]);
