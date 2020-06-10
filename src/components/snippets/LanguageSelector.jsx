import React from 'react'
import i18next from 'i18next'
import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

const createSelectItems = () => {
  const items = [
    { value: 'en', text: 'EN' },
    { value: 'es', text: 'ES' },
  ]
  const options = []

  items.forEach((item) => {
    options.push(
      <option key={item.value} value={item.value}>
        {item.text}
      </option>,
    )
  })

  return options
}

const LanguageSelector = () => {
  const { t } = useTranslation()

  const changeLang = (e) => {
    i18next.changeLanguage(e.target.value)
  }

  return (
    <div>
      <Label>{t('menu.language')}</Label>
      <OptionsWrapper>
        <Options type="select" onChange={changeLang} label="Language">
          {createSelectItems()}
        </Options>
      </OptionsWrapper>
    </div>
  )
}

export default LanguageSelector

const Label = styled.label`
  // align-self: end;
  // display: block;
  // font-family: ${(props) => props.theme.font.display.family};
  // font-weight: ${(props) => props.theme.font.display.weight};
  
  color: ${(props) => props.theme.color.text};
  // text-decoration: none;
  // font-size: 1.375em;
  // padding: 0.375em ${props => props.theme.layout.gap}px;
  // transition: background 200ms ease-in-out;
  // border-bottom: 1px solid ${(props) => props.theme.color.border};

  display: block;
  // line-height: 1;
`

const Options = styled.select`
  font-family: ${(props) => props.theme.font.display.family};
  font-weight: ${(props) => props.theme.font.display.weight};
  
  color: ${(props) => props.theme.color.text};
  font-size: 1.375em;

  border: 0;
  background: transparent;
  padding-right:15px;

  position: relative;
  right: -20px;
  line-height: 1;
  cursor: pointer;
`

const OptionsWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  margin-left: -23px;
`
