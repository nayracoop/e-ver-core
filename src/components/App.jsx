/* eslint global-require: 0 */
import React from 'react'
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// import Navbar from "./snippets/Navbar";
import TheHeader from './sections/TheHeader'
import Homepage from './templates/Homepage'
import TheFooter from './sections/TheFooter'
// import Event from "./Event";

import theme from '../assets/theme/ever.json'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Navbar /> language & timezone */}
        <TheHeader logo={require('../assets/img/logo.svg')} />
        {/* Acá va swtich y el template correspondiente basado en router */}
        <Homepage />

        {/* <main className="App-content">
          <Event />
        </main> */}
        <TheFooter />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  @import url('${(props) => props.theme.font.import}');
  body {
    background-color: ${(props) => props.theme.color.background};
    font: ${(props) => props.theme.font.text.weight} 100%/1.5 ${(
  props,
) => props.theme.font.text.family};
  }
`
