import status from 'http-status'
import r from '../lib/resjson'
require('dotenv').config()

export default () => {
  return (req, res, next) => {
    let response
    if (!req.headers['x-auth']) {
      response = r('missing x-auth key')
      return res.status(status.BAD_REQUEST).json(response)
    }

    if (req.headers['x-auth'] !== process.env.TOKEN_KEY) {
      response = r('key not available')
      return res.status(status.BAD_REQUEST).json(response)
    }

    return next()
  }
}
