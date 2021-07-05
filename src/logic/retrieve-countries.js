import { getCountries } from 'api'

const retrieveCountries = async () => {
  try {
    const { data } = await getCountries()
    return data.map(({ name, phonePrefix, flag, isLatino }) => {
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
