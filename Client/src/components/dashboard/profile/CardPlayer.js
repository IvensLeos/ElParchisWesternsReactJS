import React from 'react'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const CardPlayer = (props) => {

   const { Picture, Username, Level, Bio, SetEditUserProfile } = props

   return (
      <Card text="white" style={{ width: '100%', backgroundColor: 'transparent' }}>
         <Card.Header><h4>TARJETA DEL JUGADOR</h4></Card.Header>
         <Image roundedCircle variant="top" src={Picture} className="ImgClass mx-auto mt-1" />
         <Card.Body>
            <Card.Title>{Username}</Card.Title>
            <Card.Text>
               <strong>({Level})</strong>
            </Card.Text>
            <Card.Text>
               "{Bio}"
            </Card.Text>
            <Button variant="info" className="mt-2 mr-2" onClick={() => SetEditUserProfile(true)}>EDITAR PERFIL</Button>
            <Button variant="danger" className="mt-2">CERRAR SESSION</Button>
         </Card.Body>
      </Card>
   )
}

export default CardPlayer