import React from 'react'
import styled from 'styled-components'
// import { Container } from "../layout"
import Title from '../snippets/ui/Title'
import Button from '../snippets/ui/Button'
import About from '../snippets/About'

const Header = ({event}) => {
  return (
    <Wrapper>
      <Title>{event.name}</Title>
      <About description={event.description} />
      <Button href="#">Call to action</Button>
    </Wrapper>
  )
}

export default Header

// border-bottom: 1px solid ${(props) => props.theme.color.border};
const Wrapper = styled.header`
  padding: 3em 0;
`
