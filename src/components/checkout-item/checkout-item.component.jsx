import { connect } from 'react-redux'

import {
  addItem,
  removeItem,
  removeItemsGroup,
} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, addItem, removeItem, removeItemsGroup }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItemsGroup(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const actionCreators = {
  addItem,
  removeItem,
  removeItemsGroup,
}

export default connect(null, actionCreators)(CheckoutItem)
