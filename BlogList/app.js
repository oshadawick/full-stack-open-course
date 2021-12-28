const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blog')


const mongoUrl =  config.MONGODB_URI
mongoose.connect(mongoUrl)
    .then(result => {
      logger.info('database connetcted')
    })
    .catch(error => {
        logger.error('failed')
    })


app.use(cors())
app.use(express.json())

morgan.token('type', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status ms :type'))


app.use('/api/blogs', blogRouter)

module.exports = app
