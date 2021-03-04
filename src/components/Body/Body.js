import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Nabvar'
import { Childrens, StyledBody } from './styles'

const Body = ({ children, title }) => {
  return (
    <StyledBody>
      <Navbar />
      <Header title={title} />
      <Childrens>{children}</Childrens>
      <Footer />
    </StyledBody>
  )
}

export default Body
