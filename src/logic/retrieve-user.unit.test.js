/* eslint-env jest */

import retrieveUser from 'logic/retrieve-user'

describe('login user', () => {
  it('should return user from local storage', async () => {
      const mockFunc = localStorage.getItem.mockReturnValue('{"name":"Juan","userCountry":"Colombia"}')
      //.mockImplementation(() => '{"name":"Juan","userCountry":"Colombia"}')
      
    const user = retrieveUser()
    const { name, userCountry } = user
    expect(name).toEqual('Juan')
    expect(userCountry).toEqual('Colombia')
    // expect(localStorage.getItem).toBeCalledWith('token')
  })

  afterEach(jest.clearAllMocks)
})
