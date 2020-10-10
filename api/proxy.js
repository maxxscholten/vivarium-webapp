const express = require('express')
const https = require('https')
const axios = require('axios')
const cors = require('cors')
const request = require('request')
const app = express()

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('Proxy for vivarium-server')
})

app.get('/stream', function (req, res) {
  var request_options = {
    url: 'http://68.199.47.113:8000/stream.mjpg',
  }

  var req_pipe = request(request_options)
  req_pipe.pipe(res)

  req_pipe.on('error', function (e) {
    console.log(e)
  })
  //client quit normally
  req.on('end', function () {
    console.log('end')
    req_pipe.abort()
  })
  //client quit unexpectedly
  req.on('close', function () {
    console.log('close')
    req_pipe.abort()
  })
})

app.get('/mist', async (req, res) => {
  try {
    console.log('mist')
    await axios.get('https://68.199.47.113:3001/mist', { httpsAgent })
    res.send('success')
  } catch (err) {
    console.log(err)
  }
})

app.get('/lights/:status', async (req, res) => {
  try {
    const status = req.params.status
    await axios.get(`https://68.199.47.113:3001/lights/${status}`, {
      httpsAgent,
    })
    res.send('success')
  } catch (err) {
    console.log('err', err)
  }
})

// Export the server middleware and init
module.exports = {
  path: '/api/proxy',
  handler: app,
}
