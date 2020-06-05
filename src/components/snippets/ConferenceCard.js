import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
// import styled, { withTheme } from "styled-components"
import Card from "./ui/Card"
import Title from "./ui/Title"
import Button from "./ui/Button"
import SpeakersList from "./SpeakersList"

const ConferenceCard = (props) => {
  return (
    <Card>
      <Time>Fecha: { props.info.datetime }</Time>
      <CardTitle level={3}>{props.info.title}</CardTitle>
      <Summary>
        <ReactMarkdown source={props.info.summary} />
      </Summary>
      <ViewButton onClick={() => props.onSelectTalk(props.info)}>Ver</ViewButton>
      <Speakers speakers={props.info.speakers} titleLevel={4} />
    </Card>
  );
}

export default ConferenceCard

const CardTitle = styled(Title)`
  font-size: 1.25em;
  margin-top: 0.125em;

  // position: relative;
  // &::after {
  //   content: "";
  //   display: block;
  //   width: 12px;
  //   height: 12px;
  //   background: ${props => props.theme.color.primary};
  //   position: absolute;
  //   top: 5px;
  //   left: -31px;
  //   border-radius: 50%;
  // }
`

const Time = styled.p`
  font-family: ${props => props.theme.font.display.family};
  font-weight: ${props => props.theme.font.display.weight};
  font-size: 1em;
  opacity: 0.5;
`

const Summary = styled.div`
  p {
    margin: 1em 0;
  }
`

const ViewButton = styled(Button)`
  font-size: 1em;
`

const Speakers = styled(SpeakersList)`
  margin-top: 2em;
`