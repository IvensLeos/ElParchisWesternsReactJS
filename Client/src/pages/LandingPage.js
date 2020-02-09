import React, { useState } from 'react'

import Landing from '../components/landing'
import Profile from '../components/profile'

export const LandingPage = () => {

   const [User, SetUser] = useState('')
   console.log('Me Renderize Con: ')
   console.table(User)

   return User ? <Profile User={SetUser} /> : <Landing User={SetUser} />
}