import React from 'react'

import { Redirect } from 'react-router-dom'

import Landing from '../components/landing'

export const LandingPage = props => {
   
   const { User, SetUser } = props

   return User ? <Redirect to="/dashboard" /> : <Landing SetUser={SetUser} />
}