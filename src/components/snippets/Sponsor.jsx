import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Sponsor = ({ sponsor }) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={sponsor.website}
      title={sponsor.name}
      sponsor
    >
      <Image
        // eslint-disable-next-line
        src={require(`../../assets/img/${sponsor.logo}`)}
        alt={sponsor.name}
      />
    </Link>
  )
}

Sponsor.propTypes = {
  sponsor: PropTypes.shape().isRequired,
}

export default Sponsor

const Link = styled.a`
  text-decoration: none;
  border: 1px solid transparent;
  display: inline-block;
  padding: 30px 15px;
  transition: all 200ms ease-in-out;
  filter: grayscale(100%);
  &:hover {
    border-color: ${(props) => props.theme.color.border};
    filter: none;
  }
`

const Image = styled.img`
  display: block;
  max-width: 100%;
`
