import app from './app.js'
import { database } from './database'

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV

try {
  database.authenticate()
  console.log('Connection has been established successfully.')
  app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `[App] Listening on http://localhost:${PORT} in ${ENV} environment`)
  })
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
