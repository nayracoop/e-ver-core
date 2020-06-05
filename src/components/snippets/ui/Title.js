import React from "react"
import styled, { withTheme } from "styled-components"

const Title = (props) => {
  const { level = 1 } = props
  const size = level === 1 ? 2.25 : 1.75
  return <Heading className={props.className} as={`h${level}`} theme={{...props.theme, size }}>{props.children}</Heading>
}

export default withTheme(Title)

const Heading = styled.div`
  font-family: ${props => props.theme.font.display.family};
  font-weight: ${props => props.theme.font.display.weight};
  font-size: ${props => props.theme.size}em;
  line-height: 1.125;
`