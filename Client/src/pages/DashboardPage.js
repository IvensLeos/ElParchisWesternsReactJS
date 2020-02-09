import React from 'react'

import { Redirect } from 'react-router-dom'

import Dashboard from '../components/dashboard'

export const DashboardPage = props => {

   let { User } = props.location.state || ''

   return User ? <Dashboard User={User}/> : <Redirect to="/" />
}