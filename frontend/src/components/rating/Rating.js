import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Stars = styled.span`
  font-size: 0.8rem;
`
const Reviews = styled.span`
  color: gray;
  font-size: 0.7rem;
  margin: 4px;
`

const Rating = ({ rating, review, color }) => {
  return (
    <div>
      <Stars style={{ color }}>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </Stars>
      <Reviews> {review} reviews </Reviews>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  review: PropTypes.number.isRequired,
  color: PropTypes.string,
}
export default Rating
