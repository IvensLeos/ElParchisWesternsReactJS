import express from 'express'

import Users from '../models/user'

const SessionRoutes = express.Router()

SessionRoutes.post('/signup', async (req, res) => {
   try {
      const { username, email, password } = req.body
      const NewUser = new Users({ username, email, password })
      await NewUser.save()
      return res.send({ UserId: NewUser.id, Email: NewUser.email })
   } catch (error) {
      return res.send(JSON.stringify(error))
   }
})

SessionRoutes.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body
      const User = await Users.findOne({ email })
      if (User && User.comparePasswords(password)) {
         return res.send({ UserId: User.id, Email: User.email })
      }
      res.send(JSON.stringify({ errors: { login: { message: 'El Usuario O La Contraseña Son Incorrectos.' } } }))
   } catch (error) {
      return res.send(JSON.stringify(error))
   }
})

SessionRoutes.post('/logout', (req, res) => {
   ''
})

export default SessionRoutes