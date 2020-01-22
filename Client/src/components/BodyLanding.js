import React, { useState } from 'react'

import '../styles/BodyLanding.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../images/Logo.png'
import Inicio from '../images/Inicio.png'

import FormLanding from './FormLanding'
import ColContainer from './ColContainer'

import ToastNotification from './ToastNotification'

const BodyLanding = () => {

   const [Notification, SetNotification] = useState('')
   
   return (
      <>
      <Container fluid="true">
         <Row>
            <ColContainer InnerClass="Logo-Props" InnerElement={
               <img src={Logo} alt="Logo" style={{
                  width: '100%'
               }} />
            } />
            <Col>
               <Container className="Form-Props">
                  <Row>
                     <Col xs={3}></Col>
                     <ColContainer InnerElement={
                        <>
                           <img src={Inicio} alt="Imagen De Inicio" style={{
                              width: '80%'
                           }} />
                           <FormLanding Notification={SetNotification}/>
                        </>
                     } />
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