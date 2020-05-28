const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const app = express();
const port = process.env.SERVER_PORT || 3001;
const server = http.createServer(app);

const io = require("./io");
io.init(server);

// const routes = require("./routes");
// app.use(routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

server.listen(port, () => console.log(`Listening on port ${port}`));
