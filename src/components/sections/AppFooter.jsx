import React from 'react'
import styled from 'styled-components'
// import { Container } from "../layout"

const AppFooter = () => {
  return <Wrapper>Powered by e-ver</Wrapper>
}

export default AppFooter

const Wrapper = styled.footer`
  border-top: 1px solid ${(props) => props.theme.color.border};
  background: #fff;
  padding: 1em ${(props) => props.theme.layout.gap}px;
`
