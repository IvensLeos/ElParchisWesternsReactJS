// ESM syntax is supported.
import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import session from 'express-session'
import connectStore from 'connect-mongo'
//import morgan from 'morgan'

import { SessionRoutes } from './routes/index'

// Database Settings & Connections
import { NODE_ENV, MONGODB_URI, SESSION_NAME, SESSION_SECRET, SESSION_LIFETIME } from './config'

(async () => {
   try {

      await mongoose.connect(MONGODB_URI, { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true })
      console.log('Conectado A MongoDB')

      const app = express()
      const MongoStore = connectStore(session)

      // Settings
      app.disable('x-powered-by')
      app.set("port", process.env.PORT || 3001)

      // Midlewares
      app.use(cors({
         "origin": "http://localhost:3000",
         "methods": ["GET, POST, DELETE"],
         "preflightContinue": false,
         "optionsSuccessStatus": 204
      }))
      //app.use(morgan('dev'))
      app.use(express.json())
      app.use(session({
         name: SESSION_SECRET,
         secret: SESSION_SECRET,
         saveUninitialized: false,
         resave: false,
         store: new MongoStore({
            mongooseConnection: mongoose.connection,
            collection: 'session',
            ttl: parseInt(SESSION_LIFETIME) / 1000
         }),
         cookie: {
            sameSite: true,
            secure: NODE_ENV === 'production',
            maxAge: parseInt(SESSION_LIFETIME)
         }
      }))

      // Static Files
      app.use(express.static(path.join(__dirname, '../../Client/build')))

      // Routes
      const ApiRouter = express.Router()
      app.use('/api', ApiRouter)
      ApiRouter.use('/session', SessionRoutes)

      app.get('*', (req, res) => {
         res.sendFile(path.join(__dirname, '../../Client/build/index.html'))
      }) 

      // Starting Server
      app.listen(app.get('port'), () => console.log(`Servidor Corriendo En http://localhost:${app.get('port')}`))

   } catch (error) { console.log(error) }
})()