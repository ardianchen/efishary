// import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import { checkEmail } from '../../repositories/admin'

export const verfyPass = async (pass, hashPass) => {
  let val = false
  if (hashPass === pass) val = true
  return val
}
// export const verfyPass = async (pass, hashPass) => await argon2.verify(hashPass, pass)

export const checkPassword = async (payload) => {
  let dataToken = {}
  const dataMember = await checkEmail(payload.username)
  if (dataMember) {
    if (await verfyPass(payload.password, dataMember.password)) {
      const rawToken = jwt.sign({
        id: dataMember.id,
        name: dataMember.name,
        username: dataMember.username
      }, process.env.SECRET, {
        expiresIn: '30d'// expired in 1 year
      })
      await tokenResponse(rawToken)
      // dataMember.dataValues.iat = tknRespon.payload.iat
      // dataMember.dataValues.exp = tknRespon.payload.exp
      dataToken = {
        code: 0,
        res: {
          user: dataMember,
          token: rawToken
        }
      }
    } else {
      dataToken = { code: 1, res: 'password or email not match' }
    }
  } else {
    dataToken = { code: 2, res: 'user not found' }
  }
  return dataToken
}

export const tokenResponse = (payload) => new Promise((resolve) => {
  let data = {}
  jwt.verify(payload, process.env.SECRET, async (err, decoded) => {
    if (err) {
      data = { err: true, payload: {} }
    } else {
      data = { err: false, payload: decoded }
    }
    resolve(data)
  })
})
