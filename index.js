
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require('./db')
const projectRouter = require('./routes/project.router')

const app = express()
const APP_PORT = process.env.APP_PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', projectRouter)

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`))