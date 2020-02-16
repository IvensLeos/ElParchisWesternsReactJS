import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LandingPage } from '../pages/LandingPage'
import { DashboardPage } from '../pages/DashboardPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PlayzonePage } from '../pages/PlayzonePage'

const App = () => {

   const [User, SetUser] = useState('')

   useEffect(() => {
      try {
         !User.User &&
            fetch('api/session/', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
               .then(r => r.json()).then(data => {
                  if (data) return SetUser(data)
               })
      } catch (error) { console.log('TRY/CATCH APP ERROR') }
   })

   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" render={() => <LandingPage User={User} SetUser={SetUser} />} />
            <Route exact path="/dashboard" render={() => <DashboardPage User={User} />} />
            <Route exact path="/playzone" render={() => <PlayzonePage User={User} />} />
            
            <Route component={NotFoundPage} />
         </Switch>
      </BrowserRouter>
   )
}

export default App