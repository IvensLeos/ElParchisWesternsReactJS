const mongoose = require('mongoose')

const URL = 'mongodb+srv://mongo:mongoose@cluster0-0hr3i.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URL, { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true })
   .then(db => console.log('Conectado A MongoDB'))
   .catch(err => console.log(`No Se Pudo Establecer Conexion A MongoDB: ${err}`))

module.exports = mongoose