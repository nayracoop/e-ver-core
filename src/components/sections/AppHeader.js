import React from "react"
import styled, { withTheme } from "styled-components"
// import { Container } from "../layout"
// import Navbar from "../snippets/Navbar"
import MenuButton from "../snippets/ui/MenuButton"

const AppHeader = (props) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={props.logo} />
      </LogoWrapper>
      <Button />
      {/* <Navbar /> */}
    </Wrapper>
  );
};

export default withTheme(AppHeader)

const Wrapper = styled.header`
  border-bottom: 1px solid ${props => props.theme.color.border};
  background: #fff;
  display: flex;
`
  
const LogoWrapper = styled.div`
  flex: 1;
  padding: 1em ${props => props.theme.layout.gap}px;
`

const Logo = styled.img`
  display: block;
  max-height: 24px;
`

const Button = styled(MenuButton)`
  padding: 0 ${props => props.theme.layout.gap}px;
  min-height: 100%;
  min-width: 80px;
  border-left: 1px solid ${props => props.theme.color.border};
`
