import cartActionTypes from './cart.types'
import {
  addItemToCart,
  removeItemFromCart,
  removeItemsGroupFromCart,
} from './cart.utils'

const initialState = {
  hidden: true,
  items: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      }
    case cartActionTypes.REMOVE_ITEMS_GROUP_FROM_CART:
      return {
        ...state,
        items: removeItemsGroupFromCart(state.items, action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
