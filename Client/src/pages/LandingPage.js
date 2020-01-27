import React from 'react'
import { Redirect } from 'react-router-dom'


import BodyLanding from '../components/BodyLanding'
import { useLocalStorage } from '../hooks/useLocalStorage'

const LandingPage = () => {
   const [payload, setPayload] = useLocalStorage('parchis_payload', '')

   return payload ? <Redirect to="/dashboard"/> : <BodyLanding />
}

export default LandingPage