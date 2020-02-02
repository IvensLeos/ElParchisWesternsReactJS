import React, { useState } from 'react'

import { Redirect } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Estrellita from '../images/Estrellita.png'
import FlechaIndia from '../images/FlechaIndia.png'

import removeLocalStorage from '../util/removeLocalStorage'

const CardPlayer = (props) => {

   const [IsLoggedIn, SetIsLoggedIn] = useState(true)
   const [ViewUserInfo, SetViewUserInfo] = useState(true)
   const [UserInfo, SetUserInfo] = useState('')

   const HandleClick = () => {
      removeLocalStorage('parchis_payload')
      SetIsLoggedIn(false)
   }

   const ViewAllUserInfo = () => {
      SetViewUserInfo(false)
   }

   return (
      IsLoggedIn ? ViewUserInfo ? <Card text="white" style={{ width: '100%', backgroundColor: 'transparent' }}>
         <Card.Header><h4>TARJETA DEL JUGADOR</h4></Card.Header>
         <Image variant="top" src={props.Image} roundedCircle className="ImgClass mx-auto mt-1" />
         <Card.Body>
            <Card.Title>{props.Username}</Card.Title>
            <Card.Text>
               <strong>({props.Level})</strong>
            </Card.Text>
            <Card.Text>
               "{props.Bio}"
            </Card.Text>
            <Button variant="info" className="mt-2 mr-2" onClick={ViewAllUserInfo}>EDITAR PERFIL</Button>
            <Button variant="danger" className="mt-2" onClick={HandleClick}>CERRAR SESSION</Button>
         </Card.Body>
      </Card> 
      : 
      <>
         <Row className="mt-4 mx-auto">
            <Col xs={4}>
                  <p style={{ color: 'white', textAlign: 'left', fontSize: '18px' }} className="mt-2"><span style={{ color: '#dc3545' }}>&lt;&lt;</span> ATRAS</p>
            </Col>
            <Col xs={4} style={{ color: '#dc3545' }}>
               <Row>
                  <Col></Col>
                  <img className="Estrellas" src={Estrellita} alt="Estrella" />
                  <h1 className="TitlesHelp">MI PERFIL</h1>
                  <img className="Estrellas" src={Estrellita} alt="Estrella" />
                  <Col></Col>
               </Row>
            </Col>
            <Col xs={4}>
                  <p style={{ color: 'white', textAlign: 'right', fontSize: '18px' }} className="mt-2">SIGUIENTE <span style={{ color: '#dc3545' }}>&gt;&gt;</span></p>
            </Col>
         </Row>
         <Row className="mt-3 mx-auto">
            <Col xs={4} style={{ color: 'white', border: '1px solid white' }}>
               654
            </Col>
            <Col xs={1} className="mx-auto Flechas">
               <Row className="mt-1"></Row>
               <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
               <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
               <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
            </Col>
            <Col xs={7} style={{ color: 'white', border: '1px solid white' }}>
               654
            </Col>
         </Row>
      </>
      : <Redirect to="/" />
   )
}

export default CardPlayer

/*

<Form>
         <Form.Group controlId="formBasicUsername">
            <Form.Label style={({ color: 'white' })}>Nombre De Usuario:</Form.Label>
               <Form.Control
                  name="Username" type="text" placeholder="Usuario"
                  onChange={e => SetUserInfo(e.target.value)}
               />
         </Form.Group>
      </Form>

*/