import React from 'react'
import styled from 'styled-components'
import ProductsList from '../../containers/productsList/ProductsList'

const Container = styled.div`
  /* display: flex;
  justify-content: center; */
`

const Home = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  )
}

export default Home
