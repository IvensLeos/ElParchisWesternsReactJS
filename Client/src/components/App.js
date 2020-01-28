import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import DashboardPage from '../pages/DashboardPage'
import NotFoundPage from '../pages/NotFoundPage'
import PlayPage from '../pages/PlayPage'

const App = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/play" component={PlayPage} />
            
            <Route component={NotFoundPage}/>
         </Switch>
      </BrowserRouter>
   )
}

export default App