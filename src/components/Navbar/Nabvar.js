import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from 'providers/AppProvider'

import { logout } from 'utils/storage'

import 'bootstrap/dist/css/bootstrap.min.css'
import BNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Avatar from 'components/Navbar/Avatar/Avatar'
import { Routes } from './styles'

const Navbar = () => {
  const [user] = useContext(AppContext)
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <BNavbar collapseOnSelect expand='md' bg='dark' variant='dark' fixed='top'>
      <BNavbar.Brand to='/'><FontAwesomeIcon icon={faGlobeAmericas} /></BNavbar.Brand>
      <Nav className='ml-auto d-flex d-md-none'>
        {user.name
          ? (
            <Routes className=''>
              <Avatar letter={user.name.charAt(0).toUpperCase()} />
              <Link to='/' onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
            </Routes>
          )
          : <Routes><Link to='/login'><FontAwesomeIcon icon={faUser} /></Link></Routes>}
      </Nav>
      <BNavbar.Toggle aria-controls='responsive-navbar-nav' className='ml-4' />
      <BNavbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Routes>
            <Link to='/'>Latin Countries</Link>
            <Link to='/chart'>Chart</Link>
          </Routes>
        </Nav>
      </BNavbar.Collapse>
      <Nav className='ml-auto d-none d-md-flex'>
        {user.name
          ? (
            <Routes>
              <Avatar letter={user.name.charAt(0).toUpperCase()} />
              <Link onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} className='mr-2' />Logout</Link>
            </Routes>
          )
          : <Routes><Link to='/login'><FontAwesomeIcon icon={faUser} className='mr-2' />Login</Link></Routes>}
      </Nav>
    </BNavbar>
  )
}

export default Navbar
