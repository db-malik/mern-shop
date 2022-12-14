import {
  CART_ADD_ITEM,
  CART_PAYMENT_METHOD,
  CART_REMOVE_ITEM,
  CART_SHIPPING_ADDRESS,
} from '../constants/cartConstants'
import axios from 'axios'

export const addToCartAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const ShippingAddressAction = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem(
    'shippingAddress',
    JSON.stringify(getState().cart.shippingAddress)
  )
}

export const paymentMethodAction = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_PAYMENT_METHOD,
    payload: data,
  })
  localStorage.setItem(
    'paymentMethod',
    JSON.stringify(getState().cart.paymentMethod)
  )
}
