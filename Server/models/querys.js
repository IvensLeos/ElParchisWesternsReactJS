const mongoose = require('mongoose')

const { Schema } = mongoose

const UsersSchema = new Schema({
   Email: { type: String, required: true },
   Username: { type: String, required: true },
   Password: { type: String, required: true }
})

module.exports = mongoose.model('users', UsersSchema)