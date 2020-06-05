import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Card

// border-bottom: 1px solid ${(props) => props.theme.color.border};
const Wrapper = styled.article`
  padding: 2em 0;
`
