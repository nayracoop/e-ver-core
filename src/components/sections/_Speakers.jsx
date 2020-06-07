import React from 'react'
import PropTypes from 'prop-types'
import Speaker from '../snippets/Speaker'

const Speakers = ({ speakersList }) => {
  return (
    <section>
      <h2>Disertantes</h2>
      <ul>
        {speakersList.map((s) => (
          <li key={s.id}>
            <Speaker speaker={s} />
          </li>
        ))}
      </ul>
    </section>
  )
}

Speakers.propTypes = {
  speakersList: PropTypes.shape.isRequired,
}

export default Speakers
