import React, { useState } from 'react'

import { Redirect } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import removeLocalStorage from '../util/removeLocalStorage'

const CardPlayer = (props) => {

   const [IsLoggedIn, SetIsLoggedIn] = useState(true)

   const HandleClick = () => {
      removeLocalStorage('parchis_payload')
      SetIsLoggedIn(false)
   }

   return (
      IsLoggedIn ? <Card text="white" style={{ width: '100%', backgroundColor: 'transparent' }}>
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
            <Button variant="danger" className="mt-2" onClick={HandleClick}>CERRAR SESSION</Button>
         </Card.Body>
      </Card> : <Redirect to="/" />
   )
}

export default CardPlayer