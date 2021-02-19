import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEMS_GROUP_FROM_CART,
  CLEAR_CART,
} from './cart.actions'
import { addItemToCart, removeItemFromCart, removeItemsGroupFromCart } from './cart.utils'

import { CartStateType, CartActionTypes } from '../../types/cart.types'

const initialState: CartStateType = {
  hidden: true,
  items: [],
}

const cartReducer = (state = initialState, action: CartActionTypes): CartStateType => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      }
    case REMOVE_ITEMS_GROUP_FROM_CART:
      return {
        ...state,
        items: removeItemsGroupFromCart(state.items, action.payload),
      }
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export default cartReducer
