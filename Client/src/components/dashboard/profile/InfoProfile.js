import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const InfoProfile = props => {
   
   return (
      <>
         <Container className="mt-3 ml-1">
            <Row>
               <Button variant="light" style={{ fontSize: '12px' }}>EDITAR MIS DATOS</Button>
            </Row>
            <Row style={{
               borderTop: '1px solid white', borderRight: '1px solid white', borderBottom: '1px solid white',
               borderTopRightRadius: '8px', borderBottomRightRadius: '8px', borderBottomLeftRadius: '8px',
               marginTop: '-15px', paddingTop: '30px'
            }}>
               <Form style={{ fontSize: '12px' }}>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>NOMBRE</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>IVENS OMAR</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>APELLIDOS</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>LEOS SANCHEZ</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>DNI</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>01160062X</p>
                     <p style={{ color: '#dc3545', marginLeft: '10px' }}>NACIMIENTO</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>10/08/1997</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>SEXO</p>
                     <input type="radio" id="male" name="gender" value="male" style={{ marginLeft: '5px', marginTop: '2.5px' }} defaultChecked />
                     <label htmlFor="male" style={{ color: 'white', marginLeft: '5px', fontSize: '12.5px' }}>HOMBRE</label>
                     <input type="radio" id="female" name="gender" value="male" style={{ marginLeft: '10px', marginTop: '2.5px' }} />
                     <label htmlFor="female" style={{ color: 'white', marginLeft: '5px', fontSize: '12.5px' }}>MUJER</label>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>NACIONALIDAD</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>MEXICANA</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>EMAIL</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>IVENSLEOS8@GMAIL.COM</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>TELEFONO</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>899 542 3275</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>DIRECCION</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>HOLANDA 141 LOMA REAL</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>CP</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>88715</p>
                     <p style={{ color: '#dc3545', marginLeft: '10px' }}>LOCALIDAD</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>REYNOSA</p>
                  </Row>
                  <Row className="ml-2">
                     <p style={{ color: '#dc3545' }}>PROVINCIA</p>
                     <p style={{ color: 'white', marginLeft: '5px' }}>TAMAULIPAS</p>
                  </Row>
               </Form>
            </Row>
         </Container>
      </>
   )
}

export default InfoProfile