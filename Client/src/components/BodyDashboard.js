import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../styles/BodyDashboard.css'

import CardPlayer from '../components/CardPlayer'
import removeLocalStorage from '../util/removeLocalStorage'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Variables from '../util/config'

const BodyDashboard = (props) => {
   
   //LogOut: removeLocalStorage('parchis_payload')

   const [payload, setPayload] = useLocalStorage('parchis_payload', '')
   const [UserParams, SetUserParams] = useState('')
   
   function FetchData(payload) {
      if (payload) {
         fetch(`${Variables.SERVER_PATH}/api/session/get/user`, {
            method: 'POST', body: JSON.stringify({_id : payload}), headers: { 'Content-Type': 'application/json' }
         })
            .then(r => r.json()).then(data => {
               SetUserParams(data.User)
            })
      }
   }

   FetchData(payload)

   return (
      <>
         <Container fluid="true">
            <Row>
               <Col xs={2}></Col>
               <Col>
                  <Container className="Background">
                     <Tabs fill variant="none" defaultActiveKey="PERFIL" id="uncontrolled-tab-example" className="TabsClass" >
                        <Tab eventKey="PERFIL" title="MI PERFIL">
                           <CardPlayer 
                              Image={UserParams.image} Username={UserParams.username} 
                              Level={UserParams.level} Bio={UserParams.bio} />
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
                           <p>JUGAR</p>
                        </Tab>
                     </Tabs>
                  </Container>
               </Col>
               <Col xs={2}></Col>
            </Row>
         </Container>
      </>
   )
}

export default BodyDashboard