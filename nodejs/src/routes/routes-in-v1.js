import express from 'express'
import {
  checkInToken
} from './../middlewares'
import admin from './auth'
import storage from './storage'

const router = express.Router()

router.use('/admins', checkInToken(), admin)
router.use('/storage', checkInToken(), storage)

export default router
