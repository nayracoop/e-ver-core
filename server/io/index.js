const socketIo = require("socket.io");
const moment = require("moment");

const init = (server) => {
  const io = socketIo(server);
  io.on("connection", (socket) => {
    const { user } = socket.handshake.query;

    socket.emit("joinMessage", chatMessage("Chatbot", "Welcome", true));
    socket.broadcast.emit(
      "joinMessage",
      chatMessage("Chatbot", `${user} joined`, true)
    );

    socket.on("sendMessage", (message) => {
      io.emit("receiveMessage", chatMessage(message.from, message.text, false));
    });
  });
};

const chatMessage = (from, text, isNew) => {
  return {
    from,
    text,
    isNew,
    time: new moment(),
  };
};

module.exports = {
  init,
};
