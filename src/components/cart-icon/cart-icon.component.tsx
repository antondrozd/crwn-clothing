import { useSelector, useDispatch } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {
	const itemsCount = useSelector(selectCartItemsCount)

	const dispatch = useDispatch()

	const handleIconClick = () => {
		dispatch(toggleCartHidden())
	}

	return (
		<div className="cart-icon" onClick={handleIconClick}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemsCount}</span>
		</div>
	)
}

export default CartIcon
