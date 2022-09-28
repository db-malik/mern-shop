import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  height: 400px;
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
const CardBody = styled.p`
  font-size: 0.6em;
`
const CardPrice = styled.span`
  font-style: 0.8em;
  font-weight: bold;
  color: black;
`

const Card = (props) => {
  return (
    <Container href={`/product/${props.cardId}`}>
      <CardImage src={props.cardImage} />
      <CardTitle>{props.cardTitle}</CardTitle>
      <CardBody>{props.cardBody}</CardBody>
      <CardPrice>{props.cardPrice}</CardPrice>
    </Container>
  )
}

export default Card
