import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import StripeCard from './StripeCard'

import { Redirect } from 'react-router-dom'

import '../styles/BodyDashboard.css'

import CardPlayer from '../components/CardPlayer'
import HelpUser from '../components/HelpUser'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Variables from '../util/config'
import Button from 'react-bootstrap/Button'

const BodyDashboard = (props) => {
   
   //LogOut: removeLocalStorage('parchis_payload')

   const [payload, Setpayload] = useLocalStorage('parchis_payload', '')
   const [UserParams, SetUserParams] = useState('')
   const [Tablero, SetTablero] = useState(false)
   
   function FetchData(payload) {
      if (payload) {
         fetch(`${Variables.SERVER_PATH}/api/session/get/user`, {
            method: 'POST', body: JSON.stringify({_id : payload}), headers: { 'Content-Type': 'application/json' }
         })
            .then(r => r.json()).then(data => {
               if (data.User) SetUserParams(data.User)
               else Setpayload('')
            })
      }
   }

   const IrAlTablero = e => {
      SetTablero(true)
   }

   return (
      <>
         {payload ? UserParams ? 
         <Container fluid="true">
            <Row>
               <Col xs={2}></Col>
               <Col>
                  <Container className="Background">
                     <Tabs fill variant="tabs" defaultActiveKey="AYUDA" id="uncontrolled-tab-example" className="TabsClass" >
                        <Tab eventKey="PERFIL" title="MI PERFIL">
                           <CardPlayer
                              Image={UserParams.image} Username={UserParams.username}
                              Level={UserParams.level} Bio={UserParams.bio}
                           />
                        </Tab>
                        <Tab eventKey="MENSAJES" title="MENSAJES">
                           <p>MENSAJES</p>
                        </Tab>
                        <Tab eventKey="CAJERO" title="CAJERO">
                           <p>CAJERO</p>
                        </Tab>
                        <Tab eventKey="TIENDA" title="TIENDA">
                           <p>TIENDA</p>
                        </Tab>
                        <Tab eventKey="JUGAR" title="JUGAR">
                           <Button onClick={IrAlTablero}>Ir Al Tablero</Button>
                        </Tab>
                        <Tab eventKey="AYUDA" title="AYUDA">
                           <HelpUser />                           
                        </Tab>
                     </Tabs>
                  </Container>
               </Col>
               <Col xs={2}></Col>
            </Row>
         </Container> : FetchData(payload)
         : <Redirect to="/" />}   
         {Tablero ? <Redirect to="/play" />: ''}      
      </>
   )
}

export default BodyDashboard