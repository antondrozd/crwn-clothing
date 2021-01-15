import cartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
})

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
})

export const removeItemsGroup = (item) => ({
  type: cartActionTypes.REMOVE_ITEMS_GROUP_FROM_CART,
  payload: item,
})
