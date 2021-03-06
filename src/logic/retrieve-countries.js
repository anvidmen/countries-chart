import API from 'api/index'

const retrieveCountries = async () => {
  try {
    const { data } = await API.get('get_countries/')
    const { message: countries } = data
    return countries
  } catch (error) {
    console.log(error)
  }
}

export default retrieveCountries
