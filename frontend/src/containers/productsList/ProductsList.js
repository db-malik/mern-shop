import React from 'react'
import products from '../../products'
// import Product from '../../components/product/Product'
import Card from '../../components/card/Card'
import styled from 'styled-components'
import { mobile } from '../../Responsive'

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

const ProductsList = () => {
  const productsList = products.map((product) => (
    <Card
      key={product._id}
      title={product.name}
      cardId={product._id}
      cardImage={product.image}
      cardTitle={product.name}
      cardBody={product.description}
      cardPrice={product.price}
    ></Card>
  ))

  return (
    <Container>
      <h1> Latest Products</h1>
      <ProductsContainer>{productsList}</ProductsContainer>
    </Container>
  )
}

export default ProductsList
