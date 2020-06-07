import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../snippets/ui/Title'
import ConferencesList from '../snippets/ConferencesList'

const Program = ({ talks }) => {
  return (
    <Wrapper>
      {/* <Timeline /> */}
      <Title level={2}>Programa</Title>
      <ConferencesList conferences={talks} />
    </Wrapper>
  )
}

Program.propTypes = {
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  ).isRequired,
}

export default Program

const Wrapper = styled.section`
  position: relative;
`

// const Timeline = styled.div`
//   width: 300px;
//   border: 1px dashed ${props => props.theme.color.text};
//   border-left: 0;
//   position: absolute;
//   left: -300px;
//   top: 3.5em;
//   bottom: 0;
//   // border-radius: 16px;
// `
