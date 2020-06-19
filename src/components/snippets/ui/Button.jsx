import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ children, className, style }) => {
  return <Link className={className} style={style} href='""'>{children}</Link>
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.string
}

export default Button

const Link = styled.a`
  display: inline-block;
  font-family: ${(props) => props.theme.font.display.family};
  font-weight: ${(props) => props.theme.font.display.weight};
  font-size: 1.25em;
  background-color: ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.background};
  padding: 0.5em ${(props) => props.theme.layout.gap}px;
  border: 1px solid ${(props) => props.theme.color.text};
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};
  }
`
