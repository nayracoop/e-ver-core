import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import socketIOClient from 'socket.io-client'
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator'
import Comment from './Comment'

const randomName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals],
  length: 2,
})
const socket = socketIOClient(`?user=${randomName}`)

// const CommentList = ({ selectedTalk }) => {
const CommentList = () => {
  const [commentList, setCommentList] = useState(new Set())
  const [comment, setComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    socket.emit('sendMessage', {
      from: randomName,
      text: comment,
    })
    setComment('')
  }

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setCommentList((prev) => new Set(prev.add(message)))
    })

    socket.on('joinMessage', (message) => {
      setCommentList((prev) => new Set(prev.add(message)))
    })
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Post comment:</strong>
        </p>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {[...commentList.values()].map((comm) => (
        <Comment key={`${comm.from}:${comm.time}`} comment={comm} />
      ))}
    </>
  )
}

// CommentList.propTypes = {
//   selectedTalk: PropTypes.shape.isRequired,
// }

export default CommentList
