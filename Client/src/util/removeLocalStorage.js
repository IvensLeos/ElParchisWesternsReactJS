const removeLocalStorage = (key) => {
   try {
      window.localStorage.removeItem(key)
      return true
   } catch (error) {
      return false
   }
}

export default removeLocalStorage