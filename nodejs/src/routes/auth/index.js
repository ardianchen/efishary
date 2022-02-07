import express from 'express'
import * as auth from '../../controllers/auth'
import { inputValidation } from '../../middlewares'
import * as validations from './validations'

const router = express.Router()

router.route('/')
  .get(
    auth.read
  )
  .post(
    inputValidation(validations.post),
    auth.post
  )
router.route('/login')
  .post(
    // inputValidation(validations.post),
    auth.login
  )
router.route('/:id')
  .get(
    auth.detail
  )
  .put(
    inputValidation(validations.post),
    auth.update
  )
  .delete(
    auth.remove
  )

export default router
