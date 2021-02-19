import * as React from 'react'
import { useDispatch } from 'react-redux'

import { addItem, removeItem, removeItemsGroup } from '../../redux/cart/cart.actions'

import { CartItemType } from '../../types/cart.types'

import './checkout-item.styles.scss'

type PropsType = {
	cartItem: CartItemType
}

const CheckoutItem: React.FC<PropsType> = ({ cartItem }) => {
	const dispatch = useDispatch()

	const { name, imageUrl, price, quantity } = cartItem

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<span className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
					&#10094;
				</span>
				<span className="value">{quantity}</span>
				<span className="arrow" onClick={() => dispatch(addItem(cartItem))}>
					&#10095;
				</span>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => dispatch(removeItemsGroup(cartItem))}>
				&#10005;
			</div>
		</div>
	)
}

export default CheckoutItem
