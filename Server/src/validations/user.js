import Joi from 'joi'

const email = Joi.string().email().required()
const username = Joi.string().alphanum().min(3).max(30).required()

const message = 'La Contraseña Debe Tener Entre 6-16 Caracteres, ' +
   'Debe Tener Almenos Una Letra Mayuscula, ' +
   'Una Letra Miniscula, Un Numero, ' +
   'Y Un Caracter Especial, '

const password = Joi.string()
   .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
   .options({
    language: {
       string: {
          regex: {
             base: message
          }
       }
    }  
   })

export const SignUp = Joi.object().keys({
   email,
   username,
   password
})

export const SignIn = Joi.object().keys({
   email,
   password
})