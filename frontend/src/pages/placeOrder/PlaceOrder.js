import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Message from '../../components/message/Message'

import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import styled from 'styled-components'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { ShippingAddressAction } from '../../redux/actions/cartActions'

const PlaceOrder = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)
  const {
    cartItems,
    shippingAddress,
    paymentMethod: { paymentMethod },
  } = cart

  // calcul prices
  const showDecimalNumber = (num) => Math.round(num * 100) / 100
  cart.itemsPrice = showDecimalNumber(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 50
  cart.Tax = showDecimalNumber(Number(0.1 * cart.itemsPrice).toFixed(2))
  cart.totalAmount = cart.itemsPrice + cart.shippingPrice + cart.Tax

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <ContainerCard>
        <Row>
          <Col md={9}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>SHIPPING</h2>
                <p>
                  {' '}
                  {shippingAddress.address} , {shippingAddress.city}{' '}
                  {shippingAddress.postalCode} {shippingAddress.country}{' '}
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <h2>PAYMENT METHOD</h2>
                <p>{paymentMethod}</p>
              </ListGroupItem>

              <ListGroupItem>
                <h2>ORDER ITEMS</h2>
                <ListGroup variant="flush">
                  {cartItems === 0 ? (
                    <Message variant="primary">Your cart is empty </Message>
                  ) : (
                    cartItems.map((item, index) => (
                      <ListGroupItem key={index}>
                        <Row>
                          <Col xs={3} md={1}>
                            <Image fluid rounded src={item.image} />
                          </Col>
                          <Col xs={5} md={6}>
                            {' '}
                            {item.name}{' '}
                          </Col>
                          <Col xs={2} md={2}>
                            {item.qty}
                          </Col>
                          <Col xs={2} md={3}>
                            {item.price}$
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))
                  )}
                </ListGroup>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroupItem>
                  <h2> ORDER SUMMARY </h2>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Items</Col>
                    <Col> $ {cart.itemsPrice}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Shipping</Col>
                    <Col> $ {cart.shippingPrice}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Tax</Col>
                    <Col>$ {cart.Tax}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Total</Col>
                    <Col>$ {cart.totalAmount}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="d-grid">
                  <Button type="button">PLACE ORDER</Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </ContainerCard>
    </>
  )
}

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 100%;
  padding: 40px 20px;
  box-shadow: 10px 16px 43px 2px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: 10px 16px 43px 2px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 10px 16px 43px 2px rgba(0, 0, 0, 0.48);
`

export default PlaceOrder
