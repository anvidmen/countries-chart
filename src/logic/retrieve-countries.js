import { getCountries } from 'api'

const retrieveCountries = async () => {
  try {
    const { data } = await getCountries()
    const { message: countries } = data
    return countries
  } catch (error) {
    console.log(error)
  }
}

export default retrieveCountries
