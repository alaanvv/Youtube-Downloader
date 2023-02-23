const express = require('express')
const cors = require('cors')
const { Router } = require('express')
const download = require('./download')

const router = Router()
router.use(cors())
router.use(express.json())

router.get('/', (req, res) => res.sendFile(process.cwd() + '/html/index.html'))
router.get('/download/:cod/:format', download)

module.exports = router