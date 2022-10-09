import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  LOAD_CART_ITEMS,
} from '../constants/cartConstants'
import axios from 'axios'

export const loadCartFromStorageAction = () => async (dispatch) => {
  const cartItems = await JSON.parse(localStorage.getItem('cartItems'))
  if (cartItems == null) {
    localStorage.setItem('cartItems', [])
  }
  dispatch({
    type: LOAD_CART_ITEMS,
    payload: cartItems,
  })
}

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
