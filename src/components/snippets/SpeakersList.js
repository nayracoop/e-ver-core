import React from "react"
import styled, { withTheme } from "styled-components"
import Speaker from "./Speaker"

const SpeakersList = (props) => {

  const { titleLevel = 2 } = props

  const list = props.speakers.map((speaker) => (
    <Item key={speaker.id}>
      <Speaker speaker={speaker} titleLevel={titleLevel} />
    </Item>
  ))

  return (
    <Wrapper {...props}>
      {list}
    </Wrapper>
  );
}

export default withTheme(SpeakersList)

const Wrapper = styled.ul`
  
`

const Item = styled.li`
  flex: 1;
  margin: 15px auto;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`