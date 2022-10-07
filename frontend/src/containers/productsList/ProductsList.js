import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { productsListAction } from '../../actions/productActions'

import Card from '../../components/card/Card'
import Loader from '../../components/loader/Loader'
import Message from '../../components/message/Message'

import styled from 'styled-components'
import { mobile } from '../../Responsive'

const ProductsList = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(productsListAction())
  }, [dispatch])

  return (
    <Container>
      <h1> Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <ProductsContainer>
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </ProductsContainer>
      )}
    </Container>
  )
}

// ----------------styling begins here ----------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  ${mobile({ justifyContent: 'center' })}
`
// -----------------style end here---------------
export default ProductsList
