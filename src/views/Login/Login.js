import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import loginUser from 'api/login-user'

import Body from 'components/Body/Body'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import { Container, Form, StyleRedirect } from './styles'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { username, password } = e.target
    username = username.value
    password = password.value

    try {
      const user = await loginUser(username, password)
      onLogin(user)
    } catch (error) {
      console.log(error)
    }
    history.push('/')
  }

  return (
    <Body title='Access' isLoggedIn={false}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className='classInput'>
            <AccountCircleIcon />
            <Input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id='username'
              name='username'
            />
          </div>
          <div className='classInput'>
            <LockOpenIcon />
            <Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              name='password'
              minLength={6}
            />
          </div>
          <AsyncButton
            text='Log in'
            loadingText
            iconPosition='left'
            type='submit'
            className='blueGradient'
            textStyles={{ marginLeft: 10 }}
          />
          <StyleRedirect>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </StyleRedirect>
        </Form>
      </Container>
    </Body>
  )
}

export default Login
