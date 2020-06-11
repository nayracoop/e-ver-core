import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Nav from './Nav'
import LanguageSelector from './LanguageSelector'
// import TimeZoneSelector from './TimeZoneSelector'

const Navbar = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <Navigation />
      <Configurations>
        <LanguageSelector />
        {/* <TimeZoneSelector /> */}
      </Configurations>
    </Wrapper>
  )
}

Navbar.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default Navbar

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  right: 0;
  transform: translateX(${(props) => props.visible ? '0' : '300px' });
  box-shadow: ${(props) => props.visible ? '-16px 0 16px rgba(0,0,0,0.08)' : '16px 0 16px rgba(0,0,0,.08);' };
  background: ${props => props.theme.color.background};
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  // border-right: 1px solid ${props => props.theme.color.border};
  padding-top: 5em;
  // padding-bottom: 2em;
  z-index: -1;

  display: flex;
  flex-flow: column wrap;
  transition: transform 300ms ease-out, box-shadow 50ms ease-out;
  transition-delay: ${(props) => props.visible ? '0s, 0s' : '0s, 250ms' };
`

const Configurations = styled.div`
  padding: 2em ${props => props.theme.layout.gap}px;
`

const Navigation = styled(Nav)`
  flex: 1;
`
