import React from "react"
import styled, { withTheme } from "styled-components"
// import { Container } from "../layout"
import Title from "../snippets/ui/Title"
import Button from "../snippets/ui/Button"
import About from "../snippets/About"

const Header = ({ props }) => {
  return (
    <Wrapper>
      <Title>Este es el título del evento</Title>
      <About />
      <Button href="#">Call to action</Button>
    </Wrapper>
  );
};

export default withTheme(Header)

const Wrapper = styled.header`
  // border-bottom: 1px solid ${props => props.theme.color.border};
  padding: 3em 0;
`
