const express = require('express')
const app = express()
const server = require("http").Server(app)

const path = require('path')
const morgan = require('morgan')

const { mongoose } = require('./database')

// Settings
const PORT = process.env.PORT || 3001
app.set("port", PORT)

// Midlewares
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
server.listen(PORT, () => {
   console.log(`Servidor Corriendo En http://localhost:${PORT}`);
})