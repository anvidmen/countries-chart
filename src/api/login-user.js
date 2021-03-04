
import API from 'api/index'
import qs from 'qs'
import { auth } from 'utils/storage'

const config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
  }
}

const loginUser = async (username, password) => {
  const data = qs.stringify({ username: username, password: password })
  try {
    const response = await API.post('login/', data, config)

    const { data: { message } } = response
    const { user_data: user } = message
    const { name, country: { name: userCountry } } = user

    auth({ name, userCountry })

    return { name, userCountry }
  } catch (error) {
    console.log(error)
  }
}

export default loginUser
