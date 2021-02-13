import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)

  const dispatch = useDispatch()

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <Button onClick={() => dispatch(toggleCartHidden())}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  )
}

export default CartDropdown
