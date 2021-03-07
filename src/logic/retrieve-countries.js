import { getCountries } from 'api'

const retrieveCountries = async () => {
  try {
    const { data } = await getCountries()
    const { message: countries } = data
    return countries.map(({ name, phone_prefix: phonePrefix, country_flag: flag, is_latino: isLatino }) => {
      return {
        name, phonePrefix, flag, isLatino
      }
    })
  } catch (error) {
    console.log(error)
    throw new Error('Not countries found')
  }
}

export default retrieveCountries
