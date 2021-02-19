import { CartActionTypes } from '../../types/cart.types'
import { CollectionItemType } from '../../types/shop.types'

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
export const REMOVE_ITEMS_GROUP_FROM_CART = 'REMOVE_ITEMS_GROUP_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
})

export const addItem = (item: CollectionItemType): CartActionTypes => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
})

export const removeItem = (item: CollectionItemType): CartActionTypes => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
})

export const removeItemsGroup = (item: CollectionItemType): CartActionTypes => ({
  type: REMOVE_ITEMS_GROUP_FROM_CART,
  payload: item,
})

export const clearCart = (): CartActionTypes => ({
  type: CLEAR_CART,
})
