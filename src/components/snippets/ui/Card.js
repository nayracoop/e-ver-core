import React from "react"
import styled, { withTheme } from "styled-components"

const Card = (props) => {

  return(
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default withTheme(Card)

const Wrapper = styled.article`
  padding: 2em 0;
  // border-bottom: 1px solid ${props => props.theme.color.border};
`