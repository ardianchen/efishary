import express from 'express'
import { resolve } from 'path'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'

import { globalV1, authV1 } from './routes'
import { NotFoundError } from './errors/http'
import { errorToResponse, checkInKey } from './middlewares'
import logger from './log'
import morgan from 'morgan'

const app = express()

app.use('/public', express.static(resolve(__dirname, '../public')))
app.use(methodOverride())
app.use(bodyParser.json({ limit: '250kb' }))
app.use(bodyParser.urlencoded({ extended: true }))

const route = express.Router()
route.use(checkInKey())
app.use('/api', route, globalV1, authV1)

// use check server
app.get('/api/health', (req, res) => res.send('Healthy'))

// logger
app.use(morgan('combined', { stream: logger.stream }))

app.use((req, res, next) => {
  const err = new NotFoundError('Endpoint was not found')
  return next(err)
})
app.use(errorToResponse())

export default app
