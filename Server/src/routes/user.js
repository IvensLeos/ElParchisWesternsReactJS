import express from 'express'
import Joi from 'joi'

import User from '../models/user'
import { SignUp } from '../validations/user'
import { parseError, sessionizeUser } from '../util/helpers'

const UserRouter = express.Router()

UserRouter.post('', async (req, res) => {
   try {
      
      const { username, email, password } = req.body
      await Joi.validate({ username, email, password }, SignUp)

      const NewUser = new User({ username, email, password })
      const SessionUser = sessionizeUser(NewUser)
      await NewUser.save()

      req.session.user = SessionUser
      res.send(SessionUser)
      console.log(req.session)

   } catch (error) {
      res.status(400).send(parseError(error))
   }
})

export default UserRouter