import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
)

const mapStateToProps = (store) => ({
  cartItems: store.cart.items,
})

export default connect(mapStateToProps)(CartDropdown)
