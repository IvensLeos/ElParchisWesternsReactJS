 import React, { useState } from 'react'

 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
 import Form from 'react-bootstrap/Form'
 import Button from 'react-bootstrap/Button'

const FormLanding = props => {

   const [RenderLoggin, SetRenderLoggin] = useState(true)

   const { login, username, email, password } = props.Errors || ''
   const { Submit } = props

   const handleSubmit = (e) => {
      e.preventDefault()
      let Data = {}
      RenderLoggin ? 
         Data = {RenderLoggin,
                 email: e.target.Email.value,
                 password : e.target.Password.value}
      : 
         Data = {RenderLoggin,
                 username: e.target.Username.value,
                 email: e.target.Email.value,
                 password: e.target.Password.value}
      Submit(Data)
   }

   return (
      <>
      <Form onSubmit={e => handleSubmit(e)}>
         {!RenderLoggin && 
         <Form.Group controlId="formBasicUsername">
            <Form.Label style={({ color: 'white' })}>Nombre De Usuario:</Form.Label>
            <Form.Control name="Username" type="text" placeholder="Usuario" />
         </Form.Group>}

         <Form.Group controlId="formBasicEmail">
            <Form.Label style={({ color: 'white' })}>Correo Electronico:</Form.Label>
            <Form.Control name="Email" type="email" placeholder="Email" />

            <Form.Text className="text-muted">
               Nunca Compartas Tu Correo Electronico.
            </Form.Text>
         </Form.Group>

         <Form.Group controlId="formBasicPassword">
            <Form.Label style={({ color: 'white' })}>Contraseña:</Form.Label>
            <Form.Control name="Password" type="password" placeholder="Password" />
         </Form.Group>

         {RenderLoggin &&
         <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantenerme Conectado" defaultChecked style={({ color: 'white' })} />
         </Form.Group>}

         {RenderLoggin && login && <>
         <Form.Text style={({ backgroundColor: '#fff' ,color: 'red', fontSize: '10px' })}>
            {login && login.message}
         </Form.Text>
         <br /> </>}

         {!RenderLoggin && (username || email || password) && <>
         <Form.Text style={({ backgroundColor: '#fff' ,color: 'red', fontSize: '10px' })}>
            {username && username.message}
         </Form.Text>

         <Form.Text style={({ backgroundColor: '#fff' ,color: 'red', fontSize: '10px' })}>
            {email && email.message}
         </Form.Text>

         <Form.Text style={({ backgroundColor: '#fff' ,color: 'red', fontSize: '10px' })}>
            {password && password.message}
         </Form.Text>
         <br /> </>}

         {RenderLoggin ? 
         <Button name="Ingresar" type="submit" variant="success">INICIAR</Button>
         :
         <Button name="Registrarse" type="submit" variant="success">REGISTRARME</Button>}

         <span className="mr-2"></span>

         {!RenderLoggin ?
         <Button variant="danger" onClick={() => SetRenderLoggin(true)}>CANCELAR</Button>
         :
         <>
         <Button variant="danger">CANCELAR</Button>
         <Row>
            <Col>
               <br />
               <Button onClick={() => SetRenderLoggin(false)} variant="outline-light">CREAR CUENTA</Button>
            </Col>
         </Row> </>}
      </Form>
      </>
   )
}

export default FormLanding