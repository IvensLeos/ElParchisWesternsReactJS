import React from 'react'

import '../../assets/styles/BodyLanding.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../../assets/images/Logo.png'
import Inicio from '../../assets/images/Inicio.png'

import WrapperForm from './WrapperForm'

const BodyLanding = props => {

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
                              <WrapperForm User={props.User}/>
                           </>
                        </Container>
                     </Col>
                     <Col xs={3}></Col>
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
      </>
   )
   
}

export default BodyLanding