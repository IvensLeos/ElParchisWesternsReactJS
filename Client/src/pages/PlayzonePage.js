import React from 'react'

import BodyPlayzone from '../components/dashboard/play/BodyPlayzone'

export const PlayzonePage = props => {

   const { User } = props
   
   return User && <BodyPlayzone User={User} />
}