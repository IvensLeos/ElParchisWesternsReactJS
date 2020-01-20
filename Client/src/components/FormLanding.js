import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Redirect } from 'react-router-dom'

class FormLanding extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         FormLoggin: true,
         IsLoggedIn: false,
         Username: '',
         Email: '',
         Password: ''
      }
   }

   RenderForm = (props) => {
      return (
         <>
            <Form>
               {this.state.FormLoggin ? '' : 
                  <Form.Group controlId="formBasicUsername">
                     <Form.Label>Nombre De Usuario:</Form.Label>
                     <Form.Control onChange={this.ChangeFormStateInputs} type="text" placeholder="Usuario" />
                  </Form.Group>
               }
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo Electronico:</Form.Label>
                  <Form.Control onChange={this.ChangeFormStateInputs} type="email" placeholder="Email" />
                  <Form.Text className="text-muted">
                     Nunca Compartas Tu Correo Electronico.
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control onChange={this.ChangeFormStateInputs} type="password" placeholder="Password" />
               </Form.Group>

               {this.state.FormLoggin ? 
               <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Mantenerme Conectado" />
               </Form.Group> : ''
               }

               <Button onClick={this.SubmitToServer} type="submit" variant="success">{props.Action}</Button>
               
               <span className="mr-2"></span>

               {this.state.FormLoggin ? 
                  <Button variant="danger">CANCELAR</Button>
                  :
                  <Button variant="danger" onClick={this.ChangeFormState}>CANCELAR</Button>
               }

               {this.state.FormLoggin ? 
                  <Row>
                     <Col>
                        <br />
                        <Button onClick={this.ChangeFormState} variant="outline-light">CREAR CUENTA</Button>
                     </Col>
                  </Row>
                  : ''
               }
            </Form>

            {this.state.IsLoggedIn ? <Redirect to="/dashboard" /> : ''}

         </>
      )
   }

   ChangeFormStateInputs = (e) => {
      this.setState=({})
   }

   SubmitToServer = (e) => {
      e.preventDefault()
      console.log()
   }

   ChangeFormState = () => {
      this.state.FormLoggin ? 
         this.setState({ FormLoggin: false }) 
         : 
         this.setState({ FormLoggin: true })
   }

   render() {
      return this.state.FormLoggin ? 
         <this.RenderForm Action="INICIAR" />
         :
         <this.RenderForm Action="REGISTRARME" />
   }
}

export default FormLanding