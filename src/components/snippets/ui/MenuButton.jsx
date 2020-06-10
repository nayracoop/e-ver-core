import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HamburgerButton = ({ onClick, className, active }) => {

  return (
    <Button className={className} onClick={onClick} active={active}>
      <Line />
      <Line>Menu</Line>
      <Line />
    </Button>
  )
}

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string
}

export default HamburgerButton

const Button = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 5px;
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-width: 40px;

  &:hover span {
    background-color: ${(props) => props.theme.color.primary};
  }

  ${(props) => props.active ? `
    span:nth-child(1) { transform: rotate(-45deg) translateX(0); top: 8px; transition-delay: 0s, 50ms, 0s, 0s; width: 80%; }
    span:nth-child(2) { width: 0; }
    span:nth-child(3) { transform: rotate(45deg) translateX(0); top: -8px; transition-delay: 0s, 50ms, 0s, 0s; width: 80%; }
  ` : ''};
`

const Line = styled.span`
  display: block;
  background-color: ${(props) => props.theme.color.text};
  height: 4px;
  margin: 2px auto;
  width: 100%;
  text-indent: -9999px;
  border-radius: 2px;
  transition: background 200ms ease-in-out, transform 200ms ease-out, top 150ms ease-out, width 150ms ease-in-out;
  position: relative;
  top: 0;
`
