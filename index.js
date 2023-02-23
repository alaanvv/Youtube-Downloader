const express = require('express')
const cors = require('cors')
const router = require('./lib/routes')

const app = express()
const port = 6969

app.use(cors())
app.use(router)

console.log('Teste: http://localhost:6969/download/ktqZi5d-msk/video')
app.listen(port, () => console.log('Server runing in port http://localhost:' + port))