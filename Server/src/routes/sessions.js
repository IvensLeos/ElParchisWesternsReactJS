import express from 'express'

import Users from '../models/user'

const SessionRoutes = express.Router()

SessionRoutes.get('/', async (req, res) => {
   try {
      const Session = req.session.userId
      if (Session) {
         const User = await Users.findOne({ _id: Session })
         if (User) return res.send({ User })
      } else return false
   } catch (error) {
      return res.send(JSON.stringify(error))
   }
})

SessionRoutes.post('/signup', async (req, res) => {
   try {
      const { username, email, password } = req.body
      const User = new Users({ username, email, password })
      await User.save()
      req.session.userId = User.id
      return res.send({ User })
   } catch (error) {
      return res.send(JSON.stringify(error))
   }
})

SessionRoutes.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body
      const User = await Users.findOne({ email })
      if (User && User.comparePasswords(password)) {
         req.session.userId = User.id
         return res.send({ User })
      }
      res.send(JSON.stringify({ errors: { login: { message: 'El Usuario O La Contraseña Son Incorrectos.' } } }))
   } catch (error) {
      return res.send(JSON.stringify(error))
   }
})

SessionRoutes.post('/logout', (req, res) => {
   req.logout()
   req.session = null
   //res.redirect('/')
})

export default SessionRoutes