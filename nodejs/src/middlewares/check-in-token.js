import status from 'http-status'
import { tokenResponse } from '../lib/auth'
import r from '../lib/resjson'

export default () => {
  return async (req, res, next) => {
    let response
    // const ua = req.headers['user-agent']
    let token = req.headers['x-access-token'] || req.headers.authorization
    if (!token) {
      response = r('token tidak boleh kosong !')
      return res.status(status.UNAUTHORIZED).json({ message: response })
    } else {
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length)
        // if (/Android/i.test(ua)) {
        //   console.log('user harusnya dapet exp token 1 thn')
        // }
        const user = await tokenResponse(token)
        if (user.err) {
          response = r('token tidak valid')
          return res.status(status.UNAUTHORIZED).json({ message: response })
        } else {
          req.user = user.payload
          return next()
        }
      }
    }
  }
}
