import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Sponsor from './Sponsor'

const SponsorsList = ({ sponsors }) => {
  const list = sponsors.map((sponsor) => (
    <Item key={sponsor.id}>
      <Sponsor sponsor={sponsor} />
    </Item>
  ))

  return <Wrapper sponsors>{list}</Wrapper>
}

SponsorsList.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default SponsorsList

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
