const express = require('express')
const Router = express.Router()

const UsersQuery = require('../models/querys')

//path: /api/users/username/password // return (datauser || null)

Router.get('/users/:email/:password', async (req, res) => {
   await UsersQuery.findOne(
      { Email: req.params.email.toLowerCase(), Password: req.params.password },
      { Email: 1, Username: 1, Password: 1})
      .then(user => {
         res.json(user)
      })
      .catch(err => {
         res.json(null)
      })
})

Router.post('/users/new', async (req, res) => {
   const { Email, Username, Password } = req.body
   await new UsersQuery({ Email: Email.toLowerCase(), Username, Password }).save()
      .then(user => {
         res.json(user)
      })
      .catch(err => {
         res.json(false)
      })
})

module.exports = Router