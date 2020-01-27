import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Redirect } from 'react-router-dom'

const FormLanding = (props) => {

   const [Username, SetUsername] = useState('')
   const [Email, SetEmail] = useState('')
   const [Password, SetPassword] = useState('')
   const [RenderFormLoggin, SetRenderFormLoggin] = useState(true)
   const [IsLoggedIn, SetIsLoggedIn] = useState(false)

   const [InputUsernameError, SetInputUsernameError] = useState('')
   const [InputEmailError, SetInputEmailError] = useState('')
   const [InputPasswordError, SetInputPasswordError] = useState('')
   const [InputLoginError, SetInputLoginError] = useState('')

   const SubmitForm = e => {
      e.preventDefault()
      const user = { username: Username, email: Email, password: Password }
      if (e.target.name === 'Registrarse') {
         fetch('/api/session/signup', {
            method: 'POST', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' }
         })
            .then(r => r.json()).then(data => {
               ErrorsController(data.errors)
               if (data.UserId) SetIsLoggedIn(true)
            })
      }
      if (e.target.name === 'Ingresar') {
         fetch('/api/session/login', {
            method: 'POST', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' }
         })
            .then(r => r.json()).then(data => {
               ErrorsController(data.errors)
               if (data.UserId)  SetIsLoggedIn(true)
            })
      }
   }

   function ErrorsController(Errors) {
      if (Errors) {
         Errors.username ? SetInputUsernameError(Errors.username.message) : SetInputUsernameError('')
         Errors.email ? SetInputEmailError(Errors.email.message) : SetInputEmailError('')
         Errors.password ? SetInputPasswordError(Errors.password.message) : SetInputPasswordError('')
         Errors.login ? SetInputLoginError(Errors.login.message) : SetInputLoginError('')
      } else {
         SetInputUsernameError('')
         SetInputEmailError('')
         SetInputPasswordError('')
         SetInputLoginError('')
      }
   }

   return (
      <>
         {IsLoggedIn ? <Redirect to="/dashboard"/> : ''}
         <Form>
            {RenderFormLoggin ? '' :
               <Form.Group controlId="formBasicUsername">
                  <Form.Label style={({ color: 'white' })}>Nombre De Usuario:</Form.Label>
                  <Form.Control name="Username" onChange={(e) => SetUsername(e.target.value)} type="text" placeholder="Usuario" />
               </Form.Group>
            }
            <Form.Group controlId="formBasicEmail">
               <Form.Label style={({ color: 'white' })}>Correo Electronico:</Form.Label>
               <Form.Control name="Email" onChange={(e) => SetEmail(e.target.value)} type="email" placeholder="Email" />
               <Form.Text className="text-muted" >
                  Nunca Compartas Tu Correo Electronico.
               </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
               <Form.Label style={({ color: 'white' })}>Contraseña:</Form.Label>
               <Form.Control name="Password" onChange={(e) => SetPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            {RenderFormLoggin ?
               <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Mantenerme Conectado" style={({ color: 'white' })} />
               </Form.Group>: ''
            }

            {RenderFormLoggin ?
               InputLoginError ?
                  <>
                     <Form.Text style={({ color: 'red', fontSize: '10px' })} >
                        {InputLoginError}
                     </Form.Text>
                     <br />
                  </> : ''
               :
               InputUsernameError || InputEmailError || InputPasswordError ?
                  <>
                     <Form.Text style={({ color: 'red', fontSize: '10px' })} >
                        {InputUsernameError}
                     </Form.Text>
                     <Form.Text style={({ color: 'red', fontSize: '10px' })} >
                        {InputEmailError}
                     </Form.Text>
                     <Form.Text style={({ color: 'red', fontSize: '10px' })} >
                        {InputPasswordError}
                     </Form.Text>
                     <br />
                  </> : ''
            }

            {RenderFormLoggin ?
               <Button name="Ingresar" onClick={SubmitForm} type="submit" variant="success">INICIAR</Button>
               : 
               <Button name="Registrarse" onClick={SubmitForm} type="submit" variant="success">REGISTRARME</Button>
            }

            <span className="mr-2"></span>

            {RenderFormLoggin ?
               <>
               <Button variant="danger">CANCELAR</Button>
               <Row>
                  <Col>
                     <br />
                     <Button onClick={() => SetRenderFormLoggin(false)} variant="outline-light">CREAR CUENTA</Button>
                  </Col>
               </Row>
               </>
               :
               <Button variant="danger" onClick={() => SetRenderFormLoggin(true)}>CANCELAR</Button>
            }
         </Form>
      </>
   )
}

export default FormLanding