import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import DashboardPage from '../pages/DashboardPage'
import NotFoundPage from '../pages/NotFoundPage'

const App = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            
            <Route component={NotFoundPage}/>
         </Switch>
      </BrowserRouter>
   )
}

export default App