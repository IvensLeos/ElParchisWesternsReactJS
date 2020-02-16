import React from 'react'

import Row from 'react-bootstrap/Row'

import Ranking0 from '../../../assets/images/Ranking0.png'
import Ranking1 from '../../../assets/images/Ranking1.png'

const Ranking = () => {
   return (
      <>
         <Row className="ml-1">
            <h6 style={{ textAlign: 'left', color: '#dc3545' }}>RANKING</h6>
         </Row>
         <Row className="ml-3 mt-1">
            <img alt="Ranking1" src={Ranking1} style={{ width: '55px' }} />
            <img alt="Ranking1" src={Ranking1} style={{ width: '55px' }} />
            <img alt="Ranking1" src={Ranking1} style={{ width: '55px' }} />
            <img alt="Ranking0" src={Ranking0} style={{ width: '55px' }} />
            <img alt="Ranking0" src={Ranking0} style={{ width: '55px' }} />
         </Row>
      </>
   )
}

export default Ranking