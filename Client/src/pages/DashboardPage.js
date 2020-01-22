import React from 'react'

import ToastNotification from '../components/ToastNotification'

class DashboardPage extends React.Component {

   render() {
      return (
         <>
         <h1 style={({ color: 'white' })}>Hola Este Es El <strong>DashboardPage</strong>.</h1>
         <ToastNotification />
         </>
      )
   }

}

export default DashboardPage