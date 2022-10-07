import React from 'react'
import { Link } from 'react-router-dom'

import Rating from '../rating/Rating'
import styled from 'styled-components'

const Card = ({ product }) => {
  return (
    <Container>
      <Link to={`/products/${product._id}`}>
        <CardImage src={product.image} />
        <CardTitle>{product.name}</CardTitle>
        <Rating rating={product.rating} review={product.numReviews} />
        <CardPrice>{product.price} €</CardPrice>
      </Link>
    </Container>
  )
}

const Container = styled.a`
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  transition: all 0.5s ease;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  margin-bottom: 6px;
`
const CardTitle = styled.h2`
  font-size: 0.8em;
`

const CardPrice = styled.span`
  font-style: 0.8em;
  font-weight: bold;
  color: black;
`

export default Card
