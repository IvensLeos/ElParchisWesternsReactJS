import React from 'react'

import PlaySketch from './PlaySketch'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

import '../../../assets/styles/BodyPlay.css'

const BodyPlay = () => {

   return (
      <Container fluid='true'>
         <Row>
            <Col xs={7}>
               <PlaySketch />
            </Col>
            <Col xs={5}>
               <div className="mt-2">
                  <Link to="/dashboard" className="btn btn-primary">Regresar</Link>
               </div>
            </Col>
         </Row>
      </Container>
   )
}

export default BodyPlay
