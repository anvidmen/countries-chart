const retrieveUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user'))
  } catch (e) {
    return null
  }
}

export default retrieveUser
