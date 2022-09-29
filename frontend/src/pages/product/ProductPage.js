import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Rating from '../../components/rating/Rating'

import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Container = styled.div``
const Product = styled.div`
  display: flex;
`
const ImageContainer = styled.div`
  flex: 2;
`
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`
const ProductDetails = styled.ul`
  list-style: none;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const ProdName = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
`
const ProdRating = styled.li`
  width: 100%;
  padding: 1rem;
  font-size: 0.6rem;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`
const ProdPrice = styled.li`
  font-weight: bold;
`

const ProdDesc = styled.li`
  font-size: 0.8rem;
`

const CartQuantity = styled.li`
  display: flex;
`
const Quantity = styled.input`
  width: 40px;
`

const CartItem = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const ProductPage = () => {
  let { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('/api/products/' + id).then((res) => {
      setProduct(res.data)
    })
  }, [id])

  return (
    <Container>
      <Button variant="secondary" size="sm">
        GO BACK
      </Button>
      <Product>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>

        <ProductDetails>
          <ProdName>{product.name}</ProdName>
          <ProdRating>
            <Rating rating={product.rating} review={product.numReviews} />
          </ProdRating>
          <ProdPrice>Price :€ {product.price}</ProdPrice>

          <ProdDesc>{product.description}</ProdDesc>
          <CartItem>In Stock</CartItem>
          <CartQuantity>
            <span>Quantity:</span>
            <Quantity type="number" name="quantity" min="1" max="5" required />
          </CartQuantity>
          <Button variant="primary" size="sm">
            ADD TO CART
          </Button>
        </ProductDetails>
      </Product>
    </Container>
  )
}

export default ProductPage
