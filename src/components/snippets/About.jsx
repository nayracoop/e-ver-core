import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ReactMarkdown source={t('about')} />
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  p {
    font-size: 1.25em;
    margin: 1em 0;
  }
`
