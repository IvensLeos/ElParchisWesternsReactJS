import React, { useState } from 'react'

import '../styles/BodyLanding.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../images/Logo.png'
import Inicio from '../images/Inicio.png'

import FormLanding from './FormLanding'

import ToastNotification from './ToastNotification'

const BodyLanding = () => {

   const [Notification, SetNotification] = useState('')
   
   return (
      <>
      <Container fluid="true">
         <Row>
            <Col>
               <Container className="Logo-Props">
                     <img src={Logo} alt="Logo" style={{width: '100%'}} />
               </Container>
            </Col>
            <Col className="mr-3">
               <Container className="Form-Props">
                  <Row>
                     <Col xs={3}></Col>
                     <Col>
                        <Container>
                           <>
                              <img src={Inicio} alt="Imagen De Inicio" style={{width: '80%'}} />
                              <FormLanding Notification={SetNotification} />
                           </>
                        </Container>
                     </Col>
                     <Col xs={3}></Col>
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
         {Notification ? <ToastNotification Notes={Notification} Notification={SetNotification} /> : ''}
   </>
   )
   
}

export default BodyLanding