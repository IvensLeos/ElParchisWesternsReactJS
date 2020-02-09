// import React, { useState } from 'react'

// import PlaySketch from './PlaySketch'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

// import { Redirect } from 'react-router-dom'

// import '../styles/BodyPlay.css'

// const BodyPlay = () => {

//    const [Tablero, SetTablero] = useState(false)

//    const IrAlDashboard = () => {
//       SetTablero(true)
//    }

//    return (
//       <>
//          {Tablero ? <Redirect to="/dashboard" /> : 
//          <Container fluid='true' >
//             <Row>
//                <Col xs={7}>
//                   <PlaySketch />
//                </Col>
//                <Col xs={5}>
//                   <Button onClick={IrAlDashboard}>Regresar</Button>
//                </Col>
//             </Row>
//          </Container>}
//       </>
//    )
// }

// export default BodyPlay
