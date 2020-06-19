import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const Video = ({ video }) => {
  const { URI, autoplay } = video
  return <ReactPlayer url={URI} playing={autoplay} />
}

Video.propTypes = {
  video: PropTypes.shape.isRequired,
}

export default Video
