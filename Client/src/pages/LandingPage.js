import React from 'react'

import Background from '../components/Background'
import BodyLanding from '../components/BodyLanding'

class LandingPage extends React.Component {

   render() {
      return (
         <React.Fragment>
            <Background />
            <BodyLanding />
         </React.Fragment>
      )
   }

}

export default LandingPage