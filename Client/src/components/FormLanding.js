import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Redirect } from 'react-router-dom'

const FormLanding = (props) => {

   const { Notification } = props

   const [Username, SetUsername] = useState('')
   const [Email, SetEmail] = useState('')
   const [Password, SetPassword] = useState('')
   const [RenderFormLoggin, SetRenderFormLoggin] = useState(true)
   const [IsLoggedIn, SetIsLoggedIn] = useState(false)
   const [Count, SetCount] = useState(0)

   const handleSubmit = (e) => {
      //Development Mode   fetch('http://localhost:3001/api/users/:username/:password')
      //Production Mode    fetch('/api/users/:username/:password')

      //User For Test: ochenteros@gmail.com Holamam*01

      e.preventDefault()
      console.log(`${Username} - ${Email} - ${Password}`)

      if (e.target.name === 'Ingresar') {
         fetch(`http://localhost:3001/api/users/${Email}/${Password}`)
            .then(response => response.json())
            .then(data => {
               return data ? 
                  SetIsLoggedIn(true)
                  : 
                  'NotificationError()'
            })
            .catch(error => Notification(`Error:`))
      }

   }

   const NotificationError = () => {
      SetCount(Count + 1)
      console.log(Count)
      Notification(`${Count}: Usuario O Contraseña Incorrectos Intente De Nuevo...`)
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
               <Form.Text className="text-muted">
                  Nunca Compartas Tu Correo Electronico.
                  </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
               <Form.Label style={({ color: 'white' })}>Contraseña:</Form.Label>
               <Form.Control name="Password" onChange={(e) => SetPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            {RenderFormLoggin ?
               <>
               <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Mantenerme Conectado" style={({ color: 'white' })} />
               </Form.Group> 
               <Button name="Ingresar" onClick={handleSubmit} type="submit" variant="success">INICIAR</Button>
               </>
               : 
               <Button name="Registrarse" onClick={handleSubmit} type="submit" variant="success">REGISTRARME</Button>
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