const express = require("express");
const router = express.Router();
const http = require("http");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const pino = require("express-pino-logger")();
const app = express();
const port = process.env.SERVER_PORT || 3001;
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

router.get("/api", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.post("/api", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.use(router);

server.listen(port, () => console.log(`Listening on port ${port}`));

const io = socketIo(server);
let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const getApiAndEmit = (socket) => {
  try {
    const res = "PONG";
    socket.emit("PONG", res);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
