import React, { useState, useEffect } from 'react'

import Toast from 'react-bootstrap/Toast'

import Logo from '../images/Logo.png'

const ToastNotification = (props) => {

   const [show, setShow] = useState(true)

   return (
      <>
         <div aria-live="polite" aria-atomic="true" style={{ minHeight: '200px' }}>
            <div style={{ position: 'absolute', top: 10, right: 0 }}>
               <Toast className="mr-1" onClose={() => setShow(false)} show={show} delay={1000} autohide style={({ backgroundColor: 'white' })}>
                  <Toast.Header style={({ backgroundColor: 'RGBA(0,0,0,0.80)', color: 'white' })}>
                     <img src={Logo} className="rounded mr-2" alt="" width="25px" />
                     <strong className="mr-auto">El Parchis Westerns</strong>
                     <small className="ml-5">Hace 1 Segundo.</small>
                  </Toast.Header>
                  <Toast.Body>{props.Notes}</Toast.Body>
               </Toast>
            </div>
         </div>
      </>
   )
}

export default ToastNotification
