const WebSocket = require('ws')

const webappSocket = new WebSocket.Server({
  noServer: true,
  rejectUnauthorized: false,
})

webappSocket.on('connection', (ws) => {
  const vivariumSocket = new WebSocket('wss://68.199.47.113:3001', {
    rejectUnauthorized: false,
  })
  vivariumSocket.on('message', (msg) => {
    ws.send(msg)
  })
})

export default function () {
  this.nuxt.hook('listen', (server) => {
    server.on('upgrade', (request, socket, head) => {
      webappSocket.handleUpgrade(request, socket, head, (ws) => {
        webappSocket.emit('connection', ws)
      })
    })
  })
}
