import React from "react"
import styled, { withTheme } from "styled-components"
import Title from "./ui/Title";

const Speaker = (props) => {

  const { titleLevel = 2 } = props

  return (
    <Wrapper>
      <Image alt="foto de " src={require(`../../assets/img/${props.speaker.avatar}`)} />
      <Info>
        <Name level={4}>{props.speaker.name}</Name> 
        <Role>{props.speaker.role}</Role>
        <Company>{props.speaker.company}</Company>
      </Info>
    </Wrapper>
  );
}

export default withTheme(Speaker)

const Wrapper = styled.article`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

const Image = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: block;
  margin-right: 15px;
  border: 1px solid ${props => props.theme.color.text};
`

const Info = styled.div`
  flex: 1;
`

const Name = styled(Title)`
  font-size: 1em;
  margin-bottom: 0.5em;
`

const Role = styled.p`
  font-size: 0.875em;
  line-height: 1.25;
`

const Company = styled.p`
  font-size: 0.875em;
  line-height: 1.25;
  opacity: 0.65;
`