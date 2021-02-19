import { createSelector } from 'reselect'

import { StoreStateType } from '../../types/common.types'
import { CartItemType, CartStateType } from '../../types/cart.types'

export const selectCart = (state: StoreStateType): CartStateType => state.cart

export const selectCartItems = (state: StoreStateType): CartItemType[] =>
	selectCart(state).items

export const selectIsCartHidden = (state: StoreStateType): boolean =>
	selectCart(state).hidden

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
	items.reduce(
		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
		0,
	),
)

export const selectCartTotal = createSelector([selectCartItems], (items) =>
	items.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity * cartItem.price,
		0,
	),
)
