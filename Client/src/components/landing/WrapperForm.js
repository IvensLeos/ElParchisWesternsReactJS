import React, { useState } from 'react'

import FormLanding from './FormLanding'

const WrapperForm = props => {

   const [Errors, SetErrors] = useState({})

   const { User } = props

   const handleSubmit = (Data) => {
      try {
         !Data.RenderLoggin &&
            fetch('/api/session/signup',
            { method: 'POST', body: JSON.stringify(Data), headers: { 'Content-Type': 'application/json' } })
            .then(r => r.json()).then(data => {
               if (data.errors) return SetErrors(data.errors)
               if (data) return User(data)
            })

         Data.RenderLoggin &&
            fetch('/api/session/login',
            { method: 'POST', body: JSON.stringify(Data), headers: { 'Content-Type': 'application/json' } })
            .then(r => r.json()).then(data => {
               if (data.errors) return SetErrors(data.errors)
               if (data) return User(data)
            })
      } catch (error) {console.log('TRY/CATCH SIGNUP/LOGIN ERROR')}
   }

   return (
      <FormLanding 
         Submit={handleSubmit}
         Errors={Errors}
      />
   )
}

export default WrapperForm
