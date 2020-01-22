const express = require('express')
const app = express()
const cors = require('cors')

const path = require('path')
const morgan = require('morgan')

const { mongoose } = require('./database')

// Settings
app.set("port", process.env.PORT || 3001)

// Midlewares
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api', require('./routes/routes'))

// Static Files
app.use(express.static(path.join(__dirname, '../Client/build')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../Client/build/index.html'))
})

// Starting Server
app.listen(app.get('port'), () => {
   console.log(`Servidor Corriendo En http://localhost:${app.get('port')}`);
})