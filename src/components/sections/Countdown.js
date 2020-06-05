import React from "react"
import styled, { withTheme } from "styled-components"
import { Container } from "../layout"
import CountdownTimer from "../snippets/CountdownTimer"
import Title from "../snippets/ui/Title"

const Countdown = (props) => {

  return (
    <Container>
      <SectionTitle level={2} small>E-ver comenzará en</SectionTitle>
      <CountdownTimer startDate={props.startDate} />
    </Container>
  )
}

export default withTheme(Countdown)

// const Wrapper = styled.div`
//   background: ${props => props.theme.color.primary};
//   padding: 0.75em 0 1.5em;
// `

const SectionTitle = styled(Title)`
  font-size: 1.25em;
  text-align: center;
  margin-bottom: 0.5em;
`