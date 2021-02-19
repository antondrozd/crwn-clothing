import { createSelector } from 'reselect'
import { values } from 'lodash'

import { StoreStateType } from '../../types/common.types'
import { ShopStateType, CollectionType, CollectionsMapType } from '../../types/shop.types'

export const selectShop = (state: StoreStateType): ShopStateType => state.shop

export const selectShopCollections = (state: StoreStateType): CollectionsMapType =>
  selectShop(state).collections as CollectionsMapType //cannot be null while executing

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  values,
)

export const selectShopCollection = (collectionRouteName: string) => (
  state: StoreStateType,
): CollectionType => selectShopCollections(state)[collectionRouteName]

export const selectIsCollectionsFetching = (state: StoreStateType): boolean =>
  selectShop(state).isFetching

export const selectIsCollectionsLoaded = (state: StoreStateType): boolean =>
  !!selectShopCollections(state)
