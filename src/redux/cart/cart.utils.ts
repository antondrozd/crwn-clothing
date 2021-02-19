import { CartItemType } from '../../types/cart.types'
import { CollectionItemType } from '../../types/shop.types'

export const addItemToCart = (
  cartItems: CartItemType[],
  cartItemToAdd: CollectionItemType,
): CartItemType[] => {
  const existingCartItem = cartItems.find((item) => cartItemToAdd.id === item.id)

  if (existingCartItem) {
    return cartItems.map(
      (item) =>
        cartItemToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item,
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

export const removeItemsGroupFromCart = (
  cartItems: CartItemType[],
  cartItemTypeToRemove: CollectionItemType,
): CartItemType[] => {
  return cartItems.filter((item) => item.id !== cartItemTypeToRemove.id)
}

export const removeItemFromCart = (
  cartItems: CartItemType[],
  cartItemToRemove: CollectionItemType,
): CartItemType[] => {
  const existingCartItem = cartItems.find(
    (item) => cartItemToRemove.id === item.id,
  ) as CartItemType

  if (existingCartItem.quantity > 1) {
    return cartItems.map(
      (item) =>
        cartItemToRemove.id === item.id ? { ...item, quantity: item.quantity - 1 } : item,
    )
  } else {
    return removeItemsGroupFromCart(cartItems, cartItemToRemove)
  }
}
