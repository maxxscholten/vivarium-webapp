const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Proxy for vivarium-server')
})

app.get('/mist', async (req, res) => {
  try {
    console.log('mist')
    await axios.get('/mist')
    res.send('success')
  } catch (err) {
    console.log(err)
  }
})

app.get('/lights/:status', async (req, res) => {
  try {
    const status = req.params.status
    await axios.get(`/lights/${status}`)
    res.send('success')
  } catch (err) {
    console.log(err)
  }
})

// Export the server middleware and init
module.exports = {
  path: '/api/proxy',
  handler: app,
}
