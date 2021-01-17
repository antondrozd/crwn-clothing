export const selectShop = (state) => state.shop

export const selectShopCollections = (state) => selectShop(state).collections

export const selectShopCollection = (collectionRouteName) => (state) => {
  return selectShopCollections(state).find(
    (collection) => collection.routeName === collectionRouteName
  )
}
