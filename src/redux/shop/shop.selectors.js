import { createSelector } from 'reselect'
import { values, isEmpty } from 'lodash'

export const selectShop = (state) => state.shop

export const selectShopCollections = (state) => selectShop(state).collections

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  values
)

export const selectShopCollection = (collectionRouteName) => (state) =>
  selectShopCollections(state)[collectionRouteName]

export const selectIsCollectionsFetching = (state) =>
  selectShop(state).isFetching

export const selectIsCollectionsLoaded = (state) =>
  !isEmpty(selectShopCollections(state))
