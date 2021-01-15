import { createSelector } from 'reselect'

export const selectCart = (state) => state.cart

export const selectCartItems = (state) => selectCart(state).items

export const selectIsCartHidden = (state) => selectCart(state).hidden

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
)
