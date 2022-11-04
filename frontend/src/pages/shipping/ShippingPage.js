import React, { useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { ShippingAddressAction } from '../../redux/actions/cartActions'

const ShippingPage = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHundler = (e) => {
    e.preventDefault()
    dispatch(ShippingAddressAction({ address, city, postalCode, country }))
    navigate('/payment')
  }
  return (
    <Container>
      <CheckoutSteps step1 step2 />

      <FormContainer>
        <h1>Shipping</h1>
        <FormGroup>
          <FormLabel> Address </FormLabel>
          <FormControl
            value={address}
            required
            type="text"
            placeholder="enter your address"
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel> City </FormLabel>
          <FormControl
            value={city}
            required
            type="text"
            placeholder="enter your city"
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel> Postal Code </FormLabel>
          <FormControl
            value={postalCode}
            required
            type="text"
            placeholder="enter your postal code"
            onChange={(e) => setPostalCode(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel> Country </FormLabel>
          <FormControl
            value={country}
            required
            type="text"
            placeholder="enter your Country"
            onChange={(e) => setCountry(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type="submit" onClick={submitHundler}>
          {' '}
          Continue{' '}
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

export default ShippingPage
