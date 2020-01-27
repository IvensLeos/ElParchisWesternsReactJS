import React from 'react'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const CardPlayer = (props) => {
   return (
      <Card text="white" style={{ width: '100%', backgroundColor: 'transparent' }}>
         <Card.Header><h4>TARJETA DEL JUGADOR</h4></Card.Header>
         <Image variant="top" src={props.Image} roundedCircle className="ImgClass mx-auto mt-1" />
         <Card.Body>
            <Card.Title>{props.Username}</Card.Title>
            <Card.Text>
               <strong>({props.Level})</strong>
            </Card.Text>
            <Card.Text>
               "{props.Bio}"
            </Card.Text>
         </Card.Body>
      </Card>
   )
}

export default CardPlayer