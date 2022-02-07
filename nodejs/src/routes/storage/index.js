import express from 'express'
import * as storage from '../../controllers/storage'

const router = express.Router()

router.route('/')
  .get(
    storage.read
  )
router.route('/komoditas')
  .get(
    storage.readKomoditas
  )

export default router
