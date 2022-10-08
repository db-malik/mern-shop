import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, Link } from 'react-router-dom'

import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../../components/message/Message'

import { addToCartAction } from '../../actions/cartActions'

// import Message from '../../components/message/Message'

const CartPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const { id } = useParams()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty))
    }
  }, [dispatch, id, qty])

  return (
    <Row>
      <Col md={8}>
        <h1> Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            {' '}
            Your cart is empty <Link to="/">Go Back</Link>{' '}
          </Message>
        ) : (
          <ListGroup>
            <ListGroup.Item>a</ListGroup.Item>
          </ListGroup>
        )}
      </Col>
    </Row>
  )
}

export default CartPage
