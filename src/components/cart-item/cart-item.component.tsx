import * as React from 'react'

import { CartItemType } from '../../types/cart.types'

import './cart-item.styles.scss'

type PropsType = {
	item: CartItemType
}

const CartItem: React.FC<PropsType> = ({ item: { imageUrl, price, name, quantity } }) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</div>
	</div>
)

export default CartItem
