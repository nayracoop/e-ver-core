import React from "react"
import styled, { withTheme } from "styled-components"
import Sponsor from "./Sponsor"

const SponsorsList = (props) => {

  const list = props.sponsors.map((sponsor) => (
    <Item key={sponsor.id}>
      <Sponsor sponsor={sponsor} />
    </Item>
  ))

  return (
    <Wrapper {...props}>
      {list}
    </Wrapper>
  );
}

export default withTheme(SponsorsList)

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const Item = styled.li`
  flex: 1 1 140px;
  max-width: 140px;
  text-align: center;
  margin: 10px 0;
`