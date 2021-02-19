// export type { StoreStateType } from '../redux/root-reducer'

import { ShopStateType } from './shop.types'
import { UserStateType } from './user.types'
import { DirectoryStateType } from './directory.types'
import { CartStateType } from './cart.types'

export type StoreStateType = {
	user: UserStateType
	cart: CartStateType
	directory: DirectoryStateType
	shop: ShopStateType
}
