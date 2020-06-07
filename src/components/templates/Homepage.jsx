import React from 'react'
import styled from 'styled-components'
import Container from '../layout'
import Header from '../sections/Header'
import Countdown from '../sections/Countdown'
import Program from '../sections/Program'
import Sponsors from '../sections/Sponsors'

import { event, talks, sponsors } from '../../static-data'

const Homepage = () => {
  return (
    <main>
      <Segment>
        <Container>
          <Header />
        </Container>
      </Segment>
      <Segment>
        <Countdown startDate={event.startDate} />
      </Segment>
      <Segment>
        <Container>
          <Program talks={talks} onSelectTalk={() => {}} />
        </Container>
      </Segment>
      <Segment>
        <Container>
          <Sponsors sponsors={sponsors} />
        </Container>
      </Segment>
    </main>
  )
}

export default Homepage

const Segment = styled.div`
  padding-top: 4em;
  padding-bottom: 4em;
  border-bottom: 1px solid ${(props) => props.theme.color.border};

  &:last-child {
    border-bottom: 0;
  }
`
