import React from "react"
import styled, { withTheme } from "styled-components"
import ConferenceCard from "../snippets/ConferenceCard"

const ConferencesList = (props) => {

  const list = props.conferences.map((conference) => (
    <Item key={conference.id}>
      <ConferenceCard key={conference.id} onSelectTalk={() => { }} info={conference} />
    </Item>
  ))

  return (
    <Wrapper>
      {list}
    </Wrapper>
  );
}

export default ConferencesList

const Wrapper = styled.ol`
  display: flex;
  flex-flow: column wrap;
`

const Item = styled.li`
  flex: 1;
  margin: 0.5em auto;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  &:last-child {
    border: 0;
  }
`