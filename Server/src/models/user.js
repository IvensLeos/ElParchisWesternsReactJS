import mongoose from 'mongoose'
import UniqueValidator from 'mongoose-unique-validator'
import { compareSync, hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { SESSION_SECRET } from '../config'

const UserSchema = new mongoose.Schema({
   username: { 
      type: String, 
      required: [true, 'Usuario: Este Campo No Puede Estar Vacio.\n'], 
      unique: true, 
      uniqueCaseInsensitive: true,
      match: [/^([a-zA-Z0-9]{4,16})+$/, 'Usuario: Debe Contener Una Longitud De 4 A 16 Caracteres Alfanumericos.\n'] 
   },
   email: { 
      type: String, 
      index: true,
      required: [true, 'Email: Este Campo No Puede Estar Vacio.\n'], 
      unique: true, 
      lowercase: true, 
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 'Email: Debe Ser De Formato: example@example.com | example@example.com.mx.\n'] 
   },
   password: { 
      type: String, 
      required: [true, 'Password: Este Campo No Puede Estar Vacio.\n'], 
      match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/, 'Password: Debe Contener Una Longitud De 8 A 20 Caracteres, Almenos Una Letra Mayuscula, Una Letra Minuscula, Un Numero Y Un Caracter Especial.\n'] 
   },
   image: { type: String, default: 'https://www.bootdey.com/img/Content/avatar/avatar7.png' }, 
   bio: { type: String, default: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
   level: { type: String, default: 'PROFICIENT' }
}, {timestamps: true})

UserSchema.plugin(UniqueValidator, { message: 'Disponibilidad: {VALUE} Ya Se Encuentra Registrado.' })

UserSchema.pre('save', function () {
   if (this.isModified('password')) {
      this.password = hashSync(this.password, 10)
   }
})

UserSchema.methods.comparePasswords = function (password) {
   return compareSync(password, this.password)
}

UserSchema.methods.generateJWT = function() {
   const today = new Date()
   const expires = new Date(today)
   expires.setDate(today.getDate() + 3)

   return jwt.sign({
      id: this._id,
      username: this.username,
      expires: parseInt(expires.getTime() / 1000)
   }, process.env.SESSION_SECRET || SESSION_SECRET)
}

UserSchema.methods.toAuthJSON = function() {
   return {
      username: this.username,
      email: this.email,
      image: this.image,
      token: this.generateJWT()
   }
}

const User = mongoose.model('Users', UserSchema)

export default User