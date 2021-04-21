/* eslint global-require: 0 */
import React, { useState, useEffect } from 'react'
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// import Navbar from "./snippets/Navbar";
import TheHeader from './sections/TheHeader'
import Homepage from './templates/Homepage'
import TheFooter from './sections/TheFooter'
// import Event from "./Event";

import theme from '../assets/theme/ever.json'
import { event_placeholder } from '../placeholder-data'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

const App = () => {
  const [event, setEvent] = useState(event_placeholder)

  useEffect(() => {    
    fetch(url + '/api/events/' +'13') // hardcoding event id for now
      .then(res => res.json())
      .then((res) => {
        setEvent(res.data)
      })
      .catch(e => {
        setEvent(event_placeholder)
      })
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Navbar /> language & timezone */}
        <TheHeader logo={require('../assets/img/logo.svg')} />
        {/* Acá va swtich y el template correspondiente basado en router */}
        <Homepage event={event} />

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
