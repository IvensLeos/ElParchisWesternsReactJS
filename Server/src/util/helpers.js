export const parseError = error => {
   if (error.isJoi) return error.details[0]
   return JSON.stringify(error, Object.getOwnPropertyNames(error))
}

export const sessionizeUser = user => {
   return { userId: user.id, username: user.username }
}