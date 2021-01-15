import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Link to="/checkout">
      <Button onClick={toggleCartHidden}>GO TO CHECKOUT</Button>
    </Link>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
