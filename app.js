const http = require('http');
const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/ws_app.html');
});

wss.on('connection', (ws) => {
wss.on('connection', function (ws) {
ws.on('message', function (message) {
console.log('received: %s', message)
})

  setInterval(
    () => ws.send(`${new Date()}`),
  )
})
})
server.listen(3000, function () {
  console.log('Server is listening on port 3000');
});