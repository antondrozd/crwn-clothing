import { useDispatch } from 'react-redux'

import Button from '../button/button.component'

import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleAdd = () => dispatch(addItem(item))

  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <Button onClick={handleAdd} inverted>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default CollectionItem
