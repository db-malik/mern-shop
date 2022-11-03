import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../../components/rating/Rating'
import Message from '../../components/message/Message'
import Loader from '../../components/loader/Loader'

import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { productDetailsAction } from '../../redux/actions/productActions'

const ProductPage = () => {
  const [cartQty, setCartQty] = useState(1)
  let { id } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(productDetailsAction(id))
  }, [dispatch, id])

  //---------event handler begins --------

  const cartQtyHandler = (operator) => {
    let newCartQty
    newCartQty = operator === 'i' ? cartQty + 1 : cartQty - 1
    setCartQty(newCartQty)
  }

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${cartQty}`)
  }

  //--------------event handler ends ------------
  return (
    <Container>
      <Link to="/">
        <Button variant="secondary" size="sm">
          GO BACK
        </Button>
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
            <ProdStock countInStock={product.countInStock}>
              {product.countInStock > 0 ? ' In Stock' : 'out of stock'}{' '}
            </ProdStock>
            {product.countInStock > 0 && (
              <CartQuantity>
                <Quantity>Quantity:</Quantity>
                <Button
                  disabled={cartQty === 1}
                  variant="outline-dark"
                  style={{ padding: '4px' }}
                  onClick={() => cartQtyHandler('d')}
                >
                  -
                </Button>{' '}
                <span>{cartQty}</span>
                <Button
                  variant="outline-dark"
                  style={{ padding: '4px' }}
                  onClick={() => cartQtyHandler('i')}
                  disabled={cartQty === 10 || cartQty === product.countInStock}
                >
                  +
                </Button>{' '}
              </CartQuantity>
            )}
            <Button
              disabled={product.countInStock === 0}
              variant="primary"
              size="sm"
              style={{ margin: '8px 0' }}
              onClick={addToCartHandler}
            >
              ADD TO CART
            </Button>
          </ProductDetails>
        </Product>
      )}
    </Container>
  )
}
//------------------styling begins here ---------------------
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
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 0;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`
const Quantity = styled.span`
  font-weight: bold;
`
const ProdStock = styled.div`
  color: ${(props) => (props.countInStock ? ' green' : 'red')};
  padding: 10px 0;
`
//------------------styling ends here ---------------------

export default ProductPage
