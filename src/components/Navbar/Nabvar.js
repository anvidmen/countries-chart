import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from 'providers/AppProvider'

import { logout } from 'utils/storage'

import { Avatar, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Container, Routes, StyledNavbar } from './styles'

const Navbar = () => {
  const [user, setUser] = useContext(AppContext)
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <StyledNavbar>
      <Container>
        <Routes>
          <Link to='/'>Latin countries</Link>
          <Link to='/chart'>Chart</Link>
          {user && user.name ? (
            <>
              <Avatar>{user.name.charAt(0)}</Avatar>
              <Button onClick={handleLogout}><ExitToAppIcon />Logout</Button>
            </>
          ) : (<Link to='/login'><PersonIcon />Login</Link>
          )}
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
