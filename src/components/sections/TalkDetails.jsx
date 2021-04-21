import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Speaker from '../snippets/Speaker'

const TalkDetails = ({ talk }) => {
  return (
    <section className="EventDetails">
      <h2>{talk.title}</h2>
      <div className="timeDetails">
        <span>
          Fecha
          {moment(talk.start_time).format('dddd D/M/YYYY HH:mm')}
        </span>
        {' |'}
        <span>{`Duración ${talk.duration} min.`}</span>
      </div>
      <p>{talk.details}</p>
      <div>
        {talk.speakers.map((s) => (
          <Speaker speaker={s} />
        ))}
      </div>
    </section>
  )
}

TalkDetails.propTypes = {
  talk: PropTypes.shape.isRequired,
}

export default TalkDetails
