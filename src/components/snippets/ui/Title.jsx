import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const Title = ({ className = '', children, level = 1, theme }) => {
  const size = level === 1 ? 2.25 : 1.75
  return (
    <Heading
      className={className}
      as={`h${level}`}
      theme={{ ...theme, size }}
    >
      {children}
    </Heading>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number,
  children: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
}
Title.defaultProps = {
  level: 1,
  className: '',
}

export default withTheme(Title)

const Heading = styled.div`
  font-family: ${(props) => props.theme.font.display.family};
  font-weight: ${(props) => props.theme.font.display.weight};
  font-size: ${(props) => props.theme.size}em;
  line-height: 1.125;
`
