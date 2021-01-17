import { createSelector } from 'reselect'

export const selectShop = (state) => state.shop

export const selectShopCollections = (state) => selectShop(state).collections

export const selectShopCollection = (collectionRouteName) => (state) =>
  selectShopCollections(state)[collectionRouteName]

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
)
