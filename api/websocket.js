const express = require('express')
const https = require('https')
const app = express()
const WebSocket = require('ws')
const path = require('path')
const fs = require('fs')

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})

/* const server = https.createServer(
  {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
  },
  app
)*/

const webappSocket = new WebSocket.Server({
  port: 3001,
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

// Export the server middleware and init
module.exports = {
  path: '/',
  handler: app,
}
