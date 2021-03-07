/* eslint-env jest */

import retrieveUser from 'logic/retrieve-user'

describe('login user', () => {
  it('should return user from local storage', async () => {
    const mockFunc = localStorage.getItem.mockReturnValue('{"name":"Juan","userCountry":"Colombia"}')

    const user = retrieveUser()
    const { name, userCountry } = user
    expect(name).toEqual('Juan')
    expect(userCountry).toEqual('Colombia')

    expect(mockFunc).toBeCalled()
  })
  it('should return null when cannot parse user from local storage', async () => {
    const incorrectJson = '["name":"Juan","userCountry":"Colombia"]'
    const mockFunc = localStorage.getItem.mockReturnValue(incorrectJson)

    const user = retrieveUser()

    expect(user).toBeNull()
    expect(mockFunc).toBeCalled()
  })

  afterEach(jest.clearAllMocks)
})
