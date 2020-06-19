import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
// import LanguageSelector from './LanguageSelector'
// import TimeZoneSelector from './TimeZoneSelector'

const Nav = ({ className }) => {
  return (
    <Wrapper className={className}>
      <ul>
        <Item><Link exact to="/" activeClassName="active">Home: Upcoming event</Link></Item>
        <Item><Link exact to="/ongoing" activeClassName="active">Home: Ongoing event</Link></Item>
        <Item><Link exact to="/talk" activeClassName="active">Home: Talk</Link></Item>
      </ul>
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.nav` 
`

const Item = styled.li`
`

const Link = styled(NavLink)`
  display: block;
  font-family: ${(props) => props.theme.font.display.family};
  font-weight: ${(props) => props.theme.font.display.weight};
  font-size: ${(props) => props.theme.size}em;
  color: ${(props) => props.theme.color.text};
  text-decoration: none;
  font-size: 1.25em;
  padding: 0.75em ${props => props.theme.layout.gap}px;
  margin: 0.25em auto;
  transition: background 200ms ease-in-out, color 200ms ease-in-out;
  // border-bottom: 1px solid ${(props) => props.theme.color.border};

  &:hover, &:focus {
    color: ${(props) => props.theme.color.primary};
  }
  
  &.active {
    background: ${(props) => props.theme.color.text}11;
  }
`