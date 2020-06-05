import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Speaker from './Speaker'

const SpeakersList = ({ speakers, titleLevel = 2 }) => {
  const list = speakers.map((speaker) => (
    <Item key={speaker.id}>
      <Speaker speaker={speaker} titleLevel={titleLevel} />
    </Item>
  ))

  return (
    <Wrapper speakers titleLevel>
      {list}
    </Wrapper>
  )
}

SpeakersList.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  titleLevel: PropTypes.number,
}
SpeakersList.defaultProps = {
  titleLevel: 2,
}

export default SpeakersList

const Wrapper = styled.ul``

const Item = styled.li`
  flex: 1;
  margin: 15px auto;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`
