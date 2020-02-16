import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import IconoArchivo from '../../../assets/images/IconoArchivo.png'
import IconoFoto from '../../../assets/images/IconoFoto.png'

const InfoForm = props => {
   
   const { User, StepEdit } = props

   console.table(User)

   return (
      <>
         {!StepEdit ? 
         <Form>
            <Container fluid="true" style={{ fontSize: '13px', marginLeft: '-15px' }}>
               <Row>
                  <Col style={{ marginTop: '30px', color: 'white', textAlign: 'left' }}>
                     RELLENE EL FORMULARIO (NO OBLIGATORIO):
                  </Col>
               </Row>
               <Row style={{ marginTop: '30px' }}>
                  <Col>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>ALTURA (METROS)</Form.Label>
                        <Form.Control name="Width" type="text" placeholder="M" />
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>PESO (KILOS)</Form.Label>
                        <Form.Control name="Username" type="text" placeholder="KG" />
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>COMPLEXION</Form.Label>
                        <Form.Control name="Username" type="text" />
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col xs={4}>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>COLOR DE PELO</Form.Label>
                        <Form.Control name="Username" type="text" />
                     </Form.Group>
                  </Col>
                  <Col xs={8}>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>PROFESION</Form.Label>
                        <Form.Control name="Username" type="text" />
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Form.Group controlId="formBasicUsername">
                        <Row>
                           <Col>
                              <Form.Label style={({ color: '#dc3545' })}>¿BEBES?</Form.Label>
                           </Col>
                        </Row>
                        <Row style={{ color: 'white' }}>
                           <Col>
                              <Form.Check className="ml-3" type="radio" label="SI" name="Drink" id="DrinkRadios1" />
                           </Col>
                           <Col>
                              <Form.Check className="mr-3" type="radio" label="NO" name="Drink" id="DrinkRadios2" checked />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group controlId="formBasicUsername">
                        <Row>
                           <Col>
                              <Form.Label style={({ color: '#dc3545' })}>¿FUMAS?</Form.Label>
                           </Col>
                        </Row>
                        <Row style={{ color: 'white' }}>
                           <Col>
                              <Form.Check className="ml-3" type="radio" label="SI" name="Smoke" id="SmokeRadios1" />
                           </Col>
                           <Col>
                              <Form.Check className="mr-3" type="radio" label="NO" name="Smoke" id="SmokeRadios2" checked />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group controlId="formBasicUsername">
                        <Row>
                           <Col>
                              <Form.Label style={({ color: '#dc3545' })}>¿HACES DEPORTE?</Form.Label>
                           </Col>
                        </Row>
                        <Row style={{ color: 'white' }}>
                           <Col>
                              <Form.Check className="ml-3" type="radio" label="SI" name="Sports" id="SportsRadios1" />
                           </Col>
                           <Col>
                              <Form.Check className="mr-3" type="radio" label="NO" name="Sports" id="SportsRadios2" checked />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col xs={8}>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>¿QUE DEPORTE PRACTICAS?</Form.Label>
                        <Form.Control name="Username" type="text" />
                     </Form.Group>
                  </Col>
                  <Col xs={4}>
                     <Form.Group controlId="formGridState">
                        <Form.Label style={({ color: '#dc3545' })}>SIGNO (ZODIACO)</Form.Label>
                        <Form.Control as="select">
                           <option>ARIES</option>
                           <option>TAURO</option>
                           <option>GÉMINIS</option>
                           <option>CANCER</option>
                           <option>LEO</option>
                           <option>VIRGO</option>
                           <option>LIBRA</option>
                           <option>ESCORPIO</option>
                           <option>SAGITARIO</option>
                           <option>CAPRICORNIO</option>
                           <option>ACUARIO</option>
                           <option>PISCIS</option>  
                        </Form.Control>
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col xs={8}>
                     <Form.Group controlId="formBasicUsername">
                        <Form.Label style={({ color: '#dc3545' })}>INTERESES Y AFICIONES</Form.Label>
                        <Form.Control name="Username" type="text" />
                     </Form.Group>
                  </Col>
                  <Col xs={4}>
                        <Form.Group controlId="formGridState">
                           <Form.Label style={({ color: '#dc3545' })}>IDIOMAS</Form.Label>
                           <Form.Control as="select">
                              <option>ESPAÑOL</option>
                              <option>INGLES</option>
                              <option>FRANCES</option>
                           </Form.Control>
                        </Form.Group>
                  </Col>
               </Row>
            </Container>
         </Form>
         :
         <Form>
            <Container fluid="true" style={{ fontSize: '13px', marginLeft: '-15px' }}>
               <Row>
                  <Col style={{ marginTop: '30px', color: 'white', textAlign: 'left' }}>
                     CREE SU AVATAR UNICO EN POCOS PASOS:
               </Col>
               </Row>
               <Row style={{ marginTop: '30px' }}>
                  <Col xs={8}>
                     <Row>
                        <Col>
                           <Form.Group controlId="formBasicUsername">
                              <Form.Label style={({ color: '#dc3545' })}>NICKNAME (MAXIMO 14 CARACTERES)</Form.Label>
                              <Form.Control name="Nickname" type="text" placeholder="Usuario" />
                           </Form.Group>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <img alt="ProfileImage" src={User.image} style={{ width: '310px', height: '310px' }} />
                        </Col>
                     </Row>
                  </Col>
                  <Col xs={4}>
                     <Row>
                        <Col>
                           <Form.Group controlId="formBasicUsername">
                              <Form.Label style={({ color: '#dc3545' })}>CONTRASEÑA</Form.Label>
                              <Form.Control name="Password" type="password" placeholder="Password" />
                           </Form.Group>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <Form.Group controlId="formBasicUsername">
                              <Form.Label style={({ color: '#dc3545' })}>REPETIR CONTRASEÑA</Form.Label>
                              <Form.Control name="Password2" type="password" placeholder="Password" />
                           </Form.Group>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                              <Button variant="outline-light" style={{ fontSize: '12.4px', backgroundImage: `url(${IconoFoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '25px', backgroundPositionX: '-1px', backgroundPositionY: '15px' }}>HACER UNA FOTO</Button>
                        </Col>
                     </Row>
                     <br />
                     <Row>
                        <Col>
                              <Button variant="outline-light" style={{ fontSize: '12.4px', backgroundImage: `url(${IconoArchivo})`, backgroundRepeat: 'no-repeat', backgroundSize: '25px', backgroundPositionX: '-1px', backgroundPositionY: '10px' }}>SELECCIONAR UNA FOTO</Button>
                        </Col>
                     </Row>
                     <br />
                     <Row>
                        <Col>
                              <Button variant="success" style={{ fontSize: '22.5px' }}>GUARDAR</Button>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Container>
         </Form>}
      </>
   )
}

export default InfoForm