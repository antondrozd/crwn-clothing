import cartActionTypes from './cart.types'
import { getCartWithNewItem } from './cart.utils'

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
        items: getCartWithNewItem(state.items, action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
