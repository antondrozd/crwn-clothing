import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
} from '../redux/shop/shop.actions'

export type ShopStateType = {
	collections: CollectionsMapType | null
	isFetching: boolean
	errorMessage: string | null
}

export type CollectionsMapType = {
	[key: string]: CollectionType
}

export type CollectionType = {
	routeName: string
	id: string
	title: string
	items: CollectionItemType[]
}

export type CollectionItemType = {
	id: number
	imageUrl: string
	name: string
	price: number
}

type FetchCollectionsStartActionType = {
	type: typeof FETCH_COLLECTIONS_START
}

type FetchCollectionsSuccessActionType = {
	type: typeof FETCH_COLLECTIONS_SUCCESS
	payload: CollectionsMapType
}

type FetchCollectionsFailureActionType = {
	type: typeof FETCH_COLLECTIONS_FAILURE
	payload: string
}

export type ShopActionTypes =
	| FetchCollectionsStartActionType
	| FetchCollectionsSuccessActionType
	| FetchCollectionsFailureActionType
