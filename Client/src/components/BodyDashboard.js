import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from 'react-bootstrap/Image'

import '../styles/BodyDashboard.css'

const BodyDashboard = () => {
   const [activekey2, setactivekey] = useState('link-5')

   return (
      <>
         <Container fluid="true">
            <Row>
               <Col xs={2}></Col>
               <Col>
                  <Container className="Background">
                     <Tabs fill variant="none" defaultActiveKey="PERFIL" id="uncontrolled-tab-example" className="TabsClass" >
                        <Tab eventKey="PERFIL" title="MI PERFIL">
                           <Card text="white" style={{ width: '100%', backgroundColor: 'transparent' }}>
                              <Card.Header><h4>TARJETA DEL JUGADOR</h4></Card.Header>
                              <Image variant="top" src="https://bit.ly/2Gsoq0J" roundedCircle className="ImgClass mx-auto mt-4" />
                              <Card.Body>
                                 <Card.Title>IVENSLEOS8</Card.Title>
                                 <Card.Text>
                                    <strong>(PROFICIENT)</strong>
                                 </Card.Text>
                                 <Card.Text>
                                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                 </Card.Text>
                              </Card.Body>
                           </Card>
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