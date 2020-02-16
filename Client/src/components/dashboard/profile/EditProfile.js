import React, { useState } from 'react'

import InfoProfile from './InfoProfile'
import Ranking from './Ranking'
import InfoForm from './InfoForm'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Estrellita from '../../../assets/images/Estrellita.png'
import FlechaIndia from '../../../assets/images/FlechaIndia.png'

const EditProfile = props => {

   const { User, SetEditUserProfile } = props

   const [StepEdit, SetStepEdit] = useState(false)

   return (
      <>
         <Row className="mt-4 mx-auto">
            <Col xs={4}>
               {!StepEdit ? 
               <p onClick={() => SetEditUserProfile(false)} style={{ color: 'white', textAlign: 'left', fontSize: '18px' }} className="mt-2"><span style={{ color: '#dc3545' }}>&lt;&lt;</span> ATRAS</p>
               :
               <p onClick={() => SetStepEdit(false)} style={{ color: 'white', textAlign: 'left', fontSize: '18px' }} className="mt-2"><span style={{ color: '#dc3545' }}>&lt;&lt;</span> ATRAS</p>
               }
            </Col>
            <Col xs={4} style={{ color: '#dc3545' }}>
               <Row>
                  <Col></Col>
                  <img className="Estrellas" src={Estrellita} alt="Estrella" />
                  <h1 className="TitlesHelp">MI PERFIL</h1>
                  <img className="Estrellas" src={Estrellita} alt="Estrella" />
                  <Col></Col>
               </Row>
            </Col>
            <Col xs={4}>
               {!StepEdit &&
               <p onClick={() => SetStepEdit(true)} style={{ color: 'white', textAlign: 'right', fontSize: '18px' }} className="mt-2">SIGUIENTE <span style={{ color: '#dc3545' }}>&gt;&gt;</span></p>
               }
            </Col>
         </Row>
         <Row className="mx-auto">
            <Col xs={4}>
               <Ranking User={User} />
               <InfoProfile User={User} />
            </Col>
            <Col xs={1} className="mx-auto Flechas">
               <Row className="mt-1"></Row>
               <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
               <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
               <Row><img src={FlechaIndia} alt="FlechaIndia" className="Flechas mt-3" /></Row>
            </Col>
            <Col xs={7}>
               <InfoForm User={User} StepEdit={StepEdit} />
            </Col>
         </Row>
      </>
   )
}

export default EditProfile
