import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ConferenceCard from './ConferenceCard'

const ConferencesList = ({ conferences }) => {
  const list = conferences.map((conference) => (
    <Item key={conference.id}>
      <ConferenceCard
        key={conference.id}
        onSelectTalk={() => {}}
        info={conference}
      />
    </Item>
  ))

  return <Wrapper>{list}</Wrapper>
}

ConferencesList.propTypes = {
  conferences: PropTypes.arrayOf(PropTypes.shape()).isRequired,
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
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  &:last-child {
    border: 0;
  }
`
