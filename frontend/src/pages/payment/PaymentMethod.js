import React, { useState } from 'react'
import {
  Button,
  Container,
  FormCheck,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { paymentMethodAction } from '../../redux/actions/cartActions'

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!shippingAddress) {
    navigate('/shipping')
  }
  const submitHundler = (e) => {
    e.preventDefault()
    dispatch(paymentMethodAction({ paymentMethod }))
    navigate('/placeorder')
  }
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 />

      <FormContainer>
        <h1>PAYMENT METHOD</h1>
        <FormGroup>
          <FormLabel as="legend">Select Method</FormLabel>
          <FormCheck
            type="radio"
            value="PayPal"
            id="PayPal"
            name="paymentMedhod"
            label="PayPal or Credit cart"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></FormCheck>
          <FormCheck
            type="radio"
            value="stripe"
            id="stripe"
            name="paymentMedhod"
            label="Stripe"
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></FormCheck>
        </FormGroup>
        <Button type="submit" onClick={submitHundler}>
          Continue
        </Button>
      </FormContainer>
    </Container>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 60%;
  padding: 40px 20px;
  box-shadow: 10px 16px 43px 2px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: 10px 16px 43px 2px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 10px 16px 43px 2px rgba(0, 0, 0, 0.48);
`

export default PaymentMethod
