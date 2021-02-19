import {
	TOGGLE_CART_HIDDEN,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
	REMOVE_ITEMS_GROUP_FROM_CART,
	CLEAR_CART,
} from '../redux/cart/cart.actions'

import { CollectionItemType } from './shop.types'

export type CartStateType = {
	hidden: boolean
	items: CartItemType[]
}

export type CartItemType = CollectionItemType & {
	quantity: number
}

type ToggleCartHiddenActionType = {
	type: typeof TOGGLE_CART_HIDDEN
}

type AddItemActionType = {
	type: typeof ADD_ITEM_TO_CART
	payload: CollectionItemType
}

type RemoveItemActionType = {
	type: typeof REMOVE_ITEM_FROM_CART
	payload: CollectionItemType
}

type RemoveItemsGroupActionType = {
	type: typeof REMOVE_ITEMS_GROUP_FROM_CART
	payload: CollectionItemType
}

type ClearCartActionType = {
	type: typeof CLEAR_CART
}

export type CartActionTypes =
	| ToggleCartHiddenActionType
	| AddItemActionType
	| RemoveItemActionType
	| RemoveItemsGroupActionType
	| ClearCartActionType
