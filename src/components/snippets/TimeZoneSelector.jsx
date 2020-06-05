import React, { useState } from 'react'
import moment from 'moment-timezone'

import { useTranslation } from 'react-i18next'

const formatTimezone = (tzString) =>
  `(GMT${moment.tz(tzString).format('Z')}) ${tzString}`

const getTimezoneProps = (tzString) => {
  const tz = moment.tz(tzString)
  const tzStringOffset = tz
    .format('Z')
    .replace(':00', '')
    .replace(':30', '.5')
  const x =
    tzStringOffset === 0 ? 0 : parseInt(tzStringOffset, 10).toFixed(2)

  return {
    label: formatTimezone(tzString),
    value: `${tzString}`,
    time: `${x}`,
    offset: tz.offset,
  }
}

const createSelectItems = () => {
  const timeZones = moment.tz
    .names()
    .map((tz) => {
      return getTimezoneProps(tz)
    })
    .sort((el) => -el.time)

  const options = []

  timeZones.forEach((timeZone) => {
    options.push(
      <option key={timeZone.offset} value={timeZone.value}>
        {timeZone.label}
      </option>,
    )
  })

  return options
}

const TimeZoneSelector = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    moment.tz.guess(),
  )
  const { t } = useTranslation()

  const changeLang = (e) => {
    setSelectedTimeZone(e.target.value)
  }

  return (
    <div>
      <span>{t('menu.timezone')}</span>
      <select
        type="select"
        onChange={changeLang}
        value={selectedTimeZone}
      >
        {createSelectItems()}
      </select>
    </div>
  )
}

export default TimeZoneSelector
