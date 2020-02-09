import React, { useState } from 'react'

import { Redirect } from 'react-router-dom'

import Landing from '../components/landing'
//import Dashboard from '../components/dashboard/'

export const LandingPage = () => {

   const [User, SetUser] = useState('')

   return User ? 
      <Redirect to={{pathname: '/dashboard', state: {User}}} />
      : 
      <Landing User={SetUser} />
}