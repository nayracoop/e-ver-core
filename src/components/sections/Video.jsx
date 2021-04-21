import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const Video = ({ video }) => {
  const { uri, autoplay } = video
  return <ReactPlayer url={uri} playing={autoplay} />
}

Video.propTypes = {
  video: PropTypes.shape.isRequired,
}

export default Video
