import { CollectionsMapType, ShopActionTypes } from '../../types/shop.types'

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'

export const fetchCollectionsStart = (): ShopActionTypes => ({
	type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (
	collectionsMap: CollectionsMapType,
): ShopActionTypes => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage: string): ShopActionTypes => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
})
