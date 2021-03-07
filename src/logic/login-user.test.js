
/* eslint-env jest */

import loginUser from 'logic/login-user'
import mockAxios from 'axios'
import {
  userLoginResponse, userLoginErrorResponse, userLoginHeaderErrorResponse
} from 'logic/test-data/users'

const EXPECTED_URL = 'http://1dev.naveler.com:8007/api/login/'
const EXPECTED_DATA = 'username=pepe&password=123'
const EXPECTED_CONFIG = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
  }
}

jest.mock('axios')

describe('login user', () => {
  it('should return successful response', async () => {
    const mockFunc = mockAxios.post.mockResolvedValue(userLoginResponse)

    const data = await loginUser('pepe', '123')
    const { name, userCountry } = data

    expect(name).toEqual('Pepe')
    expect(userCountry).toEqual('Colombia')

    expect(mockFunc).toHaveBeenCalledWith(EXPECTED_URL, EXPECTED_DATA, EXPECTED_CONFIG)
    expect(mockFunc.mock.calls.length).toBe(1)
  })

  afterEach(jest.clearAllMocks)
})
