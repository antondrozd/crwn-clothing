import { createSelector } from 'reselect'
import { values } from 'lodash'

export const selectShop = (state) => state.shop

export const selectShopCollections = (state) => selectShop(state).collections

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  values
)

export const selectShopCollection = (collectionRouteName) => (state) =>
  selectShopCollections(state)[collectionRouteName]
