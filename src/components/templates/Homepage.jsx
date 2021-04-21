import React from 'react'
import styled from 'styled-components'
import Container from '../layout'
import Header from '../sections/Header'
import Countdown from '../sections/Countdown'
import Program from '../sections/Program'
import Sponsors from '../sections/Sponsors'

import { event } from '../../placeholder-data'

const Homepage = () => {
  return (
    <main>
      <Segment>
        <Container>
          <Header event={event}/>
        </Container>
      </Segment>
      <Segment>
        <Countdown startDate={event.start_time} />
      </Segment>
      <Segment>
        <Container>
          <Program talks={event.talks} onSelectTalk={() => {}} />
        </Container>
      </Segment>
      <Segment>
        <Container>
          <Sponsors sponsors={event.sponsors} />
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
