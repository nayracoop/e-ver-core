import React from "react"
import styled, { withTheme } from "styled-components"
import { Container } from "../layout"
import Navbar from "../snippets/Navbar"

const AppHeader = (props) => {
  return (
    <Wrapper>
      <Logo src={props.logo} />
      {/* <Navbar /> */}
    </Wrapper>
  );
};

export default withTheme(AppHeader)

const Wrapper = styled.header`
  border-bottom: 1px solid ${props => props.theme.color.border};
  background: #fff;
  padding: 1em ${props => props.theme.layout.gap}px;
`

const Logo = styled.img`
  display: block;
  max-height: 24px;
`
