import React, { useState } from 'react'

import CardPlayer from './profile/CardPlayer'
import EditProfile from './profile/EditProfile'
import HelpUser from './help/HelpUser'

import '../../assets/styles/BodyDashboard.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'

const BodyDashboard = props => {

   const { User } = props.User

   const [EditUserProfile, SetEditUserProfile] = useState(false) //false

   return (
      <>
         <Container fluid="true">
            <Row>
               <Col xs={2}></Col>
               <Col>
                  <Container className="Background">
                     <Tabs fill variant="tabs" defaultActiveKey="PERFIL" id="uncontrolled-tab-example" className="TabsClass" >
                        <Tab eventKey="PERFIL" title="MI PERFIL">
                           {!EditUserProfile ? 
                           <CardPlayer
                              Picture={User.image} Username={User.username}
                              Level={User.level} Bio={User.bio} SetEditUserProfile={SetEditUserProfile}
                           /> 
                           : <EditProfile User={User} SetEditUserProfile={SetEditUserProfile} />}
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
                           <Button>Ir Al Tablero</Button>
                        </Tab>
                        <Tab eventKey="AYUDA" title="AYUDA">
                           <HelpUser />
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