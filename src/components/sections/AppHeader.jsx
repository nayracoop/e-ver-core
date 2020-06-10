import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { Container } from "../layout"
import Navbar from "../snippets/Navbar"
import MenuButton from '../snippets/ui/MenuButton'

const AppHeader = ({ logo }) => {

  const [ opened, setOpened ] = useState(false)

  const buttonClickHandler = () => {
    setOpened(!opened)
  }

  const exit = () => {
    setOpened(false)
  }

  useEffect(() => {
    // if(opened) document.body.style.overflow = 'hidden'
    // else document.body.style.overflow = 'visible'
    if(opened) document.addEventListener('keypress', exit, false)
    else document.removeEventListener('keypress', exit)

    return () => {
      // document.body.style.overflow = 'visible'
    }
  }, [opened])

  return (
    <Wrapper>
      <MainBar>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <Button active={opened} onClick={buttonClickHandler} />
      </MainBar>
      <Overlay visible={opened} onClick={exit} />
      <Navbar visible={opened} />
    </Wrapper>
  )
}

AppHeader.propTypes = {
  logo: PropTypes.string.isRequired,
}

export default AppHeader

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`

const MainBar = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  background: #fff;
  display: flex;
`

const LogoWrapper = styled.div`
  flex: 1;
  padding: 1em ${(props) => props.theme.layout.gap}px;
`

const Logo = styled.img`
  display: block;
  max-height: 24px;
`

const Button = styled(MenuButton)`
  padding: 0 15px;
  min-height: 100%;
  min-width: 65px;
  border-left: 1px solid ${(props) => props.theme.color.border};
`

const Overlay = styled.div`
  display: block;
  z-index: -1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.1);
  opacity: ${(props) => props.visible ? 1 : 0};
  pointer-events: ${(props) => props.visible ? 'auto' : 'none'};
  transition: opacity 100ms ease-out;
`
