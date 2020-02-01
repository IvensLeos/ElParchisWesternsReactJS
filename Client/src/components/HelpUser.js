import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import FlechaIndia from '../images/FlechaIndia.png'
import Estrellita from '../images/Estrellita.png'

const HelpUser = () => {

   return (
      <>
         <Container fluid>
            <Row style={{padding: '15px'}}>
               <Col xs={4} style={{ color: '#dc3545', padding: '0 15px 0 15px'}} className="mx-auto mt-4" >
                  <Row>
                     <img className="Estrellas ml-4" src={Estrellita} alt="Estrella" />
                     <h1 className="TitlesHelp" >AYUDA ONLINE</h1>
                     <img className="Estrellas" src={Estrellita} alt="Estrella" />
                  </Row>
                  <Form className="mt-3">
                     <Form.Group controlId="formGroupEmail">
                        <Form.Label className="FormLabelInputs">NICKNAME O CORREO ELECTRONICO</Form.Label>
                        <Form.Control type="text" placeholder="Tu Nickname/Email Aqui.." />
                     </Form.Group>
                     <Form.Group controlId="formGroupPassword">
                        <Form.Label className="FormLabelInputs">MENSAJE:</Form.Label>
                        <Form.Control as="textarea" rows="11" placeholder="Tu Mensaje Aqui..." />
                     </Form.Group>
                     <Button variant="success" size="lg" style={{minWidth: '200px'}}>ENVIAR</Button>
                  </Form>
               </Col>
               <Col xs={1} className="mx-auto Flechas"> 
                  <Row className="mt-4"></Row>
                  <Row className="mt-4"></Row>
                  <Row className="mt-4"></Row>
                  <Row className="mt-3"></Row>
                  <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
                  <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
                  <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
               </Col>
               <Col xs={7} style={{ color: '#dc3545'}} className="mx-auto mt-4" >
                  <Row>
                     <img className="Estrellas ml-2" src={Estrellita} alt="Estrella" />
                     <h1 className="TitlesHelp" >RESPONSABLE</h1>
                     <img className="Estrellas" src={Estrellita} alt="Estrella" />
                  </Row>
                  <Card text="danger" className="ScrollCard scrollbar-pink bordered-pink square thin">
                     <Card.Body>
                        <Card.Title className="CardTitleHelp">Sobre Juego Responsable:</Card.Title>
                        <Card.Text className="TextCardHelp">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla arcu, 
                           rutrum sed dolor quis, facilisis volutpat libero. Nam finibus, eros ac blandit luctus, 
                           orci sem eleifend lacus, congue iaculis turpis magna et quam.
                           In eleifend pulvinar arcu, in tristique elit. Donec auctor eget lacus eget efficitur. 
                           Mauris id neque a urna sodales auctor eu vel eros. 
                           Pellentesque accumsan id enim ac iaculis. Nulla facilisi. 
                           Integer in lectus quis eros tristique eleifend. 
                        </Card.Text>
                        <Card.Text className="TextCardHelp">
                           Nulla ornare tristique consequat. Nulla in venenatis dui. Cras et dui congue, 
                           finibus velit vel, feugiat orci. Mauris quis eros auctor, molestie diam ac, 
                           gravida tellus. Orci varius natoque penatibus et magnis dis parturient montes, 
                           nascetur ridiculus mus. Maecenas ut nulla semper, porta dolor nec, tincidunt ipsum. 
                        </Card.Text>
                        <Card.Text className="TextCardHelp">
                           Aenean mollis ullamcorper nisl sed hendrerit. 
                           Quisque vitae augue sed sem consequat laoreet quis ullamcorper ligula. 
                           Mauris interdum massa vel dictum aliquam. Ut commodo porttitor vulputate. 
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Duis malesuada suscipit erat, a efficitur lorem lobortis vitae.
                        </Card.Text>
                        <Card.Text className="TextCardHelp">
                           Aenean mollis ullamcorper nisl sed hendrerit. 
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default HelpUser
