const express = require('express')
const downloadVideo = require('./download')
const fs = require('fs')

const app = express()

// ROTAS
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})
app.get('/download/:id/:format', async (req, res) => {
  const link = 'https://www.youtube.com/watch?v=' + req.params.id
  const format = req.params.format
  await downloadVideo(link, format)
  .then(() => {
    return res.download('video.mp4')
  })
})

app.listen(6969, e => { console.log('server running at http://localhost:6969') })
