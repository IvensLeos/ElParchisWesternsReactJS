import React from 'react'

import PlaySketch from './PlaySketch'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/BodyPlay.css'

const BodyPlay = () => {
   return (
      <>
         <Container fluid='true' >
            <Row>
               <Col xs={7}>
                  <PlaySketch />
               </Col>
               <Col xs={5}>
                  
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default BodyPlay
