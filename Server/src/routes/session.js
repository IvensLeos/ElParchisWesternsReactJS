import express from 'express'
import Joi from 'joi'

import User from '../models/user'
import { SignIn } from '../validations/user'
import { parseError, sessionizeUser } from '../util/helpers'
import { SESSION_NAME } from '../config'

const SessionRouter = express.Router()

SessionRouter.post('', async (req, res) => {
   try {
      
      const { email, passowrd } = req.body
      await Joi.validate({ email, passowrd }, SignIn)

      const user = User.findOne({ email })
      if (user && user.comparePasswords(password)) {
         const SessionUser = sessionizeUser(user)

         req.session.user = SessionUser
         res.send(SessionUser)
      } else {
         throw new Error('El Usuario O La Contraseña Son Incorrectos.')
      }

   } catch (error) {
      res.status(401).send(parseError(error))
   }
})

SessionRouter.delete('', ({ session }, res) => {
   try {
      
      const user = session.user
      if (user) {
         session.destroy(error => {
            if (error) throw (error)

            res.clearCookie(SESSION_NAME)
            res.send(user)
         })
      } else {
         throw new Error('Algo Sali Mal...')
      }
   } catch (error) {
      res.status(422).send(parseError(error))
   }
})

SessionRouter.get('', ({ session: { user }}, res) => {
   res.send({ user })
})

export default SessionRouter