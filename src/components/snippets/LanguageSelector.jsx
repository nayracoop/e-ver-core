import React from 'react'
import i18next from 'i18next'

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
      <span>{t('menu.language')}</span>
      <select type="select" onChange={changeLang} label="Language">
        {createSelectItems()}
      </select>
    </div>
  )
}

export default LanguageSelector
