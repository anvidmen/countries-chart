import { login } from 'api'
import { auth } from 'utils/storage'

const loginUser = async (username, password) => {
  const data = { username: username, password: password }
  try {
    const response = await login(data)

    const { data: { user } } = response
    const { name, country: { name: userCountry } } = user

    auth({ name, userCountry })

    return { name, userCountry }
  } catch (error) {
    const { response: { data: { message } } } = error
    throw new Error(message)
  }
}

export default loginUser
