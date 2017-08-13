// server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

server.listen(process.env.PORT || 3001, () => {
  console.log('listening at 3001')
});

