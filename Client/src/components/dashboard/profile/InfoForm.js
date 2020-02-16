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

   const handleSubmit = e => {
      e.preventDefault()
      let Data = {
         width: e.target.Width.value,
         weight: e.target.Weight.value,
         complexion: e.target.Complexion.value,
         haircolor: e.target.HairColor.value,
         profession: e.target.Profession.value,
         drinker: e.target.Drinker.value,
         smoker: e.target.Smoker.value,
         sports: e.target.Sports.value,
         usersports: e.target.UserSports.value,
         zodiac: e.target.Zodiac.value.toString().toLowerCase(),
         interests: e.target.Interests.value,
         languages: e.target.Languages.value.toString().toLowerCase(),
         nickname: e.target.Nickname.value,
         password: e.target.Password.value,
         password2: e.target.Password2.value,
         image: e.target.UploadImage.value,
      }
      console.table(Data)
   }

   const handleImageChange = e => {
      let reader = new FileReader()
      reader.onload = function (e) {
         document.getElementById("Profile-Image").src = e.target.result
      }
      reader.readAsDataURL(e.target.files[0])
   }

   return (
      <>
         <Form onSubmit={e => handleSubmit(e)}>
            <Container fluid="true" style={{ fontSize: '13px', marginLeft: '-15px', display: `${StepEdit ? 'none' : 'block'}` }}>
               <Row>
                  <Col style={{ marginTop: '30px', color: 'white', textAlign: 'left' }}>
                     RELLENE EL FORMULARIO (NO OBLIGATORIO):
                  </Col>
               </Row>
               <Row style={{ marginTop: '30px' }}>
                  <Col>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>ALTURA (METROS)</Form.Label>
                        <Form.Control name="Width" type="text" placeholder="m" />
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>PESO (KILOS)</Form.Label>
                        <Form.Control name="Weight" type="text" placeholder="KG" />
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>COMPLEXION</Form.Label>
                        <Form.Control name="Complexion" type="text" placeholder="Delgada | Robusta" />
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col xs={4}>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>COLOR DE PELO</Form.Label>
                        <Form.Control name="HairColor" type="text" placeholder="Castaño" />
                     </Form.Group>
                  </Col>
                  <Col xs={8}>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>PROFESION</Form.Label>
                        <Form.Control name="Profession" type="text" placeholder="Ing. Civil | Lic. Administracion" />
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Form.Group>
                        <Row>
                           <Col>
                              <Form.Label style={({ color: '#dc3545' })}>¿BEBES?</Form.Label>
                           </Col>
                        </Row>
                        <Row style={{ color: 'white' }}>
                           <Col>
                              <Form.Check className="ml-3" type="radio" label="SI" value="Si Bebe" name="Drinker" id="DrinkRadios1" />
                           </Col>
                           <Col>
                              <Form.Check className="mr-3" type="radio" label="NO" value="No Bebe" name="Drinker" id="DrinkRadios2" defaultChecked />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group>
                        <Row>
                           <Col>
                              <Form.Label style={({ color: '#dc3545' })}>¿FUMAS?</Form.Label>
                           </Col>
                        </Row>
                        <Row style={{ color: 'white' }}>
                           <Col>
                              <Form.Check className="ml-3" type="radio" label="SI" value="Si Fuma" name="Smoker" id="SmokeRadios1" />
                           </Col>
                           <Col>
                              <Form.Check className="mr-3" type="radio" label="NO" value="No Fuma" name="Smoker" id="SmokeRadios2" defaultChecked />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group>
                        <Row>
                           <Col>
                              <Form.Label style={({ color: '#dc3545' })}>¿HACES DEPORTE?</Form.Label>
                           </Col>
                        </Row>
                        <Row style={{ color: 'white' }}>
                           <Col>
                              <Form.Check className="ml-3" type="radio" label="SI" value="Si Hace Deporte" name="Sports" id="SportsRadios1" />
                           </Col>
                           <Col>
                              <Form.Check className="mr-3" type="radio" label="NO" value="No Hace Deporte" name="Sports" id="SportsRadios2" defaultChecked />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Col>
               </Row>
               <Row>
                  <Col xs={8}>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>¿QUE DEPORTE PRACTICAS?</Form.Label>
                        <Form.Control name="UserSports" type="text" placeholder="Soccer | Basketball | Tenis" />
                     </Form.Group>
                  </Col>
                  <Col xs={4}>
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>SIGNO (ZODIACO)</Form.Label>
                        <Form.Control name="Zodiac" as="select">
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
                     <Form.Group>
                        <Form.Label style={({ color: '#dc3545' })}>INTERESES Y AFICIONES</Form.Label>
                        <Form.Control name="Interests" type="text" placeholder="Leer | Cantar | Pasear" />
                     </Form.Group>
                  </Col>
                  <Col xs={4}>
                        <Form.Group>
                           <Form.Label style={({ color: '#dc3545' })}>IDIOMAS</Form.Label>
                           <Form.Control name="Languages" as="select" >
                              <option>ESPAÑOL</option>
                              <option>INGLES</option>
                              <option>FRANCES</option>
                           </Form.Control>
                        </Form.Group>
                  </Col>
               </Row>
            </Container>
            <Container fluid="true" style={{ fontSize: '13px', marginLeft: '-15px', display: `${StepEdit ? 'block' : 'none'}` }}>
               <Row>
                  <Col style={{ marginTop: '30px', color: 'white', textAlign: 'left' }}>
                     CREE SU AVATAR UNICO EN POCOS PASOS:
                  </Col>
               </Row>
               <Row style={{ marginTop: '30px' }}>
                  <Col xs={8}>
                     <Row>
                        <Col>
                           <Form.Group>
                              <Form.Label style={({ color: '#dc3545' })}>NICKNAME (MAXIMO 14 CARACTERES)</Form.Label>
                              <Form.Control name="Nickname" type="text" placeholder="Usuario" />
                           </Form.Group>
                        </Col>
                     </Row>
                     <br />
                     <Row>
                        <Col>
                           <img alt="ProfileImage" src={User.image} id="Profile-Image" className="rounded-circle" 
                                style={{ width: '250px', height: '250px' }} name="Profile-Image" />
                        </Col>
                     </Row>
                  </Col>
                  <Col xs={4}>
                     <Row>
                        <Col>
                           <Form.Group>
                              <Form.Label style={({ color: '#dc3545' })}>CONTRASEÑA</Form.Label>
                              <Form.Control name="Password" type="password" placeholder="Password" />
                           </Form.Group>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <Form.Group>
                              <Form.Label style={({ color: '#dc3545' })}>REPETIR CONTRASEÑA</Form.Label>
                              <Form.Control name="Password2" type="password" placeholder="Password" />
                           </Form.Group>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <Button variant="outline-light" style={{ fontSize: '12.4px', backgroundImage: `url(${IconoFoto})`, 
                                   backgroundRepeat: 'no-repeat', backgroundSize: '25px', backgroundPositionX: '-1px', backgroundPositionY: '15px' }}>
                                      HACER UNA FOTO
                           </Button>
                        </Col>
                     </Row>
                     <br />
                     <Row>
                        <Col>
                           <input type="file" accept="image/*" id="UploadImage" name="UploadImage" style={{ display: 'none' }} 
                                  onChange={(e) => handleImageChange(e)} />
                           <Button variant="outline-light" style={{ fontSize: '12.4px', backgroundImage: `url(${IconoArchivo})`,
                                   backgroundRepeat: 'no-repeat', backgroundSize: '23px', backgroundPositionX: '-1px', backgroundPositionY: '10px'}}
                                   onClick={() => document.getElementById("UploadImage").click()} >
                                       SELECCIONAR UNA FOTO
                           </Button>
                        </Col>
                     </Row>
                     <br />
                     <Row>
                        <Col>
                           <Button type="submit" variant="success" 
                                   style={{ fontSize: '22.5px', width: '148px', height: '50px', textAlign: 'center' }}>
                              GUARDAR
                           </Button>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Container>
         </Form>
      </>
   )
}

export default InfoForm