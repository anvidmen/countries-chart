import React from 'react'
import { Avatar, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Container, Information, Row, StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Information>
          <div>
            <h2>Latin America</h2>
            <Information>
              <p>latin</p>
            </Information>
          </div>
          <div>
            <Information>
              <Link href='https://www.linkedin.com/in/juan-om'><Avatar><LinkedInIcon /></Avatar>LinkedIn</Link>
              <Link href='https://github.com/anvidmen'><Avatar><GitHubIcon /></Avatar>Code</Link>
            </Information>
          </div>
        </Information>
        <Row>
          Copyright © <Link href='https://anvidmen.netlify.app/'>Anvidmen</Link>{new Date().getFullYear()} | All Rights Reserved
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
