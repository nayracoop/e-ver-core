import React from "react"
import styled, { withTheme } from "styled-components"

const HamburgerButton = (props) => {
  return (
    <Button {...props}>
      <Line />
      <Line>Menu</Line>
      <Line />
    </Button>
  )
}

export default withTheme(HamburgerButton)

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
`

const Line = styled.span`
  display: block;
  background-color: ${props => props.theme.color.text};
  height: 4px;
  margin: 2px 0;
  width: 100%;
  text-indent: -9999px;
  border-radius: 2px;
`