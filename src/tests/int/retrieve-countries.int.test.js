
/* eslint-env jest */

import retrieveCountries from 'logic/retrieve-countries'
import mockAxios from 'axios'
import { retrieveCountriesResponse, retrieveCountriesErrorResponse } from 'tests/int/data/countries'

const EXPECTED_URL = 'http://dev.naveler.com:8007/api/get_countries/'
const EXPECTED_COUNTRIES = [{
  flag: 'img/flags/BR_5WOC99m.png',
  isLatino: false,
  name: 'Brasil',
  phonePrefix: '+55'
}, {
  flag: 'img/flags/CA_JIMLNc3.png',
  isLatino: false,
  name: 'Canada',
  phonePrefix: '+1'
}, {
  flag: 'img/flags/CO_gxm9iFj.png',
  isLatino: true,
  name: 'Colombia',
  phonePrefix: '+57'
}]

jest.mock('axios')

describe('Retrieve countries', () => {
  it('should return successful response', async () => {
    const mockFunc = mockAxios.get.mockResolvedValue(retrieveCountriesResponse)

    const data = await retrieveCountries()

    expect(data).toMatchObject(EXPECTED_COUNTRIES)

    expect(mockFunc).toHaveBeenCalledWith(EXPECTED_URL)
    expect(mockFunc.mock.calls.length).toBe(1)
  })
  it('should return error when the Api is down', async () => {
    const mockFunc = mockAxios.get.mockRejectedValue(retrieveCountriesErrorResponse)

    try {
      await retrieveCountries()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toEqual('Not countries found')
    }

    expect(mockFunc).toHaveBeenCalledWith(EXPECTED_URL)
  })
  afterEach(jest.clearAllMocks)
})
