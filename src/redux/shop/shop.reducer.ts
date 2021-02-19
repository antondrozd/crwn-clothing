import {
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_FAILURE,
} from './shop.actions'

import { ShopStateType, ShopActionTypes } from '../../types/shop.types'

const initialState: ShopStateType = {
	collections: null,
	isFetching: false,
	errorMessage: null,
}

const shopReducer = (state = initialState, action: ShopActionTypes): ShopStateType => {
	switch (action.type) {
		case FETCH_COLLECTIONS_START:
			return { ...state, isFetching: true }
		case FETCH_COLLECTIONS_SUCCESS:
			return { ...state, isFetching: false, collections: action.payload }
		case FETCH_COLLECTIONS_FAILURE:
			return { ...state, isFetching: false, errorMessage: action.payload }
		default:
			return state
	}
}

export default shopReducer
