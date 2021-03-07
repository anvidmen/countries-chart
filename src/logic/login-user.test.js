
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

  it('should return error if data is wrong', async () => {
    const mockFunc = mockAxios.post.mockRejectedValue(userLoginErrorResponse)

    const wrongUsername = 'juan'
    try {
      await loginUser(wrongUsername, '123')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toEqual('Incorrect username/password')
    }

    expect(mockFunc).toHaveBeenCalledWith(EXPECTED_URL, 'username=juan&password=123', EXPECTED_CONFIG)

    const wrongPassword = '3d1'
    try {
      await loginUser('pepe', wrongPassword)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toEqual('Incorrect username/password')
    }

    expect(mockFunc).toHaveBeenCalledWith(EXPECTED_URL, 'username=pepe&password=3d1', EXPECTED_CONFIG)
  })

  afterEach(jest.clearAllMocks)
})
