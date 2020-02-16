import React from 'react'

import Dashboard from '../components/dashboard'

export const DashboardPage = props => {

   const { User } = props

   return User && <Dashboard User={User} />
}