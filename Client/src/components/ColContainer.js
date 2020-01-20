import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const ColContainer = (props) => {
   return (
      <Col>
         <Container className={props.InnerClass}>
            {props.InnerElement}
         </Container>
      </Col>
   )
}

export default ColContainer