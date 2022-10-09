import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, Link } from 'react-router-dom'

import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap'
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

  const removeFromCartHandler = () => {}
  const checkoutHandler = () => {}

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col sm={6} md={2}>
                      <Image
                        className="pb-4"
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col sm={6} md={4}>
                      <Link
                        style={{ fontSize: '0.8rem' }}
                        to={`/product/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col sm={3} md={2}>
                      ${item.price}
                    </Col>
                    <Col sm={6} md={3}>
                      <Form.Select
                        style={{ fontSize: '0.8rem' }}
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCartAction(
                              item.product,
                              Number(e.target.value)
                            )
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col sm={3} md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        <i
                          style={{ color: 'red' }}
                          className="fas fa-trash"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item className="mx-auto">
                <Button
                  type="button"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
