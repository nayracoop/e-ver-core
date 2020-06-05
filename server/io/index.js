const socketIo = require('socket.io')
const Moment = require('moment')

const chatMessage = (from, text, isNew) => {
  return {
    from,
    text,
    isNew,
    time: new Moment(),
  }
}

const init = (server) => {
  const io = socketIo(server)
  io.on('connection', (socket) => {
    const { user } = socket.handshake.query

    socket.emit(
      'joinMessage',
      chatMessage('Chatbot', 'Welcome', true),
    )
    socket.broadcast.emit(
      'joinMessage',
      chatMessage('Chatbot', `${user} joined`, true),
    )

    socket.on('sendMessage', (message) => {
      io.emit(
        'receiveMessage',
        chatMessage(message.from, message.text, false),
      )
    })
  })
}

module.exports = {
  init,
}
